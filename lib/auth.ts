import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Apple from "next-auth/providers/apple" // Not free (need developer program)
// import Twitter from "next-auth/providers/twitter" // Need twitter account
import Resend from "next-auth/providers/resend"
import { SupabaseAdapter } from "@auth/supabase-adapter"

// Check env variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY || !process.env.AUTH_GOOGLE_ID || !process.env.AUTH_GOOGLE_SECRET || !process.env.AUTH_RESEND_KEY) {
    throw new Error('Missing required auth environment variables:\nSUPBASE_URL\nSUPABASE_KEY\nAUTH_RESEND_KEY\nGOOGLE_CLIENT_ID\nGOOGLE_CLIENT_SECRET');
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_KEY,
  }),
  providers: [
    Google, 
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "onboarding@resend.dev",
    })
  ],
  pages: {
    signIn: "/login",
  }
})