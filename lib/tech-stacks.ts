export type TechStack = {
  name: string
  description: string
  technologies: string[]
  learningResources: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
}

export type TechStackCategory = {
  [category: string]: TechStack[]
}

export const techStacks: TechStackCategory = {
  "Web Dev": [
    {
      name: "Modern Frontend Stack",
      description: "A powerful stack for building modern, responsive web applications with React.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      learningResources: [
        "Next.js Documentation",
        "React Official Docs",
        "Tailwind CSS Documentation",
        "TypeScript Handbook",
      ],
      difficulty: "Intermediate",
    },
    {
      name: "MERN Stack",
      description: "Full-stack JavaScript solution for building web applications.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Mongoose"],
      learningResources: [
        "MongoDB University",
        "Express.js Documentation",
        "React Official Docs",
        "Node.js Documentation",
      ],
      difficulty: "Intermediate",
    },
    {
      name: "JAMstack",
      description: "Modern web development architecture based on JavaScript, APIs, and Markup.",
      technologies: ["Next.js", "Gatsby", "Netlify/Vercel", "Headless CMS (Contentful, Sanity)", "GraphQL"],
      learningResources: ["JAMstack.org", "Netlify Documentation", "Gatsby Documentation", "GraphQL Documentation"],
      difficulty: "Intermediate",
    },
    {
      name: "Beginner Web Stack",
      description: "Simple stack for beginners to learn web development fundamentals.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap/Tailwind CSS", "GitHub Pages"],
      learningResources: ["MDN Web Docs", "freeCodeCamp", "CSS-Tricks", "JavaScript.info"],
      difficulty: "Beginner",
    },
    {
      name: "Enterprise Web Stack",
      description: "Robust stack for large-scale enterprise web applications.",
      technologies: [
        "Angular",
        "TypeScript",
        "Java Spring Boot/ASP.NET Core",
        "PostgreSQL/SQL Server",
        "Docker",
        "Kubernetes",
      ],
      learningResources: [
        "Angular Documentation",
        "TypeScript Handbook",
        "Spring Boot Documentation",
        "Docker Documentation",
      ],
      difficulty: "Advanced",
    },
  ],
  AI: [
    {
      name: "Machine Learning Stack",
      description: "Tools and frameworks for building machine learning applications.",
      technologies: ["Python", "TensorFlow/PyTorch", "Scikit-learn", "Pandas", "Jupyter Notebooks"],
      learningResources: ["TensorFlow Documentation", "PyTorch Tutorials", "Kaggle Courses", "Fast.ai"],
      difficulty: "Advanced",
    },
    {
      name: "NLP Stack",
      description: "Technologies for natural language processing applications.",
      technologies: ["Python", "Hugging Face Transformers", "spaCy", "NLTK", "OpenAI API"],
      learningResources: [
        "Hugging Face Documentation",
        "spaCy Documentation",
        "NLTK Documentation",
        "OpenAI API Documentation",
      ],
      difficulty: "Advanced",
    },
    {
      name: "Computer Vision Stack",
      description: "Tools for building computer vision applications.",
      technologies: ["Python", "OpenCV", "TensorFlow/PyTorch", "YOLO", "MediaPipe"],
      learningResources: [
        "OpenCV Documentation",
        "TensorFlow Vision Tutorials",
        "PyTorch Vision Tutorials",
        "YOLO Documentation",
      ],
      difficulty: "Advanced",
    },
    {
      name: "AI Web App Stack",
      description: "Combine AI capabilities with web applications.",
      technologies: ["Python (Flask/FastAPI)", "JavaScript/TypeScript", "React", "TensorFlow.js", "Vercel AI SDK"],
      learningResources: [
        "Flask Documentation",
        "FastAPI Documentation",
        "TensorFlow.js Documentation",
        "Vercel AI SDK Documentation",
      ],
      difficulty: "Intermediate",
    },
    {
      name: "Beginner AI Stack",
      description: "Accessible tools for beginners to start with AI development.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib/Seaborn", "Google Colab"],
      learningResources: [
        "Scikit-learn Documentation",
        "Pandas Documentation",
        "Google Colab Tutorials",
        "Kaggle Learn",
      ],
      difficulty: "Beginner",
    },
  ],
  Finance: [
    {
      name: "FinTech Stack",
      description: "Technologies for building financial technology applications.",
      technologies: ["Python", "Django/Flask", "PostgreSQL", "Redis", "Plaid API", "Stripe API"],
      learningResources: [
        "Django Documentation",
        "Plaid API Documentation",
        "Stripe API Documentation",
        "PostgreSQL Documentation",
      ],
      difficulty: "Advanced",
    },
    {
      name: "Financial Analysis Stack",
      description: "Tools for financial data analysis and visualization.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib/Plotly",
        "Jupyter Notebooks",
        "yfinance/Alpha Vantage API",
      ],
      learningResources: [
        "Pandas Documentation",
        "Plotly Documentation",
        "Alpha Vantage Documentation",
        "Quantitative Economics with Python",
      ],
      difficulty: "Intermediate",
    },
    {
      name: "Blockchain Development Stack",
      description: "Technologies for blockchain and cryptocurrency applications.",
      technologies: ["Solidity", "Web3.js/ethers.js", "Hardhat/Truffle", "React", "MetaMask"],
      learningResources: ["Solidity Documentation", "Ethereum Documentation", "Web3.js Documentation", "CryptoZombies"],
      difficulty: "Advanced",
    },
    {
      name: "Personal Finance App Stack",
      description: "Stack for building personal finance management applications.",
      technologies: ["JavaScript/TypeScript", "React/Vue.js", "Node.js", "MongoDB", "Chart.js", "Plaid API"],
      learningResources: [
        "React Documentation",
        "Node.js Documentation",
        "MongoDB Documentation",
        "Plaid API Documentation",
      ],
      difficulty: "Intermediate",
    },
  ],
  HealthTech: [
    {
      name: "Healthcare App Stack",
      description: "Technologies for building healthcare applications with privacy and security focus.",
      technologies: ["React/Angular", "Node.js/Django", "PostgreSQL", "Redis", "Docker", "HIPAA-compliant hosting"],
      learningResources: [
        "HIPAA Compliance Guidelines",
        "React Documentation",
        "PostgreSQL Documentation",
        "Docker Documentation",
      ],
      difficulty: "Advanced",
    },
    {
      name: "Health Data Analysis Stack",
      description: "Tools for analyzing and visualizing health data.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib/Plotly", "Jupyter Notebooks", "scikit-learn"],
      learningResources: [
        "Pandas Documentation",
        "Plotly Documentation",
        "scikit-learn Documentation",
        "Python for Healthcare Data Analysis",
      ],
      difficulty: "Intermediate",
    },
    {
      name: "Telemedicine Stack",
      description: "Technologies for building telemedicine and remote healthcare applications.",
      technologies: ["React/Vue.js", "Node.js/Django", "WebRTC", "Socket.io", "MongoDB/PostgreSQL", "AWS/Azure"],
      learningResources: [
        "WebRTC Documentation",
        "Socket.io Documentation",
        "React Documentation",
        "HIPAA Compliance Guidelines",
      ],
      difficulty: "Advanced",
    },
    {
      name: "Health Tracking App Stack",
      description: "Stack for building health and fitness tracking applications.",
      technologies: ["React Native/Flutter", "Firebase", "Redux/MobX", "HealthKit/Google Fit APIs", "Chart.js"],
      learningResources: [
        "React Native Documentation",
        "Flutter Documentation",
        "Firebase Documentation",
        "HealthKit Documentation",
      ],
      difficulty: "Intermediate",
    },
  ],
  IoT: [
    {
      name: "IoT Development Stack",
      description: "Technologies for building Internet of Things applications.",
      technologies: ["Arduino/Raspberry Pi", "Python/C++", "MQTT", "Node.js", "MongoDB/InfluxDB", "AWS IoT/Azure IoT"],
      learningResources: [
        "Arduino Documentation",
        "Raspberry Pi Documentation",
        "MQTT Documentation",
        "AWS IoT Documentation",
      ],
      difficulty: "Advanced",
    },
    {
      name: "Smart Home Stack",
      description: "Stack for building smart home applications and devices.",
      technologies: ["ESP8266/ESP32", "Arduino", "MQTT", "Node-RED", "Home Assistant", "Zigbee/Z-Wave"],
      learningResources: [
        "ESP32 Documentation",
        "Home Assistant Documentation",
        "MQTT Documentation",
        "Node-RED Documentation",
      ],
      difficulty: "Intermediate",
    },
    {
      name: "Industrial IoT Stack",
      description: "Technologies for industrial IoT applications with focus on reliability and security.",
      technologies: [
        "Raspberry Pi/Industrial Controllers",
        "Python/C",
        "OPC UA",
        "MQTT",
        "InfluxDB/TimescaleDB",
        "Grafana",
      ],
      learningResources: [
        "OPC UA Documentation",
        "InfluxDB Documentation",
        "Grafana Documentation",
        "Industrial IoT Security Guidelines",
      ],
      difficulty: "Advanced",
    },
    {
      name: "IoT Data Analytics Stack",
      description: "Tools for collecting, analyzing, and visualizing IoT data.",
      technologies: [
        "Python",
        "Apache Kafka/MQTT",
        "InfluxDB/TimescaleDB",
        "Pandas",
        "Grafana/Kibana",
        "TensorFlow/PyTorch",
      ],
      learningResources: [
        "Apache Kafka Documentation",
        "InfluxDB Documentation",
        "Grafana Documentation",
        "TensorFlow Documentation",
      ],
      difficulty: "Advanced",
    },
    {
      name: "Beginner IoT Stack",
      description: "Accessible tools for beginners to start with IoT development.",
      technologies: ["Arduino", "C/C++", "Blynk", "ThingSpeak", "IFTTT"],
      learningResources: [
        "Arduino Getting Started",
        "Blynk Documentation",
        "ThingSpeak Documentation",
        "IFTTT Documentation",
      ],
      difficulty: "Beginner",
    },
  ],
}

