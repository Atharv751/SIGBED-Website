"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "Nexus.png?height=350&width=500",
    alt: "Robot Demonstration",
    category: "Event",
    event: "Nexus",
    date: "2025",
  },
  {
    src: "Trifecta.jpg?height=300&width=500",
    alt: "Workshop Session",
    category: "Workshop",
    event: "Trifecta Workshop",
    date: "2025",
  },
]

const categories = ["All", "Team", "Event", "Workshop"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, index * 50)
          }
        })
      },
      { threshold: 0.1 },
    )

    const images = galleryRef.current?.querySelectorAll(".gallery-item")
    images?.forEach((img) => observer.observe(img))

    return () => observer.disconnect()
  }, [filteredImages])

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Gallery</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Capturing moments from our workshops, events, and community activities
        </p>
      </section>

      {/* Featured Collage */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/gallery-collage.png"
              alt="Gallery Collage"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={galleryRef} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="gallery-item group break-inside-avoid cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 translate-y-8 overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">{image.event}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{image.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{selectedImage.category}</Badge>
                  <span className="text-sm text-white/80">{selectedImage.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{selectedImage.event}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Share Your Moments</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Have photos from our events? We'd love to feature them in our gallery
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Submit Photos
          </Button>
        </div>
      </section>
    </div>
  )
}
