import { ChatInterface } from "@/components/chat-interface"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <ChatInterface />
      </main>
      <Footer />
    </div>
  )
}

