import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import type { Provider } from "next-auth/providers";

const prisma = new PrismaClient();

const config = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [google],
  callbacks: {
    session({ session, token }) {
      // Adiciona o ID do usuário à sessão
      if (token.sub) session.user.userId = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

// Definir o tipo do provedor
interface ProviderWithId {
  id: string;
  name: string;
}

// Mapeando os provedores manualmente
export const providerMap = config.providers.map((provider) => {
  const typedProvider = provider as unknown as ProviderWithId;
  return { id: typedProvider.id, name: typedProvider.name };
});
