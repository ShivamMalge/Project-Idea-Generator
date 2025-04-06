export type ProjectIdea = {
  title: string
  description: string
  tags: string[]
}

export type ProjectIdeasData = {
  [category: string]: ProjectIdea[]
}

export const projectIdeas: ProjectIdeasData = {
  AI: [
    {
      title: "Fake News Detector",
      description: "A machine learning model that identifies whether a news article is fake or real using NLP.",
      tags: ["Intermediate", "ML", "NLP", "AI"],
    },
    {
      title: "AI Study Buddy",
      description: "A chatbot that helps students with study schedules, quiz questions, and motivational tips.",
      tags: ["Beginner", "AI", "Chatbot", "Education"],
    },
    {
      title: "Stock Sentiment Analyzer",
      description: "Analyze real-time news and tweets to assess market sentiment for selected stocks.",
      tags: ["Advanced", "NLP", "Finance", "AI"],
    },
    {
      title: "Resume Keyword Matcher",
      description: "An app that matches a resume to a job description using NLP for better job fit.",
      tags: ["Intermediate", "AI", "Career", "Web Dev"],
    },
    {
      title: "Personal AI Assistant",
      description: "Build a basic voice-controlled AI assistant that schedules tasks and answers queries.",
      tags: ["Beginner", "Voice", "AI"],
    },
    {
      title: "Face Mask Detection System",
      description: "Detect whether people are wearing face masks in real-time using computer vision.",
      tags: ["Intermediate", "AI", "Computer Vision", "HealthTech"],
    },
    {
      title: "AI-based Job Interview Coach",
      description: "Get feedback on your speaking speed, tone, and confidence using AI speech analysis.",
      tags: ["Advanced", "AI", "Speech"],
    },
    {
      title: "Image Style Transfer",
      description: "Create an application that applies artistic styles to user-uploaded images using neural networks.",
      tags: ["Intermediate", "AI", "Computer Vision", "Web Dev"],
    },
    {
      title: "Personalized Learning Path Generator",
      description: "An AI system that creates customized learning paths based on student performance and goals.",
      tags: ["Advanced", "AI", "Education"],
    },
    {
      title: "Emotion Recognition System",
      description: "Detect emotions from facial expressions in images or video streams using computer vision.",
      tags: ["Intermediate", "AI", "Computer Vision"],
    },
    // Added cross-domain projects
    {
      title: "AI-Powered Financial Advisor",
      description:
        "Create a robo-advisor that provides personalized investment recommendations based on user goals and risk tolerance.",
      tags: ["Advanced", "AI", "Finance", "Web Dev"],
    },
    {
      title: "Smart Home Energy Optimizer",
      description:
        "Use machine learning to predict and optimize home energy usage based on patterns and external factors.",
      tags: ["Advanced", "AI", "IoT", "Energy"],
    },
    {
      title: "AI Health Diagnosis Assistant",
      description:
        "Help doctors diagnose conditions by analyzing medical images and patient data with machine learning.",
      tags: ["Advanced", "AI", "HealthTech", "Computer Vision"],
    },
    {
      title: "Predictive Maintenance Dashboard",
      description: "Predict equipment failures before they happen using sensor data and machine learning algorithms.",
      tags: ["Intermediate", "AI", "IoT", "Web Dev"],
    },
    {
      title: "AI-Powered Content Marketing Platform",
      description: "Generate and optimize marketing content based on audience preferences and engagement metrics.",
      tags: ["Intermediate", "AI", "Web Dev", "Marketing"],
    },
    {
      title: "Financial Fraud Detection System",
      description: "Identify suspicious financial transactions using machine learning and pattern recognition.",
      tags: ["Advanced", "AI", "Finance", "Security"],
    },
    {
      title: "Smart Agriculture Monitoring",
      description: "Use computer vision and IoT sensors to monitor crop health and optimize irrigation.",
      tags: ["Advanced", "AI", "IoT", "Agriculture"],
    },
    {
      title: "AI-Powered Personal Finance Manager",
      description: "Analyze spending patterns and provide personalized financial advice and budget recommendations.",
      tags: ["Intermediate", "AI", "Finance", "Web Dev"],
    },
    {
      title: "Remote Patient Monitoring System",
      description: "Monitor patients' vital signs remotely using IoT devices and AI for anomaly detection.",
      tags: ["Advanced", "AI", "HealthTech", "IoT"],
    },
    {
      title: "AI-Enhanced E-commerce Platform",
      description: "Implement personalized product recommendations and dynamic pricing based on user behavior.",
      tags: ["Intermediate", "AI", "Web Dev", "E-commerce"],
    },
    // Adding 30 more AI projects
    {
      title: "AI Music Composer",
      description: "Create an AI system that composes original music based on genre, mood, and style preferences.",
      tags: ["Advanced", "AI", "Music", "Creative"],
    },
    {
      title: "Deepfake Detection Tool",
      description: "Build a system that can identify manipulated videos and images using deep learning techniques.",
      tags: ["Advanced", "AI", "Computer Vision", "Security"],
    },
    {
      title: "Personalized Fitness Coach",
      description: "An AI coach that creates and adjusts workout plans based on progress, goals, and feedback.",
      tags: ["Intermediate", "AI", "HealthTech", "Fitness"],
    },
    {
      title: "Legal Document Analyzer",
      description: "Use NLP to analyze legal documents, extract key clauses, and flag potential issues.",
      tags: ["Advanced", "AI", "NLP", "Legal"],
    },
    {
      title: "AI-Powered Recipe Generator",
      description:
        "Generate unique recipes based on available ingredients, dietary restrictions, and taste preferences.",
      tags: ["Intermediate", "AI", "Food", "NLP"],
    },
    {
      title: "Automated Video Summarizer",
      description: "Create an AI tool that generates concise summaries of long videos or lectures.",
      tags: ["Advanced", "AI", "Video", "NLP"],
    },
    {
      title: "Customer Support Chatbot",
      description: "Build an intelligent chatbot that handles customer inquiries and troubleshooting.",
      tags: ["Intermediate", "AI", "Chatbot", "Business"],
    },
    {
      title: "AI Art Generator",
      description: "Create a system that generates original artwork based on text descriptions or style references.",
      tags: ["Advanced", "AI", "Art", "Creative"],
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Analyze customer reviews and social media mentions to gauge brand sentiment.",
      tags: ["Intermediate", "AI", "NLP", "Business"],
    },
    {
      title: "Voice-to-Text Meeting Transcriber",
      description: "Automatically transcribe and summarize meetings with speaker identification.",
      tags: ["Advanced", "AI", "Speech", "Productivity"],
    },
    {
      title: "AI-Powered Language Tutor",
      description: "Create a personalized language learning assistant with speech recognition and feedback.",
      tags: ["Advanced", "AI", "Education", "Speech"],
    },
    {
      title: "Automated Code Reviewer",
      description: "Build an AI tool that reviews code for bugs, security issues, and style violations.",
      tags: ["Advanced", "AI", "Development", "Security"],
    },
    {
      title: "Wildlife Monitoring System",
      description: "Use computer vision to identify and track wildlife in conservation areas.",
      tags: ["Advanced", "AI", "Computer Vision", "Environment"],
    },
    {
      title: "AI Fashion Designer",
      description: "Generate clothing designs based on current trends, user preferences, and body measurements.",
      tags: ["Advanced", "AI", "Fashion", "Creative"],
    },
    {
      title: "Smart Email Categorizer",
      description: "Automatically sort and prioritize emails based on content, sender, and urgency.",
      tags: ["Intermediate", "AI", "NLP", "Productivity"],
    },
    {
      title: "Personalized News Aggregator",
      description: "Curate news articles based on user interests, reading habits, and content diversity.",
      tags: ["Intermediate", "AI", "NLP", "Media"],
    },
    {
      title: "AI-Powered Resume Builder",
      description: "Generate tailored resumes based on job descriptions and user skills.",
      tags: ["Intermediate", "AI", "NLP", "Career"],
    },
    {
      title: "Virtual Interior Designer",
      description: "Use AI to suggest furniture arrangements and decor based on room dimensions and style preferences.",
      tags: ["Advanced", "AI", "Computer Vision", "Design"],
    },
    {
      title: "Automated Social Media Manager",
      description: "Schedule and generate social media content optimized for engagement.",
      tags: ["Intermediate", "AI", "NLP", "Marketing"],
    },
    {
      title: "AI-Powered Plagiarism Detector",
      description: "Identify plagiarized content by comparing text against a large database of sources.",
      tags: ["Advanced", "AI", "NLP", "Education"],
    },
    {
      title: "Personalized Study Plan Generator",
      description: "Create customized study schedules based on learning style, goals, and available time.",
      tags: ["Intermediate", "AI", "Education", "Productivity"],
    },
    {
      title: "AI Chess Opponent",
      description: "Build a chess AI that adapts to the player's skill level and playing style.",
      tags: ["Advanced", "AI", "Gaming", "ML"],
    },
    {
      title: "Automated Video Editor",
      description: "Use AI to edit raw video footage into polished content based on specified styles.",
      tags: ["Advanced", "AI", "Video", "Creative"],
    },
    {
      title: "Plant Disease Identifier",
      description: "Identify plant diseases from images and suggest treatment options.",
      tags: ["Intermediate", "AI", "Computer Vision", "Agriculture"],
    },
    {
      title: "AI-Powered Translation Tool",
      description: "Create a translation system that preserves context, idioms, and cultural nuances.",
      tags: ["Advanced", "AI", "NLP", "Language"],
    },
    {
      title: "Smart Traffic Management System",
      description: "Optimize traffic light timing based on real-time traffic conditions using computer vision.",
      tags: ["Advanced", "AI", "Computer Vision", "Urban"],
    },
    {
      title: "Personalized Book Recommender",
      description: "Suggest books based on reading history, preferences, and mood.",
      tags: ["Intermediate", "AI", "Recommendation", "Media"],
    },
    {
      title: "AI-Powered Job Matcher",
      description: "Match job seekers with opportunities based on skills, experience, and company culture.",
      tags: ["Advanced", "AI", "NLP", "Career"],
    },
    {
      title: "Automated Data Visualization Tool",
      description: "Generate insightful visualizations from complex datasets with minimal user input.",
      tags: ["Advanced", "AI", "Data", "Visualization"],
    },
    {
      title: "AI Ethics Analyzer",
      description: "Evaluate AI systems for potential biases, fairness issues, and ethical concerns.",
      tags: ["Advanced", "AI", "Ethics", "Analysis"],
    },
  ],
  "Web Dev": [
    {
      title: "Remote Freelancer Portal",
      description: "A job board where startups can connect with verified freelance talent.",
      tags: ["Intermediate", "Full Stack", "Web Dev"],
    },
    {
      title: "Budget Meal Planner",
      description: "Input ingredients or budget, and get healthy meal ideas and recipes.",
      tags: ["Beginner", "Web Dev", "Health", "HealthTech"],
    },
    {
      title: "Interactive Resume Site",
      description: "Turn your resume into a stylish, interactive single-page web app.",
      tags: ["Beginner", "Portfolio", "Web Dev"],
    },
    {
      title: "Event Ticketing Platform",
      description: "Build a ticket booking platform with QR check-in features.",
      tags: ["Intermediate", "Web Dev"],
    },
    {
      title: "Mini SaaS App (e.g., Habit Tracker)",
      description: "Launch your own software-as-a-service app with authentication and subscriptions.",
      tags: ["Advanced", "Full Stack", "Startup", "Web Dev"],
    },
    {
      title: "Weather Visualization Dashboard",
      description: "Use weather APIs to show data on interactive maps with chart visualizations.",
      tags: ["Intermediate", "Web Dev", "APIs", "Data"],
    },
    {
      title: "AI-Powered Blog Writer",
      description: "Use GPT API to help users auto-generate blogs from keywords or outlines.",
      tags: ["Intermediate", "AI", "Web Dev"],
    },
    {
      title: "Collaborative Whiteboard App",
      description: "A real-time collaborative drawing and brainstorming tool for remote teams.",
      tags: ["Advanced", "Web Dev", "Real-time"],
    },
    {
      title: "Podcast Discovery Platform",
      description: "Help users discover new podcasts based on their interests and listening habits.",
      tags: ["Intermediate", "Web Dev", "Media"],
    },
    {
      title: "Virtual Classroom Platform",
      description: "Build an interactive online learning environment with video conferencing and resources.",
      tags: ["Advanced", "Web Dev", "Education"],
    },
    // Added cross-domain projects
    {
      title: "Financial Dashboard with AI Insights",
      description: "Create a comprehensive financial dashboard with AI-powered insights and predictions.",
      tags: ["Advanced", "Web Dev", "Finance", "AI"],
    },
    {
      title: "IoT Device Management Portal",
      description: "Build a web interface to monitor and control IoT devices with real-time data visualization.",
      tags: ["Advanced", "Web Dev", "IoT", "Dashboard"],
    },
    {
      title: "Telemedicine Platform",
      description:
        "Develop a platform for virtual doctor consultations with appointment scheduling and secure video calls.",
      tags: ["Advanced", "Web Dev", "HealthTech", "Security"],
    },
    {
      title: "Investment Portfolio Tracker",
      description: "Create a web app to track and analyze investment performance with AI-powered recommendations.",
      tags: ["Intermediate", "Web Dev", "Finance", "AI"],
    },
    {
      title: "Smart Home Control Center",
      description: "Build a web interface to monitor and control smart home devices with automation rules.",
      tags: ["Intermediate", "Web Dev", "IoT", "Home"],
    },
    {
      title: "Health and Fitness Progress Tracker",
      description: "Develop a web app to track fitness goals, nutrition, and health metrics with data visualization.",
      tags: ["Intermediate", "Web Dev", "HealthTech", "Data"],
    },
    {
      title: "Crowdfunding Platform with AI Risk Assessment",
      description: "Create a platform for fundraising projects with AI-powered risk assessment for investors.",
      tags: ["Advanced", "Web Dev", "Finance", "AI"],
    },
    {
      title: "Remote Patient Monitoring Dashboard",
      description:
        "Build a dashboard for healthcare providers to monitor patients' health data collected from IoT devices.",
      tags: ["Advanced", "Web Dev", "HealthTech", "IoT"],
    },
    {
      title: "AI-Powered Financial News Aggregator",
      description: "Develop a platform that collects and analyzes financial news with AI to provide insights.",
      tags: ["Intermediate", "Web Dev", "Finance", "AI"],
    },
    {
      title: "Smart Agriculture Dashboard",
      description:
        "Create a web interface for farmers to monitor crop conditions using IoT sensors and AI predictions.",
      tags: ["Advanced", "Web Dev", "IoT", "AI"],
    },
    // Adding 30 more Web Dev projects
    {
      title: "Freelance Marketplace",
      description: "Build a platform connecting freelancers with clients, featuring secure payments and reviews.",
      tags: ["Advanced", "Web Dev", "Marketplace", "Full Stack"],
    },
    {
      title: "Recipe Sharing Community",
      description: "Create a platform where users can share, rate, and comment on recipes with social features.",
      tags: ["Intermediate", "Web Dev", "Social", "Food"],
    },
    {
      title: "Virtual Event Platform",
      description: "Develop a platform for hosting virtual conferences with networking rooms and interactive sessions.",
      tags: ["Advanced", "Web Dev", "Events", "Real-time"],
    },
    {
      title: "Job Application Tracker",
      description: "Build a tool to help job seekers track applications, interviews, and follow-ups.",
      tags: ["Intermediate", "Web Dev", "Career", "Productivity"],
    },
    {
      title: "Subscription Box Management System",
      description: "Create a platform for managing subscription-based product deliveries and customer preferences.",
      tags: ["Advanced", "Web Dev", "E-commerce", "Subscription"],
    },
    {
      title: "Language Exchange Platform",
      description: "Build a website connecting people who want to practice different languages together.",
      tags: ["Intermediate", "Web Dev", "Education", "Social"],
    },
    {
      title: "Digital Asset Marketplace",
      description:
        "Create a platform for buying and selling digital assets like templates, graphics, and code snippets.",
      tags: ["Advanced", "Web Dev", "Marketplace", "E-commerce"],
    },
    {
      title: "Community Forum Platform",
      description: "Build a modern forum system with categories, upvoting, and moderation features.",
      tags: ["Intermediate", "Web Dev", "Community", "Social"],
    },
    {
      title: "Online Course Platform",
      description: "Develop a platform for creating and selling online courses with progress tracking.",
      tags: ["Advanced", "Web Dev", "Education", "E-commerce"],
    },
    {
      title: "Social Media Dashboard",
      description: "Create a dashboard to manage and schedule posts across multiple social media platforms.",
      tags: ["Intermediate", "Web Dev", "Social Media", "Dashboard"],
    },
    {
      title: "Rental Property Management System",
      description: "Build a platform for property owners to manage rentals, tenants, and maintenance requests.",
      tags: ["Advanced", "Web Dev", "Real Estate", "Management"],
    },
    {
      title: "Team Collaboration Tool",
      description: "Create a workspace for teams to manage projects, share files, and communicate.",
      tags: ["Advanced", "Web Dev", "Productivity", "Collaboration"],
    },
    {
      title: "Local Business Directory",
      description: "Build a directory of local businesses with reviews, maps, and contact information.",
      tags: ["Intermediate", "Web Dev", "Local", "Business"],
    },
    {
      title: "Personal Knowledge Base",
      description: "Create a note-taking app with organization features, tagging, and search functionality.",
      tags: ["Intermediate", "Web Dev", "Productivity", "Knowledge"],
    },
    {
      title: "Appointment Scheduling System",
      description: "Build a platform for businesses to manage appointments and bookings.",
      tags: ["Intermediate", "Web Dev", "Business", "Scheduling"],
    },
    {
      title: "E-commerce Product Customizer",
      description: "Create an interactive tool for customizing products before purchase.",
      tags: ["Advanced", "Web Dev", "E-commerce", "Interactive"],
    },
    {
      title: "Travel Itinerary Planner",
      description: "Build a tool to create and share detailed travel plans with maps and recommendations.",
      tags: ["Intermediate", "Web Dev", "Travel", "Planning"],
    },
    {
      title: "Charity Donation Platform",
      description: "Create a platform connecting donors with charitable causes and tracking impact.",
      tags: ["Intermediate", "Web Dev", "Nonprofit", "Social"],
    },
    {
      title: "Content Management System",
      description: "Build a custom CMS with a visual editor, media management, and publishing workflow.",
      tags: ["Advanced", "Web Dev", "CMS", "Content"],
    },
    {
      title: "Real Estate Listing Platform",
      description: "Create a website for listing properties with search filters and virtual tours.",
      tags: ["Advanced", "Web Dev", "Real Estate", "Listings"],
    },
    {
      title: "Online Marketplace for Services",
      description: "Build a platform where people can offer and book local services.",
      tags: ["Advanced", "Web Dev", "Marketplace", "Services"],
    },
    {
      title: "Digital Menu System",
      description: "Create a QR code-based menu system for restaurants with ordering capabilities.",
      tags: ["Intermediate", "Web Dev", "Restaurant", "Mobile"],
    },
    {
      title: "Inventory Management System",
      description: "Build a system for tracking inventory levels, orders, and sales.",
      tags: ["Intermediate", "Web Dev", "Business", "Management"],
    },
    {
      title: "Social Reading Platform",
      description: "Create a platform for readers to track books, share reviews, and join reading groups.",
      tags: ["Intermediate", "Web Dev", "Books", "Social"],
    },
    {
      title: "Project Management Dashboard",
      description: "Build a visual dashboard for managing projects, tasks, and team members.",
      tags: ["Advanced", "Web Dev", "Management", "Dashboard"],
    },
    {
      title: "Online Portfolio Builder",
      description: "Create a tool for professionals to build and host their portfolios without coding.",
      tags: ["Intermediate", "Web Dev", "Portfolio", "Creator"],
    },
    {
      title: "Feedback Collection System",
      description: "Build a platform for collecting and analyzing customer feedback and surveys.",
      tags: ["Intermediate", "Web Dev", "Business", "Analytics"],
    },
    {
      title: "Digital Gift Card Platform",
      description: "Create a system for businesses to sell and manage digital gift cards.",
      tags: ["Intermediate", "Web Dev", "E-commerce", "Business"],
    },
    {
      title: "Event Photography Platform",
      description: "Build a platform for event photographers to share photos with attendees.",
      tags: ["Intermediate", "Web Dev", "Photography", "Events"],
    },
    {
      title: "Membership Site Platform",
      description: "Create a system for building subscription-based membership websites with gated content.",
      tags: ["Advanced", "Web Dev", "Subscription", "Content"],
    },
  ],
  Finance: [
    {
      title: "Crypto Portfolio Dashboard",
      description: "Track your crypto assets and their growth over time using APIs.",
      tags: ["Intermediate", "Web Dev", "Finance"],
    },
    {
      title: "Loan Default Predictor",
      description: "Use ML to predict whether a person will default on a loan based on past data.",
      tags: ["Advanced", "ML", "Finance", "AI"],
    },
    {
      title: "Daily Budget Manager",
      description: "App that helps users track expenses, set goals, and visualize spending trends.",
      tags: ["Beginner", "Mobile", "Finance"],
    },
    {
      title: "Personal Finance Advisor Bot",
      description: "A chatbot that helps users plan savings and investments based on their goals.",
      tags: ["Intermediate", "AI", "Finance"],
    },
    {
      title: "P2P Lending Simulator",
      description: "Create a platform that simulates peer-to-peer lending with credit scoring logic.",
      tags: ["Advanced", "Finance", "Simulation"],
    },
    {
      title: "Stock Screener with Technical Filters",
      description: "Screen stocks using RSI, MACD, and other indicators via live APIs.",
      tags: ["Intermediate", "Finance", "API"],
    },
    {
      title: "EMI & Tax Calculator App",
      description: "Calculate EMIs, interest, and tax planning for working professionals.",
      tags: ["Beginner", "Finance", "Web"],
    },
    {
      title: "Budget-Friendly Travel Planner",
      description: "Suggest trips based on user budget and preferences with real-time pricing.",
      tags: ["Intermediate", "Finance", "Travel"],
    },
    {
      title: "Expense Splitting App",
      description: "Simplify splitting bills and expenses among friends, roommates, or groups.",
      tags: ["Beginner", "Finance", "Mobile"],
    },
    {
      title: "Investment Portfolio Simulator",
      description: "Practice investment strategies with virtual money before risking real funds.",
      tags: ["Intermediate", "Finance", "Education"],
    },
    // Added cross-domain projects
    {
      title: "AI-Powered Investment Advisor",
      description: "Create a platform that uses AI to analyze market trends and provide investment recommendations.",
      tags: ["Advanced", "Finance", "AI", "Web Dev"],
    },
    {
      title: "IoT-Based Smart ATM System",
      description: "Design an ATM system with IoT sensors for security and maintenance monitoring.",
      tags: ["Advanced", "Finance", "IoT", "Security"],
    },
    {
      title: "Healthcare Cost Prediction Platform",
      description: "Develop a tool that predicts medical costs based on treatment plans and insurance coverage.",
      tags: ["Advanced", "Finance", "HealthTech", "AI"],
    },
    {
      title: "Financial Literacy Game",
      description: "Create an interactive web game that teaches financial concepts through real-world scenarios.",
      tags: ["Intermediate", "Finance", "Web Dev", "Education"],
    },
    {
      title: "Smart Home Budget Optimizer",
      description: "Build a system that monitors home energy usage and suggests cost-saving measures.",
      tags: ["Intermediate", "Finance", "IoT", "Energy"],
    },
    {
      title: "Health Insurance Recommendation Engine",
      description: "Develop an AI system that recommends optimal health insurance plans based on user needs.",
      tags: ["Advanced", "Finance", "HealthTech", "AI"],
    },
    {
      title: "Blockchain-Based Crowdfunding Platform",
      description: "Create a decentralized platform for fundraising with smart contracts and transparent tracking.",
      tags: ["Advanced", "Finance", "Web Dev", "Blockchain"],
    },
    {
      title: "Medical Expense Tracker",
      description: "Build an app to track and categorize medical expenses for tax purposes and insurance claims.",
      tags: ["Intermediate", "Finance", "HealthTech", "Mobile"],
    },
    {
      title: "AI-Powered Fraud Detection System",
      description: "Develop a system that uses machine learning to identify suspicious financial transactions.",
      tags: ["Advanced", "Finance", "AI", "Security"],
    },
    {
      title: "Smart Retail Inventory Financing",
      description: "Create a platform that uses IoT data to optimize inventory financing for retailers.",
      tags: ["Advanced", "Finance", "IoT", "Retail"],
    },
    // Adding 30 more Finance projects
    {
      title: "Retirement Planning Calculator",
      description: "Build a tool that helps users plan for retirement based on current savings and future goals.",
      tags: ["Intermediate", "Finance", "Planning", "Calculator"],
    },
    {
      title: "Cryptocurrency Trading Bot",
      description: "Create an automated trading system for cryptocurrencies using technical analysis.",
      tags: ["Advanced", "Finance", "Crypto", "Automation"],
    },
    {
      title: "Financial Goal Tracker",
      description: "Build an app that helps users set and track financial goals with progress visualization.",
      tags: ["Beginner", "Finance", "Mobile", "Personal"],
    },
    {
      title: "Stock Market Simulator",
      description: "Create a platform for practicing stock trading with real market data but virtual money.",
      tags: ["Intermediate", "Finance", "Education", "Simulation"],
    },
    {
      title: "Debt Reduction Planner",
      description: "Develop a tool that creates optimal debt payoff strategies based on interest rates and balances.",
      tags: ["Intermediate", "Finance", "Planning", "Personal"],
    },
    {
      title: "Invoice Generation System",
      description: "Build a system for creating, sending, and tracking professional invoices for freelancers.",
      tags: ["Beginner", "Finance", "Business", "Freelance"],
    },
    {
      title: "Real Estate Investment Analyzer",
      description: "Create a tool to evaluate potential real estate investments based on ROI and market trends.",
      tags: ["Advanced", "Finance", "Real Estate", "Analysis"],
    },
    {
      title: "Subscription Management Dashboard",
      description: "Build a dashboard to track and optimize recurring subscriptions and memberships.",
      tags: ["Intermediate", "Finance", "Personal", "Dashboard"],
    },
    {
      title: "Financial Document OCR System",
      description: "Create a system that extracts data from receipts and financial documents using OCR.",
      tags: ["Advanced", "Finance", "OCR", "Automation"],
    },
    {
      title: "Micro-Savings Application",
      description: "Build an app that helps users save small amounts regularly through automation.",
      tags: ["Intermediate", "Finance", "Mobile", "Savings"],
    },
    {
      title: "Donation Tax Calculator",
      description: "Create a tool that calculates tax benefits from charitable donations.",
      tags: ["Beginner", "Finance", "Tax", "Nonprofit"],
    },
    {
      title: "Financial Ratio Calculator",
      description: "Build a tool that calculates key financial ratios for business analysis.",
      tags: ["Intermediate", "Finance", "Business", "Analysis"],
    },
    {
      title: "Currency Conversion Tool",
      description: "Create a real-time currency converter with historical rate tracking.",
      tags: ["Beginner", "Finance", "Currency", "API"],
    },
    {
      title: "Dividend Portfolio Tracker",
      description: "Build a tool to track dividend income and reinvestment opportunities.",
      tags: ["Intermediate", "Finance", "Investment", "Tracking"],
    },
    {
      title: "College Savings Calculator",
      description: "Create a tool to help parents plan and save for children's education expenses.",
      tags: ["Intermediate", "Finance", "Education", "Planning"],
    },
    {
      title: "Financial News Sentiment Analyzer",
      description: "Build a system that analyzes financial news sentiment to guide investment decisions.",
      tags: ["Advanced", "Finance", "NLP", "AI"],
    },
    {
      title: "Mortgage Comparison Tool",
      description: "Create a calculator that compares different mortgage options and their long-term costs.",
      tags: ["Intermediate", "Finance", "Real Estate", "Calculator"],
    },
    {
      title: "Payroll Management System",
      description: "Build a system for calculating and managing employee payroll and tax withholdings.",
      tags: ["Advanced", "Finance", "Business", "HR"],
    },
    {
      title: "Financial Data Visualization Tool",
      description: "Create interactive visualizations of financial data for better understanding and analysis.",
      tags: ["Intermediate", "Finance", "Data", "Visualization"],
    },
    {
      title: "Inheritance Tax Calculator",
      description: "Build a tool to estimate inheritance taxes and plan estate distributions.",
      tags: ["Advanced", "Finance", "Tax", "Planning"],
    },
    {
      title: "Business Valuation Calculator",
      description: "Create a tool that estimates the value of a business based on financial metrics.",
      tags: ["Advanced", "Finance", "Business", "Valuation"],
    },
    {
      title: "Financial Risk Assessment Tool",
      description: "Build a system that evaluates investment risk based on various factors and scenarios.",
      tags: ["Advanced", "Finance", "Risk", "Analysis"],
    },
    {
      title: "Cashflow Forecasting Tool",
      description: "Create a system for businesses to forecast future cash flows based on historical data.",
      tags: ["Advanced", "Finance", "Business", "Forecasting"],
    },
    {
      title: "Equity Compensation Calculator",
      description: "Build a tool to value and compare stock options and equity compensation packages.",
      tags: ["Intermediate", "Finance", "Compensation", "Calculator"],
    },
    {
      title: "Financial Milestone Tracker",
      description: "Create an app that celebrates financial achievements and milestones.",
      tags: ["Beginner", "Finance", "Personal", "Motivation"],
    },
    {
      title: "Rental Property ROI Calculator",
      description: "Build a tool to analyze the return on investment for rental properties.",
      tags: ["Intermediate", "Finance", "Real Estate", "Investment"],
    },
    {
      title: "Automated Receipt Categorizer",
      description: "Create a system that automatically categorizes receipts for expense tracking.",
      tags: ["Intermediate", "Finance", "ML", "Automation"],
    },
    {
      title: "Financial Independence Calculator",
      description: "Build a tool that calculates when users can achieve financial independence based on savings rate.",
      tags: ["Intermediate", "Finance", "Planning", "Calculator"],
    },
    {
      title: "Charity Donation Optimizer",
      description: "Create a tool that helps users maximize the impact of their charitable donations.",
      tags: ["Intermediate", "Finance", "Nonprofit", "Optimization"],
    },
    {
      title: "Small Business Cash Flow Manager",
      description: "Build a system for small businesses to manage and optimize cash flow.",
      tags: ["Advanced", "Finance", "Business", "Management"],
    },
  ],
  HealthTech: [
    {
      title: "Smart Medicine Reminder",
      description: "An app that reminds users to take medication and tracks doses.",
      tags: ["Beginner", "Health", "Mobile", "HealthTech"],
    },
    {
      title: "Symptom Checker App",
      description: "A self-diagnosis tool where users input symptoms and get possible issues.",
      tags: ["Intermediate", "AI", "Health", "HealthTech"],
    },
    {
      title: "Water Intake Tracker",
      description: "Gamified app to keep people hydrated throughout the day.",
      tags: ["Beginner", "Health", "Wellness", "HealthTech"],
    },
    {
      title: "Hospital Bed Availability Tracker",
      description: "Real-time dashboard showing available beds in nearby hospitals.",
      tags: ["Advanced", "HealthTech", "Dashboard"],
    },
    {
      title: "Pregnancy Nutrition Guide",
      description: "Personalized nutrition and wellness tracker for expecting mothers.",
      tags: ["Intermediate", "HealthTech", "Web App"],
    },
    {
      title: "Mental Wellness Companion",
      description: "Chatbot that checks in on mental health and suggests activities or help lines.",
      tags: ["Beginner", "AI", "Chatbot", "HealthTech"],
    },
    {
      title: "Telemedicine Booking System",
      description: "Connect patients with available doctors online through video sessions.",
      tags: ["Intermediate", "HealthTech", "Web"],
    },
    {
      title: "Sleep Quality Analyzer",
      description: "Track sleep patterns and provide insights to improve sleep quality using wearable data.",
      tags: ["Intermediate", "HealthTech", "Mobile"],
    },
    {
      title: "Personalized Workout Generator",
      description: "Create custom workout plans based on fitness level, goals, and available equipment.",
      tags: ["Intermediate", "HealthTech", "Fitness"],
    },
    {
      title: "Medical Record Aggregator",
      description: "Securely store and manage medical records from multiple healthcare providers.",
      tags: ["Advanced", "HealthTech", "Security"],
    },
    // Added cross-domain projects
    {
      title: "AI-Powered Medical Diagnosis Assistant",
      description: "Create a tool that helps doctors diagnose conditions using machine learning and medical imaging.",
      tags: ["Advanced", "HealthTech", "AI", "Computer Vision"],
    },
    {
      title: "IoT-Based Remote Patient Monitoring",
      description: "Develop a system using wearable IoT devices to monitor patients' vital signs remotely.",
      tags: ["Advanced", "HealthTech", "IoT", "Data"],
    },
    {
      title: "Healthcare Cost Prediction Tool",
      description: "Build an AI system that predicts medical costs based on treatment plans and patient history.",
      tags: ["Advanced", "HealthTech", "Finance", "AI"],
    },
    {
      title: "Telemedicine Platform with AI Triage",
      description: "Create a web platform for virtual doctor visits with AI-powered initial symptom assessment.",
      tags: ["Advanced", "HealthTech", "Web Dev", "AI"],
    },
    {
      title: "Smart Medication Dispenser",
      description: "Design an IoT device that dispenses medications on schedule and monitors adherence.",
      tags: ["Intermediate", "HealthTech", "IoT", "Health"],
    },
    {
      title: "Health Insurance Recommendation System",
      description:
        "Develop an AI-powered tool that recommends optimal health insurance plans based on individual needs.",
      tags: ["Intermediate", "HealthTech", "Finance", "AI"],
    },
    {
      title: "Medical Expense Management Platform",
      description:
        "Create a web app to track, categorize, and optimize healthcare expenses for individuals and families.",
      tags: ["Intermediate", "HealthTech", "Finance", "Web Dev"],
    },
    {
      title: "AI-Powered Nutrition Advisor",
      description:
        "Build an application that analyzes food intake and provides personalized nutrition recommendations.",
      tags: ["Intermediate", "HealthTech", "AI", "Mobile"],
    },
    {
      title: "Hospital Resource Optimization System",
      description: "Develop a platform that uses AI to optimize hospital staff scheduling and resource allocation.",
      tags: ["Advanced", "HealthTech", "AI", "Finance"],
    },
    {
      title: "Smart Home Health Monitoring",
      description:
        "Create a system that uses IoT sensors to monitor health metrics and environmental conditions at home.",
      tags: ["Advanced", "HealthTech", "IoT", "AI"],
    },
    // Adding 30 more HealthTech projects
    {
      title: "Mental Health Mood Tracker",
      description: "Build an app that tracks mood patterns and provides coping strategies for mental wellness.",
      tags: ["Intermediate", "HealthTech", "Mental Health", "Mobile"],
    },
    {
      title: "Virtual Physical Therapy Assistant",
      description: "Create a platform that guides patients through physical therapy exercises with form feedback.",
      tags: ["Advanced", "HealthTech", "Rehabilitation", "Computer Vision"],
    },
    {
      title: "Allergy Alert System",
      description: "Develop an app that warns users about potential allergens in food products and environments.",
      tags: ["Intermediate", "HealthTech", "Allergies", "Mobile"],
    },
    {
      title: "Chronic Disease Management Platform",
      description: "Build a comprehensive system for tracking and managing chronic conditions like diabetes.",
      tags: ["Advanced", "HealthTech", "Chronic Care", "Management"],
    },
    {
      title: "Posture Correction Tool",
      description: "Create a system that monitors and provides feedback on posture using computer vision.",
      tags: ["Intermediate", "HealthTech", "Computer Vision", "Wellness"],
    },
    {
      title: "Caregiver Coordination Platform",
      description:
        "Develop a tool for coordinating care among multiple caregivers for elderly or disabled individuals.",
      tags: ["Intermediate", "HealthTech", "Eldercare", "Coordination"],
    },
    {
      title: "Personalized Nutrition Planner",
      description: "Build an app that creates meal plans based on dietary needs, restrictions, and health goals.",
      tags: ["Intermediate", "HealthTech", "Nutrition", "Personalization"],
    },
    {
      title: "Medical Appointment Reminder",
      description: "Create a system that sends personalized reminders for medical appointments and follow-ups.",
      tags: ["Beginner", "HealthTech", "Reminders", "Mobile"],
    },
    {
      title: "Health Goal Achievement Tracker",
      description:
        "Develop a platform that helps users set and track health-related goals with accountability features.",
      tags: ["Intermediate", "HealthTech", "Goals", "Motivation"],
    },
    {
      title: "Prescription Management System",
      description: "Build a tool for tracking prescriptions, refills, and medication interactions.",
      tags: ["Intermediate", "HealthTech", "Medication", "Management"],
    },
    {
      title: "Telehealth Waiting Room",
      description: "Create a virtual waiting room experience for telehealth appointments with engagement features.",
      tags: ["Intermediate", "HealthTech", "Telehealth", "UX"],
    },
    {
      title: "Health Data Visualization Dashboard",
      description: "Develop a dashboard that visualizes health metrics from wearables and medical devices.",
      tags: ["Advanced", "HealthTech", "Data", "Visualization"],
    },
    {
      title: "Accessibility Mapping Platform",
      description: "Build a system that maps and rates accessibility features of public spaces for disabled users.",
      tags: ["Intermediate", "HealthTech", "Accessibility", "Mapping"],
    },
    {
      title: "Vaccine Scheduler and Tracker",
      description: "Create a platform for scheduling vaccinations and tracking immunization records.",
      tags: ["Intermediate", "HealthTech", "Vaccination", "Scheduling"],
    },
    {
      title: "Stress Management Application",
      description: "Develop an app with breathing exercises, meditation guides, and stress tracking.",
      tags: ["Beginner", "HealthTech", "Mental Health", "Wellness"],
    },
    {
      title: "Medical Translation Tool",
      description: "Build a system that translates medical terminology and instructions for non-native speakers.",
      tags: ["Advanced", "HealthTech", "Translation", "Accessibility"],
    },
    {
      title: "Fertility Tracking System",
      description: "Create an app for tracking fertility metrics and predicting optimal conception windows.",
      tags: ["Intermediate", "HealthTech", "Fertility", "Women's Health"],
    },
    {
      title: "Rehabilitation Progress Tracker",
      description: "Develop a tool for tracking progress during physical rehabilitation with milestone celebrations.",
      tags: ["Intermediate", "HealthTech", "Rehabilitation", "Progress"],
    },
    {
      title: "Hearing Test Application",
      description: "Build a mobile app that conducts basic hearing tests and suggests follow-up actions.",
      tags: ["Intermediate", "HealthTech", "Audiology", "Screening"],
    },
    {
      title: "Emergency Response Locator",
      description: "Create a system that helps emergency responders locate patients quickly in large buildings.",
      tags: ["Advanced", "HealthTech", "Emergency", "Location"],
    },
    {
      title: "Dietary Restriction Recipe Finder",
      description: "Develop a tool that finds recipes matching multiple dietary restrictions and preferences.",
      tags: ["Intermediate", "HealthTech", "Nutrition", "Recipes"],
    },
    {
      title: "Patient Education Platform",
      description: "Build a system for delivering personalized educational content about medical conditions.",
      tags: ["Intermediate", "HealthTech", "Education", "Content"],
    },
    {
      title: "Health Insurance Claims Assistant",
      description: "Create a tool that helps patients navigate the health insurance claims process.",
      tags: ["Intermediate", "HealthTech", "Insurance", "Finance"],
    },
    {
      title: "Medication Interaction Checker",
      description: "Develop a system that checks for potential interactions between medications.",
      tags: ["Advanced", "HealthTech", "Medication", "Safety"],
    },
    {
      title: "Vision Test Application",
      description: "Build a mobile app that conducts basic vision screening tests.",
      tags: ["Intermediate", "HealthTech", "Vision", "Screening"],
    },
    {
      title: "Health Document Scanner",
      description: "Create an app that scans and organizes medical documents and insurance cards.",
      tags: ["Intermediate", "HealthTech", "Document", "Organization"],
    },
    {
      title: "Pandemic Contact Tracing System",
      description: "Develop a privacy-focused contact tracing system for disease outbreaks.",
      tags: ["Advanced", "HealthTech", "Epidemiology", "Privacy"],
    },
    {
      title: "Personalized Health Risk Assessment",
      description: "Build a tool that evaluates personal health risks based on lifestyle and family history.",
      tags: ["Advanced", "HealthTech", "Risk", "Assessment"],
    },
    {
      title: "Medical Terminology Learning Game",
      description: "Create an educational game that teaches medical terminology to students and professionals.",
      tags: ["Intermediate", "HealthTech", "Education", "Gaming"],
    },
    {
      title: "Assistive Technology Controller",
      description: "Develop alternative input methods for computers and devices for users with disabilities.",
      tags: ["Advanced", "HealthTech", "Accessibility", "Assistive"],
    },
  ],
  IoT: [
    {
      title: "Smart Water Dispenser",
      description: "Dispenses water automatically based on hand detection and tracks usage.",
      tags: ["Beginner", "IoT", "Embedded"],
    },
    {
      title: "IoT Plant Care System",
      description: "Water your plants and track sunlight, humidity, and temperature via sensors.",
      tags: ["Intermediate", "IoT", "AgriTech"],
    },
    {
      title: "Wearable Fall Detection",
      description: "Wearable device that sends alerts when elderly people fall.",
      tags: ["Advanced", "IoT", "HealthTech"],
    },
    {
      title: "Home Security Surveillance",
      description: "Monitor live camera feeds, motion detection alerts, and control from mobile.",
      tags: ["Intermediate", "IoT", "Security"],
    },
    {
      title: "Smart Waste Collection",
      description: "Detect bin fill levels and notify the collection team automatically.",
      tags: ["Intermediate", "IoT", "CivicTech"],
    },
    {
      title: "Energy Monitoring System",
      description: "Track power usage of each room or appliance and generate savings tips.",
      tags: ["Advanced", "IoT", "Energy"],
    },
    {
      title: "Contactless Smart Door Lock",
      description: "Build an RFID or facial recognition-based smart door lock system.",
      tags: ["Intermediate", "IoT", "Security"],
    },
    {
      title: "Smart Parking System",
      description: "Guide drivers to available parking spots using sensors and mobile app integration.",
      tags: ["Advanced", "IoT", "Urban"],
    },
    {
      title: "Indoor Air Quality Monitor",
      description: "Track air quality metrics and provide alerts when conditions are unhealthy.",
      tags: ["Intermediate", "IoT", "Health"],
    },
    {
      title: "Smart Refrigerator Inventory",
      description: "Track food items in your refrigerator and get expiration alerts and recipe suggestions.",
      tags: ["Intermediate", "IoT", "Home"],
    },
    // Added cross-domain projects
    {
      title: "IoT-Based Health Monitoring System",
      description: "Create a network of wearable devices that monitor vital signs and alert healthcare providers.",
      tags: ["Advanced", "IoT", "HealthTech", "Data"],
    },
    {
      title: "Smart Financial Transaction Terminal",
      description: "Develop a secure IoT device for processing financial transactions with biometric authentication.",
      tags: ["Advanced", "IoT", "Finance", "Security"],
    },
    {
      title: "AI-Powered Smart Home Assistant",
      description: "Build a voice-controlled home assistant that learns user preferences and controls smart devices.",
      tags: ["Advanced", "IoT", "AI", "Home"],
    },
    {
      title: "Connected Healthcare Devices Dashboard",
      description: "Create a web platform to monitor and manage multiple healthcare IoT devices.",
      tags: ["Intermediate", "IoT", "HealthTech", "Web Dev"],
    },
    {
      title: "Smart Retail Inventory System",
      description: "Develop an automated inventory tracking system using RFID and weight sensors.",
      tags: ["Intermediate", "IoT", "Finance", "Retail"],
    },
    {
      title: "AI-Enhanced Security Camera System",
      description: "Build a security system with cameras that use AI to detect suspicious activities.",
      tags: ["Advanced", "IoT", "AI", "Security"],
    },
    {
      title: "Financial Transaction Fraud Detection Device",
      description: "Create an IoT device that monitors financial transactions for suspicious patterns.",
      tags: ["Advanced", "IoT", "Finance", "Security"],
    },
    {
      title: "Smart Hospital Room Monitoring",
      description: "Develop a system to monitor patient rooms for environmental conditions and occupancy.",
      tags: ["Intermediate", "IoT", "HealthTech", "Monitoring"],
    },
    {
      title: "AI-Powered Energy Management System",
      description: "Build a system that uses AI to optimize energy usage in buildings based on occupancy patterns.",
      tags: ["Advanced", "IoT", "AI", "Energy"],
    },
    {
      title: "Connected Health and Fitness Equipment",
      description: "Create IoT-enabled fitness equipment that tracks workouts and syncs with health apps.",
      tags: ["Intermediate", "IoT", "HealthTech", "Fitness"],
    },
    // Adding 30 more IoT projects
    {
      title: "Smart Mirror",
      description: "Build a mirror that displays weather, calendar, news, and health metrics while getting ready.",
      tags: ["Intermediate", "IoT", "Home", "Display"],
    },
    {
      title: "Pet Feeding System",
      description: "Create an automated pet feeder with scheduling, portion control, and remote monitoring.",
      tags: ["Intermediate", "IoT", "Pets", "Automation"],
    },
    {
      title: "Water Leak Detection System",
      description: "Develop sensors that detect water leaks in homes and automatically shut off the water supply.",
      tags: ["Intermediate", "IoT", "Home", "Safety"],
    },
    {
      title: "Smart Greenhouse Controller",
      description: "Build a system that automates greenhouse conditions based on plant needs and weather.",
      tags: ["Advanced", "IoT", "Agriculture", "Automation"],
    },
    {
      title: "Elderly Care Monitoring System",
      description: "Create a non-intrusive system to monitor elderly activity patterns and detect anomalies.",
      tags: ["Advanced", "IoT", "Eldercare", "Monitoring"],
    },
    {
      title: "Connected Bike Security System",
      description: "Develop a GPS tracking and alarm system for bicycles with mobile notifications.",
      tags: ["Intermediate", "IoT", "Security", "Transportation"],
    },
    {
      title: "Smart Classroom Environment",
      description: "Build a system that monitors and optimizes classroom conditions for learning.",
      tags: ["Advanced", "IoT", "Education", "Environment"],
    },
    {
      title: "Automated Pet Door",
      description: "Create a pet door that only opens for your pets using RFID or facial recognition.",
      tags: ["Intermediate", "IoT", "Pets", "Security"],
    },
    {
      title: "Weather Station Network",
      description: "Develop a network of weather stations that collect and share local weather data.",
      tags: ["Intermediate", "IoT", "Weather", "Data"],
    },
    {
      title: "Smart Irrigation Controller",
      description: "Build a system that waters gardens based on soil moisture, weather forecasts, and plant needs.",
      tags: ["Intermediate", "IoT", "Garden", "Water"],
    },
    {
      title: "Asset Tracking System",
      description: "Create a system for tracking valuable equipment and assets in businesses or hospitals.",
      tags: ["Intermediate", "IoT", "Tracking", "Business"],
    },
    {
      title: "Smart Lighting Control",
      description: "Develop a lighting system that adjusts based on natural light, occupancy, and user preferences.",
      tags: ["Intermediate", "IoT", "Lighting", "Energy"],
    },
    {
      title: "Noise Monitoring Network",
      description: "Build a network of sensors to monitor and map urban noise pollution.",
      tags: ["Intermediate", "IoT", "Urban", "Environment"],
    },
    {
      title: "Connected Exercise Equipment",
      description: "Create exercise equipment that tracks workouts and provides feedback on form and performance.",
      tags: ["Advanced", "IoT", "Fitness", "Health"],
    },
    {
      title: "Smart Trash Sorting System",
      description: "Develop a waste bin that automatically sorts recyclables, compostables, and trash.",
      tags: ["Advanced", "IoT", "Recycling", "Environment"],
    },
    {
      title: "Parking Space Availability System",
      description: "Create a network of sensors that track and display available parking spaces in real-time.",
      tags: ["Intermediate", "IoT", "Urban", "Transportation"],
    },
    {
      title: "Connected Appliance Monitor",
      description: "Build a system that monitors the energy usage and performance of home appliances.",
      tags: ["Intermediate", "IoT", "Energy", "Home"],
    },
    {
      title: "Smart Window Controller",
      description: "Develop a system that automatically opens and closes windows based on weather and air quality.",
      tags: ["Intermediate", "IoT", "Home", "Climate"],
    },
    {
      title: "Soil Quality Monitoring System",
      description: "Create sensors that monitor soil health metrics for optimal agricultural production.",
      tags: ["Intermediate", "IoT", "Agriculture", "Monitoring"],
    },
    {
      title: "Connected Medication Dispenser",
      description: "Build a device that dispenses medications on schedule and alerts caregivers if doses are missed.",
      tags: ["Advanced", "IoT", "HealthTech", "Medication"],
    },
    {
      title: "Smart Classroom Attendance System",
      description: "Develop an automated attendance tracking system using RFID or facial recognition.",
      tags: ["Intermediate", "IoT", "Education", "Automation"],
    },
    {
      title: "Water Quality Monitoring Network",
      description: "Create a network of sensors to monitor water quality in lakes, rivers, or municipal systems.",
      tags: ["Advanced", "IoT", "Environment", "Water"],
    },
    {
      title: "Connected Baby Monitor",
      description:
        "Build an advanced baby monitor with breathing monitoring, sleep tracking, and environmental sensors.",
      tags: ["Intermediate", "IoT", "Parenting", "Monitoring"],
    },
    {
      title: "Smart Locker System",
      description: "Develop a secure locker system with digital access control and usage tracking.",
      tags: ["Intermediate", "IoT", "Security", "Access"],
    },
    {
      title: "Connected Thermostat with Occupancy Detection",
      description: "Create a thermostat that adjusts temperature based on room occupancy and user preferences.",
      tags: ["Intermediate", "IoT", "Energy", "Home"],
    },
    {
      title: "Flood Detection and Warning System",
      description: "Build a network of sensors to detect rising water levels and provide early flood warnings.",
      tags: ["Advanced", "IoT", "Safety", "Environment"],
    },
    {
      title: "Smart Retail Shelf System",
      description: "Develop shelves that track inventory levels and customer interactions with products.",
      tags: ["Advanced", "IoT", "Retail", "Analytics"],
    },
    {
      title: "Connected Livestock Monitoring",
      description: "Create a system to monitor the health and location of farm animals.",
      tags: ["Advanced", "IoT", "Agriculture", "Monitoring"],
    },
    {
      title: "Smart Mailbox",
      description: "Build a mailbox that notifies you when mail arrives and monitors package deliveries.",
      tags: ["Beginner", "IoT", "Home", "Notification"],
    },
    {
      title: "Connected Sports Equipment",
      description: "Develop sports equipment with embedded sensors to track performance metrics.",
      tags: ["Advanced", "IoT", "Sports", "Performance"],
    },
  ],
}

