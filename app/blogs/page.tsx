"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink, User } from "lucide-react"

const blogs = [
  {
    title: "Exploring Robotics Dynamics and Kinematics: The Mechanics of Movement",
    description:
      "Robotics is a fusion of engineering, computer science, and mathematics, focusing on the study of machine movement in relation to its environment. At the heart of robotics are two fundamental fields: dynamics and kinematics. This blog delves deeper into these concepts, shedding light on their significance and applications in the robotics world.",
    author: "MUJ ACM SIGBED",
    date: "Nov 6, 2024",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*PPtJeVUNgs_dtUlo.jpg?height=250&width=400",
    tags: ["Edge Computing", "IoT", "Real-time Systems"],
    category: "Research",
  },
  {
    title: "Advancing Robot Perception and Navigation: Bridging the Gap between Sensing and Action",
    description:
      "The last couple of years have seen a boost in robotics. Perception and navigation are two deeply interconnected components that have helped bridge the gap between sensing and acting in robots. The details of how robots feel their surroundings and move about them are technical subjects, spanning sensor technologies, data processing algorithms, and navigation strategies. This blog will delve into the intricacies of perception and navigation of robots. It looks at current trending technologies that will point a way forward into the future.",
    author: "MUJ ACM SIGBED",
    date: "Aug 21, 2024",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*JR5oP2ZpCBUyaP9V?height=250&width=400",
    tags: ["Security", "Embedded Systems", "Cybersecurity"],
    category: "Technical",
  },
  {
    title: "Understanding Robot Control Systems and PID Controllers",
    description:
      "In the rapidly advancing field of robotics, achieving precise and reliable control over a robot’s movements is crucial. Whether it’s a robotic arm used in manufacturing or an autonomous vehicle navigating a complex environment, effective control systems ensure smooth, accurate, and predictable behavior. One of the most widely used techniques for achieving this is the PID (Proportional-Integral-Derivative) controller. In this blog, we’ll explore the basics of robot control systems and delve into how PID controllers function.",
    author: "MUJ ACM SIGBED",
    date: "Aug 27, 2024",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*hLY3fMNpzwLw7H7g.jpg?height=250&width=400",
    tags: ["IoT", "Architecture", "Scalability"],
    category: "Tutorial",
  },
  {
    title: "How Robot Sensors and Actuators Work: The Eyes and Muscles of Robotics",
    description: "In the quick-moving field of robotics, sensors and actuators are the equivalent of a robot’s eyes and muscles. It is these components that allow robots to gain knowledge of the world and act on it, therefore being relevant in very different domains, such as manufacturing or autonomous vehicles. Let’s see how such technologies work and become the basis of modern robotics.",
    author: "MUJ ACM SIGBED",
    date: "Aug 12, 2024",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*m29ZcQ9PaPpQq_FZ.jpg?height=250&width=400",
    tags: ["Machine Learning", "TinyML", "Microcontrollers"],
    category: "Research",
  },
  {
    title: "Understanding Robot Sensors and Actuators: The Nerves and Muscles of Modern Robotics",
    description: "In the vast and rapidly evolving landscape of modern robotics, the interplay between sensors and actuators stands as the cornerstone of functionality and efficiency. These critical components, akin to the nerves and muscles in biological organisms, empower robots with the capability to perceive their environment, process information, and execute actions with precision. This discourse delves into the intricate world of robot sensors and actuators, elucidating their types, functionalities, and significance in contemporary robotics.",
    author: "MUJ ACM SIGBED",
    date: "Aug 6, 2024",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*woHd2L52eaDTlxzq.jpg?height=250&width=400",
    tags: ["Wireless", "Protocols", "Communication"],
    category: "Technical",
  },
  {
    title: "Exploring Robotics Dynamics and Kinematics: The Mechanics of Movement",
    description: "Strategies for optimizing power consumption in battery-powered embedded systems and IoT devices",
    author: "MUJ ACM SIGBED",
    date: "Aug 3, 2024",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*c43KO4UZ71RW8loQ?height=250&width=400",
    tags: ["Power Management", "Battery", "Optimization"],
    category: "Tutorial",
  },
]

export default function BlogsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll(".blog-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Insights & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest thoughts on embedded systems, IoT, and emerging technologies
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
              <Link href="https://medium.com/@acm.sigbed" target="_blank">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Our Medium Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={blogs[0].image || "/placeholder.svg"}
                  alt={blogs[0].title}
                  width={400}
                  height={250}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                    <Badge variant="outline">{blogs[0].category}</Badge>
                  </div>
                  <h2 className="text-3xl font-bold hover:text-primary transition-colors">{blogs[0].title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{blogs[0].description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogs[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogs[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogs[0].readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href="https://medium.com/@acm.sigbed" target="_blank">
                      Read on Medium
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog, index) => (
            <Card
              key={index}
              className="blog-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 opacity-0 translate-y-8"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {blog.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{blog.description}</CardDescription>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span className="truncate">{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{blog.date}</span>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href="https://medium.com/@acm.sigbed" target="_blank">
                      Read More
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center space-y-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold">Stay Updated</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles and insights delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-to-r from-primary to-primary/80">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
