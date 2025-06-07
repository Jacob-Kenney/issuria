import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Building2,
  Leaf,
  DollarSign,
  Calendar,
  BarChart3,
  CheckCircle,
  Star,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function BondsPage() {
  const bondTypes = [
    {
      name: "Corporate Bonds",
      description: "Fixed and floating rate bonds issued by corporations",
      icon: Building2,
      features: ["Investment grade and high yield", "Callable and non-callable options", "Various maturity periods"],
      yield: "4.2%",
      volume: "$450M",
      count: "120+",
      riskLevel: "Medium",
    },
    {
      name: "Government Bonds",
      description: "Sovereign debt securities with government backing",
      icon: Shield,
      features: ["Treasury bonds and notes", "Municipal bonds", "Sovereign guarantees"],
      yield: "3.8%",
      volume: "$280M",
      count: "65+",
      riskLevel: "Low",
    },
    {
      name: "Green Bonds",
      description: "Sustainable bonds for environmental projects",
      icon: Leaf,
      features: ["Climate change mitigation", "Environmental impact reporting", "ESG compliance"],
      yield: "3.9%",
      volume: "$120M",
      count: "35+",
      riskLevel: "Low-Medium",
    },
  ]

  const features = [
    {
      icon: DollarSign,
      title: "Competitive Yields",
      description: "Access to bonds with attractive yields across the risk spectrum",
      metric: "3.8% - 6.5%",
    },
    {
      icon: Calendar,
      title: "Flexible Maturities",
      description: "Bond terms ranging from short-term to long-term investments",
      metric: "1-30 years",
    },
    {
      icon: BarChart3,
      title: "Real-time Pricing",
      description: "Live market pricing with transparent bid-ask spreads",
      metric: "Live updates",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to bond markets across multiple currencies and regions",
      metric: "25+ countries",
    },
  ]

  const marketData = [
    { metric: "$850M+", label: "Total bond volume" },
    { metric: "220+", label: "Active bond issues" },
    { metric: "4.2%", label: "Average yield" },
    { metric: "AA-", label: "Average credit rating" },
  ]

  const topBonds = [
    {
      name: "TechCorp 5Y Bond",
      issuer: "TechCorp Inc.",
      yield: "4.5%",
      maturity: "2029",
      rating: "AA-",
      price: "98.5",
      change: "+0.2%",
    },
    {
      name: "GreenEnergy 7Y Bond",
      issuer: "GreenEnergy Solutions",
      yield: "4.1%",
      maturity: "2031",
      rating: "A+",
      price: "101.2",
      change: "+0.1%",
    },
    {
      name: "Metro Transit Bond",
      issuer: "Metro Transportation",
      yield: "3.8%",
      maturity: "2034",
      rating: "AA",
      price: "99.8",
      change: "-0.1%",
    },
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
              Bond Products
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Comprehensive Bond Investment Solutions
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Access a diverse range of high-quality bonds from corporate issuers, governments, and sustainable projects
              with competitive yields and transparent pricing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/dashboard">
                  Browse Bonds <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="border-b border-border/40 py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-heading text-2xl font-bold">Bond Market Overview</h2>
            <p className="text-muted-foreground">Current market statistics and performance metrics</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {marketData.map((data) => (
              <Card
                key={data.label}
                className="border-emerald-200/50 bg-emerald-50/50 text-center dark:border-emerald-800/50 dark:bg-emerald-950/20"
              >
                <CardContent className="p-6">
                  <div className="mb-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">{data.metric}</div>
                  <div className="text-sm text-muted-foreground">{data.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bond Types */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Bond Categories
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Diverse Bond Investment Options
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose from a comprehensive range of bond types to match your investment objectives and risk tolerance.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {bondTypes.map((bond) => (
              <Card key={bond.name} className="border-border/40 bg-card/50">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                      <bond.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {bond.riskLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{bond.name}</CardTitle>
                  <CardDescription>{bond.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Avg Yield</div>
                      <div className="font-semibold text-emerald-600">{bond.yield}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Volume</div>
                      <div className="font-semibold">{bond.volume}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Issues</div>
                      <div className="font-semibold">{bond.count}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {bond.features.map((feature) => (
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

      {/* Platform Features */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Platform Features
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Advanced Bond Trading Platform
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform provides institutional-grade tools and features for bond discovery, analysis, and trading.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/40 bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
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

      {/* Top Performing Bonds */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Featured Bonds
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Top Performing Bonds
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore some of our highest-rated and best-performing bond offerings currently available on the platform.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {topBonds.map((bond, index) => (
                <Card key={bond.name} className="border-border/40 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{bond.name}</h3>
                          <p className="text-sm text-muted-foreground">{bond.issuer}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-8 text-center">
                        <div>
                          <div className="text-sm text-muted-foreground">Yield</div>
                          <div className="font-semibold text-emerald-600">{bond.yield}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Maturity</div>
                          <div className="font-semibold">{bond.maturity}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Rating</div>
                          <div className="font-semibold">{bond.rating}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Price</div>
                          <div className="font-semibold">{bond.price}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Change</div>
                          <div
                            className={`font-semibold ${
                              bond.change.startsWith("+") ? "text-emerald-600" : "text-red-600"
                            }`}
                          >
                            {bond.change}
                          </div>
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
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Investment Process
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How to Invest in Bonds
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our streamlined process makes bond investing simple and transparent for all types of investors.
            </p>
          </div>

          <Tabs defaultValue="research" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="analyze">Analyze</TabsTrigger>
              <TabsTrigger value="invest">Invest</TabsTrigger>
              <TabsTrigger value="monitor">Monitor</TabsTrigger>
            </TabsList>
            <TabsContent value="research" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Research & Discovery</CardTitle>
                  <CardDescription>
                    Explore our comprehensive bond database with advanced filtering and search capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Use our powerful search tools to filter bonds by yield, maturity, credit rating, issuer type, and
                    more. Access detailed bond prospectuses and issuer information to make informed decisions.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analyze" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Risk Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive risk assessment and performance analysis for each bond
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Review detailed risk metrics including duration, convexity, credit risk, and interest rate
                    sensitivity. Compare bonds against benchmarks and analyze historical performance data.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="invest" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Execute Investment</CardTitle>
                  <CardDescription>Secure and efficient bond purchase with transparent pricing</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Execute your bond purchase through our secure platform with real-time pricing, transparent fees, and
                    instant settlement. Minimum investments start from $1,000 for most bonds.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monitor" className="mt-8">
              <Card className="border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Portfolio Monitoring</CardTitle>
                  <CardDescription>
                    Track performance and manage your bond portfolio with real-time updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Monitor your bond investments with real-time valuation, coupon payment tracking, and performance
                    analytics. Receive alerts for important events like rating changes or early redemptions.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">Start Building Your Bond Portfolio</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Access institutional-quality bonds with competitive yields and transparent pricing. Start investing with
              as little as $1,000.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/dashboard">
                  Browse Bonds <ArrowRight className="ml-2 h-4 w-4" />
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
