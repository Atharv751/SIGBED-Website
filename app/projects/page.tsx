"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Quadcopter",
    description: "A versatile aerial drone, the Quadcopter serves multiple applications with its agility and maneuverability. From aerial photography to surveillance, this project explores the potential of unmanned aerial vehicles in various fields.",
    image: "https://dronescend.com/cdn/shop/articles/Picture_of_a_drone_by_James_Gibson_-_From_Unsplash_1170x.jpg?v=1650017426?height=250&width=400",
    tags: ["Computer Vision", "Drones", "Navigation", "AI"],
    status: "Completed",
  },
  {
    title: "3D Printed Planes",
    description: "Fusing technology and education, this project utilizes 3D printing to create miniature planes. Beyond being a fascinating hands-on activity, it offers insights into aerodynamics and the principles of flight, making it an engaging educational tool.",
    image: "plane.png?height=250&width=400",
    tags: ["Aircraft", "Control Systems", "Embedded", "Navigation"],
    status: "Completed",
  },
  {
    title: "Bluetooth Car Using Arduino",
    description: "Integrating Arduino and Bluetooth technology, this project results in a remote-controlled car. Beyond the fun aspect, it serves as a practical application of embedded systems and wireless communication in robotics.",
    image: "BT CAR.png?height=250&width=400",
    tags: ["IoT", "Automotive", "Sensors", "Mobile"],
    status: "Active",
  },
  {
    title: "Omnidirectional Car",
    description: "Redefining mobility, the Omnidirectional Car incorporates wheels that can move in any direction. This innovative design enhances maneuverability, making it suitable for applications where precise and versatile movement is essential.",
    image: "https://i.ytimg.com/vi/PvN8wejuZzo/maxresdefault.jpg?height=250&width=400",
    tags: ["Sensors", "IOT", "RasberryPI"],
    status: "Completed",
  },
  {
    title: "Gesture Controlled Car",
    description: "Redefining human-machine interaction, this project enables car control through gesture recognition. By harnessing computer vision, it adds a layer of intuitive control to vehicle navigation, exploring the potential of gesture-based interfaces.",
    image: "gesture.png?height=250&width=400",
    tags: ["Navigation", "IOT", "Sensors", "Visualization"],
    status: "Active",
  },
  {
    title: "RFID Door Lock/Unlock System",
    description: "Elevating security, this project implements RFID technology for door access control. Offering convenience and enhanced security, it showcases the integration of advanced technologies in everyday applications.",
    image: "https://how2electronics.com/wp-content/uploads/2023/10/RFID-Based-Door-Lock-Security-System-using-Arduino-1.jpg?height=250&width=400",
    tags: ["Security", "Arms", "Automation", "Sensors"],
    status: "Completed",
  },
  {
    title: "Radar",
    description: "Exploring radar technology, this project has applications in object detection and tracking. From security systems to autonomous vehicles, radar plays a crucial role in sensing and understanding the environment.",
    image: "https://m.media-amazon.com/images/I/61BTX+MKcVL._AC_UF1000,1000_QL80_.jpg?height=250&width=400",
    tags: ["Navigation", "IOT", "Sensors", "Visualization"],
    status: "Completed",
  },
  {
    title: "5DoF Robotic Arm",
    description: "With five degrees of freedom, this robotic arm is designed for precise and controlled movements. It finds applications in various fields, including manufacturing, research, and automation, showcasing the versatility of robotic technologies.",
    image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/9e18e6c890f555eb01bdf4da0304076a/large.jpg?height=250&width=400",
    tags: ["Security", "Arms", "Automation", "Sensors"],
    status: "Completed",
  },
  {
    title: "FPV Racing Drone",
    description: "Delivering an immersive flying experience, the FPV Racing Drone combines speed and technology. It opens up possibilities for recreational and competitive drone racing, showcasing the excitement and potential of drone technology.",
    image: "fpv.png?height=250&width=400",
    tags: ["Computer Vision", "Drones", "Navigation", "AI"],
    status: "Completed",
  },
]

export default function ProjectsPage() {
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

    const cards = containerRef.current?.querySelectorAll(".project-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Header Section with Blue Textured Background */}
      <section
        className="relative py-32 flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white text-center tracking-wider">PROJECTS</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 opacity-0 translate-y-8 border-0 shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || ""}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "default"
                            : project.status === "Completed"
                              ? "secondary"
                              : "outline"
                        }
                        className="bg-white/90 backdrop-blur-sm text-black"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 space-y-4">
            <h3 className="text-2xl font-bold">Have a Project Idea?</h3>
            <p className="text-gray-600 dark:text-gray-400">Join us and bring your innovative ideas to life</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
