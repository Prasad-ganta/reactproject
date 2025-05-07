"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, Loader2, Send } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success state
      setIsSubmitted(true)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-purple/20 via-black to-black"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-hot-pink to-neon-blue sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-blue to-electric-lime rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/80 backdrop-blur-md shadow-2xl rounded-xl overflow-hidden border border-white/10">
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-green to-neon-blue opacity-75 blur-md animate-pulse"></div>
                    <CheckCircle className="relative h-16 w-16 text-white mb-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-300">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-200">
                        Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-black/50 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-neon-blue rounded-md opacity-70 blur-sm group-hover:opacity-100 transition duration-200"></div>
                    <Button
                      type="submit"
                      className="relative w-full bg-black text-white border border-white/10 group-hover:bg-black/80 transition-all duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
