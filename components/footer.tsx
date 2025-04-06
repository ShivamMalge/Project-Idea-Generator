import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Project Idea Generator</h3>
            <p className="text-sm text-gray-400">
              Discover innovative project ideas across multiple domains and technologies to enhance your portfolio and
              skills.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@projectideagenerator.com" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/?category=AI" className="text-gray-400 hover:text-white">
                  AI Projects
                </Link>
              </li>
              <li>
                <Link href="/?category=Web+Dev" className="text-gray-400 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/?category=Finance" className="text-gray-400 hover:text-white">
                  Finance Projects
                </Link>
              </li>
              <li>
                <Link href="/?category=HealthTech" className="text-gray-400 hover:text-white">
                  HealthTech Projects
                </Link>
              </li>
              <li>
                <Link href="/?category=IoT" className="text-gray-400 hover:text-white">
                  IoT Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Tech Stack Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Implementation Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest project ideas and tech stack recommendations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white text-sm rounded-l-md border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Project Idea Generator. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-gray-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center">
          <span>Made with</span>
          <Heart className="h-3 w-3 mx-1 text-red-500" />
          <span>for developers and tech enthusiasts</span>
        </div>
      </div>
    </footer>
  )
}

