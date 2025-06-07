import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <Card className="mb-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200">Your Privacy Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 dark:text-blue-300">
                    At BondForge, we are committed to protecting your privacy and ensuring the security of your personal
                    and financial information. This policy explains how we collect, use, and protect your data.
                  </p>
                </CardContent>
              </Card>

              <h2>1. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Professional credentials and institutional affiliations</li>
                <li>Financial qualification information</li>
                <li>Identity verification documents</li>
                <li>Transaction and trading history</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>We automatically collect certain information when you use our platform:</p>
              <ul>
                <li>Device information and IP addresses</li>
                <li>Browser type and operating system</li>
                <li>Usage patterns and platform interactions</li>
                <li>Log files and performance data</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process transactions and manage your account</li>
                <li>Verify your identity and qualifications</li>
                <li>Comply with regulatory requirements</li>
                <li>Improve our platform and develop new features</li>
                <li>Communicate with you about our services</li>
                <li>Detect and prevent fraud or security threats</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li>
                  <strong>Regulatory Compliance:</strong> With regulatory authorities as required by law
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third parties who assist in operating our platform
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent for specific purposes
                </li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement comprehensive security measures to protect your information:</p>
              <ul>
                <li>End-to-end encryption for all data transmission</li>
                <li>Multi-factor authentication requirements</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II compliance</li>
                <li>ISO 27001 certification</li>
                <li>Secure data centers with 24/7 monitoring</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. Specific retention periods include:
              </p>
              <ul>
                <li>Account information: Duration of account plus 7 years</li>
                <li>Transaction records: 7 years from transaction date</li>
                <li>Communication records: 3 years</li>
                <li>Marketing data: Until you opt out or 2 years of inactivity</li>
              </ul>

              <h2>6. Your Rights and Choices</h2>
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your information (subject to legal requirements)</li>
                <li>Data portability</li>
                <li>Opt-out of marketing communications</li>
                <li>Restriction of processing</li>
              </ul>

              <h2>7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place, including:
              </p>
              <ul>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions for certain countries</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>

              <h2>8. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized content</li>
                <li>Enhance security measures</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                personal information from children under 18.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting
                the new policy on our platform and updating the "Last updated" date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
                <br />
                Email: privacy@bondforge.com
                <br />
                Address: 123 Financial District, New York, NY 10004
                <br />
                Phone: +1 (555) 123-4567
              </p>

              <h2>12. Data Protection Officer</h2>
              <p>
                For EU residents, you may contact our Data Protection Officer:
                <br />
                Email: dpo@bondforge.com
                <br />
                Address: BondForge Europe Ltd., 1 Financial Square, London EC2V 8RF, UK
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
