export const config = {
    developer: {
        name: "Mohit",
        fullName: "Mohit Satija",
        title: "Full-Stack & AI Developer",
        description: "Full-Stack Developer and Machine Learning enthusiast with expertise in React.js, Node.js, Express, MongoDB, and Python. Passionate about building scalable web applications, real-time multiplayer systems, and intelligent AI models."
    },
    social: {
        github: "https://github.com/mohitsatija",
        linkedin: "https://www.linkedin.com/in/mohitsatija18/",
        leetcode: "https://leetcode.com/u/_mohitsatija/",
        geeksforgeeks: "https://www.geeksforgeeks.org/profile/mohitsatija",
        email: "mohitsatija222@gmail.com",
        phone: "+91 9875742025",
        location: "Jaipur, Rajasthan, India"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science undergraduate at JECRC University, Jaipur (2023 – 2027) with a CGPA of 7.66. I specialize in Full-Stack Web Development, Real-Time Architecture, and Machine Learning. With strong fundamentals in Data Structures & Algorithms (150+ problems solved across LeetCode and GeeksforGeeks) and recognition as Champion Tier in Google Cloud Skills Boost 'The Arcade' program, I focus on building high-performance web platforms, custom AI/RAG pipelines, and intelligent predictive models. I love turning complex challenges into seamless, scalable software."
    },
    experiences: [
        {
            position: "Full-Stack Project Lead",
            company: "ProjectHub",
            period: "2026",
            location: "Jaipur, India",
            description: "Developed a full-stack project management platform with role-based authentication, task assignment, budget monitoring, and interactive dashboards.",
            responsibilities: [
                "Developed role-based authentication and authorization using JWT and bcrypt for secure data protection",
                "Implemented project creation, task assignment, progress tracking, and budget monitoring features",
                "Optimized database queries and built interactive dashboards, improving data retrieval speed",
                "Integrated MongoDB and REST APIs for secure data storage and real-time project management"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"]
        },
        {
            position: "AI & Full-Stack Engineer",
            company: "Quizora AI",
            period: "2025 - 2026",
            location: "Jaipur, India",
            description: "Engineered an AI platform generating interactive assessments from uploaded PDFs using custom RAG pipelines and a concurrent native WebSocket multiplayer engine.",
            responsibilities: [
                "Built full-stack AI platform using React, TypeScript, Node.js, and MongoDB for PDF-based assessments",
                "Engineered custom RAG pipeline via LangChain with Google Gemini embeddings and Groq LLM",
                "Developed highly concurrent multiplayer engine using native WebSockets with live leaderboards and timers",
                "Secured backend with JWT, bcrypt, and strict Zod schema validation preventing hallucination corruption"
            ],
            technologies: ["TypeScript", "React", "Node.js", "Redis", "WebSockets", "LangChain", "Groq LLM", "Zod"]
        },
        {
            position: "Machine Learning Developer",
            company: "Diabetes Prediction Model",
            period: "2024",
            location: "Jaipur, India",
            description: "Developed a machine learning model to predict the likelihood of diabetes using patient health data, feature engineering, and classification models.",
            responsibilities: [
                "Developed a machine learning model to predict the likelihood of diabetes using patient health data",
                "Performed data preprocessing, feature selection, and exploratory data analysis using Pandas and NumPy",
                "Trained and evaluated classification models using Scikit-Learn to improve prediction accuracy",
                "Implemented performance metrics including accuracy, precision, recall, and F1-score"
            ],
            technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning"]
        },
        {
            position: "B.Tech in Computer Science",
            company: "JECRC University, Jaipur",
            period: "2023 - 2027",
            location: "Jaipur, India",
            description: "Bachelor of Technology in Computer Science (CGPA: 7.66). Solved 150+ DSA problems on LeetCode and GeeksforGeeks; Champion Tier in Google Cloud Skills Boost.",
            responsibilities: [
                "Solved 150+ DSA problems on competitive platforms including LeetCode and GeeksforGeeks",
                "Achieved Champion Tier in Google Cloud Skills Boost 'The Arcade' program (Sep 2025)",
                "Completed Machine Learning with Python certification from IBM (Feb 2025)",
                "Completed AI & ML Mentorship at Pregrad (Jul 2024 – Oct 2024)",
                "Mastered core CS foundations: DSA, OOPS, DBMS, Operating Systems, Computer Networks"
            ],
            technologies: ["C++", "Java", "DSA", "DBMS", "Operating Systems", "Computer Networks", "Google Cloud"]
        },
        {
            position: "Higher Secondary (Class XII)",
            company: "Soni Academy Sr. Sec. School (RBSE)",
            period: "2022",
            location: "Jaipur, India",
            description: "Completed Class XII Board Examinations with 85.6%, establishing strong mathematical and analytical problem-solving foundations.",
            responsibilities: [
                "Graduated with 85.6% distinction in Senior Secondary Education",
                "Built strong quantitative and analytical reasoning skills"
            ],
            technologies: ["Mathematics", "Physics", "Chemistry"]
        },
        {
            position: "Secondary School (Class X)",
            company: "Soni Academy Sr. Sec. School (RBSE)",
            period: "2020",
            location: "Jaipur, India",
            description: "Completed Class X Board Examinations with 88% distinction.",
            responsibilities: [
                "Graduated with 88% in Secondary Education"
            ],
            technologies: ["Mathematics", "Science", "Academics"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "ProjectHub",
            category: "Full-Stack / Management",
            technologies: "React.js, Node.js, Express.js, MongoDB, JWT, bcrypt, REST APIs",
            image: "/images/ProjectHub.png",
            description: "A full-stack project management platform with role-based authentication and authorization using JWT and bcrypt. Features project creation, task assignment, progress tracking, budget monitoring, and interactive dashboards.",
            link: "https://github.com/mohitsatija"
        },
        {
            id: 2,
            title: "Quizora AI",
            category: "AI / Real-Time Multiplayer",
            technologies: "TypeScript, React, Node.js, Redis, WebSockets, LangChain, Groq LLM, Gemini Embeddings, Zod",
            image: "/images/QuizoraAI.png",
            description: "An AI-powered assessment platform allowing users to generate and host interactive assessments from uploaded PDFs. Features custom RAG pipeline via LangChain, Gemini embeddings & Groq LLM, plus a native WebSocket multiplayer engine.",
            link: "https://github.com/mohitsatija"
        },
        {
            id: 3,
            title: "Diabetes Prediction Model",
            category: "Machine Learning / Healthcare",
            technologies: "Python, Scikit-Learn, Pandas, NumPy, Data Preprocessing, Classification",
            image: "/images/DiabetesPrediction.png",
            description: "A machine learning classification model predicting diabetes likelihood using patient health data. Includes robust data preprocessing, exploratory data analysis, feature selection, and evaluation across accuracy, precision, recall, and F1-score.",
            link: "https://github.com/mohitsatija"
        }
    ],
    certifications: [
        {
            title: "Machine Learning with Python",
            issuer: "IBM",
            date: "Feb 2025",
            link: "#"
        },
        {
            title: "Artificial Intelligence & Machine Learning Mentorship",
            issuer: "Pregrad",
            date: "Jul 2024 – Oct 2024",
            link: "#"
        }
    ],
    achievements: [
        {
            title: "150+ DSA Problems Solved",
            description: "Solved 150+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks",
            period: "2023 – Present"
        },
        {
            title: "Champion Tier - Google Cloud Skills Boost",
            description: "Achieved Champion Tier status in Google Cloud Skills Boost 'The Arcade' program",
            period: "Sep 2025"
        }
    ],
    contact: {
        email: "mohitsatija222@gmail.com",
        phone: "+91 9875742025",
        github: "https://github.com/mohitsatija",
        linkedin: "https://www.linkedin.com/in/mohitsatija18/",
        leetcode: "https://leetcode.com/u/_mohitsatija/",
        geeksforgeeks: "https://www.geeksforgeeks.org/profile/mohitsatija",
        resume: "/resume.pdf"
    },
    skills: {
        develop: {
            title: "FULL-STACK DEVELOPMENT",
            description: "Scalable web apps, APIs & real-time multiplayer systems",
            details: "Engineering end-to-end full-stack applications with React.js, TypeScript, Node.js, Express.js, and MongoDB. Specialized in role-based auth (JWT, bcrypt), real-time WebSocket multiplayer engines, RESTful APIs, and database query optimization.",
            tools: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "WebSockets", "REST APIs", "Vercel"]
        },
        design: {
            title: "AI & MACHINE LEARNING",
            description: "Custom RAG pipelines, predictive models & DSA problem solving",
            details: "Architecting custom Retrieval-Augmented Generation (RAG) pipelines with LangChain, Google Gemini embeddings, and Groq LLM. Developing predictive machine learning models using Scikit-Learn, Pandas, and NumPy, backed by 150+ DSA problems solved.",
            tools: ["Python", "C++", "Java", "Scikit-Learn", "NumPy", "Pandas", "LangChain", "Gemini Embeddings", "Groq LLM", "DSA"]
        }
    }
};
