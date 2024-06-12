import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //database: process.env.DB_URI,
  session: {
    jwt: true,
  },
  jwt: {
    encryption: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {},
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    // on signin, jwt called before session callback, and user.id is from db!
    async jwt({ token, user, account, profile }) {
      if (user?.id) {
        token.userId = user.id
      }
      return token
    },

    async session({ session, user, token }) {
      console.log(session)
      if (token?.userId) {
        session.user.id = token.userId
      }
      return session
    },
  },
  events: {},
  debug: false,
})
