import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Sparkles,
  Shield,
  BarChart3,
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  FileText,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { CTASection } from "@/components/call-to-action"

export default function BankSolutionsPage() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Product Creation",
      description: "Transform natural language descriptions into fully structured, compliant financial products",
    },
    {
      icon: Shield,
      title: "Automated Compliance",
      description: "Ensure regulatory compliance across multiple jurisdictions with real-time validation",
    },
    {
      icon: Clock,
      title: "Rapid Time-to-Market",
      description: "Reduce product creation time from months to hours with automated workflows",
    },
    {
      icon: FileText,
      title: "Documentation Generation",
      description: "Automatically generate all required legal and regulatory documentation",
    },
  ]

  const productTypes = [
    {
      name: "Corporate Bonds",
      description: "Fixed and floating rate corporate bonds with customizable terms",
      features: ["Callable/Non-callable options", "Credit enhancement features", "ESG compliance"],
    },
    {
      name: "Structured Products",
      description: "Complex derivatives and hybrid instruments tailored to client needs",
      features: ["Principal protection", "Barrier options", "Multi-asset exposure"],
    },
    {
      name: "Asset-Backed Securities",
      description: "Securitization of various asset classes with risk tranching",
      features: ["Auto loans", "Mortgages", "Credit card receivables"],
    },
    {
      name: "Green Bonds",
      description: "Sustainable finance products for environmental projects",
      features: ["Impact reporting", "Green taxonomy compliance", "Third-party verification"],
    },
  ]

  const benefits = [
    { metric: "90%", label: "Reduction in time-to-market" },
    { metric: "Built-in", label: "Regulatory compliance" },
    { metric: "98%", label: "Cost savings on documentation" },
    { metric: "24/7", label: "Platform availability" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 py-20 dark:from-emerald-950/20 dark:to-emerald-900/20 md:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] left-[60%] h-[80rem] w-[80rem] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-[30%] right-[60%] h-[50rem] w-[50rem] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/20 px-3 py-1 text-emerald-600 dark:text-emerald-400"
            >
              For Banks
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Revolutionize Your Financial Product Creation
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              We enable banks to create, price, and issue structured financial products faster than ever — with intelligent agents handling complexity behind the scenes. With IssurIA structured finance finally moves at the speed of innovation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
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
              Key Benefits
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Transform Your Operations
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See measurable improvements in efficiency, compliance, and time-to-market with BondForge.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card
                key={benefit.label}
                className="border-emerald-200/50 bg-emerald-50/50 text-center dark:border-emerald-800/50 dark:bg-emerald-950/20"
              >
                <CardContent className="p-6">
                  <div className="mb-2 text-4xl font-bold text-emerald-600 dark:text-emerald-400">{benefit.metric}</div>
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
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Platform Features
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Everything You Need to Create Financial Products
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our comprehensive platform provides all the tools necessary for modern financial product development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/40 bg-card/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
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

      {/* Product Types Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Product Types
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Create Any Type of Financial Product
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From simple bonds to complex structured products, our platform supports the full spectrum of financial
              instruments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {productTypes.map((product) => (
              <Card key={product.name} className="border-border/40 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Process
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How BondForge Works for Banks
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our streamlined process makes creating financial products simple and efficient.
            </p>
          </div>

          <Tabs defaultValue="design" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="validate">Validate</TabsTrigger>
              <TabsTrigger value="launch">Launch</TabsTrigger>
            </TabsList>
            <TabsContent value="design" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Product Design</CardTitle>
                  <CardDescription>
                    Describe your financial product using natural language or voice commands
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Simply describe what you want to create: "I need a 5-year bond with a 4.5% coupon rate,
                    callable after 2 years, with quarterly payments and a minimum investment of $1,000."
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">AI Structuring</CardTitle>
                  <CardDescription>
                    Our AI system structures your product with optimal terms and conditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Advanced algorithms analyze market conditions, regulatory requirements, and risk factors to create
                    the optimal product structure with competitive pricing and terms.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="validate" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Compliance Validation</CardTitle>
                  <CardDescription>Automated compliance checking ensures regulatory adherence</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Real-time validation against regulatory frameworks including MiFID II, Dodd-Frank, and Basel III.
                    All documentation is automatically generated and reviewed for compliance.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="launch" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Market Launch</CardTitle>
                  <CardDescription>Deploy your product to the marketplace and connect with investors</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    List your product on our global marketplace, access our network of qualified investors, and begin
                    trading with full transparency and real-time settlement capabilities.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
              Ready to Transform Your Financial Product Creation?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join leading banks already using BondForge to create innovative, compliant financial products in record
              time.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/bank">
                  Access Bank Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      */}
      <CTASection/>
    </div>
  )
}
