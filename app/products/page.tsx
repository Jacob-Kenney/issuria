import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, Building2, Leaf, BarChart3, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      title: "Bonds",
      description: "Traditional and innovative bond products for diverse investment needs",
      icon: Shield,
      href: "/products/bonds",
      features: [
        "Corporate bonds with flexible terms",
        "Government and municipal bonds",
        "High-yield and investment grade",
        "ESG-compliant green bonds",
      ],
      color: "emerald",
      volume: "$850M+",
      count: "200+",
    },
    {
      title: "Structured Products",
      description: "Complex financial instruments with tailored risk-return profiles",
      icon: BarChart3,
      href: "/products/structured-products",
      features: [
        "Principal-protected notes",
        "Market-linked investments",
        "Multi-asset exposure",
        "Custom payoff structures",
      ],
      color: "blue",
      volume: "$1.2B+",
      count: "150+",
    },
  ]

  const capabilities = [
    {
      icon: Zap,
      title: "Rapid Product Creation",
      description: "Create and launch new financial products in hours, not weeks",
      metric: "75% faster",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automated compliance checking across multiple jurisdictions",
      metric: "98% compliance rate",
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Access to worldwide investor networks and trading platforms",
      metric: "50+ countries",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time monitoring and advanced analytics for all products",
      metric: "24/7 monitoring",
    },
  ]

  const marketStats = [
    { metric: "$2.1B", label: "Total product volume" },
    { metric: "350+", label: "Active products" },
    { metric: "500+", label: "Institutional clients" },
    { metric: "25+", label: "Countries served" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] left-[60%] h-[80rem] w-[80rem] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-[30%] right-[60%] h-[50rem] w-[50rem] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Financial Products
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Innovative Financial Products for Modern Markets
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover our comprehensive range of bonds and structured products, designed with cutting-edge technology
              and backed by institutional-grade infrastructure.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="border-b border-border/40 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Product Categories
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Comprehensive Financial Product Suite
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From traditional bonds to innovative structured products, our platform offers a complete range of
              financial instruments for every investment strategy.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <Card
                key={product.title}
                className="group relative overflow-hidden border-border/40 bg-card/50 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                        product.color === "emerald"
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                          : "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                      }`}
                    >
                      <product.icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Volume</div>
                      <div className="font-semibold">{product.volume}</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Active Products</div>
                      <div className="font-semibold">{product.count}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Avg. Yield</div>
                      <div className="font-semibold">4.2%</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-primary/90">
                    <Link href={product.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Platform Capabilities
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Advanced Technology for Financial Innovation
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform combines cutting-edge AI with institutional-grade infrastructure to deliver superior
              financial products.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="border-primary/10 bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <capability.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{capability.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{capability.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {capability.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
                  Technology
                </Badge>
                <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
                  Built on Enterprise-Grade Infrastructure
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Our financial products are powered by advanced technology stack designed for scale, security, and
                  performance. Every product benefits from real-time risk management, automated compliance, and
                  institutional-grade settlement.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Real-time risk management and monitoring",
                    "Automated regulatory compliance checking",
                    "Blockchain-based settlement infrastructure",
                    "AI-powered pricing and structuring",
                    "Multi-currency and multi-jurisdiction support",
                    "Enterprise-grade security and encryption",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <Link href="/resources/technology">
                    Learn About Our Technology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-xl border border-border/40 bg-muted/30 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded bg-primary/20" />
                    <div className="h-4 w-1/2 rounded bg-primary/30" />
                    <div className="h-4 w-5/6 rounded bg-primary/20" />
                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-full rounded bg-muted" />
                      <div className="h-3 w-4/5 rounded bg-muted" />
                      <div className="h-3 w-3/5 rounded bg-muted" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-8 w-8 rounded bg-emerald-500/20" />
                      <div className="h-8 w-8 rounded bg-blue-500/20" />
                      <div className="h-8 w-8 rounded bg-orange-500/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG and Sustainability */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              ESG & Sustainability
            </Badge>
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
              Sustainable Finance for a Better Future
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Our commitment to environmental, social, and governance principles is reflected in our comprehensive ESG
              product offerings and sustainable finance solutions.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-green-200/50 bg-green-50/50 dark:border-green-800/50 dark:bg-green-950/20">
                <CardContent className="p-6 text-center">
                  <Leaf className="mx-auto mb-3 h-8 w-8 text-green-600 dark:text-green-400" />
                  <h3 className="mb-2 font-semibold">Green Bonds</h3>
                  <p className="text-sm text-muted-foreground">
                    Financing for environmental projects with impact reporting
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="mb-2 font-semibold">Social Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Products supporting social development and community growth
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200/50 bg-purple-50/50 dark:border-purple-800/50 dark:bg-purple-950/20">
                <CardContent className="p-6 text-center">
                  <Shield className="mx-auto mb-3 h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 font-semibold">Governance</h3>
                  <p className="text-sm text-muted-foreground">Transparent reporting and ethical business practices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
              Ready to Explore Our Financial Products?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover innovative investment opportunities and create custom financial products tailored to your needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/dashboard">
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
