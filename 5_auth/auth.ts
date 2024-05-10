import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

const config = {
  providers: [google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;

      if (pathname === "/middleware") {
        return !!auth;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
