import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Github, Code, Lightbulb, Zap, Database } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Generator
          </Link>

          <div className="bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">About Project Idea Generator</h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-purple-500" />
                  What is Project Idea Generator?
                </h2>
                <p className="text-gray-300">
                  Project Idea Generator is an interactive tool designed to help developers, students, and tech
                  enthusiasts discover interesting project ideas across various domains. Whether you're looking for your
                  next portfolio project, a hackathon idea, or just want to explore the intersection of different
                  technologies, our generator has you covered.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-purple-500" />
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Cross-domain project discovery - find projects that combine multiple technologies</li>
                  <li>Detailed project descriptions with difficulty levels</li>
                  <li>Tech stack recommendations for each project type</li>
                  <li>Step-by-step implementation guides for popular projects</li>
                  <li>Save and export your favorite project ideas</li>
                  <li>Interactive chat interface for natural exploration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-purple-500" />
                  Our Database
                </h2>
                <p className="text-gray-300">
                  Our database contains hundreds of project ideas across multiple domains including AI, Web Development,
                  Finance, HealthTech, and IoT. Each project comes with tags that help you understand the technologies
                  and skills involved, as well as a difficulty rating to help you find projects that match your
                  experience level.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-500" />
                  How to Use
                </h2>
                <p className="text-gray-300 mb-3">Using the Project Idea Generator is simple:</p>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>Select one or more categories you're interested in</li>
                  <li>Browse the generated project ideas that match your criteria</li>
                  <li>Ask for tech stack recommendations by typing "tech stack for [project name]"</li>
                  <li>Request implementation guides by typing "guide for [project name]"</li>
                  <li>Save your favorite ideas or export them as PDF with complete implementation guides</li>
                  <li>Start building your next amazing project!</li>
                </ol>
              </section>

              <div className="border-t border-gray-700 pt-6 mt-6">
                <p className="text-center text-gray-400">
                  Created with ❤️ for developers and tech enthusiasts everywhere.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

