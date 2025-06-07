"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import Link from "next/link"
import Image from 'next/image'
import { useTheme } from "next-themes";

export function SignIn() {
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [type, setType] = useState<"bank" | "business" | "investor">("bank");
    const valuePropositionMap = {
        bank: "Replace weeks of coordination with instant agent-led automation. Design bonds or structured financial products, and issue them directly — all from a single interface.",
        business: "Launch investment-grade bond offerings with AI-powered structuring and compliance — no waiting on legacy processes or intermediaries.",
        investor: "Discover and invest in bonds and structured financial products built for your risk and return targets.",
    }

    const resendAction = (formData: FormData) => {
        const email = formData.get("email") as string;
        signIn("resend", { email })
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex flex-col px-4 py-0">
            {/* Mobile Hero Section - Only visible on mobile */}
            <div className="md:hidden px-4 py-0">
                <div className={`transform transition-all duration-1000 delay-200  mt-20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h1 className="text-6xl font-bold tracking-tight mb-2">
                        Join 
                        <span className={`bg-gradient-to-r ${type === "bank" ? "from-emerald-300 to-emerald-800" : type === "business" ? "from-orange-300 to-orange-800" : "from-blue-300 to-blue-800"} bg-clip-text text-transparent animate-gradient-x`}>
                            {" "}
                            IssurIA{" "}
                        </span>
                    </h1>
                </div>
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-md text-muted-foreground mb-8 mx-auto leading-relaxed">{valuePropositionMap[type]}</p>
                </div>
            </div>

            {/* Main content */}
            <section className="flex-1 container px-4 mx-auto md:py-24 flex flex-col md:flex-row md:max-2-6xl">
                <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 mt-12 md:mt-0 md:pr-6">
                    {/* Desktop Hero Section - Only visible on desktop */}
                    <div className="hidden md:block">
                        <div className={`transform transition-all duration-1000 delay-200  mt-20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                            <h1 className="text-6xl font-bold tracking-tight mb-4">
                                Join 
                                <span className={`bg-gradient-to-r ${type === "bank" ? "from-emerald-300 to-emerald-800" : type === "business" ? "from-orange-300 to-orange-800" : "from-blue-300 to-blue-800"} bg-clip-text text-transparent animate-gradient-x`}>
                                    {" "}
                                    Issuria{" "}
                                </span>
                            </h1>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                            <p className="text-2xl text-muted-foreground mb-8 mx-auto leading-relaxed">{valuePropositionMap[type]}</p>
                        </div>
                    </div>
                </div>

                {/* Sign-in form */}
                <div className="md:w-1/2 order-1 md:order-2 md:pl-6 md:border-l md:border-slate-700">
                    <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>

                    <div className="space-y-6">
                        <form action={resendAction} className="space-y-4">
                            {/* Client type selection */}
                            
                            <div>
                                <Label>
                                    Account Type
                                </Label>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                                <Button 
                                    type="button"
                                    onClick={() => setType("bank")}
                                    variant={type === "bank" ? "default" : "outline"}
                                    className={`flex-1 ${type === "bank" ? "bg-emerald-500 hover:bg-emerald-600" : "hover:bg-emerald-600"}`}
                                >
                                    Bank
                                </Button>
                                <Button 
                                    type="button"
                                    onClick={() => setType("business")}
                                    variant={type === "business" ? "default" : "outline"}
                                    className={`flex-1 ${type === "business" ? "bg-orange-500 hover:bg-orange-600" : "hover:bg-orange-600"}`}
                                >
                                    Business
                                </Button>
                                <Button 
                                    type="button"
                                    onClick={() => setType("investor")}
                                    variant={type === "investor" ? "default" : "outline"}
                                    className={`flex-1 ${type === "investor" ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-500"}`}
                                >
                                    Investor
                                </Button>
                            </div>
                            {/* Email Address */}
                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    Email Address
                                </Label>
                                <Input
                                    className={`${type === "bank" ? "focus-visible:ring-emerald-600" : type === "business" ? "focus-visible:ring-orange-600" : "focus-visible:ring-blue-600"}`}
                                    id="email-resend"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                />
                                </div>
                            <Button type="submit" className={`w-full ${type === "bank" ? "bg-emerald-500 hover:bg-emerald-600" : type === "business" ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-500 hover:bg-blue-600"}`}>
                                Send Magic Link
                            </Button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                            <span className="hidden px-2">Or continue with</span>
                            </div>
                        </div>

                        {/* OAuth buttons */}
                        <div className="space-y-4">
                            {/*
                            <Button
                            onClick={() => signIn("github", {redirectTo: "/"})}
                            variant="outline"
                            className="w-full flex items-center justify-center"
                            >
                            <Image
                                src={theme === "dark" ? "/ext/github-mark-white.svg" : "/ext/github-mark.svg"}
                                alt="GitHub"
                                width={24}
                                height={24}
                                className="mr-2" />
                                Sign in with GitHub
                            </Button>
                            */}
                            <Button
                            onClick={() => signIn("google", {redirectTo: "/"})}
                            variant="outline"
                            className="w-full flex items-center justify-center"
                            >
                            <Image
                                src="/ext/web_neutral_rd_na.svg"
                                alt="Google"
                                width={28}
                                height={28}
                                className="mr-2" />
                                Sign in with Google
                            </Button>
                        </div>

                        {/* Legal notice */}
                        <p className="mt-8 text-center text-sm text-gray-400">
                            By signing up, you agree to our{" "}
                            <Link href="/legal/terms" className="text-blue-400 hover:text-blue-300">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/legal/privacy" className="text-blue-400 hover:text-blue-300">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};