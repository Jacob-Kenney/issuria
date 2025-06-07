import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  BarChart3,
  Shield,
  TrendingUp,
  Target,
  Layers,
  Zap,
  Globe,
  CheckCircle,
  AlertTriangle,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function StructuredProductsPage() {
  const productTypes = [
    {
      name: "Principal Protected Notes",
      description: "Capital preservation with upside potential linked to market performance",
      icon: Shield,
      features: ["100% principal protection", "Market-linked returns", "Fixed maturity dates"],
      yield: "3.5% - 8.2%",
      volume: "$420M",
      count: "85+",
      riskLevel: "Low-Medium",
      complexity: "Medium",
    },
    {
      name: "Market-Linked Investments",
      description: "Returns tied to performance of underlying assets or indices",
      icon: TrendingUp,
      features: ["Equity index exposure", "Commodity linkage", "Currency hedging"],
      yield: "4.8% - 12.5%",
      volume: "$380M",
      count: "45+",
      riskLevel: "Medium-High",
      complexity: "High",
    },
    {
      name: "Barrier Options",
      description: "Enhanced returns with conditional protection mechanisms",
      icon: Target,
      features: ["Knock-in/knock-out barriers", "Enhanced coupons", "Autocallable features"],
      yield: "5.2% - 15.0%",
      volume: "$290M",
      count: "35+",
      riskLevel: "High",
      complexity: "High",
    },
  ]

  const features = [
    {
      icon: Layers,
      title: "Custom Structuring",
      description: "Tailored products designed to meet specific investment objectives",
      metric: "100% customizable",
    },
    {
      icon: Zap,
      title: "Real-time Valuation",
      description: "Live pricing with transparent mark-to-market valuations",
      metric: "Live updates",
    },
    {
      icon: Globe,
      title: "Multi-Asset Exposure",
      description: "Access to equities, commodities, currencies, and alternative assets",
      metric: "50+ asset classes",
    },
    {
      icon: BarChart3,
      title: "Risk Analytics",
      description: "Advanced risk modeling and scenario analysis tools",
      metric: "1000+ scenarios",
    },
  ]

  const marketData = [
    { metric: "$1.2B+", label: "Total structured volume" },
    { metric: "165+", label: "Active products" },
    { metric: "7.8%", label: "Average potential return" },
    { metric: "85%", label: "Capital protection rate" },
  ]

  const riskFactors = [
    {
      factor: "Market Risk",
      level: "High",
      description: "Returns depend on underlying asset performance",
      impact: 85,
    },
    {
      factor: "Credit Risk",
      level: "Medium",
      description: "Issuer creditworthiness affects product value",
      impact: 65,
    },
    {
      factor: "Liquidity Risk",
      level: "Medium",
      description: "Limited secondary market for some products",
      impact: 70,
    },
    {
      factor: "Complexity Risk",
      level: "High",
      description: "Complex terms may be difficult to understand",
      impact: 80,
    },
  ]

  const featuredProducts = [
    {
      name: "S&P 500 Autocallable Note",
      underlying: "S&P 500 Index",
      protection: "85%",
      coupon: "8.5%",
      maturity: "3 years",
      status: "Available",
    },
    {
      name: "Multi-Asset Barrier Note",
      underlying: "Basket of 5 stocks",
      protection: "70%",
      coupon: "12.0%",
      maturity: "2 years",
      status: "Limited",
    },
    {
      name: "Gold-Linked Certificate",
      underlying: "Gold Futures",
      protection: "90%",
      coupon: "6.2%",
      maturity: "5 years",
      status: "Available",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-20 dark:from-blue-950/20 dark:to-blue-900/20 md:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] left-[60%] h-[80rem] w-[80rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-[30%] right-[60%] h-[50rem] w-[50rem] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-blue-500/20 px-3 py-1 text-blue-600 dark:text-blue-400">
              Structured Products
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Sophisticated Investment Solutions with Tailored Risk-Return Profiles
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Access innovative structured products that combine capital protection with enhanced return potential,
              designed for sophisticated investors seeking customized exposure to global markets.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/dashboard">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-demo">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="border-b border-border/40 py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-heading text-2xl font-bold">Structured Products Market</h2>
            <p className="text-muted-foreground">Current market statistics and performance overview</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {marketData.map((data) => (
              <Card
                key={data.label}
                className="border-blue-200/50 bg-blue-50/50 text-center dark:border-blue-800/50 dark:bg-blue-950/20"
              >
                <CardContent className="p-6">
                  <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">{data.metric}</div>
                  <div className="text-sm text-muted-foreground">{data.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Product Categories
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Diverse Structured Product Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose from a range of structured products designed to meet different risk appetites and return
              objectives.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {productTypes.map((product) => (
              <Card key={product.name} className="border-border/40 bg-card/50">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      <product.icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1 text-xs">
                        {product.riskLevel}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{product.complexity} Complexity</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Potential Return</div>
                      <div className="font-semibold text-blue-600">{product.yield}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Volume</div>
                      <div className="font-semibold">{product.volume}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Products</div>
                      <div className="font-semibold">{product.count}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
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

      {/* Platform Features */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Platform Capabilities
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Advanced Structured Products Platform
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform provides sophisticated tools for creating, analyzing, and managing structured products with
              institutional-grade infrastructure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/40 bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      <feature.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{feature.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {feature.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Analysis */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
                Risk Assessment
              </Badge>
              <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Understanding Structured Product Risks
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Structured products involve various risk factors that investors should carefully consider before
                investing.
              </p>
            </div>

            <Card className="border-amber-200/50 bg-amber-50/50 dark:border-amber-800/50 dark:bg-amber-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <AlertTriangle className="h-5 w-5" />
                  Important Risk Disclosure
                </CardTitle>
                <CardDescription className="text-amber-700 dark:text-amber-300">
                  Structured products are complex financial instruments that may not be suitable for all investors.
                  Please review the following risk factors carefully.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {riskFactors.map((risk) => (
                  <div key={risk.factor} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{risk.factor}</span>
                      <Badge
                        variant={
                          risk.level === "Low" ? "default" : risk.level === "Medium" ? "secondary" : "destructive"
                        }
                        className="text-xs"
                      >
                        {risk.level}
                      </Badge>
                    </div>
                    <Progress value={risk.impact} className="h-2" />
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Featured Products
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Current Structured Product Offerings
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our current selection of structured products with various underlying assets and protection levels.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {featuredProducts.map((product) => (
                <Card key={product.name} className="border-border/40 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.underlying}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-8 text-center">
                        <div>
                          <div className="text-sm text-muted-foreground">Protection</div>
                          <div className="font-semibold text-blue-600">{product.protection}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Coupon</div>
                          <div className="font-semibold">{product.coupon}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Maturity</div>
                          <div className="font-semibold">{product.maturity}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Status</div>
                          <Badge variant={product.status === "Available" ? "default" : "secondary"} className="text-xs">
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Investment Process
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How to Invest in Structured Products
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our comprehensive process ensures you understand the product structure and risks before investing.
            </p>
          </div>

          <Tabs defaultValue="assess" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="assess">Assess</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
              <TabsTrigger value="invest">Invest</TabsTrigger>
            </TabsList>
            <TabsContent value="assess" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Suitability Assessment</CardTitle>
                  <CardDescription>
                    Evaluate your investment objectives, risk tolerance, and experience level
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Complete our comprehensive suitability questionnaire to ensure structured products align with your
                    investment goals and risk profile. Our advisors will review your responses and provide
                    recommendations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Layers className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Product Selection</CardTitle>
                  <CardDescription>
                    Choose from existing products or work with us to create a custom structure
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Browse our current offerings or collaborate with our structuring team to design a custom product
                    that meets your specific requirements for underlying assets, protection levels, and return profiles.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="review" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Risk Review</CardTitle>
                  <CardDescription>
                    Comprehensive review of product terms, risks, and potential outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Review detailed product documentation including term sheets, risk disclosures, and scenario
                    analysis. Our team will walk you through all aspects of the product to ensure complete
                    understanding.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="invest" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Execute Investment</CardTitle>
                  <CardDescription>Secure investment execution with ongoing monitoring and reporting</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Complete your investment through our secure platform with transparent pricing and settlement.
                    Receive ongoing performance updates and monitoring throughout the product lifecycle.
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
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">Ready to Explore Structured Products?</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover sophisticated investment solutions with tailored risk-return profiles designed for your specific
              objectives.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/dashboard">
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Speak with a Specialist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
