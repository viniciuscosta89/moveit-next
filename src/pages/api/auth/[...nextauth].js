import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { signIn } from 'next-auth/client';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  // pages: {
  //   signIn: '/login'
  // }
}

export default (req, res) => NextAuth(req, res, options)
