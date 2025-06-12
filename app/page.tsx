"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
    const [prompt, setPrompt] = useState("");

    return (
        <section className="relative md:py-32 px-8">
            {/* Hero Section */}
            <div className="container relative">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        IssurIA:{" "}
                        <span className="bg-gradient-to-r from-emerald-300 to-emerald-800 bg-clip-text text-transparent animate-gradient-x">KID</span>
                    </h1>
                    <p className="mb-8 text-xl text-muted-foreground">
                        Generate a structured financial product's key information document (KID) in minutes, not months.
                    </p>
                </div>
            </div>

            {/* Interactive Prompt Box */}
            <div className="relative w-full max-w-3xl mx-auto mt-0 mb-16">
                <div className="bg-gray-800 rounded-2xl border border-gray-700 px-4 py-2">
                    {/* Input field */}
                    <div className="flex items-center mb-1">
                        <Input
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            type="text"
                            placeholder="Describe your product in plain English"
                            className="flex-1 bg-transparent border-none text-gray-100 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg px-0"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between pt-0">
                        <div className="flex items-center gap-2">
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Audio button 
                            <AudioRecorderButton
                            onTranscription={(text) => setPrompt(text)}
                            />
                            */}
                            {/* Submission Button */}
                            <Link href={`/editor/${encodeURIComponent(prompt.trim())}`}>
                                <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full w-10 h-10"
                                disabled={!prompt.trim()}
                                >
                                <ArrowUp className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                        </div>
                </div>
            </div>

        </section>
    )
}