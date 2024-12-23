import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: "School Management System",
  description: "A comprehensive school management system",
}

const FeatureCard = ({ icon, title, description }:any) => 
  {
  let Icon=icon;

  return(
  <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-gray-200/10 hover:border-gray-200/20 transition-all">
    <Icon className="h-12 w-12 mb-4 text-white" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
)}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="px-6 lg:px-8 h-16 flex items-center border-b border-white/10">
        <Link className="flex items-center justify-center group" href="/">
          <GraduationCap className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors" />
          <span className="ml-2 text-xl font-bold">
            School MS
          </span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-white text-black hover:bg-gray-200">
              Get Started
            </Button>
          </Link>
        </nav>
      </header>
      
      <main className="flex-1">
        <section className="relative w-full py-24 lg:py-32">
          <div className="absolute inset-0 bg-[url(/api/placeholder/1920/1080)] bg-cover bg-center opacity-5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Transform Your School Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 text-xl md:text-2xl">
                  Streamline administration, enhance learning, and connect your educational community with our powerful platform.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/auth/register">
                  <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" className="text-lg px-8 py-6 h-auto border-white/20 hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-white/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={BookOpen}
                title="Curriculum Management"
                description="Easily plan, track and manage your school's curriculum and learning objectives."
              />
              <FeatureCard 
                icon={Users}
                title="Student & Staff Portal"
                description="Dedicated portals for students and staff to access resources and information."
              />
              <FeatureCard 
                icon={Calendar}
                title="Schedule & Events"
                description="Comprehensive calendar system for managing classes, events, and activities."
              />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-white/10 py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© 2024 School Management System. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}