"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, CheckCircle, DollarSign, Calendar, Shield, BarChart3 } from "lucide-react"

interface Product {
  id: string
  name: string
  type: string
  issuer: string
  yield: number
  maturity: string
  rating: string
  minInvestment: number
  available: number
  price: number
  change: number
  sector: string
}

interface ProductAnalysisProps {
  product: Product
}

export function ProductAnalysis({ product }: ProductAnalysisProps) {
  // Mock analysis data
  const riskScore = 65
  const liquidityScore = 78
  const creditScore = 82
  const marketSentiment = "Positive"

  const riskFactors = [
    { factor: "Credit Risk", level: "Medium", description: "Issuer has stable financials" },
    { factor: "Interest Rate Risk", level: "Low", description: "Short to medium duration" },
    { factor: "Liquidity Risk", level: "Low", description: "Active secondary market" },
    { factor: "Market Risk", level: "Medium", description: "Sector volatility present" },
  ]

  const keyMetrics = [
    { label: "Duration", value: "3.2 years", icon: Calendar },
    { label: "Convexity", value: "0.15", icon: BarChart3 },
    { label: "Spread", value: "125 bps", icon: TrendingUp },
    { label: "Liquidity", value: "High", icon: DollarSign },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Product Analysis: {product.name}</span>
            <Badge variant="outline">{product.type}</Badge>
          </CardTitle>
          <CardDescription>Comprehensive risk and return analysis for {product.issuer}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <metric.icon className="h-8 w-8 mx-auto mb-2 text-slate-600" />
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Risk Assessment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Overall Risk Score</span>
                <span className="text-sm text-slate-600">{riskScore}/100</span>
              </div>
              <Progress value={riskScore} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Credit Quality</span>
                <span className="text-sm text-slate-600">{creditScore}/100</span>
              </div>
              <Progress value={creditScore} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Liquidity</span>
                <span className="text-sm text-slate-600">{liquidityScore}/100</span>
              </div>
              <Progress value={liquidityScore} className="h-2" />
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-3">Risk Factors</h4>
              <div className="space-y-2">
                {riskFactors.map((risk) => (
                  <div key={risk.factor} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        risk.level === "Low"
                          ? "bg-emerald-500"
                          : risk.level === "Medium"
                            ? "bg-orange-500"
                            : "bg-red-500"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{risk.factor}</span>
                        <Badge
                          variant={
                            risk.level === "Low" ? "default" : risk.level === "Medium" ? "secondary" : "destructive"
                          }
                          className="text-xs"
                        >
                          {risk.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{risk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Market Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">{product.yield}%</div>
                <div className="text-sm text-slate-600">Current Yield</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold">{product.rating}</div>
                <div className="text-sm text-slate-600">Credit Rating</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Market Sentiment</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm text-emerald-600">{marketSentiment}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Price Change (24h)</span>
                <div className="flex items-center gap-2">
                  {product.change >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm ${product.change >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                    {product.change >= 0 ? "+" : ""}
                    {product.change}%
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Available Amount</span>
                <span className="text-sm font-medium">${(product.available / 1000000).toFixed(1)}M</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-3">Investment Recommendation</h4>
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <div className="font-medium text-emerald-900">Recommended</div>
                  <p className="text-sm text-emerald-700">
                    Strong credit profile with attractive yield for current market conditions. Suitable for conservative
                    to moderate risk portfolios.
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add to Portfolio</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
