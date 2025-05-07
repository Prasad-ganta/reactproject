"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "This platform has transformed how we build our products. The interactive components are beautiful and the responsiveness is flawless.",
      rating: 5,
      color: "neon-pink",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer",
      company: "DesignHub",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As a developer, I appreciate the clean code and well-structured components. It's made our development process much faster.",
      rating: 5,
      color: "neon-blue",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "CreativeStudio",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The attention to detail in the design system is impressive. Our users love the new interface we've built with these components.",
      rating: 4,
      color: "neon-green",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, autoplay])

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((activeIndex + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const currentColor = testimonials[activeIndex].color

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-pink blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-blue blur-xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-300">Don't just take our word for it - hear from our satisfied users</p>
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-500 ease-in-out transform ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Card className="border-0 bg-black/40 backdrop-blur-md overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${currentColor}/20 to-transparent rounded-lg`}
              ></div>
              <div
                className={`absolute h-1 top-0 left-0 bg-${currentColor}`}
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  transition: "width 0.3s ease-out",
                }}
              ></div>

              <CardContent className="p-8 relative">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className={`p-1 rounded-full bg-gradient-to-r from-${currentColor} to-electric-purple`}>
                      <Avatar className="h-20 w-20 border-2 border-black">
                        <AvatarImage
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                        />
                        <AvatarFallback className="bg-black text-white">
                          {testimonials[activeIndex].name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? `text-${currentColor} fill-${currentColor}` : "text-gray-700"}`}
                        />
                      ))}
                    </div>
                    <p className="text-lg text-gray-100 italic mb-4 leading-relaxed">
                      "{testimonials[activeIndex].content}"
                    </p>
                    <div>
                      <h4 className={`font-bold text-${currentColor}`}>{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-400">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className={`rounded-full border border-${currentColor}/50 bg-black/50 backdrop-blur-sm hover:bg-black/80 hover:border-${currentColor}`}
              disabled={isAnimating}
            >
              <ChevronLeft className={`h-5 w-5 text-${currentColor}`} />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-2 h-2 rounded-full p-0 min-w-0 ${activeIndex === index ? `bg-${currentColor}` : "bg-gray-700"}`}
                onClick={() => setActiveIndex(index)}
                disabled={isAnimating}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className={`rounded-full border border-${currentColor}/50 bg-black/50 backdrop-blur-sm hover:bg-black/80 hover:border-${currentColor}`}
              disabled={isAnimating}
            >
              <ChevronRight className={`h-5 w-5 text-${currentColor}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
