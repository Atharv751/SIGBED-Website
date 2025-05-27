import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-6 h-6 bg-black rounded-sm transform -rotate-45 flex items-center justify-center">
                  <div className="w-3 h-3 border border-white rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">MUJ ACM SIGBED</div>
                <div className="text-sm text-gray-400">CHAPTER</div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <div className="font-medium">Tanmay Kaushik</div>
                <div className="text-gray-400">+91 93503 78040</div>
              </div>
              <div>
                <div className="font-medium">Saamarth Mishra</div>
                <div className="text-gray-400">+91 99192 01610</div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Links</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Development Team
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                ACM Official Website
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                SIGBED Official Website
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Address</h3>
            <div className="text-gray-400 text-sm leading-relaxed">
              <p>
                Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan
                303007
              </p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:acm.sigbed@muj.manipal.edu" className="text-blue-400 hover:text-blue-300">
                  acm.sigbed@muj.manipal.edu
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2023 - Made by{" "}
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              Tanya Sharma
            </Link>{" "}
            &{" "}
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              Saamarth Mishra
            </Link>{" "}
            based on the works of{" "}
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              Mrityunjay Shrivastava
            </Link>
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="https://www.instagram.com/acmsigbed_muj/" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/muj-acm-sigbed/?originalSubdomain=in" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
