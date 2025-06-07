import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart3, Search, Shield, Eye, PieChart, Globe, CheckCircle, DollarSign } from "lucide-react"
import Link from "next/link"

export default function InvestorSolutionsPage() {
  const features = [
    {
      icon: Search,
      title: "Advanced Product Discovery",
      description: "Sophisticated search and filtering tools to find investment opportunities that match your criteria",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Deep dive into product performance, risk metrics, and market analysis with real-time data",
    },
    {
      icon: Shield,
      title: "Risk Assessment Tools",
      description: "Advanced risk modeling and stress testing to evaluate potential investments thoroughly",
    },
    {
      icon: Eye,
      title: "Due Diligence Support",
      description: "Complete documentation access and automated due diligence workflows for informed decisions",
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Track and manage your entire portfolio with performance monitoring and rebalancing tools",
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Access to financial products from institutions worldwide with multi-currency support",
    },
  ]

  const investmentTypes = [
    {
      name: "Corporate Bonds",
      description: "High-grade and high-yield corporate debt securities",
      features: ["Credit analysis", "Yield optimization", "Duration matching"],
      riskLevel: "Low to Medium",
    },
    {
      name: "Structured Products",
      description: "Complex instruments with tailored risk-return profiles",
      features: ["Principal protection", "Enhanced returns", "Diversification"],
      riskLevel: "Medium to High",
    },
    {
      name: "Asset-Backed Securities",
      description: "Securities backed by pools of underlying assets",
      features: ["Diversified exposure", "Predictable cash flows", "Credit enhancement"],
      riskLevel: "Low to Medium",
    },
    {
      name: "Green Bonds",
      description: "Sustainable investments with environmental impact",
      features: ["ESG compliance", "Impact reporting", "Tax advantages"],
      riskLevel: "Low to Medium",
    },
  ]

  const benefits = [
    { metric: "$2.1B", label: "Available investment opportunities" },
    { metric: "500+", label: "Active financial products" },
    { metric: "98%", label: "Platform uptime" },
    { metric: "24/7", label: "Market monitoring" },
  ]

  const investorTypes = [
    {
      name: "Institutional Investors",
      icon: "🏛️",
      description: "Pension funds, insurance companies, and endowments",
      minInvestment: "$1M+",
    },
    {
      name: "Family Offices",
      icon: "👨‍👩‍👧‍👦",
      description: "High-net-worth family investment offices",
      minInvestment: "$500K+",
    },
    {
      name: "Hedge Funds",
      icon: "📈",
      description: "Alternative investment funds and strategies",
      minInvestment: "$250K+",
    },
    {
      name: "Asset Managers",
      icon: "💼",
      description: "Professional investment management firms",
      minInvestment: "$100K+",
    },
    {
      name: "Private Banks",
      icon: "🏦",
      description: "Private banking and wealth management",
      minInvestment: "$1M+",
    },
    {
      name: "Accredited Investors",
      icon: "👤",
      description: "Qualified individual investors",
      minInvestment: "$25K+",
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
              For Investors
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Discover Next-Generation Investment Opportunities
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Access innovative financial products with comprehensive analytics, risk assessment tools, and real-time
              market data. Make informed investment decisions with confidence.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/dashboard">
                  Explore Investments <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Market Overview
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Access to Global Financial Markets
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform provides access to a diverse range of investment opportunities from leading financial
              institutions worldwide.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card
                key={benefit.label}
                className="border-blue-200/50 bg-blue-50/50 text-center dark:border-blue-800/50 dark:bg-blue-950/20"
              >
                <CardContent className="p-6">
                  <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">{benefit.metric}</div>
                  <div className="text-sm text-muted-foreground">{benefit.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Platform Features
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Advanced Tools for Sophisticated Investors
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our comprehensive platform provides everything you need to discover, analyze, and invest in financial
              products.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/40 bg-card/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
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

      {/* Investment Types Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Investment Options
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Diverse Investment Opportunities
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From traditional bonds to innovative structured products, find investments that match your risk profile
              and return objectives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {investmentTypes.map((type) => (
              <Card key={type.name} className="border-border/40 bg-card/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{type.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {type.riskLevel}
                    </Badge>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-medium">Key Features:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Types Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Investor Categories
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Solutions for Every Type of Investor
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform serves a diverse range of qualified investors with tailored solutions and minimum investment
              thresholds.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {investorTypes.map((investor) => (
              <Card key={investor.name} className="border-border/40 bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="mb-3 text-4xl">{investor.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">{investor.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{investor.description}</p>
                  <Badge variant="outline" className="text-xs">
                    Min: {investor.minInvestment}
                  </Badge>
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
              Investment Process
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              From Discovery to Investment in 4 Steps
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our streamlined process makes it easy to find, analyze, and invest in the right financial products.
            </p>
          </div>

          <Tabs defaultValue="discover" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="discover">Discover</TabsTrigger>
              <TabsTrigger value="analyze">Analyze</TabsTrigger>
              <TabsTrigger value="evaluate">Evaluate</TabsTrigger>
              <TabsTrigger value="invest">Invest</TabsTrigger>
            </TabsList>
            <TabsContent value="discover" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Search className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Discover Opportunities</CardTitle>
                  <CardDescription>Browse and filter through thousands of financial products</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Use our advanced search and filtering tools to discover investment opportunities that match your
                    specific criteria, risk tolerance, and return objectives across global markets.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analyze" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Analyze Performance</CardTitle>
                  <CardDescription>Deep dive into product metrics and market analysis</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Access comprehensive analytics including historical performance, risk metrics, credit analysis, and
                    market comparisons to make informed investment decisions.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="evaluate" className="mt-8">
              <Card className="border-blue-200/50 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Evaluate Risk</CardTitle>
                  <CardDescription>Comprehensive due diligence and risk assessment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Conduct thorough due diligence with access to complete documentation, stress testing scenarios, and
                    automated risk assessment tools to evaluate potential investments.
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
                  <CardDescription>Secure transaction processing and portfolio integration</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Execute your investment through our secure platform with real-time settlement, automatic portfolio
                    integration, and ongoing performance monitoring and reporting.
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
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
              Ready to Explore Investment Opportunities?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join sophisticated investors already using BondForge to discover and invest in innovative financial
              products with confidence.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/dashboard">
                  Start Investing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Speak with an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
