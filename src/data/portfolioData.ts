export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: string;
  color: 'primary' | 'secondary';
  repoUrl?: string;
  demoUrl?: string;
  longDescription?: string;
  architectureDetails?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  area: string;
  tags: string[];
  icon: string;
  paperUrl: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  issueYear?: string;
  description: string;
  color: 'primary' | 'secondary';
  skills: string[];
  verificationUrl?: string;
  certificateUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  tags: string[];
  markerColor: 'primary' | 'secondary' | 'tertiary';
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  iconColor: 'primary' | 'secondary' | 'outline';
  skills: { name: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Rishabh Chopda',
    shortName: 'Rishabh',
    fullName: 'Rishabh Chopda',
    title: 'Computer Science & Engineering Student',
    roleTag: 'Computer Science & Engineering Student',
    positioning: 'AI/ML · Data Science · Full-Stack Development',
    headline: 'I build AI-powered applications and full-stack solutions.',
    bio: 'Computer Science & Engineering student focused on AI/ML, Data Science, NLP, and full-stack development.',
    location: 'Ahmedabad, Gujarat, India',
    statusBadge: 'Currently Building CareerCompass',
    email: 'rishabhchopda7@gmail.com',
    timeZone: 'IST (UTC +5:30) • Open for Engineering Opportunities',
    github: 'https://github.com/rishabhchopda',
    linkedin: 'https://linkedin.com/in/rishabh-chopda',
    resumeUrl: '/resume/Rishabh_Chopda_Resume.pdf',
  },

  ideSnippet: {
    fileName: 'developer_profile.py',
    pythonVersion: 'Python 3.11',
    code: `class SoftwareEngineer:
    def __init__(self):
        self.name = "Rishabh Chopda"
        self.title = "Computer Science & Engineering Student"
        self.focus = ["AI/ML", "Data Science", "NLP", "Full-Stack"]
        self.status = "Currently Building CareerCompass"

    def build_solution(self, problem):
        return intelligent_pipeline(problem, semantic_eval=True)`,
    status: 'System Status: All systems operational',
    latency: 'LATENCY: 12ms',
    tags: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Scikit-learn', 'NLP'],
  },

  about: {
    badge: 'ABOUT ME',
    title: 'About Me',
    paragraphs: [
      'I am a Computer Science & Engineering student at Indus University with hands-on experience across AI/ML, Data Science, NLP, and full-stack development. I enjoy building practical software systems that combine intelligent processing with real-world workflows. My projects include resume intelligence and job matching, AI-powered academic research, NLP-based text classification, and Android application development.',
    ],
    features: [
      'AI & Machine Learning Engineering',
      'Natural Language Processing',
      'Data Science & Analytics',
      'Full-Stack Web Development',
    ],
    highlights: [
      {
        icon: 'psychology',
        title: 'AI/ML & NLP',
        subtitle: 'Semantic search, sentence transformers, and LLM APIs',
        color: 'primary',
      },
      {
        icon: 'analytics',
        title: 'Data Science & Analytics',
        subtitle: 'EDA, TF-IDF feature extraction, and predictive modeling',
        color: 'secondary',
      },
      {
        icon: 'dns',
        title: 'Full-Stack Architecture',
        subtitle: 'Flask, FastAPI, PostgreSQL, Supabase, and REST APIs',
        color: 'primary',
      },
      {
        icon: 'rocket_launch',
        title: 'CareerCompass',
        subtitle: 'Currently building an intelligent placement management platform',
        color: 'secondary',
      },
    ],
  },

  skills: {
    badge: 'TECHNICAL PROFICIENCY',
    title: 'Skills & Technologies',
    subtitle: 'Tools and technologies I use to build applications.',
    categories: [
      {
        title: 'Programming',
        description: 'Core programming foundations for systems and software design.',
        icon: 'code',
        iconColor: 'primary',
        skills: [
          { name: 'Python', highlight: true },
          { name: 'Java' },
          { name: 'C++' },
          { name: 'C' },
          { name: 'SQL', highlight: true },
          { name: 'JavaScript' },
          { name: 'HTML' },
          { name: 'CSS' },
        ],
      },
      {
        title: 'AI / ML / Data Science',
        description: 'Machine learning, text representation, transformers, and data modeling.',
        icon: 'psychology',
        iconColor: 'secondary',
        skills: [
          { name: 'Scikit-learn', highlight: true },
          { name: 'Pandas', highlight: true },
          { name: 'NumPy' },
          { name: 'TF-IDF' },
          { name: 'NLP', highlight: true },
          { name: 'Exploratory Data Analysis' },
          { name: 'Machine Learning' },
          { name: 'Sentence Transformers', highlight: true },
          { name: 'Semantic Similarity' },
          { name: 'LLM APIs' },
          { name: 'Matplotlib' },
          { name: 'Seaborn' },
          { name: 'Plotly' },
        ],
      },
      {
        title: 'Frameworks / Backend',
        description: 'Microservices, backend servers, and web architecture.',
        icon: 'dns',
        iconColor: 'primary',
        skills: [
          { name: 'Flask', highlight: true },
          { name: 'FastAPI', highlight: true },
          { name: 'Django' },
          { name: 'REST APIs', highlight: true },
        ],
      },
      {
        title: 'Databases / Cloud',
        description: 'Relational data persistence, schema design, and hosted storage.',
        icon: 'database',
        iconColor: 'secondary',
        skills: [
          { name: 'PostgreSQL', highlight: true },
          { name: 'Supabase', highlight: true },
          { name: 'MySQL' },
          { name: 'SQLite' },
        ],
      },
      {
        title: 'Tools / AI Technologies',
        description: 'Developer environments, model inference engines, and PDF extraction.',
        icon: 'build',
        iconColor: 'outline',
        skills: [
          { name: 'Git', highlight: true },
          { name: 'GitHub', highlight: true },
          { name: 'Jupyter Notebook' },
          { name: 'Google Colab' },
          { name: 'Android Studio' },
          { name: 'PyMuPDF', highlight: true },
          { name: 'Groq API' },
          { name: 'arXiv API' },
          { name: 'Llama 3.3 70B' },
          { name: 'all-MiniLM-L6-v2', highlight: true },
        ],
      },
    ] as SkillCategory[],
  },

  experience: {
    badge: 'CAREER JOURNEY',
    title: 'Experience',
    subtitle: 'Hands-on industry and academic internships.',
    items: [
      {
        id: 'sparks-to-ideas',
        role: 'Data Science Intern',
        company: 'Sparks To Ideas',
        location: 'Ahmedabad, Gujarat',
        period: 'August–September 2026',
        bullets: [
          'Completed a Data Science internship involving data preprocessing, exploratory data analysis, visualization, machine learning workflows, NLP, and introductory web application development.',
          'Conducted exploratory data analysis and built visual telemetry dashboards using Python libraries.',
          'Developed practical machine learning workflows and text processing pipelines using NLP concepts.',
          'Built introductory web applications integrating backend logic with Django.',
        ],
        tags: [
          'Data Handling',
          'Data Preprocessing',
          'EDA',
          'Visualization',
          'Machine Learning',
          'NLP',
          'Django',
          'Web Development',
        ],
        markerColor: 'primary',
      },
      {
        id: 'indus-internship',
        role: 'Advanced AI Tools Intern',
        company: 'Indus University',
        location: 'Ahmedabad, Gujarat',
        period: '2024 · 15-day internship',
        bullets: [
          'Completed a college-led internship on Introduction and Evolution of Futuristic Technologies with Applications, gaining exposure to emerging technologies, their evolution, real-world applications, and their impact across modern industries.',
          'Investigated rapid advancements across contemporary AI tooling, automation pipelines, and enterprise applications.',
        ],
        tags: [
          'Futuristic Technologies',
          'Emerging AI',
          'Real-World Applications',
          'Industry Impact',
        ],
        markerColor: 'secondary',
      },
    ] as ExperienceItem[],
  },

  currentProject: {
    badge: 'Currently Building',
    title: 'CareerCompass',
    subtitle: 'Resume-Intelligent Job Matching and Placement Management Platform',
    status: '● Currently Building',
    description:
      'CareerCompass is a web-based career guidance and placement management platform combining resume intelligence, job matching, skill-gap analysis, learning support, applications, and recruitment workflows.',
    aiHighlightTitle: 'Resume Intelligence + Hybrid Job Matching',
    aiHighlightExplanation:
      'The platform uses structured requirement evaluation together with semantic similarity for job matching, providing comprehensive compatibility analysis and targeted skill-gap insights.',
    testStatistic: '287 Tests Passed · 0 Failures',
    capabilities: [
      'Student module',
      'Recruiter module',
      'Administrator module',
      'Resume Upload & Replacement',
      'Resume Analysis',
      'Resume AI',
      'Resume Builder',
      'Job Search & Filtering',
      'Hybrid Job Matching',
      'Skill Gap',
      'Courses',
      'Saved Jobs',
      'Application Tracking',
      'Notifications',
      'Recruiter Feedback',
      'Company Verification',
      'Application Management',
    ],
    tags: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'PostgreSQL',
      'Supabase',
      'PyMuPDF',
      'OCR',
      'Sentence Transformers',
      'Scikit-learn',
      'TF-IDF',
      'Git',
    ],
    mockup: {
      title: 'CareerCompass Hybrid Engine',
      status: 'STRUCTURED + SEMANTIC',
      matchScore: '94.2%',
      matchLabel: 'Hybrid Job Matching Score',
      testBadge: '287 Tests Passed',
      breakdown: [
        { label: 'Structured Requirements Evaluation', percentage: 96, color: 'bg-primary' },
        { label: 'Semantic Similarity (Sentence Transformers)', percentage: 92, color: 'bg-secondary' },
        { label: 'Domain Skill-Gap Coverage', percentage: 90, color: 'bg-primary-container' },
      ],
      aiNote: 'Platform combines rule-based criteria with vector embeddings to deliver precision candidate matching.',
    },
  },

  projects: {
    badge: 'PORTFOLIO WORK',
    title: 'Projects',
    subtitle: "A selection of things I've built.",
    items: [
      {
        id: 'research-assistant',
        title: 'Research Assistant',
        subtitle: 'AI-Powered Academic Research Platform',
        description:
          'An integrated web-based platform that combines NLP, Machine Learning, semantic search, document processing, and Generative AI to support academic research workflows.',
        highlights: [
          'Research-paper search & arXiv literature discovery',
          'Semantic search with all-MiniLM-L6-v2 embeddings',
          'Automated summarization & literature-review generation via Llama 3.3 70B',
          'Integrated plagiarism analysis, AI-text detection, and citation generation',
        ],
        tags: [
          'Python',
          'FastAPI',
          'HTML',
          'CSS',
          'JavaScript',
          'all-MiniLM-L6-v2',
          'Llama 3.3 70B',
          'Groq API',
          'arXiv API',
          'PyMuPDF',
          'NLP',
        ],
        icon: 'menu_book',
        color: 'primary',
        longDescription:
          'Research Assistant is an end-to-end academic companion designed to streamline the literature review process. The system connects directly with the arXiv API for academic discovery, embeds paper vectors using all-MiniLM-L6-v2 for semantic search, extracts full-text documents via PyMuPDF, and leverages Llama 3.3 70B via Groq API to perform synthesis, structured summarization, literature-review drafting, citation formatting, and content originality checking.',
        architectureDetails: [
          'Discovery: arXiv API query pipeline with metadata ingestion and keyword indexing',
          'Vector Embeddings: Local all-MiniLM-L6-v2 sentence transformers for semantic similarity',
          'Document Processing: PyMuPDF PDF parsing, chunking, and text extraction',
          'AI Synthesis: High-throughput Llama 3.3 70B inference through Groq API',
          'Backend: FastAPI asynchronous routing for low-latency multi-step document pipelines',
        ],
      },
      {
        id: 'ai-text-detector',
        title: 'AI Text Detector',
        subtitle: 'Human vs AI-Generated Text Classification',
        description:
          'An NLP and Machine Learning system designed to classify text as human-written or AI-generated.',
        highlights: [
          'Text preprocessing and Exploratory Data Analysis',
          'TF-IDF feature extraction for linguistic signal capture',
          'Logistic Regression & Naive Bayes comparative modeling',
          'Evaluation via confusion matrix, ROC analysis, and confidence scoring',
        ],
        tags: ['Python', 'Scikit-learn', 'TF-IDF', 'NLP', 'Pandas'],
        icon: 'psychology',
        color: 'secondary',
        longDescription:
          'An NLP and Machine Learning classification system engineered to discriminate between human-written and machine-generated texts. Employs comprehensive text preprocessing, statistical feature extraction via TF-IDF vectorization, and comparative model evaluation between Logistic Regression and Naive Bayes classifiers, validated through confusion matrices, ROC analysis, and real-time prediction confidence scoring.',
        architectureDetails: [
          'Preprocessing: Lowercasing, tokenization, stopword filtering, and stem/lemma normalization',
          'Feature Extraction: Term Frequency-Inverse Document Frequency (TF-IDF) n-gram vectorization',
          'Classification Models: Scikit-learn Logistic Regression and Multinomial Naive Bayes',
          'Validation: K-fold cross-validation, confusion matrices, and ROC curve diagnostics',
        ],
      },
      {
        id: 'inventory-management',
        title: 'Inventory Management System',
        subtitle: 'Odoo × Indus University Hackathon',
        description:
          'An inventory management dashboard for monitoring products, stock levels, warehouses, receipts, deliveries, transfers, and inventory analytics.',
        highlights: [
          'Product catalog and category/warehouse filtering',
          'Automated low-stock and out-of-stock monitoring',
          'Logistics tracking: pending receipts, deliveries, and scheduled transfers',
          'Analytics: category, warehouse, and stock-status distributions',
        ],
        tags: ['Python', 'Flask', 'SQLite', 'Chart.js', 'HTML', 'CSS'],
        icon: 'inventory_2',
        color: 'primary',
        longDescription:
          'Developed during the Odoo × Indus University Hackathon, this inventory management solution enables real-time tracking of warehouse logistics. It provides comprehensive visibility into stock thresholds, incoming receipts, outgoing delivery dispatches, inter-warehouse transfers, and dynamic visual analytics powered by Chart.js.',
        architectureDetails: [
          'Backend: Flask microframework with RESTful endpoints for inventory CRUD operations',
          'Database: Normalized SQLite schema with relational constraints for stock and movements',
          'Analytics Engine: Server-side aggregation queries feeding Chart.js interactive dashboards',
          'Logistics Workflows: State transitions for pending receipts, scheduled transfers, and deliveries',
        ],
      },
    ] as Project[],
  },

  research: {
    badge: 'RESEARCH',
    title: 'Research',
    subtitle: 'Academic research papers and technical project investigations.',
    papers: [
      {
        id: 'research-assistant-paper',
        title:
          'Research Assistant: An Integrated NLP and Generative AI Platform for Academic Research Support',
        subtitle: 'Academic Research Support Platform',
        description:
          'Investigates the architectural integration of Natural Language Processing, sentence transformer embeddings, and large language models (Llama 3.3 70B via Groq) to streamline paper discovery, semantic synthesis, literature reviews, and citation generation.',
        area: 'Natural Language Processing & Generative AI',
        tags: ['NLP', 'Generative AI', 'arXiv API', 'Semantic Search', 'Document Processing'],
        icon: 'description',
        paperUrl: '/research/ML_Research_Paper.pdf',
      },
      {
        id: 'careercompass-paper',
        title:
          'CareerCompass: An Integrated Resume-Intelligent Job Matching and Placement Management Platform',
        subtitle: 'Intelligent Job Matching & Placement System',
        description:
          'Presents an institutional placement management and career guidance architecture combining structured rule-based requirement verification with transformer-driven semantic similarity to optimize candidate-job matching and skill-gap identification.',
        area: 'Applied AI & Information Retrieval',
        tags: ['Resume Intelligence', 'Hybrid Job Matching', 'Sentence Transformers', 'TF-IDF', 'Placement System'],
        icon: 'article',
        paperUrl: '/research/SGP_research_paper.pdf',
      },
    ] as ResearchPaper[],
  },

  certificates: {
    badge: 'CREDENTIALS & ACHIEVEMENTS',
    title: 'Certificates & Achievements',
    subtitle: 'Verified industry certifications and simulated professional programs.',
    items: [
      {
        id: 'aws-cloud-foundations',
        title: 'AWS Academy Graduate — Cloud Foundations',
        issuer: 'AWS Academy',
        issueYear: 'Aug 31, 2026',
        description:
          'Demonstrates foundational understanding of AWS Cloud concepts, core architectural principles, compute, storage, networking, database services, and security.',
        color: 'primary',
        skills: ['Cloud Architecture', 'AWS Core Services', 'Cloud Security', 'Networking & Storage'],
        verificationUrl: 'https://www.credly.com/go/uCciN4KB',
        certificateUrl:
          '/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260831-20-7c44un.pdf',
      },
      {
        id: 'aws-ml-foundations',
        title: 'AWS Academy Graduate — Machine Learning Foundations',
        issuer: 'AWS Academy',
        issueYear: 'June 20, 2026',
        description:
          'Covers foundational machine learning concepts, data preprocessing, model selection, supervised and unsupervised learning algorithms, and AWS ML services.',
        color: 'secondary',
        skills: ['Machine Learning', 'Data Preprocessing', 'Model Selection', 'Evaluation Metrics'],
        verificationUrl: 'https://www.credly.com/go/STrPiKpa',
        certificateUrl:
          '/certificates/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_Badge_Badge20260620-32-w5dlex.pdf',
      },
      {
        id: 'aws-ml-nlp',
        title: 'AWS Academy Graduate — Machine Learning for Natural Language Processing',
        issuer: 'AWS Academy',
        issueYear: 'Aug 31, 2026',
        description:
          'Comprehensive training on NLP pipelines, tokenization, text embeddings, sequence modeling, deep learning architectures, and transformer models for text analysis.',
        color: 'primary',
        skills: ['NLP', 'Text Embeddings', 'Sequence Modeling', 'Transformers', 'Text Classification'],
        verificationUrl: 'https://www.credly.com/go/DgCUNM2X',
        certificateUrl:
          '/certificates/AWS_Academy_Graduate___Machine_Learning_for_Natural_Language_Processing___Training_Badge_Badge20260831-20-ey7hox.pdf',
      },
      {
        id: 'jpmorgan-qr',
        title: 'Quantitative Research Job Simulation',
        issuer: 'JPMorgan Chase & Co. / Forage',
        issueYear: 'July 21, 2026',
        description:
          'Completed practical quantitative research tasks involving exploratory financial data analysis, statistical model implementation, probability calculations, and risk metrics.',
        color: 'secondary',
        skills: ['Quantitative Research', 'Statistical Modeling', 'Financial Analysis', 'Python'],
        certificateUrl: '/certificates/JP%20Morgan.pdf',
      },
      {
        id: 'deloitte-da',
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte / Forage',
        issueYear: 'July 1, 2026',
        description:
          'Completed end-to-end data analytics simulation focusing on data forensic analysis, exploratory data analysis, business telemetry, dashboard design, and stakeholder presentations.',
        color: 'primary',
        skills: ['Data Analytics', 'EDA', 'Business Intelligence', 'Data Storytelling'],
        certificateUrl: '/certificates/Delloite%20Certificate.pdf',
      },
      {
        id: 'tutedude-python',
        title: 'Python Course',
        issuer: 'Tutedude',
        issueYear: 'June 5, 2026',
        description:
          'In-depth study and hands-on programming with Python, covering procedural design, object-oriented programming, data structures, algorithm implementation, and script automation.',
        color: 'secondary',
        skills: ['Python', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
        certificateUrl: '/certificates/certificate_TD-RISH-PY-1048.pdf',
      },
    ] as Certificate[],
  },

  education: {
    badge: 'ACADEMIC FOUNDATION',
    title: 'Education',
    degreeBadge: 'B.Tech Degree',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Indus University',
    location: 'Ahmedabad, Gujarat',
    period: '2023–2027',
    cgpa: '9.2+',
    status: 'Enrolled • In Progress',
    highlights: [
      'Pursuing Bachelor of Technology in Computer Science & Engineering at Indus University, Ahmedabad.',
      'Cumulative CGPA: 9.2+.',
      'Active focus on Artificial Intelligence, Machine Learning, Data Science, and Full-Stack System Architecture.',
    ],
  },

  contact: {
    badge: 'GET IN TOUCH',
    title: "Let's Build Something Together",
    subtitle:
      'Open to relevant Computer Science & Engineering opportunities, especially in Data Science, AI/ML, and Software Engineering.',
  },
};
