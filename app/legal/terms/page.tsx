import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 px-3 py-1 text-primary">
              Legal
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <Card className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-200">Important Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 dark:text-amber-300">
                    These Terms of Service constitute a legally binding agreement. Please read them carefully before
                    using our platform. By accessing or using BondForge, you agree to be bound by these terms.
                  </p>
                </CardContent>
              </Card>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the BondForge platform ("Service"), you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                BondForge provides a technology platform that enables the creation, analysis, and trading of bonds and
                structured financial products. Our services include:
              </p>
              <ul>
                <li>AI-powered financial product creation tools</li>
                <li>Regulatory compliance automation</li>
                <li>Market analysis and risk assessment</li>
                <li>Trading and marketplace functionality</li>
                <li>Documentation and reporting services</li>
              </ul>

              <h2>3. User Eligibility</h2>
              <p>
                Our services are intended for qualified institutional investors, financial institutions, and accredited
                investors only. By using our platform, you represent and warrant that:
              </p>
              <ul>
                <li>You are at least 18 years of age</li>
                <li>You have the legal authority to enter into this agreement</li>
                <li>You meet the qualification requirements for your jurisdiction</li>
                <li>Your use of the service will not violate any applicable laws or regulations</li>
              </ul>

              <h2>4. Account Registration and Security</h2>
              <p>
                To access certain features of our service, you must register for an account. You agree to provide
                accurate, current, and complete information during registration and to update such information to keep
                it accurate, current, and complete.
              </p>
              <p>You are responsible for:</p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
              </ul>

              <h2>5. Financial Product Creation and Trading</h2>
              <p>When using our platform to create or trade financial products, you acknowledge and agree that:</p>
              <ul>
                <li>All financial products involve risk and may result in financial loss</li>
                <li>Past performance is not indicative of future results</li>
                <li>You are responsible for conducting your own due diligence</li>
                <li>BondForge does not provide investment advice or recommendations</li>
                <li>All transactions are subject to applicable regulatory requirements</li>
              </ul>

              <h2>6. Regulatory Compliance</h2>
              <p>
                While our platform includes automated compliance features, you remain solely responsible for ensuring
                that your use of our services complies with all applicable laws, regulations, and industry standards in
                your jurisdiction.
              </p>

              <h2>7. Intellectual Property</h2>
              <p>
                The BondForge platform, including all content, features, and functionality, is owned by BondForge, Inc.
                and is protected by international copyright, trademark, patent, trade secret, and other intellectual
                property laws.
              </p>

              <h2>8. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                service, to understand our practices regarding the collection and use of your information.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, BondForge shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>

              <h2>10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless BondForge and its officers, directors, employees, and
                agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or
                fees arising out of or relating to your use of our services.
              </p>

              <h2>11. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever, including without limitation if you
                breach the Terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the State of Delaware, without regard to
                its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of Delaware.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@bondforge.com
                <br />
                Address: 123 Financial District, New York, NY 10004
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
