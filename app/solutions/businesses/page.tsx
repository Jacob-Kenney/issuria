import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Users,
  TrendingUp,
  DollarSign,
  Building,
  Lightbulb,
  Shield,
  Globe,
  CheckCircle,
  Target,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function CompanySolutionsPage() {
  const features = [
    {
      icon: Lightbulb,
      title: "Agentic Product Creation",
      description: "Our AI agents, structure and issue your structured financial products end-to-end based on your needs.",
    },
    {
      icon: Globe,
      title: "Global Investor Network",
      description: "Access to our extensive network of investors through issuance directly to our trading platform",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Regulatatory compliance built-in. No more delays, no more confusion, just what you need, when you need it.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete legal and regulatory document handling. Forget waiting for legal advice, act now — only with IssurIA",
    },
  ]

  const financingTypes = [
    {
      name: "Convertible Notes",
      description: "Flexible debt instruments that convert to equity under specified conditions",
      features: ["Deferred valuation", "Investor-friendly terms", "Quick execution"],
      useCase: "Early-stage Businesses seeking growth capital",
    },
    {
      name: "Revenue-Based Securities",
      description: "Financing tied to your Businesses' revenue performance",
      features: ["No equity dilution", "Flexible repayment", "Performance-based"],
      useCase: "Profitable Businesses with predictable revenue streams",
    },
    {
      name: "Asset-Backed Financing",
      description: "Leverage your assets to secure favorable financing terms",
      features: ["Lower cost of capital", "Asset optimization", "Structured repayment"],
      useCase: "Businesses with valuable asset portfolios",
    },
    {
      name: "Green Bonds",
      description: "Sustainable financing for environmental and social impact projects",
      features: ["ESG compliance", "Impact reporting", "Investor appeal"],
      useCase: "Businesses with sustainability initiatives",
    },
  ]

  const benefits = [
    { metric: "40%", label: "Lower cost of capital" },
    { metric: "3x", label: "Faster funding process" },
    { metric: "85%", label: "Success rate" },
    { metric: "500+", label: "Businesses funded" },
  ]

  const industries = [
    { name: "Technology", icon: "💻", description: "Software, hardware, and tech services" },
    { name: "Healthcare", icon: "🏥", description: "Biotech, medical devices, and health services" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial and consumer manufacturing" },
    { name: "Real Estate", icon: "🏢", description: "Commercial and residential development" },
    { name: "Energy", icon: "⚡", description: "Renewable energy and clean technology" },
    { name: "Financial Services", icon: "💰", description: "Fintech and financial institutions" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 py-20 dark:from-orange-950/20 dark:to-orange-900/20 md:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] left-[60%] h-[80rem] w-[80rem] rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -bottom-[30%] right-[60%] h-[50rem] w-[50rem] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-orange-500/20 px-3 py-1 text-orange-600 dark:text-orange-400"
            >
              For Businesses
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Unlock Growth with Custom Financial Solutions
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Access finance when you need it, with AI agent generated corporate bonds. Compliance, security, issuance, handled for you. Raise finance when you need it most — only with IssurIA
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-demo">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Success Metrics
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Proven Results for Growing Companies
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See how BondForge has helped companies like yours achieve their financing goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card
                key={benefit.label}
                className="border-orange-200/50 bg-orange-50/50 text-center dark:border-orange-800/50 dark:bg-orange-950/20"
              >
                <CardContent className="p-6">
                  <div className="mb-2 text-4xl font-bold text-orange-600 dark:text-orange-400">{benefit.metric}</div>
                  <div className="text-sm text-muted-foreground">{benefit.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Features Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-orange-500/20 px-3 py-1 text-orange-500">
              Our Services
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Comprehensive Support for Structured Finance
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
            We support businesses to issue bonds and raise funds from structuring to issuance. Access capital when you need it most, not months later.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/40 bg-card/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Types Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Financing Options
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Flexible Financing Solutions for Every Stage
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Whether you're a startup or an established business, we have financing options that fit your needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {financingTypes.map((type) => (
              <Card key={type.name} className="border-border/40 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-medium">Key Features:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Best For:</h4>
                    <p className="text-sm text-muted-foreground">{type.useCase}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Industries We Serve
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Expertise Across All Sectors
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our team has deep experience working with businesses across diverse industries and sectors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.name} className="border-border/40 bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="mb-3 text-4xl">{industry.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Our Process
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              From Concept to Capital in 4 Steps
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our streamlined process ensures you get the right financing solution quickly and efficiently.
            </p>
          </div>

          <Tabs defaultValue="assess" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="assess">Assess</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="connect">Connect</TabsTrigger>
              <TabsTrigger value="close">Close</TabsTrigger>
            </TabsList>
            <TabsContent value="assess" className="mt-8">
              <Card className="border-orange-200/50 bg-orange-50/50 dark:border-orange-800/50 dark:bg-orange-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Assess Your Needs</CardTitle>
                  <CardDescription>We analyze your business, growth plans, and financing requirements</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Our team conducts a comprehensive assessment of your business model, financial position, growth
                    objectives, and market position to determine the optimal financing structure.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure" className="mt-8">
              <Card className="border-orange-200/50 bg-orange-50/50 dark:border-orange-800/50 dark:bg-orange-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <Building className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Structure the Deal</CardTitle>
                  <CardDescription>Custom financing solution designed specifically for your business</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We design a custom financing structure that aligns with your business goals, risk profile, and
                    investor preferences, ensuring optimal terms and conditions for all parties.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="connect" className="mt-8">
              <Card className="border-orange-200/50 bg-orange-50/50 dark:border-orange-800/50 dark:bg-orange-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Connect with Investors</CardTitle>
                  <CardDescription>
                    Access our network of qualified institutional and accredited investors
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Leverage our extensive investor network to find the right capital partners. We facilitate
                    introductions, manage the due diligence process, and support investor relations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="close" className="mt-8">
              <Card className="border-orange-200/50 bg-orange-50/50 dark:border-orange-800/50 dark:bg-orange-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Close the Deal</CardTitle>
                  <CardDescription>
                    Complete documentation and funding with full legal and regulatory support
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We handle all aspects of the closing process, from final documentation to regulatory compliance,
                    ensuring a smooth and efficient completion of your financing.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">Ready to Accelerate Your Growth?</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join hundreds of businesses that have successfully raised capital through our platform. Let's discuss your
              financing needs today.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
