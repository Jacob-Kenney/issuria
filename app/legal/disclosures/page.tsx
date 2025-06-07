import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Shield, Info } from "lucide-react"

export default function DisclosuresPage() {
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
              Regulatory Disclosures
            </h1>
            <p className="text-xl text-muted-foreground">
              Important regulatory information and risk disclosures for BondForge users
            </p>
          </div>
        </div>
      </section>

      {/* Disclosures Content */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Risk Warning */}
            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800 dark:text-red-200">Important Risk Warning</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                Financial products involve significant risk. The value of investments may go down as well as up, and you
                may lose some or all of your invested capital. Past performance is not indicative of future results.
                Only invest what you can afford to lose.
              </AlertDescription>
            </Alert>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2>Regulatory Status and Authorization</h2>
              <Card className="not-prose mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Regulatory Authorizations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">United States</h4>
                    <p className="text-sm text-muted-foreground">
                      BondForge, Inc. is registered with the Securities and Exchange Commission (SEC) as an investment
                      adviser under the Investment Advisers Act of 1940. Registration number: 801-123456.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">United Kingdom</h4>
                    <p className="text-sm text-muted-foreground">
                      BondForge Europe Ltd. is authorized and regulated by the Financial Conduct Authority (FCA). FCA
                      reference number: 987654.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">European Union</h4>
                    <p className="text-sm text-muted-foreground">
                      BondForge operates under MiFID II regulations and is compliant with GDPR data protection
                      requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <h2>Investment Risks</h2>
              <h3>General Investment Risks</h3>
              <ul>
                <li>
                  <strong>Market Risk:</strong> The value of financial instruments may fluctuate due to market
                  conditions, economic factors, and investor sentiment.
                </li>
                <li>
                  <strong>Credit Risk:</strong> The risk that an issuer may default on their obligations, resulting in
                  partial or total loss of investment.
                </li>
                <li>
                  <strong>Liquidity Risk:</strong> Some financial products may be difficult to sell quickly at fair
                  market value.
                </li>
                <li>
                  <strong>Interest Rate Risk:</strong> Changes in interest rates may affect the value of fixed-income
                  securities.
                </li>
                <li>
                  <strong>Currency Risk:</strong> For international investments, exchange rate fluctuations may impact
                  returns.
                </li>
              </ul>

              <h3>Structured Product Risks</h3>
              <ul>
                <li>
                  <strong>Complexity Risk:</strong> Structured products may have complex terms that are difficult to
                  understand and evaluate.
                </li>
                <li>
                  <strong>Issuer Risk:</strong> The performance of structured products depends on the creditworthiness
                  of the issuer.
                </li>
                <li>
                  <strong>Market Risk:</strong> Returns may be linked to underlying assets or indices that can be
                  volatile.
                </li>
                <li>
                  <strong>Early Redemption Risk:</strong> Some products may be called early, affecting expected returns.
                </li>
              </ul>

              <h2>Suitability and Investor Qualifications</h2>
              <p>
                BondForge services are intended for qualified institutional investors, accredited investors, and
                professional clients only. Before using our platform, you must:
              </p>
              <ul>
                <li>Meet the qualification requirements in your jurisdiction</li>
                <li>Have sufficient knowledge and experience in financial markets</li>
                <li>Understand the risks associated with the financial products offered</li>
                <li>Have the financial capacity to bear potential losses</li>
              </ul>

              <Alert className="not-prose border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800 dark:text-blue-200">Professional Advice</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                  We strongly recommend consulting with qualified financial advisors, tax professionals, and legal
                  counsel before making investment decisions. BondForge does not provide investment advice or
                  recommendations.
                </AlertDescription>
              </Alert>

              <h2>Conflicts of Interest</h2>
              <p>BondForge may have potential conflicts of interest in the following situations:</p>
              <ul>
                <li>When we receive compensation from product issuers or third parties</li>
                <li>When we invest in products available on our platform</li>
                <li>When we provide services to multiple parties in the same transaction</li>
              </ul>
              <p>
                We maintain policies and procedures to identify, manage, and disclose conflicts of interest in
                accordance with regulatory requirements.
              </p>

              <h2>Data and Technology Risks</h2>
              <ul>
                <li>
                  <strong>System Risk:</strong> Technology failures or outages may affect platform availability and
                  transaction processing.
                </li>
                <li>
                  <strong>Cybersecurity Risk:</strong> Despite security measures, cyber attacks or data breaches may
                  occur.
                </li>
                <li>
                  <strong>Data Accuracy:</strong> While we strive for accuracy, data and analytics may contain errors or
                  be incomplete.
                </li>
                <li>
                  <strong>AI Limitations:</strong> Our AI systems may have limitations and should not be relied upon
                  exclusively for investment decisions.
                </li>
              </ul>

              <h2>Compensation and Fees</h2>
              <p>BondForge may receive compensation through:</p>
              <ul>
                <li>Platform subscription fees</li>
                <li>Transaction-based fees</li>
                <li>Third-party payments for services</li>
                <li>Interest on client cash balances</li>
              </ul>
              <p>Detailed fee information is provided in your service agreement and is available upon request.</p>

              <h2>Complaint Procedures</h2>
              <p>If you have a complaint about our services, please contact us using the following procedures:</p>
              <ol>
                <li>
                  <strong>Initial Contact:</strong> Email complaints@bondforge.com or call +1 (555) 123-4567
                </li>
                <li>
                  <strong>Escalation:</strong> If not resolved, contact our Compliance Officer at
                  compliance@bondforge.com
                </li>
                <li>
                  <strong>External Resolution:</strong> You may also contact relevant regulatory authorities or
                  ombudsman services
                </li>
              </ol>

              <h2>Regulatory Contact Information</h2>
              <div className="not-prose">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold">United States</h4>
                        <p className="text-sm text-muted-foreground">
                          Securities and Exchange Commission
                          <br />
                          100 F Street, NE
                          <br />
                          Washington, DC 20549
                          <br />
                          Phone: (202) 551-6551
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">United Kingdom</h4>
                        <p className="text-sm text-muted-foreground">
                          Financial Conduct Authority
                          <br />
                          12 Endeavour Square
                          <br />
                          London E20 1JN
                          <br />
                          Phone: 0800 111 6768
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2>Document Updates</h2>
              <p>
                This disclosure document is updated regularly to reflect changes in regulations, business practices, and
                risk factors. Please check our website periodically for the most current version.
              </p>
              <p>
                <strong>Last Updated:</strong> January 1, 2024
                <br />
                <strong>Next Review Date:</strong> July 1, 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
