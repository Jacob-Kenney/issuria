import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small institutions getting started",
      price: "$2,500",
      period: "per month",
      features: [
        "Up to 10 product creations per month",
        "Basic compliance checking",
        "Standard analytics dashboard",
        "Email support",
        "API access (limited)",
        "Basic documentation templates",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing financial institutions",
      price: "$7,500",
      period: "per month",
      features: [
        "Up to 50 product creations per month",
        "Advanced compliance automation",
        "Real-time market analytics",
        "Priority support",
        "Full API access",
        "Custom documentation templates",
        "Multi-user collaboration",
        "Advanced risk assessment",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large institutions with complex needs",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited product creations",
        "White-label solutions",
        "Dedicated compliance team",
        "24/7 premium support",
        "Custom integrations",
        "Advanced security features",
        "Dedicated account manager",
        "Custom training programs",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
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
              Pricing
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Choose the plan that fits your institution's needs. All plans include our core AI-powered platform with
              regulatory compliance built-in.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular ? "border-primary/50 bg-primary/5 shadow-lg" : "border-border/40 bg-card/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground hover:bg-muted"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/get-started"}>
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 font-heading text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about our pricing and platform features.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes, we offer a 14-day free trial for our Starter and Professional plans. This gives you full access to explore our platform and create your first financial products.",
                },
                {
                  question: "What happens if I exceed my monthly product creation limit?",
                  answer:
                    "If you exceed your plan's limit, you can either upgrade to a higher tier or purchase additional product creations at $250 each for Starter and $150 each for Professional plans.",
                },
                {
                  question: "Can I change my plan at any time?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
                },
                {
                  question: "What's included in Enterprise custom pricing?",
                  answer:
                    "Enterprise pricing is tailored to your specific needs and may include volume discounts, custom integrations, dedicated support, and additional compliance features. Contact our sales team for a personalized quote.",
                },
                {
                  question: "Do you offer annual billing discounts?",
                  answer:
                    "Yes, we offer a 15% discount for annual billing on all plans. This can result in significant savings for larger institutions.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept major credit cards, ACH transfers, and wire transfers. Enterprise customers can also arrange for invoicing with net-30 payment terms.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-border/40 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
              Ready to Transform Your Financial Products?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join hundreds of financial institutions already using BondForge to create innovative, compliant financial
              products.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/get-started">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-demo">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
