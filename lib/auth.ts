import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Apple from "next-auth/providers/apple" // Not free (need developer program)
// import Twitter from "next-auth/providers/twitter" // Need twitter account
import Resend from "next-auth/providers/resend"
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: UpstashRedisAdapter(redis),
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