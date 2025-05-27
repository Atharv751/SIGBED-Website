"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock } from "lucide-react"

const events = [
  {
    title: "Elicit Expo",
    date: "2024-12-10",
    time: "9:00 AM - 6:00 PM",
    location: "Old Mess",
    description:
      "Elicit Expo showcased an impressive array of tech projects, featuring innovative hardware and software creations. Participants passionately presented their technological prowess, engaging attendees with cutting-edge demonstrations. The expo provided a platform for knowledge exchange, fostering a dynamic environment where ideas thrived.",
    image: "elicit.png?height=200&width=300",
    attendees: 200,
    type: "Expo",
    status: "Completed",
  },
  {
    title: "Hour Of Code",
    date: "2024-11-28",
    time: "2:00 PM - 5:00 PM",
    location: "Lab",
    description:
      "ACM members illuminated young minds at our 'Hour of Code' event, bringing the magic of AI to an orphanage. Joyful faces lit up as we introduced children to the wonders of technology, fostering curiosity and learning. It was a heartwarming day of community service and education.",
    image: "hoc.png?height=200&width=300",
    attendees: 50,
    type: "Competition",
    status: "Completed",
  },
  {
    title: "Velocity",
    date: "2024-11-15",
    time: "starts at 1:00PM",
    location: "Cricket Ground",
    description: "The event started at 1 pm, featuring student project displays across various fields. Mr. Ravindra Yadav from Atal Incubation Centre and Dr. Shilpa Joshi served as evaluators. The exhibition included 9 teams—4 from outhouse and 5 from inhouse. Projects ranged from drones to voice-controlled vehicles using Arduinos, and Autonomous UAVs designed for defense and disaster management, showcasing a diverse array of innovative endeavors.",
    image: "velocity.png?height=200&width=300",
    attendees: 45,
    type: "Team Race",
    status: "Completed",
  },
  {
    title: "Datathon",
    date: "2024-11-08",
    time: "9:00 AM - 9:00PM",
    location: "AB1",
    description: "Record-breaking attendance comprised seasoned data scientists and enthusiastic newcomers, engaging in a dynamic exchange of ideas and problem-solving. Demonstrating adeptness with intricate datasets, participants showcased innovative solutions, standing as a testament to the community's dedication to advancing data science. This saw 933 participants all across India via Unstop and offline, it also had a record over 3.3lac impressions.",
    image: "datathon.png?height=200&width=300",
    attendees: 993,
    type: "Datathon",
    status: "Completed",
  },
]

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = containerRef.current?.querySelectorAll(".event-item")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16 bg-black min-h-screen">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-orange-500 mb-8 tracking-wider">EVENTS</h1>
      </section>

      {/* Events Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`event-item opacity-0 translate-y-8 transition-all duration-700 ${
                  index % 2 === 0 ? "lg:justify-self-start" : "lg:justify-self-end"
                }`}
              >
                <Card className="bg-blue-600 text-white border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-md">
                  {event.image && (
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant={event.status === "Upcoming" ? "default" : "secondary"}
                            className="bg-white/90 backdrop-blur-sm text-black"
                          >
                            {event.status}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-black border-white">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                  )}
                  <CardContent className="p-6 space-y-4">
                    <div className="text-sm text-blue-200">{event.date}</div>
                    <CardTitle className="text-2xl text-white">{event.title}</CardTitle>
                    <CardDescription className="text-blue-100 leading-relaxed">{event.description}</CardDescription>

                    <div className="grid grid-cols-1 gap-3 text-sm text-blue-200">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
          <p className="text-gray-400">Don't miss out on our upcoming events and workshops</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
