import { techStacks } from "./tech-stacks"

// This maps project titles to recommended tech stacks
// Each project can have multiple recommended tech stacks
export const projectTechStacks: Record<string, string[]> = {
  // AI Projects
  "Fake News Detector": ["Machine Learning Stack", "NLP Stack"],
  "AI Study Buddy": ["NLP Stack", "AI Web App Stack"],
  "Stock Sentiment Analyzer": ["Machine Learning Stack", "NLP Stack", "Financial Analysis Stack"],
  "Resume Keyword Matcher": ["NLP Stack", "AI Web App Stack"],
  "Personal AI Assistant": ["NLP Stack", "AI Web App Stack", "Beginner AI Stack"],
  "Face Mask Detection System": ["Computer Vision Stack", "AI Web App Stack"],
  "AI-based Job Interview Coach": ["NLP Stack", "Computer Vision Stack", "AI Web App Stack"],
  "Image Style Transfer": ["Computer Vision Stack", "AI Web App Stack"],
  "Personalized Learning Path Generator": ["Machine Learning Stack", "AI Web App Stack"],
  "Emotion Recognition System": ["Computer Vision Stack", "AI Web App Stack"],
  "AI-Powered Financial Advisor": ["Machine Learning Stack", "Financial Analysis Stack", "AI Web App Stack"],
  "Smart Home Energy Optimizer": ["Machine Learning Stack", "IoT Development Stack", "IoT Data Analytics Stack"],
  "AI Health Diagnosis Assistant": ["Machine Learning Stack", "Computer Vision Stack", "Healthcare App Stack"],
  "Predictive Maintenance Dashboard": ["Machine Learning Stack", "IoT Data Analytics Stack", "AI Web App Stack"],
  "AI-Powered Content Marketing Platform": ["NLP Stack", "AI Web App Stack", "Modern Frontend Stack"],
  "Financial Fraud Detection System": ["Machine Learning Stack", "Financial Analysis Stack", "FinTech Stack"],
  "Smart Agriculture Monitoring": ["Computer Vision Stack", "IoT Development Stack", "IoT Data Analytics Stack"],
  "AI-Powered Personal Finance Manager": [
    "Machine Learning Stack",
    "Financial Analysis Stack",
    "Personal Finance App Stack",
  ],
  "Remote Patient Monitoring System": ["IoT Development Stack", "Healthcare App Stack", "Health Data Analysis Stack"],
  "AI-Enhanced E-commerce Platform": ["Machine Learning Stack", "Modern Frontend Stack", "MERN Stack"],

  // Web Dev Projects
  "Remote Freelancer Portal": ["Modern Frontend Stack", "MERN Stack", "JAMstack"],
  "Budget Meal Planner": ["Modern Frontend Stack", "Beginner Web Stack", "MERN Stack"],
  "Interactive Resume Site": ["Modern Frontend Stack", "JAMstack", "Beginner Web Stack"],
  "Event Ticketing Platform": ["Modern Frontend Stack", "MERN Stack", "Enterprise Web Stack"],
  "Mini SaaS App (e.g., Habit Tracker)": ["Modern Frontend Stack", "MERN Stack", "Enterprise Web Stack"],
  "Weather Visualization Dashboard": ["Modern Frontend Stack", "JAMstack", "Beginner Web Stack"],
  "AI-Powered Blog Writer": ["Modern Frontend Stack", "NLP Stack", "AI Web App Stack"],
  "Collaborative Whiteboard App": ["Modern Frontend Stack", "MERN Stack", "Enterprise Web Stack"],
  "Podcast Discovery Platform": ["Modern Frontend Stack", "MERN Stack", "JAMstack"],
  "Virtual Classroom Platform": ["Modern Frontend Stack", "MERN Stack", "Enterprise Web Stack"],
  "Financial Dashboard with AI Insights": ["Modern Frontend Stack", "Financial Analysis Stack", "AI Web App Stack"],
  "IoT Device Management Portal": ["Modern Frontend Stack", "IoT Development Stack", "IoT Data Analytics Stack"],
  "Telemedicine Platform": ["Modern Frontend Stack", "Healthcare App Stack", "Telemedicine Stack"],
  "Investment Portfolio Tracker": ["Modern Frontend Stack", "Financial Analysis Stack", "Personal Finance App Stack"],
  "Smart Home Control Center": ["Modern Frontend Stack", "IoT Development Stack", "Smart Home Stack"],

  // Finance Projects
  "Crypto Portfolio Dashboard": ["Modern Frontend Stack", "Financial Analysis Stack", "Blockchain Development Stack"],
  "Loan Default Predictor": ["Machine Learning Stack", "Financial Analysis Stack", "FinTech Stack"],
  "Daily Budget Manager": ["Modern Frontend Stack", "Personal Finance App Stack", "Beginner Web Stack"],
  "Personal Finance Advisor Bot": ["NLP Stack", "Financial Analysis Stack", "Personal Finance App Stack"],
  "P2P Lending Simulator": ["Modern Frontend Stack", "FinTech Stack", "Blockchain Development Stack"],
  "Stock Screener with Technical Filters": ["Modern Frontend Stack", "Financial Analysis Stack", "FinTech Stack"],
  "EMI & Tax Calculator App": ["Modern Frontend Stack", "Personal Finance App Stack", "Beginner Web Stack"],
  "Budget-Friendly Travel Planner": ["Modern Frontend Stack", "Personal Finance App Stack", "MERN Stack"],
  "Expense Splitting App": ["Modern Frontend Stack", "Personal Finance App Stack", "MERN Stack"],
  "Investment Portfolio Simulator": ["Modern Frontend Stack", "Financial Analysis Stack", "Personal Finance App Stack"],

  // HealthTech Projects
  "Smart Medicine Reminder": ["Modern Frontend Stack", "Healthcare App Stack", "Health Tracking App Stack"],
  "Symptom Checker App": ["Modern Frontend Stack", "Healthcare App Stack", "Health Data Analysis Stack"],
  "Water Intake Tracker": ["Modern Frontend Stack", "Health Tracking App Stack", "Beginner Web Stack"],
  "Hospital Bed Availability Tracker": ["Modern Frontend Stack", "Healthcare App Stack", "Health Data Analysis Stack"],
  "Pregnancy Nutrition Guide": ["Modern Frontend Stack", "Healthcare App Stack", "Health Tracking App Stack"],
  "Mental Wellness Companion": ["Modern Frontend Stack", "Healthcare App Stack", "NLP Stack"],
  "Telemedicine Booking System": ["Modern Frontend Stack", "Healthcare App Stack", "Telemedicine Stack"],
  "Sleep Quality Analyzer": ["Modern Frontend Stack", "Health Tracking App Stack", "Health Data Analysis Stack"],
  "Personalized Workout Generator": ["Modern Frontend Stack", "Health Tracking App Stack", "Machine Learning Stack"],
  "Medical Record Aggregator": ["Modern Frontend Stack", "Healthcare App Stack", "Health Data Analysis Stack"],

  // IoT Projects
  "Smart Water Dispenser": ["IoT Development Stack", "Beginner IoT Stack", "Smart Home Stack"],
  "IoT Plant Care System": ["IoT Development Stack", "Smart Home Stack", "IoT Data Analytics Stack"],
  "Wearable Fall Detection": ["IoT Development Stack", "Healthcare App Stack", "Health Tracking App Stack"],
  "Home Security Surveillance": ["IoT Development Stack", "Smart Home Stack", "Computer Vision Stack"],
  "Smart Waste Collection": ["IoT Development Stack", "Industrial IoT Stack", "IoT Data Analytics Stack"],
  "Energy Monitoring System": ["IoT Development Stack", "Smart Home Stack", "IoT Data Analytics Stack"],
  "Contactless Smart Door Lock": ["IoT Development Stack", "Smart Home Stack", "Beginner IoT Stack"],
  "Smart Parking System": ["IoT Development Stack", "Industrial IoT Stack", "IoT Data Analytics Stack"],
  "Indoor Air Quality Monitor": ["IoT Development Stack", "Smart Home Stack", "Health Tracking App Stack"],
  "Smart Refrigerator Inventory": ["IoT Development Stack", "Smart Home Stack", "Computer Vision Stack"],
}

// Function to get tech stack details for a project
export function getProjectTechStacks(projectTitle: string) {
  const stackNames = projectTechStacks[projectTitle] || []

  // Get the full tech stack details for each stack name
  const techStackDetails = stackNames
    .map((stackName) => {
      // Find the tech stack in all categories
      for (const category in techStacks) {
        const foundStack = techStacks[category as keyof typeof techStacks].find((stack) => stack.name === stackName)
        if (foundStack) {
          return foundStack
        }
      }
      return null
    })
    .filter((stack) => stack !== null) // Remove any null values

  return techStackDetails
}

