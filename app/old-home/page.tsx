import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart3, Building2, Globe, Shield, Sparkles, Users } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { FeatureHighlight } from "@/components/feature-highlight"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { PartnerLogos } from "@/components/partner-logos"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Partner Logos */}
      <section className="border-t border-b border-border/40 bg-muted/30 py-8">
        <div className="container">
          <h2 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Technology Partners
          </h2>
          <PartnerLogos />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Our Platform
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Revolutionizing Financial Product Creation
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our AI-powered platform streamlines the creation, analysis, and trading of bonds and structured financial
              products with unparalleled efficiency and compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureHighlight
              icon={Building2}
              title="For Banks"
              description="Specialized interface for financial institutions to create and manage structured products."
              iconColor="text-emerald-500"
            />
            <FeatureHighlight
              icon={Users}
              title="For Businesses"
              description="Corporate bond structuring, pricing, and compliance. All in one place, ready when you need it with speed only  we can offer."
              iconColor="text-orange-500"
            />
            <FeatureHighlight
              icon={Globe}
              title="For Investors"
              description="Browse, analyse and invest in structured financial products issued by us. Our AI agents search for the perfect offering for your yield and risk targets."
              iconColor="text-blue-500"
            />
            <FeatureHighlight
              icon={Sparkles}
              title="AI-Powered Creation"
              description="Create sophisticated financial products using natural language or voice commands. Our AI agents will create and issue compliant products from your request."
              iconColor="text-primary"
            />
            <FeatureHighlight
              icon={Shield}
              title="Regulatory Compliance"
              description="Automated compliance checking ensures all products meet regulatory requirements across jurisdictions. No more long waits for legal counsel"
              iconColor="text-amber-500"
            />
            <FeatureHighlight
              icon={BarChart3}
              title="Real-time Analytics"
              description="Comprehensive market analysis and risk assessment tools to make informed investment decisions."
              iconColor="text-emerald-500"
            />
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
              How IssurIA Works
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our streamlined process makes creating and trading financial products simple, secure, and efficient.
            </p>
          </div>

          <Tabs defaultValue="banks" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="banks">For Banks</TabsTrigger>
              <TabsTrigger value="companies">For Companies</TabsTrigger>
              <TabsTrigger value="investors">For Investors</TabsTrigger>
            </TabsList>
            <TabsContent value="banks" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <CardTitle>Product Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Describe your financial product in natural language to get started quickly.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <CardTitle>AI Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our AI agents structure your product, ensure regulatory compliance, and prepare all necessary
                      documentation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <CardTitle>Market Launch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      List your product on our marketplace and connect with qualified investors globally.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="mt-4">
                  <Link href="/solutions/banks">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="companies" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <CardTitle>Financing Needs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Describe your corporate bond requirements. Our AI agents will handle the rest.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <CardTitle>Custom Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Receive structured product recommendations optimized for your
                      business.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <CardTitle>Capital Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Connect with financial institutions and investors ready to fund your growth and innovation.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="mt-4">
                  <Link href="/solutions/companies">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="investors" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <CardTitle>Browse Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explore a diverse range of financial products with comprehensive analytics and risk assessments.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <CardTitle>Due Diligence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access detailed documentation, performance metrics, and regulatory information for informed
                      decisions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <CardTitle>Invest Securely</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Execute transactions through our secure platform with full transparency and compliance.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="mt-4">
                  <Link href="/solutions/investors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section 
      <StatsSection />
      */}

      {/* Testimonials
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Testimonials
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See what our clients have to say about their experience with IssurIA.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>
       */}

      {/* CTA Section */}
      <CTASection/>

      {/* Newsletter Section
      <section className="border-t border-border/40 py-16">
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>
      */}
    </div>
  )
}
