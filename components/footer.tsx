import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">THE CENTURY SCENTS</h3>
            <p className="text-gray-300 mb-4">
              Premium chemical solutions for professional use. Quality guaranteed since 2020.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-4">Categories</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Chemical Solutions
              </Link>
              <Link href="/shop" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Fragrances
              </Link>
              <Link href="/shop" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Essential Oils
              </Link>
              <Link href="/shop" className="block text-gray-300 hover:text-orange-600 transition-colors">
                Compounds
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-600" />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-600" />
                <span className="text-gray-300">info@centuryscents.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-gray-300">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 The Century Scents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
