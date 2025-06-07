"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Send, Building } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useToast } from "@/hooks/use-toast"

// Stub function for backend integration
async function createCompanyProduct(description: string) {
  // This would integrate with your multi-agent system
  console.log("Creating company product:", description)
  return {
    id: Math.random().toString(36).substr(2, 9),
    type: "Structured Product",
    status: "Processing",
    estimatedCompletion: "3-5 business days",
  }
}

export default function CompanyPortal() {
  const [description, setDescription] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setDescription((prev) => prev + (prev ? " " : "") + transcript)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
        toast({
          title: "Speech Recognition Error",
          description: "Please try again or use text input.",
          variant: "destructive",
        })
      }

      recognition.start()
    } else {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Please use text input instead.",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async () => {
    if (!description.trim()) return

    setIsProcessing(true)
    try {
      const result = await createCompanyProduct(description)
      toast({
        title: "Product Creation Initiated",
        description: `Your ${result.type} is being processed. Estimated completion: ${result.estimatedCompletion}`,
      })
      setDescription("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-900 mb-4">Company Portal</h1>
            <p className="text-lg text-orange-700">Design custom structured products tailored to your business needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Creation */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-orange-600" />
                  Create Structured Product
                </CardTitle>
                <CardDescription>
                  Describe your financing needs or investment structure in natural language
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Textarea
                    placeholder="Example: We need to raise $50M for expansion through a convertible note with a 3% interest rate, 18-month maturity, and conversion at a 20% discount to next round valuation..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-32 pr-12"
                  />
                  <Button
                    size="icon"
                    variant={isListening ? "destructive" : "outline"}
                    className="absolute bottom-2 right-2"
                    onClick={startListening}
                    disabled={isListening}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                </div>

                {isListening && (
                  <div className="flex items-center gap-2 text-sm text-orange-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Listening...
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={!description.trim() || isProcessing}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Create Product
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Product Templates */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Common Financing Structures</CardTitle>
                <CardDescription>Popular structures for corporate financing needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Convertible Note", description: "Debt that converts to equity" },
                  { name: "Revenue-Based Security", description: "Returns based on revenue performance" },
                  { name: "Equipment Financing", description: "Asset-backed equipment loans" },
                  { name: "Trade Finance", description: "Working capital for trade operations" },
                  { name: "Green Bond", description: "Financing for environmental projects" },
                ].map((template) => (
                  <div
                    key={template.name}
                    className="p-3 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors"
                    onClick={() => setDescription(`Create a ${template.name.toLowerCase()}: ${template.description}`)}
                  >
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-slate-600">{template.description}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Products */}
          <Card className="mt-8 border-orange-200">
            <CardHeader>
              <CardTitle>Your Product Pipeline</CardTitle>
              <CardDescription>Track the status of your financing products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "CONV001", type: "Convertible Note", status: "Live", amount: "$2.5M", date: "2024-01-10" },
                  {
                    id: "REV001",
                    type: "Revenue-Based Security",
                    status: "Processing",
                    amount: "$5M",
                    date: "2024-01-12",
                  },
                  { id: "GREEN001", type: "Green Bond", status: "Under Review", amount: "$10M", date: "2024-01-14" },
                ].map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{product.id}</div>
                      <div className="text-sm text-slate-600">{product.type}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{product.amount}</div>
                      <Badge
                        variant={
                          product.status === "Live"
                            ? "default"
                            : product.status === "Processing"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600">{product.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
