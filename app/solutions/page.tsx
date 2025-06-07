import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Users, BarChart3, Sparkles, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { CTASection } from "@/components/call-to-action"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "For Banks",
      description: "Create sophisticated financial products with AI assistance",
      icon: Building2,
      href: "/solutions/banks",
      features: [
        "AI-powered product structuring",
        "Automated compliance checking",
        "Risk assessment tools",
        "Documentation generation",
      ],
      color: "emerald",
    },
    {
      title: "For Businesses",
      description: "Design custom financing solutions for your business needs",
      icon: Users,
      href: "/solutions/businesses",
      features: [
        "Custom financing structures",
        "Capital raising assistance",
        "Investor matching",
        "Regulatory guidance",
      ],
      color: "orange",
    },
    {
      title: "For Investors",
      description: "Discover and analyze innovative financial products",
      icon: BarChart3,
      href: "/solutions/investors",
      features: ["Product discovery platform", "Advanced analytics", "Risk assessment", "Portfolio management"],
      color: "blue",
    },
  ]

  const capabilities = [
    {
      icon: Sparkles,
      title: "AI-Powered Creation",
      description: "Natural language processing transforms ideas into compliant financial products",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automated compliance checking across multiple jurisdictions",
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect with institutions and investors worldwide",
    },
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
              Solutions
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Tailored Solutions for Every Financial Institution
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Whether you're a bank creating products, a company seeking financing, or an investor exploring
              opportunities, IssurIA has the perfect solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Card
                key={solution.title}
                className="group relative overflow-hidden border-border/40 bg-card/50 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                      solution.color === "emerald"
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                        : solution.color === "orange"
                          ? "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400"
                          : "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                    }`}
                  >
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-primary/90">
                    <Link href={solution.href}>
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
              Powered by Advanced Technology
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform combines cutting-edge AI with deep financial expertise to deliver unparalleled results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="border-primary/10 bg-card/50 text-center">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <capability.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
                  Integration
                </Badge>
                <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
                  Seamless Integration with Your Existing Systems
                </h2>
                <p className="mb-6 text-muted-foreground">
                  IssurIA integrates seamlessly with your existing infrastructure, ensuring minimal disruption while
                  maximizing efficiency. Our API-first approach allows for custom integrations tailored to your specific
                  needs.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "RESTful API with comprehensive documentation",
                    "Real-time data synchronization",
                    "Enterprise-grade security protocols",
                    "Custom webhook configurations",
                    "Multi-environment support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <Link href="/resources/api">
                    View API Documentation <ArrowRight className="ml-2 h-4 w-4" />
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
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-muted-foreground">{"// Create a new bond product"}</div>
                    <div>
                      <span className="text-blue-400">const</span> <span className="text-white">bond</span>{" "}
                      <span className="text-blue-400">=</span> <span className="text-blue-400">await</span>{" "}
                      <span className="text-yellow-400">Issuria</span>
                      <span className="text-white">.</span>
                      <span className="text-green-400">products</span>
                      <span className="text-white">.</span>
                      <span className="text-green-400">create</span>
                      <span className="text-white">({"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-red-400">type</span>
                      <span className="text-white">:</span> <span className="text-green-400">'corporate_bond'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-red-400">maturity</span>
                      <span className="text-white">:</span> <span className="text-green-400">'5Y'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-red-400">coupon</span>
                      <span className="text-white">:</span> <span className="text-purple-400">4.5</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-white">{"});"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}

      {/* CTA Section */}
      <CTASection/>
    </div>
  )
}
