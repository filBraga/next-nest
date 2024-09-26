import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, session }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        console.log("account", account);
        session.account = account;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

declare module "next-auth" {
  // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  interface Session {
    accessToken: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
