"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Users, Calendar, BookOpen } from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const blogsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = [heroRef.current, aboutRef.current, projectsRef.current, blogsRef.current]
    elements.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden opacity-0 translate-y-8 transition-all duration-1000"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('Audi.jpg?height=800&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to India's First SIGBED
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Empowering Innovation at the Nexus of Intelligence and Integration: SIGBED - Where Embedded Systems
              Redefine Possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
                <Link href="/events">
                  Our Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/gallery">A sneak peek</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 bg-white dark:bg-gray-900 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
                Explore the benefits of joining ACM SIGBED
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Your gateway to the world of IoT. Join us to connect with like-minded individuals, gearing up for
                success in college and beyond, with a specific focus on the Internet of Things
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pushing boundaries in embedded systems and IoT technologies
                </p>
              </div>
              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building a strong network of researchers and enthusiasts
                </p>
              </div>
              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Promoting learning through workshops and knowledge sharing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        ref={projectsRef}
        className="py-20 bg-gray-50 dark:bg-gray-800 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our latest innovations in embedded systems and IoT
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quadcopter",
                description: "A versatile aerial drone, the Quadcopter serves multiple applications with its agility and maneuverability.",
                image: "https://dronescend.com/cdn/shop/articles/Picture_of_a_drone_by_James_Gibson_-_From_Unsplash_1170x.jpg?v=1650017426?height=200&width=300",
              },
              {
                title: "Bluetooth Car Using Arduino",
                description: "Integrating Arduino and Bluetooth technology, this project results in a remote-controlled car.",
                image: "BT CAR.png",
              },
              {
                title: "5DoF Robotic Arm",
                description: "With five degrees of freedom, this robotic arm is designed for precise and controlled movements.",
                image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/9e18e6c890f555eb01bdf4da0304076a/large.jpg?height=200&width=300",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <Link href="/projects" className="text-blue-600 hover:underline font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section
        ref={blogsRef}
        className="py-20 bg-white dark:bg-gray-900 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Latest Insights</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Read our latest thoughts on embedded systems and emerging technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "UAVs: Navigating the Skies with Autonomous Airborne Systems",
                description: "Unmanned Aerial Vehicles (UAVs) , in simpler terms also called drones, have transcended their military origins to become transformative technologies based on embedded systems and robotics..",
                date: "May 26, 2025",
                image: "https://hexagon.com/-/media/project/one-web/master-site/altudo/l1247-specific-industry-segment/drone-flying-through-clouds.jpg?iar=0&hash=20376C8CE44352B0B6FBCD9EB8F0CE18?height=200&width=400",
              },
              {
                title: "Into the Future: Emerging Trends in UAV Research",
                description: "This blog explores in summarizing the paper “An Overview of Emerging Results in Cooperative UAV Control” highlighting the creativity that is raising the bar for UAV technology. In the rapidly evolving landscape of unmanned aerial vehicles (UAVs), research and development efforts are..",
                date: "May 26, 2025",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslHPqiAjdEuCulwCo_-cXbGEvF8zkoMexxA&s?height=200&width=400",
              },
            ].map((blog, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                  <CardTitle className="mb-2 group-hover:text-blue-600 transition-colors">{blog.title}</CardTitle>
                  <CardDescription className="mb-4">{blog.description}</CardDescription>
                  <Link
                    href="https://medium.com/@acm.sigbed"
                    target="_blank"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read on Medium →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/blogs">
                View All Blogs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
