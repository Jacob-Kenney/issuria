import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Users,
  Shield,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare,
  TrendingUp,
  Globe,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Demo | BondForge",
  description: "Schedule a personalized demo of BondForge's AI-powered financial product creation platform.",
}

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-40" />
        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              <Calendar className="mr-2 h-3 w-3" />
              Schedule Your Demo
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              See BondForge in{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Action</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Get a personalized demonstration of how BondForge can transform your financial product creation process.
              Our experts will show you exactly how our AI-powered platform can benefit your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                30-minute session
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Tailored to your needs
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                No commitment required
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Demo Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Book Your Demo
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to schedule your personalized
                    demo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input id="email" type="email" placeholder="john.smith@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" placeholder="Your Company Name" required />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ceo">CEO/President</SelectItem>
                          <SelectItem value="cfo">CFO</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="director">Director</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="analyst">Analyst</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">1-10 employees</SelectItem>
                          <SelectItem value="small">11-50 employees</SelectItem>
                          <SelectItem value="medium">51-200 employees</SelectItem>
                          <SelectItem value="large">201-1000 employees</SelectItem>
                          <SelectItem value="enterprise">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry Focus</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banking">Banking</SelectItem>
                        <SelectItem value="investment">Investment Management</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="fintech">Fintech</SelectItem>
                        <SelectItem value="corporate">Corporate Finance</SelectItem>
                        <SelectItem value="government">Government/Municipal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">What interests you most about BondForge?</Label>
                    <Textarea
                      id="interests"
                      placeholder="Tell us about your specific needs, challenges, or what you'd like to see in the demo..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When are you looking to implement?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule My Demo
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/legal/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted by our team.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Demo Information */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Personalized Walkthrough</h4>
                      <p className="text-sm text-muted-foreground">
                        See BondForge in action with scenarios relevant to your business
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">AI-Powered Features</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience our natural language processing and automated workflows
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Q&A Session</h4>
                      <p className="text-sm text-muted-foreground">
                        Get answers to your specific questions and use cases
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Implementation Discussion</h4>
                      <p className="text-sm text-muted-foreground">Learn about pricing, timelines, and next steps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose BondForge?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">90% Faster Product Creation</h4>
                      <p className="text-sm text-muted-foreground">Reduce time-to-market from months to days</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Enterprise-Grade Security</h4>
                      <p className="text-sm text-muted-foreground">SOC 2, ISO 27001, and GDPR compliant</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Globe className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Global Regulatory Support</h4>
                      <p className="text-sm text-muted-foreground">Built-in compliance for major financial markets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Need to Talk Now?</CardTitle>
                  <CardDescription>Our team is available to answer your questions immediately.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">sales@bondforge.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available on our website</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
