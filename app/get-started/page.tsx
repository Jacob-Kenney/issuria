import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  Users,
  BarChart3,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Headphones,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Get Started | IssurIA",
  description: "Begin your journey with IssurIA's AI-powered financial product creation platform.",
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-40" />
        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              <Zap className="mr-2 h-3 w-3" />
              Start Your Journey
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Get Started with{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                IssurIA
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Choose your path and begin transforming how you create, analyze, and manage financial products. Our
              AI-powered platform is designed to meet the unique needs of your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                5-minute setup
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Enterprise security
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-primary" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold">Choose Your Path</h2>
              <p className="text-lg text-muted-foreground">
                Select the option that best describes your organization to get a tailored experience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Banks */}
              <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Banks & Financial Institutions</CardTitle>
                  <CardDescription>
                    Create sophisticated financial products in record time with AI agents and built-in compliance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Structured financial products end-to-end
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Regulatory compliance built-in
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      List on our trading platform
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/solutions/banks">
                      Learn More for Banks
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Companies */}
              <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Businesses & Corporations</CardTitle>
                  <CardDescription>
                    Design corporate bonds to access capital efficiently.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Corporate bond structuring
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Corporate bond issuance
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      List on our trading platform
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/solutions/businesses">
                      Learn More for Businesses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Investors */}
              <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Investors & Asset Managers</CardTitle>
                  <CardDescription>
                    Discover, analyze, and invest in innovative financial products with confidence.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Invest on our trading platform
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      AI recommendations unique to your goals
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Risk assessment tools
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/solutions/investors">
                      Learn More for Investors
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Options
      <section className="border-t bg-muted/20 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold">Quick Start Options</h2>
              <p className="text-lg text-muted-foreground">
                Not sure which path is right for you? Try these quick options to get started immediately.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Free Trial
                  </CardTitle>
                  <CardDescription>
                    Explore IssurIA with full access for 14 days. No credit card required.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Full platform access
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Sample data included
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Email support
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Schedule Demo
                  </CardTitle>
                  <CardDescription>
                    See IssurIA in action with a personalized demo tailored to your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      30-minute session
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Customized scenarios
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Q&A with experts
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link href="/book-demo">
                      Book Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
       */}

      {/* Why Choose IssurIA */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold">Why Choose IssurIA?</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of financial professionals who trust IssurIA for their most critical projects.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold">90% Faster</h3>
                <p className="text-muted-foreground">
                  Reduce product creation time from months to days with AI-powered automation.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  SOC 2, ISO 27001, and GDPR compliant with bank-grade security measures.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold">European Compliance</h3>
                <p className="text-muted-foreground">
                  Built-in regulatory compliance for European financial markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/20 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold">Ready to Transform Your Financial Operations?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join the future of financial product creation. Start your journey with IssurIA today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="sm:w-auto">
              <Link href="/get-started">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto" asChild>
                <Link href="/book-demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
