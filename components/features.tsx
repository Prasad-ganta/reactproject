"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Layout, Users, BarChart } from "lucide-react"

export default function Features() {
  const [activeTab, setActiveTab] = useState("design")

  const features = [
    {
      id: "design",
      title: "Bold Design",
      description: "Create stunning interfaces with our vibrant components and design system.",
      icon: <Layout className="h-6 w-6 text-neon-pink" />,
      color: "from-neon-pink to-hot-pink",
    },
    {
      id: "performance",
      title: "High Performance",
      description: "Optimized for speed and efficiency to provide the best user experience.",
      icon: <Zap className="h-6 w-6 text-neon-blue" />,
      color: "from-neon-blue to-electric-blue",
    },
    {
      id: "collaboration",
      title: "Team Collaboration",
      description: "Work together seamlessly with built-in collaboration tools.",
      icon: <Users className="h-6 w-6 text-neon-green" />,
      color: "from-neon-green to-electric-lime",
    },
    {
      id: "analytics",
      title: "Detailed Analytics",
      description: "Track user behavior and optimize your application with insights.",
      icon: <BarChart className="h-6 w-6 text-neon-orange" />,
      color: "from-hot-orange to-neon-yellow",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue sm:text-4xl">
            Electrifying Features
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Everything you need to create mind-blowing interactive experiences
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 p-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-black data-[state=active]:to-black/80 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-neon-blue rounded-lg"
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-2">
              <Card className="border-0 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-10 rounded-lg"
                  style={{ backgroundImage: `linear-gradient(to right, ${feature.color})` }}
                ></div>
                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>{feature.icon}</div>
                    <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base text-gray-300 mb-6">{feature.description}</CardDescription>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <h3 className="font-medium text-white">Key Benefits</h3>
                      <ul className="mt-2 list-disc list-inside text-gray-300">
                        <li>Improved user engagement</li>
                        <li>Higher conversion rates</li>
                        <li>Better user satisfaction</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <h3 className="font-medium text-white">Use Cases</h3>
                      <ul className="mt-2 list-disc list-inside text-gray-300">
                        <li>Marketing websites</li>
                        <li>E-commerce platforms</li>
                        <li>SaaS applications</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
