import { jsPDF } from "jspdf"
import { getProjectTechStacks } from "./project-tech-stacks"
import { getProjectGuide } from "./project-guides"

type ProjectIdea = {
  title: string
  description: string
  tags: string[]
  category: string
  techStacks?: any[]
  guide?: any
}

export const generatePDF = (ideas: ProjectIdea[]) => {
  // Create a new PDF document
  const doc = new jsPDF()

  // Set title
  doc.setFontSize(20)
  doc.setTextColor(128, 0, 128) // Purple color
  doc.text("Project Idea Generator", 105, 20, { align: "center" })

  // Add current date
  const date = new Date().toLocaleDateString()
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100) // Gray color
  doc.text(`Generated on: ${date}`, 105, 30, { align: "center" })

  let yPosition = 40

  // Add each project idea to the PDF
  ideas.forEach((idea, index) => {
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }

    // Project title
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0) // Black color
    doc.text(idea.title, 20, yPosition)
    yPosition += 10

    // Category
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100) // Gray color
    doc.text(`Category: ${idea.category}`, 20, yPosition)
    yPosition += 10

    // Description
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0) // Black color

    // Split description into multiple lines if needed
    const splitDescription = doc.splitTextToSize(idea.description, 170)
    doc.text(splitDescription, 20, yPosition)
    yPosition += splitDescription.length * 7

    // Tags
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100) // Gray color
    doc.text(`Tags: ${idea.tags.join(", ")}`, 20, yPosition)
    yPosition += 15

    // Get tech stacks for this project if not already provided
    const techStacks = idea.techStacks || getProjectTechStacks(idea.title)

    if (techStacks && techStacks.length > 0) {
      // Add tech stack section
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0) // Black color
      doc.text("Recommended Tech Stacks:", 20, yPosition)
      yPosition += 8

      // Add each tech stack
      techStacks.forEach((stack: any) => {
        // Check if we need a new page
        if (yPosition > 250) {
          doc.addPage()
          yPosition = 20
        }

        // Tech stack name and difficulty
        doc.setFontSize(11)
        doc.setTextColor(0, 0, 128) // Dark blue color
        doc.text(`${stack.name} (${stack.difficulty})`, 25, yPosition)
        yPosition += 6

        // Tech stack description
        doc.setFontSize(10)
        doc.setTextColor(0, 0, 0) // Black color
        const splitStackDesc = doc.splitTextToSize(stack.description, 165)
        doc.text(splitStackDesc, 25, yPosition)
        yPosition += splitStackDesc.length * 6

        // Technologies
        doc.setFontSize(9)
        doc.setTextColor(100, 100, 100) // Gray color
        const techText = `Technologies: ${stack.technologies.join(", ")}`
        const splitTechText = doc.splitTextToSize(techText, 165)
        doc.text(splitTechText, 25, yPosition)
        yPosition += splitTechText.length * 5 + 3
      })

      yPosition += 5
    }

    // Get implementation guide if not already provided
    const guide = idea.guide || getProjectGuide(idea.title)

    if (guide) {
      // Add a new page for the implementation guide
      doc.addPage()

      // Guide title
      doc.setFontSize(16)
      doc.setTextColor(128, 0, 128) // Purple color
      doc.text(`Implementation Guide: ${guide.title}`, 105, 20, { align: "center" })

      // Difficulty and time estimate
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100) // Gray color
      doc.text(`Difficulty: ${guide.difficulty} | Estimated Time: ${guide.estimatedTime}`, 105, 30, { align: "center" })

      let guideYPosition = 40

      // Guide description
      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0) // Black color
      const splitGuideDesc = doc.splitTextToSize(guide.description, 170)
      doc.text(splitGuideDesc, 20, guideYPosition)
      guideYPosition += splitGuideDesc.length * 6 + 5

      // Implementation steps
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0) // Black color
      doc.text("Implementation Steps", 20, guideYPosition)
      guideYPosition += 10

      // Add each step
      guide.steps.forEach((step: any, stepIndex: number) => {
        // Check if we need a new page
        if (guideYPosition > 250) {
          doc.addPage()
          guideYPosition = 20
        }

        // Step title
        doc.setFontSize(12)
        doc.setTextColor(0, 0, 128) // Dark blue color
        doc.text(step.title, 20, guideYPosition)
        guideYPosition += 6

        // Step description
        doc.setFontSize(10)
        doc.setTextColor(0, 0, 0) // Black color
        const splitStepDesc = doc.splitTextToSize(step.description, 170)
        doc.text(splitStepDesc, 20, guideYPosition)
        guideYPosition += splitStepDesc.length * 6 + 5
      })

      // Resources
      if (guide.resources && guide.resources.length > 0) {
        // Check if we need a new page
        if (guideYPosition > 230) {
          doc.addPage()
          guideYPosition = 20
        }

        doc.setFontSize(14)
        doc.setTextColor(0, 0, 0) // Black color
        doc.text("Recommended Resources", 20, guideYPosition)
        guideYPosition += 8

        // Add each resource
        doc.setFontSize(10)
        doc.setTextColor(0, 0, 0) // Black color
        guide.resources.forEach((resource: string, resourceIndex: number) => {
          doc.text(`• ${resource}`, 25, guideYPosition)
          guideYPosition += 6
        })
      }

      // Reset yPosition for next project
      yPosition = 20
    } else {
      // Add a separator line except for the last idea
      if (index < ideas.length - 1) {
        doc.setDrawColor(200, 200, 200) // Light gray color
        doc.line(20, yPosition - 5, 190, yPosition - 5)
        yPosition += 10
      }
    }
  })

  // Add footer
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100) // Gray color
  doc.text("Generated by Project Idea Generator", 105, 280, { align: "center" })

  // Save the PDF with a filename
  doc.save(`project-ideas-${Date.now()}.pdf`)
}

