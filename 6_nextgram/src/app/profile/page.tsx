import { getUserByEmail, updateUserProfile } from "@/actions";
import ImagePreview from "@/components/ImagePreview";
import ProfileForm from "@/components/ProfileForm";
import { auth } from "auth";
import { redirect } from "next/navigation";

export default async function UserProfile() {
  const session = await auth();

  // Não tem session, vai para home
  if (!session || !session.user?.email) return redirect(`/`);

  const user = await getUserByEmail(session.user.email);

  // Não tem usuário vai para home
  if (!user) {
    return redirect(`/`);
  }

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Perfil de {user.name}</h1>
      {user.image && (
        <img src={user.image} alt={`Imagem de perfil de ${user.name}`} />
      )}
      <ProfileForm user={user} />
    </div>
  );
}
