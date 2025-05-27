"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Github } from "lucide-react"

const facultyCoordinator = {
  name: "Prof. Shiva Prasad H.C.",
  role: "Faculty Coordinator",
  department: "Director - School of Automobile, Mechanical, and Mechatronics Engineering",
  image: "/placeholder.svg?height=300&width=300",
  email: "shiva.prasad@jaipur.manipal.edu",
  linkedin: "https://www.linkedin.com/in/hcshipra/",
  specialization: "Embedded Systems, IoT, Cyber-Physical Systems",
}

const executiveCommittee = [
  {
    name: "Priyanshu",
    role: "Chairperson",
    image: "/placeholder.svg?height=250&width=250",
    linkedin: "https://www.linkedin.com/in/priyanshu-ros/",
  },
  {
    name: "Prarthana Srivastava",
    role: "Vice-Chairperson",
    image: "/placeholder.svg?height=250&width=250",
    linkedin: "https://www.linkedin.com/in/prarthana10/",
  },
  {
    name: "Akshat Agarwal",
    role: "General Secretary",
    image: "/placeholder.svg?height=250&width=250",
    linkedin: "https://www.linkedin.com/in/akshat-agarwal-b4248b248/",
  },
  {
    name: "Samriddhi Gupta",
    role: "Treasurer",
    image: "/placeholder.svg?height=250&width=250",
    linkedin: "https://www.linkedin.com/in/samriddhi-gupta-34b74a267/",
  },
  {
    name: "Anshika Sethi",
    role: "Web Master",
    image: "/placeholder.svg?height=250&width=250",
    linkedin: "https://www.linkedin.com/in/anshika-sethi-5151b1243/",
  },
  {
    name: "Adwait Deshpande",
    role: "Technical Secretary",
    image: "/placeholder.svg?height=250&width=250",
    email: "",
    linkedin: "https://www.linkedin.com/in/adwait-ad123/",
    github: "#",
  },
]

export default function TeamPage() {
  const facultyRef = useRef<HTMLDivElement>(null)
  const executiveRef = useRef<HTMLDivElement>(null)

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

    const sections = [facultyRef.current, executiveRef.current]
    sections.forEach((section) => {
      const cards = section?.querySelectorAll(".team-card")
      cards?.forEach((card) => observer.observe(card))
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
            <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
              Click Here! To checkout the Development Team for this website.
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section ref={facultyRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Faculty Coordinator</h2>
          <div className="flex justify-center">
            <Card className="team-card max-w-md group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 opacity-0 translate-y-8 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-200 dark:ring-blue-800 group-hover:ring-blue-400 dark:group-hover:ring-blue-600 transition-all duration-300">
                    <Image
                      src={facultyCoordinator.image || "/placeholder.svg"}
                      alt={facultyCoordinator.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                    {facultyCoordinator.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {facultyCoordinator.department}
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${facultyCoordinator.email}`}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={facultyCoordinator.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section ref={executiveRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Executive Team - 2024</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              With a focus on championing innovation and fostering a sense of community, we navigate the vast realm of
              innovation at the heart of our chapter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCommittee.map((member, index) => (
              <Card
                key={index}
                className="team-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 opacity-0 translate-y-8"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-blue-200 dark:ring-blue-800 group-hover:ring-blue-400 dark:group-hover:ring-blue-600 transition-all duration-300">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={250}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {member.role}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={member.github} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Want to Join Our Team?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We're always looking for passionate individuals to join our community
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  )
}
