'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ReactTyped } from 'react-typed'
import { BrainCircuit, Mail, Bell, Zap, ChevronRight, Menu, X, Microscope, Tractor, GraduationCap, Briefcase, Stethoscope, ShieldCheck } from "lucide-react"
import revo from "@/public/revo.jpg";
export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    console.log(scrollY)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white overflow-hidden">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-[#000000] bg-opacity-80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-8 w-8 text-[#50E3C2]" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#50E3C2] to-[#4FACFE]">
            AI Pulse
          </span>
        </Link>
        <nav className="hidden md:flex items-center ml-auto gap-4 sm:gap-6">
          {['About', 'Contact', 'Blog', "Support"].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-[#50E3C2] transition-colors" href="#">
              {item}
            </Link>
          ))}
          <Link href="/auth/login" className='bg-transparent border border-[#50E3C2] text-[#50E3C2] hover:bg-[#50E3C2] hover:text-black transition-all duration-300 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>Login</Link>
        </nav>
        <Button variant="ghost" className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#000000] bg-opacity-95 z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {['About', 'Contact', 'Blog', "Support"].map((item) => (
                <Link key={item} className="text-2xl font-medium hover:text-[#50E3C2] transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              ))}
             <Link href="/auth/login" className='bg-transparent border border-[#50E3C2] text-[#50E3C2] hover:bg-[#50E3C2] hover:text-black transition-all duration-300 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>Login</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 flex items-center justify-center min-h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#1A1A1A] opacity-80" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 md:px-6 relative z-10"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <BrainCircuit className="h-24 w-24 text-[#50E3C2]" />
                <div className="absolute inset-0 bg-[#50E3C2] rounded-full filter blur-xl opacity-50 animate-pulse" />
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none xl:text-8xl/none max-w-2xl">
                Revolutionize Your AI Knowledge
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
                Stay ahead with personalized AI updates in{' '}
                    <ReactTyped
                    className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#50E3C2] to-[#4FACFE]'
                  backSpeed={50}
                  loop
                  strings={['Medicine', 'Agriculture', 'Education', 'Finance', 'Sports', 'Art', 'Technology']}
                  typeSpeed={100}
                />
                {' '}and more.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-x-4 justify-between item-center"
              >
                  <Button type="submit" className="bg-transparent border border-[#50E3C2] text-[#50E3C2] hover:bg-[#50E3C2] hover:text-black transition-all duration-300"> 
                    Learn More
                    {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                  </Button>
                  <Link href="\auth\login" className='bg-[#50E3C2]  text-black border border-[#50E3C2] hover:bg-[#50E3C2] hover:text-black transition-all duration-300 h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>Get Started</Link>
              </motion.div>

            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#000000] to-transparent" />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How AI Pulse Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Bell className="h-10 w-10 text-[#50E3C2]" />,
                  title: "Choose Your Interests",
                  description: "Select from a wide range of AI topics that matter to you."
                },
                {
                  icon: <Zap className="h-10 w-10 text-[#4FACFE]" />,
                  title: "We Curate the Best",
                  description: "Our AI algorithms find the most relevant and impactful updates."
                },
                {
                  icon: <Mail className="h-10 w-10 text-[#50E3C2]" />,
                  title: "Receive Timely Updates",
                  description: "Get personalized digests daily, weekly, or monthly - you choose."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 text-center p-6 bg-[#1A1A1A] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-3 bg-[#2A2A2A] rounded-full">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#000000] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] opacity-50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold">Empower Your AI Journey</h2>
                <p className="text-gray-300">
                  AI Pulse brings you curated insights from the forefront of artificial intelligence. 
                  Whether you're a researcher, entrepreneur, or enthusiast, we've got you covered.
                </p>
                <ul className="space-y-2">
                  {['Real-time updates', 'Expert curation', 'Diverse AI fields', 'Customizable alerts'].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <ChevronRight className="h-5 w-5 text-[#50E3C2]" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button className="mt-4 bg-[#50E3C2] hover:bg-[#4FACFE] text-black transition-all duration-300">
                  Start Your Journey
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#50E3C2] to-[#4FACFE] rounded-lg filter blur-2xl opacity-30 animate-pulse" />
                <div className="relative bg-[#1A1A1A] p-6 rounded-lg shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">Latest AI Breakthroughs</h3>
                  <ul className="space-y-3">
                    {[
                      "GPT-4 Achieves Human-Level Performance in Creative Writing",
                      "New AI Model Predicts Protein Structures with 98% Accuracy",
                      "Autonomous Drones Master Complex Search and Rescue Operations",
                      "AI-Powered Climate Model Improves Long-Term Weather Forecasting"
                    ].map((news, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <Zap className="h-5 w-5 text-[#50E3C2] mt-1 flex-shrink-0" />
                        <span className="text-sm">{news}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">AI Across Industries</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Microscope className="h-10 w-10 text-[#50E3C2]" />,
                  title: "Scientific Research",
                  description: "Accelerating discoveries and data analysis in various scientific fields."
                },
                {
                  icon: <Tractor className="h-10 w-10 text-[#4FACFE]" />,
                  title: "Agriculture",
                  description: "Optimizing crop yields and resource management with AI-driven insights."
                },
                {
                  icon: <GraduationCap className="h-10 w-10 text-[#50E3C2]" />,
                  title: "Education",
                  description: "Personalizing learning experiences and improving educational outcomes."
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-[#4FACFE]" />,
                  title: "Business",
                  description: "Enhancing decision-making and automating complex business processes."
                },
                {
                  icon: <Stethoscope className="h-10 w-10 text-[#50E3C2]" />,
                  title: "Healthcare",
                  description: "Revolutionizing diagnostics, treatment plans, and patient care."
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-[#4FACFE]" />,
                  title: "Cybersecurity",
                  description: "Strengthening defenses against evolving digital threats and vulnerabilities."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 text-center p-6 bg-[#1A1A1A] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-3 bg-[#2A2A2A] rounded-full">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#000000] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] opacity-50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold">Join the AI Revolution</h2>
                <p className="text-gray-300">
                  Don't miss out on the latest AI advancements. Join our newsletter now and stay at the forefront of innovation.
                </p>

                
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400 focus:border-[#50E3C2] transition-all duration-300"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="bg-[#50E3C2] hover:bg-[#4FACFE] text-black transition-all duration-300">
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
               
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={revo}
                  alt="AI Revolution"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#50E3C2] to-[#4FACFE] rounded-lg filter blur-2xl opacity-30 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[#0A0A0A] border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 AI Pulse. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            {['Terms', 'Privacy', 'Contact'].map((item) => (
              <Link key={item} className="text-sm text-gray-400 hover:text-[#50E3C2] transition-colors" href="#">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}