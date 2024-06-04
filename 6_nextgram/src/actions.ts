"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { User } from "@prisma/client";
import path from "path";
import { promises as fs } from "fs";
import { auth } from "auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = {
  message: string;
  type: string;
};

export async function getUserProfileData(id: string): Promise<User | null> {
  const userId = id;

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      //   posts: true, // Assumindo que você tem um relacionamento 'posts' no modelo de usuário
    },
  });

  return user;
}

// Resgate de usuário por email
export async function getUserByEmail(
  email: string | null
): Promise<User | null> {
  if (!email) return null;

  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  return user;
}

// Atualização de perfil usuario
export async function updateUserProfile(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const imageFile = formData.get("image") as File;

  if (session.user.userId !== id) {
    return { message: "Unauthorized", type: "error" };
  }

  let imageUrl = "";
  if (imageFile) {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, imageFile.name);
    const arrayBuffer = await imageFile.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(arrayBuffer));
    imageUrl = `/uploads/${imageFile.name}`;
  }

  await prisma.user.update({
    where: { id },
    data: { name, image: imageUrl || undefined },
  });

  revalidatePath("/profile");

  return { message: "Perfil atualizado com sucesso!", type: "success" };
}

export async function createPost(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const caption = formData.get("caption") as string;
  const imageFile = formData.get("image") as File;

  console.log(imageFile, caption);

  if (!caption || imageFile.size === 0) {
    return { message: "Preencha o formulário!", type: "error" };
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, imageFile.name);
  const arrayBuffer = await imageFile.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
  const imageUrl = `/uploads/${imageFile.name}`;

  await prisma.post.create({
    data: {
      imageUrl,
      caption,
      userId: session.user.userId,
    },
  });

  revalidatePath("/");

  redirect("/");
}

// Resgatar todos os posts
export async function getAllPosts() {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      likes: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });
}

// Like no post
export async function likePost(postId: string, userId: string) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  console.log(session.user.userId, userId);

  if (session.user.userId !== userId) {
    throw new Error("Unauthorized");
  }

  const existingLike = await prisma.like.findFirst({
    where: {
      postId,
      userId,
    },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: {
        id: existingLike.id,
      },
    });
  } else {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
  }

  revalidatePath("/");
}

export async function addComment(
  postId: string,
  userId: string,
  content: string
) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  if (session.user.userId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.comment.create({
    data: {
      postId,
      userId,
      content,
    },
  });

  revalidatePath("/");
}

// Posts do usuarios
export async function getUserPosts(userId: string) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  if (session.user.userId !== userId) {
    throw new Error("Unauthorized");
  }

  return await prisma.post.findMany({
    where: { userId },
    include: {
      user: true,
      likes: true,
      comments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

// Excluir posts
export async function deletePost(formData: FormData) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const userId = formData.get("userId") as string;
  const postId = formData.get("postId") as string;

  console.log(userId, session.user.userId);

  if (session.user.userId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.post.delete({
    where: { id: postId },
  });

  revalidatePath("/my-posts");
}
