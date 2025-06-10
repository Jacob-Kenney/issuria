import "next-auth"

declare module "next-auth" {
  interface User {
    accountType?: "bank" | "business" | "investor"
  }

  interface Session {
    user: User & {
      accountType?: "bank" | "business" | "investor"
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accountType?: "bank" | "business" | "investor"
  }
} 