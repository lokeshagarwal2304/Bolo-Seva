import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Bolo Seva</h3>
            <p className="text-sm text-gray-500">
              A unified platform for rural citizens to register complaints and monitor road conditions with AI.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/register-complaint" className="text-sm text-gray-500 hover:text-primary">
                  Register Complaint
                </Link>
              </li>
              <li>
                <Link href="/road-analysis" className="text-sm text-gray-500 hover:text-primary">
                  Road Analysis
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-gray-500 hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">Email: info@boloseva.org</li>
              <li className="text-sm text-gray-500">Phone: +91 1234567890</li>
              <li className="text-sm text-gray-500">Address: Tech Hub, Sector 5, New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Bolo Seva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
