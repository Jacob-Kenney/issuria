import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Apple from "next-auth/providers/apple" // Not free (need developer program)
// import Twitter from "next-auth/providers/twitter" // Need twitter account
import Resend from "next-auth/providers/resend"
import { SupabaseAdapter } from "@auth/supabase-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google, 
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "onboarding@resend.dev",
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
  pages: {
    signIn: "/login",
  }
})