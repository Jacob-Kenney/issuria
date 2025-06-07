import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
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
              Our Story
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Transforming Financial Product Creation
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              BondForge was founded with a vision to democratize access to sophisticated financial products through
              technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <Card className="border-primary/10 bg-card/50">
                <CardContent className="p-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To democratize access to sophisticated financial products by leveraging AI and technology, enabling
                    institutions of all sizes to create, analyze, and trade bonds and structured products with
                    unprecedented efficiency and compliance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 bg-card/50">
                <CardContent className="p-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground">
                    A financial ecosystem where innovative products are accessible to all qualified participants,
                    fostering greater market efficiency, transparency, and inclusion across the global financial
                    landscape.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
              <p>
                Founded in 2021 by a team of financial experts and technologists, BondForge emerged from a simple
                observation: the creation and management of bonds and structured financial products remained
                unnecessarily complex, time-consuming, and restricted to large institutions with substantial resources.
              </p>
              <p>
                Our founders, with decades of experience across investment banking, capital markets, and artificial
                intelligence, recognized that advances in natural language processing and machine learning could
                revolutionize how financial products are designed, documented, and distributed.
              </p>
              <p>
                What began as a research project quickly evolved into a comprehensive platform that now serves hundreds
                of financial institutions worldwide, from global banks to boutique investment firms. Our AI-powered
                system has processed over $10 billion in financial products, maintaining a 98% regulatory compliance
                rate while reducing time-to-market by 75%.
              </p>
              <p>
                Today, BondForge continues to push the boundaries of what's possible in financial product creation,
                guided by our commitment to innovation, compliance, and accessibility. We're proud to be at the
                forefront of the fintech revolution, transforming how the world creates and interacts with financial
                instruments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Our Team
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Leadership Team
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the experienced team driving innovation in financial technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alexandra Chen",
                title: "Chief Executive Officer",
                bio: "Former Managing Director at Goldman Sachs with 15+ years in structured products.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marcus Rodriguez",
                title: "Chief Technology Officer",
                bio: "Ex-Google AI researcher specializing in natural language processing and machine learning.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Williams",
                title: "Chief Compliance Officer",
                bio: "Former SEC attorney with expertise in financial regulations and compliance frameworks.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                title: "Chief Financial Officer",
                bio: "Previously CFO at fintech unicorn with experience scaling financial technology companies.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Johnson",
                title: "VP of Product",
                bio: "Product leader with 10+ years building enterprise financial software solutions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "James Thompson",
                title: "VP of Engineering",
                bio: "Engineering leader with expertise in distributed systems and financial infrastructure.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member) => (
              <Card key={member.name} className="border-primary/10 bg-card/50">
                <CardContent className="p-6 text-center">
                  <Avatar className="mx-auto mb-4 h-24 w-24">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mb-1 font-semibold">{member.name}</h3>
                  <p className="mb-3 text-sm text-primary">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
