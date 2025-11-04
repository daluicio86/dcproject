import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
//import { sign } from "crypto";
import { signInEmailPassword } from "@/auth/actions/auth-actions";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials, req) => {
        const user = await signInEmailPassword(
          credentials!.username,
          credentials!.password
        );

        if (user) {
          return user;
        } else {
          // Return null if credentials are invalid
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // You can add additional sign-in logic here if needed
      return true;
    },
    async jwt({ token, user }) {
      // Add user information to the token on sign-in

      if (user) {
        token.id = user.id;
        token.role = (user as any).role ?? "user";
        token.isActive = (user as any).isActive ?? true;
      } else {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: token.email ?? undefined,
          },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
          token.isActive = dbUser.isActive;
        } else {
          // Ensure required properties are set even if user is not found
          token.id = token.id ?? "";
          token.role = token.role ?? "user";
          token.isActive = token.isActive ?? true;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      // Add token information to the session
      /*if (token) {
        session.user.id = token.id as string;
      }*/
      if (session && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.isActive = token.isActive as boolean;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
