"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-purple via-hot-pink to-neon-blue opacity-80"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_500px_at_50%_200px,#FF00FF33,transparent)]"></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-neon-green blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-neon-blue blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-hot-pink blur-xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neon-blue/20 text-neon-blue border border-neon-blue/30">
            <Sparkles className="mr-1 h-3 w-3" />
            Exciting New Design
          </span>
        </div>

        <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-blue to-electric-lime">
            Electrifying
          </span>
          <span className="block">Interactive Experiences</span>
        </h1>

        <div className="mt-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg blur opacity-25"></div>
          <p className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto text-lg text-gray-200 sm:text-xl">
            Create stunning user interfaces with our vibrant and interactive components.
            {isExpanded && (
              <span>
                {" "}
                Our platform helps you build eye-catching applications that captivate users and drive engagement with
                bold, exciting designs.
              </span>
            )}
          </p>
        </div>

        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
            <Button className="relative w-full flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-black border border-neon-blue/50 hover:bg-black/80 md:py-4 md:text-lg md:px-10">
              Get started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-neon-blue bg-black/50 backdrop-blur-sm border border-neon-blue/30 hover:bg-black/70 md:py-4 md:text-lg md:px-10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Learn more
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
