"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Download, Save, Plus, X, Filter, BookOpen, ArrowRight } from "lucide-react"
import { projectIdeas } from "@/lib/project-data"
import { generatePDF } from "@/lib/pdf-generator"
import { getProjectTechStacks } from "@/lib/project-tech-stacks"
import { getProjectGuide } from "@/lib/project-guides"

type ProjectIdea = {
  title: string
  description: string
  tags: string[]
  category: string
  techStacks?: any[]
  guide?: any
}

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  projectIdeas?: ProjectIdea[]
  techStacks?: any[]
  projectGuide?: any
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hey! Select multiple categories to find projects that have tags from all those domains.",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [usedIdeas, setUsedIdeas] = useState<string[]>([])
  const [savedIdeas, setSavedIdeas] = useState<ProjectIdea[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load saved ideas from localStorage on component mount
  useEffect(() => {
    const savedIdeasFromStorage = localStorage.getItem("savedProjectIdeas")
    if (savedIdeasFromStorage) {
      setSavedIdeas(JSON.parse(savedIdeasFromStorage))
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Process the user message
    setTimeout(() => {
      processUserMessage(inputValue)
    }, 500)
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  // Update the processUserMessage function to handle tech stack requests
  const processUserMessage = (message: string) => {
    const lowerMessage = message.toLowerCase()

    // Handle casual messages first
    if (handleCasualMessage(lowerMessage)) {
      return
    }

    // Check for implementation guide requests
    if (
      lowerMessage.includes("guide") ||
      lowerMessage.includes("how to") ||
      lowerMessage.includes("steps") ||
      lowerMessage.includes("implement")
    ) {
      // Extract project name from the message
      const projectName = extractProjectName(message)

      if (projectName) {
        handleProjectGuideRequest(projectName)
        return
      }
    }

    // Check for tech stack requests for specific projects
    if (
      lowerMessage.includes("tech stack") ||
      lowerMessage.includes("technology") ||
      lowerMessage.includes("technologies")
    ) {
      // Extract project name from the message
      const projectName = extractProjectName(message)

      if (projectName) {
        handleProjectTechStackRequest(projectName)
        return
      } else {
        // If no specific project is mentioned, provide general guidance
        const botResponse: Message = {
          id: Date.now().toString(),
          content:
            "I can recommend tech stacks for specific projects. Try asking for tech stacks for a specific project like 'tech stack for Smart Medicine Reminder' or 'technologies for Crypto Portfolio Dashboard'.",
          sender: "bot",
        }
        setMessages((prev) => [...prev, botResponse])
        return
      }
    }

    if (lowerMessage === "more" && selectedCategories.length > 0) {
      // User wants more ideas from the selected categories
      findCrossTaggedProjects()
      return
    }

    // Check if the message contains any of our categories
    const categories = Object.keys(projectIdeas)
    const mentionedCategories: string[] = []

    for (const category of categories) {
      if (lowerMessage.includes(category.toLowerCase())) {
        mentionedCategories.push(category)
      }
    }

    if (mentionedCategories.length > 0) {
      setSelectedCategories(mentionedCategories)

      const botResponse: Message = {
        id: Date.now().toString(),
        content: `I've selected the following categories: ${mentionedCategories.join(", ")}. Here are projects that have tags from all these domains:`,
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])

      setTimeout(() => {
        findCrossTaggedProjects()
      }, 500)

      return
    }

    // If no category is found
    const botResponse: Message = {
      id: Date.now().toString(),
      content:
        "I couldn't find any categories in your message. Please select multiple categories to find projects with tags from all those domains.",
      sender: "bot",
    }

    setMessages((prev) => [...prev, botResponse])
  }

  // Function to extract project name from a message
  const extractProjectName = (message: string): string | null => {
    // Get all project titles
    const allProjects: string[] = []
    Object.values(projectIdeas).forEach((ideas) => {
      ideas.forEach((idea) => {
        allProjects.push(idea.title)
      })
    })

    // Sort by length (descending) to match longer project names first
    allProjects.sort((a, b) => b.length - a.length)

    // Check if any project title is mentioned in the message
    for (const project of allProjects) {
      if (message.toLowerCase().includes(project.toLowerCase())) {
        return project
      }
    }

    return null
  }

  // Function to handle tech stack requests for specific projects
  const handleProjectTechStackRequest = (projectName: string) => {
    const techStackDetails = getProjectTechStacks(projectName)

    if (techStackDetails && techStackDetails.length > 0) {
      const botResponse: Message = {
        id: Date.now().toString(),
        content: `Here are recommended tech stacks for the "${projectName}" project:`,
        sender: "bot",
        techStacks: techStackDetails,
      }

      setMessages((prev) => [...prev, botResponse])
    } else {
      const botResponse: Message = {
        id: Date.now().toString(),
        content: `I don't have specific tech stack recommendations for "${projectName}". Try asking about a different project.`,
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    }
  }

  // Function to handle implementation guide requests
  const handleProjectGuideRequest = (projectName: string) => {
    const projectGuide = getProjectGuide(projectName)

    if (projectGuide) {
      const botResponse: Message = {
        id: Date.now().toString(),
        content: `Here's a step-by-step implementation guide for the "${projectName}" project:`,
        sender: "bot",
        projectGuide: projectGuide,
      }

      setMessages((prev) => [...prev, botResponse])
    } else {
      const botResponse: Message = {
        id: Date.now().toString(),
        content: `I don't have a detailed implementation guide for "${projectName}" yet. Try asking about another project or check back later as we're constantly adding new guides.`,
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    }
  }

  // Add a new function to handle casual messages
  const handleCasualMessage = (message: string): boolean => {
    // Define casual messages and their responses
    const casualResponses: Record<string, string[]> = {
      hi: [
        "Hello! How can I help you find project ideas today?",
        "Hi there! Looking for some project inspiration?",
        "Hey! Ready to discover some interesting project ideas?",
      ],
      hello: [
        "Hello! How can I help you find project ideas today?",
        "Hi there! Looking for some project inspiration?",
        "Hey! Ready to discover some interesting project ideas?",
      ],
      hey: [
        "Hey there! Need help finding a project idea?",
        "Hello! What kind of project are you looking for?",
        "Hey! Ready to explore some project ideas?",
      ],
      "hey buddy": [
        "Hey buddy! Ready to find your next project?",
        "Hello friend! What kind of project interests you today?",
        "Hey there! Looking for some project inspiration?",
      ],
      thanks: [
        "You're welcome! Need any other project ideas?",
        "Happy to help! Let me know if you need more suggestions.",
        "Anytime! What else can I help you with?",
      ],
      "thank you": [
        "You're welcome! Need any other project ideas?",
        "Happy to help! Let me know if you need more suggestions.",
        "Anytime! What else can I help you with?",
      ],
      cool: [
        "Glad you like it! Want to explore more ideas?",
        "Great! Need more project suggestions?",
        "Awesome! Let me know if you want to see more projects.",
      ],
      nice: [
        "Thanks! Would you like to see more project ideas?",
        "Glad you like it! Need more inspiration?",
        "Great! Let me know if you want to explore other categories.",
      ],
    }

    // Check if the message is a casual greeting
    for (const [key, responses] of Object.entries(casualResponses)) {
      if (message === key || message.includes(key)) {
        // Get a random response for variety
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        const botResponse: Message = {
          id: Date.now().toString(),
          content: randomResponse,
          sender: "bot",
        }

        setMessages((prev) => [...prev, botResponse])
        return true
      }
    }

    return false
  }

  const findCrossTaggedProjects = () => {
    if (selectedCategories.length === 0) {
      const botResponse: Message = {
        id: Date.now().toString(),
        content: "Please select at least one category first.",
        sender: "bot",
      }
      setMessages((prev) => [...prev, botResponse])
      return
    }

    // Collect all projects from all categories
    const allProjects: ProjectIdea[] = []
    Object.entries(projectIdeas).forEach(([category, ideas]) => {
      ideas.forEach((idea) => {
        // Add tech stacks to each project
        const techStackDetails = getProjectTechStacks(idea.title)
        // Add guide to each project if available
        const guide = getProjectGuide(idea.title)

        allProjects.push({
          ...idea,
          category,
          techStacks: techStackDetails,
          guide: guide,
        })
      })
    })

    // Filter projects that have tags from all selected categories
    const matchingProjects = allProjects.filter((project) => {
      // Check if project has tags from all selected categories
      return selectedCategories.every((category) => {
        // Check if project has a tag related to this category
        return project.tags.some(
          (tag) => tag.toLowerCase() === category.toLowerCase() || tag.toLowerCase().includes(category.toLowerCase()),
        )
      })
    })

    // Filter out previously shown ideas
    const availableProjects = matchingProjects.filter((project) => !usedIdeas.includes(project.title))

    if (availableProjects.length === 0) {
      // If no new matching projects, reset used ideas
      setUsedIdeas([])

      if (matchingProjects.length === 0) {
        // If no matching projects at all
        const botResponse: Message = {
          id: Date.now().toString(),
          content: `I couldn't find any projects that have tags from all selected categories: ${selectedCategories.join(", ")}. Try selecting fewer categories or different combinations.`,
          sender: "bot",
        }
        setMessages((prev) => [...prev, botResponse])
      } else {
        // If we've shown all matching projects before
        const projectsToShow = matchingProjects.slice(0, 3)

        const botResponse: Message = {
          id: Date.now().toString(),
          content: `Here are projects that have tags from all selected categories (showing again as you've seen all matches):`,
          sender: "bot",
          projectIdeas: projectsToShow,
        }

        setMessages((prev) => [...prev, botResponse])
        setUsedIdeas(projectsToShow.map((p) => p.title))
      }
    } else {
      // Show up to 3 matching projects
      const projectsToShow = availableProjects.slice(0, 3)

      const botResponse: Message = {
        id: Date.now().toString(),
        content: `Here are ${projectsToShow.length} projects that have tags from all selected categories:`,
        sender: "bot",
        projectIdeas: projectsToShow,
      }

      setMessages((prev) => [...prev, botResponse])
      setUsedIdeas((prev) => [...prev, ...projectsToShow.map((p) => p.title)])
    }
  }

  // Implement the save idea functionality
  const saveIdea = (idea: ProjectIdea) => {
    // Check if the idea is already saved
    const isAlreadySaved = savedIdeas.some((savedIdea) => savedIdea.title === idea.title)

    if (!isAlreadySaved) {
      const updatedSavedIdeas = [...savedIdeas, idea]
      setSavedIdeas(updatedSavedIdeas)

      // Save to localStorage
      localStorage.setItem("savedProjectIdeas", JSON.stringify(updatedSavedIdeas))

      const botResponse: Message = {
        id: Date.now().toString(),
        content: `I've saved "${idea.title}" to your saved ideas. You can access it later or download it as a PDF.`,
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    } else {
      const botResponse: Message = {
        id: Date.now().toString(),
        content: `"${idea.title}" is already in your saved ideas.`,
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    }
  }

  // Implement the download PDF functionality
  const downloadIdeaAsPDF = (idea: ProjectIdea) => {
    generatePDF([idea])

    const botResponse: Message = {
      id: Date.now().toString(),
      content: `I've generated a PDF for "${idea.title}" and started the download.`,
      sender: "bot",
    }

    setMessages((prev) => [...prev, botResponse])
  }

  // Function to request implementation guide
  const requestImplementationGuide = (projectTitle: string) => {
    handleProjectGuideRequest(projectTitle)
  }

  const clearCategories = () => {
    setSelectedCategories([])
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-w-3xl mx-auto">
      <div className="mb-4">
        <div className="mb-2 text-sm text-gray-400">Select multiple categories to find cross-domain projects:</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {Object.keys(projectIdeas).map((category) => (
            <Button
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              size="sm"
              className={
                selectedCategories.includes(category)
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-800 border-gray-700 hover:bg-gray-700"
              }
              onClick={() => toggleCategory(category)}
            >
              {category}
            </Button>
          ))}
          {selectedCategories.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
              onClick={clearCategories}
            >
              <X className="h-4 w-4 mr-1" /> Clear
            </Button>
          )}
        </div>
        {selectedCategories.length > 0 && (
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-400 mr-2">Selected:</span>
            <div className="flex flex-wrap gap-1">
              {selectedCategories.map((category) => (
                <Badge key={category} className="bg-purple-600">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {selectedCategories.length > 0 && (
          <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-2" onClick={findCrossTaggedProjects}>
            <Filter className="h-4 w-4 mr-2" />
            Find Cross-Domain Projects
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto mb-4 bg-gray-800 rounded-lg p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[90%] rounded-lg p-3 ${
                  message.sender === "user" ? "bg-purple-600 text-white" : "bg-gray-700 text-white"
                }`}
              >
                <p>{message.content}</p>
                {message.projectIdeas && message.projectIdeas.length > 0 && (
                  <div className="mt-3 space-y-4">
                    {message.projectIdeas.map((idea, idx) => (
                      <div key={idx} className="p-3 bg-gray-900 rounded-md">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{idea.title}</h3>
                          <Badge className="bg-gray-700 text-xs">{idea.category}</Badge>
                        </div>
                        <p className="mb-2">{idea.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {idea.tags.map((tag, tagIdx) => (
                            <Badge
                              key={tagIdx}
                              variant="outline"
                              className={`${
                                selectedCategories.some(
                                  (cat) =>
                                    tag.toLowerCase() === cat.toLowerCase() ||
                                    tag.toLowerCase().includes(cat.toLowerCase()),
                                )
                                  ? "bg-purple-900 text-purple-100"
                                  : "bg-gray-800 text-gray-200"
                              }`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Display tech stacks for this project */}
                        {idea.techStacks && idea.techStacks.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-sm font-semibold text-gray-400 mb-1">Recommended Tech Stacks:</h4>
                            <div className="space-y-2">
                              {idea.techStacks.map((stack, stackIdx) => (
                                <div key={stackIdx} className="bg-gray-800 p-2 rounded-md">
                                  <div className="flex justify-between items-start">
                                    <span className="font-medium text-sm">{stack.name}</span>
                                    <Badge
                                      className={`${
                                        stack.difficulty === "Beginner"
                                          ? "bg-green-600"
                                          : stack.difficulty === "Intermediate"
                                            ? "bg-yellow-600"
                                            : "bg-red-600"
                                      } text-xs`}
                                    >
                                      {stack.difficulty}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-gray-300 mt-1">{stack.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex mt-3 space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-gray-800 hover:bg-gray-700"
                            onClick={() => saveIdea(idea)}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save Idea
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-gray-800 hover:bg-gray-700"
                            onClick={() => downloadIdeaAsPDF(idea)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Generate PDF
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-gray-800 hover:bg-gray-700"
                            onClick={() => requestImplementationGuide(idea.title)}
                          >
                            <BookOpen className="h-4 w-4 mr-2" />
                            Implementation Guide
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {message.techStacks && (
                  <div className="mt-3 space-y-4">
                    {message.techStacks.map((stack, idx) => (
                      <div key={idx} className="p-3 bg-gray-900 rounded-md">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{stack.name}</h3>
                          <Badge
                            className={`${
                              stack.difficulty === "Beginner"
                                ? "bg-green-600"
                                : stack.difficulty === "Intermediate"
                                  ? "bg-yellow-600"
                                  : "bg-red-600"
                            } text-xs`}
                          >
                            {stack.difficulty}
                          </Badge>
                        </div>
                        <p className="mb-2">{stack.description}</p>
                        <div className="mb-2">
                          <h4 className="text-sm font-semibold text-gray-400 mb-1">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {stack.technologies.map((tech, techIdx) => (
                              <Badge key={techIdx} variant="outline" className="bg-gray-800 text-gray-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-1">Learning Resources:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-300">
                            {stack.learningResources.map((resource, resourceIdx) => (
                              <li key={resourceIdx}>{resource}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {message.projectGuide && (
                  <div className="mt-3 p-3 bg-gray-900 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{message.projectGuide.title}</h3>
                      <Badge
                        className={`${
                          message.projectGuide.difficulty === "Beginner"
                            ? "bg-green-600"
                            : message.projectGuide.difficulty === "Intermediate"
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        } text-xs`}
                      >
                        {message.projectGuide.difficulty}
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm">{message.projectGuide.description}</p>
                    <div className="mb-2">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">
                        Estimated Time: {message.projectGuide.estimatedTime}
                      </h4>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Implementation Steps:</h4>
                      <div className="space-y-3">
                        {message.projectGuide.steps.map((step, stepIdx) => (
                          <div key={stepIdx} className="bg-gray-800 p-2 rounded-md">
                            <div className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                              <div>
                                <h5 className="font-medium text-sm">{step.title}</h5>
                                <p className="text-xs text-gray-300 mt-1">{step.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Recommended Resources:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-300">
                        {message.projectGuide.resources.map((resource, resourceIdx) => (
                          <li key={resourceIdx}>{resource}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-gray-800 hover:bg-gray-700"
                        onClick={() => {
                          // Find the project that matches this guide
                          let projectToDownload: ProjectIdea | null = null

                          Object.entries(projectIdeas).forEach(([category, ideas]) => {
                            ideas.forEach((idea) => {
                              if (
                                idea.title ===
                                message.projectGuide.title
                                  .replace("Building a ", "")
                                  .replace("Creating a ", "")
                                  .replace("Creating an ", "")
                              ) {
                                const techStackDetails = getProjectTechStacks(idea.title)
                                projectToDownload = {
                                  ...idea,
                                  category,
                                  techStacks: techStackDetails,
                                  guide: message.projectGuide,
                                }
                              }
                            })
                          })

                          if (projectToDownload) {
                            generatePDF([projectToDownload])
                          }
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Guide as PDF
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="flex space-x-2">
        <Input
          className="bg-gray-800 border-gray-700 text-white"
          placeholder="Type a category, 'tech stack for [project]', or 'guide for [project]'..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
        />
        <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
        {selectedCategories.length > 0 && (
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700"
            onClick={findCrossTaggedProjects}
          >
            <Plus className="h-4 w-4 mr-2" />
            More
          </Button>
        )}
      </div>
    </div>
  )
}

