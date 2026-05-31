import { ZobmiData, BlogPost } from './types';

// Export the generated founder image path
export const FOUNDER_IMAGE_PATH = "/src/assets/images/founder_hero_new_1780211325490.png";

export const zobmiData: ZobmiData = {
  company: {
    name: "Zobmi Digi Services",
    tagline: "Zobmi Digi Services",
    founder: "Miracle Okpara",
    position: [
      "Cybersecurity Consultant",
      "Website Developer",
      "AI Prompt Engineer"
    ],
    mission: "To help businesses build secure, innovative, and growth-driven digital ecosystems through cutting-edge technology solutions.",
    vision: "To become Africa's trusted leader in cybersecurity, web development, AI innovation, and digital transformation.",
    description: "Zobmi Digi Services provides cybersecurity, website development, AI automation, digital transformation, and technology consulting services to businesses across Nigeria and Africa."
  },

  branding: {
    primaryColor: "#0A192F",
    secondaryColor: "#00C9A7",
    accentColor: "#2563EB",
    backgroundColor: "#F8FAFC",
    fontPrimary: "Poppins",
    fontSecondary: "Inter",
    style: "Modern, Premium, Professional, Technology-Focused"
  },

  hero: {
    headline: "Building Secure Digital Experiences for Modern Businesses",
    subHeadline: "Cybersecurity, Website Development, AI Solutions and Digital Transformation Services.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "View Portfolio"
  },

  services: [
    {
      "title": "Cybersecurity Services",
      "slug": "cybersecurity",
      "description": "Protect organizations from cyber threats and strengthen security posture.",
      "features": [
        "Security Audits & Vulnerability Assessments",
        "Penetration Testing & Threat Modeling",
        "Risk Assessment & Compliance Consulting (NDPR, ISO 27001)",
        "Security Awareness Training for Employees",
        "Incident Response Planning & Vulnerability patching",
        "Secure Code Auditing & API Security"
      ]
    },
    {
      "title": "Website Development",
      "slug": "website-development",
      "description": "Design and development of modern websites optimized for business growth.",
      "features": [
        "Corporate & Business Websites (Highly Secure & Fast)",
        "Portfolio Websites for Intellectuals & Creative Pros",
        "Custom Landing Pages with High-Conversion Layouts",
        "Full-Scale E-Commerce Solutions with local payment integrations",
        "Technical SEO Optimization & Speed Engineering",
        "Custom Web App Development (React, Next.js, Node.js)"
      ]
    },
    {
      "title": "AI Solutions",
      "slug": "ai-solutions",
      "description": "Business automation and AI implementation services.",
      "features": [
        "Advanced Prompt Engineering & LLM Orchestration",
        "Intelligent AI Chatbots for Support & Sales Pipelines",
        "Custom Business Automation & Core Tool Integrations",
        "Smarter Workflow Optimization (n8n, Zapier) to reduce overhead",
        "Content Automation & AI-Assisted Brand Copywriting"
      ]
    },
    {
      "title": "Digital Transformation",
      "slug": "digital-transformation",
      "description": "Helping organizations adopt technology strategically.",
      "features": [
        "Digital Strategy & Technology Consulting",
        "Legacy Process Digitization & System Integration",
        "Cloud Adoption & Secure Cloud Migrations (AWS, GCP, Azure)",
        "IT Infrastructure Auditing & Strategic IT Roadmap Creation"
      ]
    }
  ],

  portfolio: {
    featuredProjects: [
      {
        "id": 1,
        "title": "Secure African E-Commerce Marketplace",
        "category": "Web Development",
        "description": "A responsive, high-performance web platform utilizing modern React architecture & secured from common OWASP vulnerabilities, facilitating high volume local transactions.",
        "technologies": ["React", "Tailwind CSS", "Paystack API", "Vite"]
      },
      {
        "id": 2,
        "title": "Fintech Cybersecurity Assessment",
        "category": "Cybersecurity",
        "description": "A comprehensive security audit, network vulnerability review, and regulatory compliance consulting to prepare a high-tier fintech for licensing.",
        "technologies": ["OWASP Top 10", "Burp Suite", "NIST", "NDPR"]
      },
      {
        "id": 3,
        "title": "Custom Customer Support AI Chatbot",
        "category": "AI Solutions",
        "description": "An interactive chatbot utilizing advanced prompt engineering and local context data to answer product inquiries, lowering response latency by 85%.",
        "technologies": ["Gemini SDK", "Node.js", "Express", "Vector Embeddings"]
      },
      {
        "id": 4,
        "title": "Cloud Migration for HealthTech",
        "category": "Consulting",
        "description": "Migrating key clinical legacy databases to a secure, compliant cloud infrastructure with zero downtime and iron-clad access controls.",
        "technologies": ["Google Cloud", "Docker", "IAM Protocols", "PostgreSQL"]
      },
      {
        "id": 5,
        "title": "Corporate Portal & Custom CMS",
        "category": "Web Development",
        "description": "A highly accessible portal for an Abuja-based real estate and investment firm, optimizing localized content delivery and sales lead captures.",
        "technologies": ["React", "Framer Motion", "Tailwind CSS", "SEO Suite"]
      }
    ],

    categories: [
      "Cybersecurity",
      "Web Development",
      "AI Solutions",
      "Consulting",
      "Training"
    ]
  },

  seminars: [
    {
      "title": "Cybersecurity Awareness Seminar",
      "audience": "Students and Young Professionals",
      "topics": [
        "Phishing Attacks & Social Engineering Red Flags",
        "Password Hygiene & Multi-Factor Authentication",
        "Securing Personal Devices & Public WiFi Precautions",
        "Building a Career in Information Security in Africa"
      ]
    },
    {
      "title": "AI for Business Productivity Workshop",
      "audience": "Business Owners",
      "topics": [
        "Introduction to Generative AI & Prompt Engineering",
        "Automating Daily Business Operations",
        "AI Productivity Tools for Non-Technical Founders",
        "Ethical AI & Intellectual Property Considerations"
      ]
    },
    {
      "title": "Digital Security for Small Businesses",
      "audience": "SMEs",
      "topics": [
        "Website Security: Preventing SQLi, XSS, & Malware Injections",
        "Customer Data Protection & NDPR Compliance for Beginners",
        "Cyber Hygiene: Practical Checklists for Decentralized Teams",
        "Responding to a Security Compromise & Business Continuity"
      ]
    }
  ],

  achievements: {
    stats: [
      {
        "label": "Projects Delivered",
        "value": "100+"
      },
      {
        "label": "Businesses Assisted",
        "value": "50+"
      },
      {
        "label": "Security Assessments",
        "value": "200+"
      },
      {
        "label": "Training Participants",
        "value": "500+"
      }
    ]
  },

  blog: {
    categories: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Website Development",
      "Digital Transformation",
      "Technology Trends",
      "Business Growth"
    ]
  },

  testimonials: [
    {
      "name": "Ibrahim Adesope",
      "feedback": "Zobmi Digi Services transformed our digital presence and strengthened our security posture. Miracle Okpara's consulting is top-notch."
    },
    {
      "name": "Chidinma Okafor",
      "feedback": "We hired them to build our regional corporate portal. The speed, security, and modern aesthetics blew my entire board away!"
    },
    {
      "name": "Suleiman Bello",
      "feedback": "Our operations are now 3x more productive after Zobmi integrated tailored AI chatbots and process automation steps in our logistics flow."
    }
  ],

  targetAudience: [
    "Small Businesses",
    "Startups",
    "Corporate Organizations",
    "Government Agencies",
    "Educational Institutions",
    "NGOs",
    "Entrepreneurs"
  ],

  contact: {
    office: {
      city: "Abuja",
      state: "Federal Capital Territory",
      country: "Nigeria"
    },
    serviceAreas: [
      "Abuja",
      "Lagos",
      "Port Harcourt",
      "Enugu",
      "Kaduna",
      "Kano",
      "Remote Across Africa"
    ],
    email: "zobmiservices@gmail.com",
    website: "https://zobmidigiservices.com",
    phone: "+2349035493846"
  },

  socialMedia: {
    linkedin: "https://www.linkedin.com/in/miracle-okpara-33889b122?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    x: "https://x.com/ZobmiDigi",
    facebook: "https://www.facebook.com/share/14dhQT3FJiX/",
    instagram: "https://www.instagram.com/zobmitech?igsh=M2F1cnV6cWpqYXpo",
    youtube: "https://youtube.com/@zobmidigi?si=8zN4YPeBaL3fbhfX",
    tiktok: ""
  },

  faq: [
    {
      "question": "What services does Zobmi Digi Services provide?",
      "answer": "We provide premium Cybersecurity Consulting (audits, risk assessments, awareness), Website Development (corporate, business, portfolio, landing pages), AI Solutions (chatbots, prompt engineering, custom automations), and Strategic Digital Transformation consulting."
    },
    {
      "question": "Do you work with startups?",
      "answer": "Yes! We partner extensively with startups, micro-ventures, SMEs, and large corporate entities. We design escalatable digital ecosystems tailored to the unique economic and structural parameters of our clients."
    },
    {
      "question": "Do you provide cybersecurity training?",
      "answer": "Certainly. We conduct structural Cybersecurity Awareness Seminars, corporate training workshops, and practical defense demonstrations aimed at minimizing social engineering vulnerabilities within small business, NGO, and public sector workforces."
    },
    {
      "question": "How can we book a consultation with Miracle Okpara?",
      "answer": "You can click any 'Book Consultation' action on this page to launch our interactive consultation scheduler. Fill out your details, select your domain (Cybersecurity, Web Dev, AI, or Strategy), and our team will coordinate a meeting immediately."
    }
  ],

  seo: {
    "title": "Zobmi Digi Services | Cybersecurity, Website Development & AI Solutions",
    "description": "Helping businesses across Africa secure, build and scale their digital presence through cybersecurity, web development and AI innovation.",
    "keywords": [
      "Cybersecurity Nigeria",
      "Website Development Nigeria",
      "AI Solutions Africa",
      "Prompt Engineering",
      "Digital Transformation",
      "Technology Consulting"
    ]
  },

  "technical": {
    "framework": "React (Vite)",
    "styling": "Tailwind CSS",
    "cms": "Local Markdown Integration",
    "database": "Client-Local Memory",
    "authentication": "Secure Session State",
    "analytics": "Console Telemetry & Web Vitals",
    "features": [
      "Morning & Night Phase Toggle",
      "Interactive Consultation Booking Eng",
      "Project Filter & Search Matrix",
      "Complete Cybersecurity Checklist Tracker",
      "AI Automation Workspace Mock Calculator",
      "Full Blog & Security Dispatch Center",
      "3D Parallax & Framer Motion Flow Elements",
      "Mobile Responsive Navigation Hub"
    ]
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Securing Your SMB Against Modern Phishing: A Guide for African Businesses",
    excerpt: "SMEs in Lagos and Abuja are primary targets. Learn the essential strategies to shield your company email pipelines from social engineering scams.",
    category: "Cybersecurity",
    publishedAt: "May 25, 2026",
    author: "Miracle Okpara",
    readTime: "5 min read",
    content: `Nigeria's digital landscape is growing at an incredible speed. Unfortunately, cyber threats are growing just as fast. Small and Medium Enterprises (SMEs) are frequently targets of sophisticated phishing attacks, business email compromise (BEC), and social engineering tactics.

Why? Small businesses often think "we are too small to be targeted," leaving them with weak security hygiene, outdated software, and employees who lack security training. Here is a practical blueprint to shield your brand:

### 1. Enforce Multi-Factor Authentication (MFA)
Password leaks occur daily. MFA is your secondary moat. Even if a bad actor obtains a corporate password via a phishing link, they cannot access the account without the dynamic authenticator code. Enforce this for corporate emails, payment portals, and host panels immediately.

### 2. Spot the Common Warning Signs
Teach your teams to inspect emails carefully before clicking URLs or downloading invoices:
* **Mismatched domains:** The email says it's from "Paystack" or "yourbank", but the sender address is a suspicious gmail or outlook account, or a slightly misspelled domain.
* **Sense of extreme urgency:** Emails demanding immediate action, threats of service termination, or unusual cash payment requests.
* **Unusual requests:** An email from a manager asking you to transfer funds to a private account, or purchase crypto/gift cards.

### 3. Conduct Security Awareness Drills
Cybersecurity is not just a software problem; it's a human problem. Regular workshops and micro-trainings, like Zobmi's "Digital Security for Small Businesses", can reduce user vulnerability to clicking malicious links by up to 80%.

Secure your workflows today—it is far more cost-effective to build a shield than to pay for recovery.`
  },
  {
    id: 2,
    title: "Leveraging Prompts: Driving Team Productivity with Advanced AI Orchestration",
    excerpt: "Skip the generic inputs. Explore how professional prompt engineering saves hundreds of hours of manual copy, support, and marketing layout compilation.",
    category: "Artificial Intelligence",
    publishedAt: "May 18, 2026",
    author: "Miracle Okpara",
    readTime: "7 min read",
    content: `Artificial Intelligence is democratizing technology across Africa. However, simply using "default prompts" on tools like Gemini or Claude is like buying a supercar and only driving it in first gear. 

To unlock true efficiency, business owners and prompt developers must understand **Structured Prompt Engineering** and **Workflow Orchestration**.

### The Anatomy of a High-Impact Prompt
A professional, production-ready AI prompt has a dedicated structure:
1. **Role Definition:** Tell the AI exactly who it is (e.g., "Act as a highly experienced financial risk analyst focused on the West African market").
2. **Contextual Guardrails:** Provide concrete details about your constraints, tone, and specific regulatory environments (like NDPR).
3. **Structured Input Data:** Format input clearly using delimiters like XML tags or JSON shapes.
4. **Step-by-Step Task Outline:** Instruct the model to reason stepwise (Chain of Thought) before outputting the final solution.
5. **Output Constraints:** Mention the exact format (Markdown table, concise bullet points, or schema-compliant JSON).

### Integrating AI Into Workflows (Beyond writing text)
Real business growth happens when AI is embedded directly into your tools:
* **Support Pipelines:** Routing complex questions to support reps, while automatically answering tier-1 queries with context-aware vectors page structures.
* **Localization Engines:** Instantly translating digital campaigns into Pidgin, Yoruba, Igbo, Hausa, or French, maintaining exact context and marketing appeal.
* **Analysis Automation:** Instantly converting tabular client survey sheets into trend reports and executive summaries.

At Zobmi Digi Services, we build custom AI automation pipelines to help teams optimize hours of manual, repetitive work into single-click assets.`
  },
  {
    id: 3,
    title: "Why Speed and SEO Are Mandatory: The Core Pillars of Modern Web Development",
    excerpt: "A beautiful website is useless if it takes 10 seconds to load on mobile networks, or doesn't rank in search results. Discover our speed engineering techniques.",
    category: "Website Development",
    publishedAt: "May 10, 2026",
    author: "Miracle Okpara",
    readTime: "6 min read",
    content: `When a customer in Abuja visits your website using a 3G/4G connection, what is their experience? If your site takes more than 3 seconds to render, studies show that over 50% of those users will close the tab and check out your competitor.

In website development, visual design is only the outer layer. Under the hood, speed, mobile optimization, and SEO are what decide if your digital storefront survives.

### 1. Speed is Your Conversion Rate
Search engines prioritize user experience. Slow loads trigger search penalties. To guarantee fast loads, especially over variable mobile networks in Africa:
* **Modern Frameworks:** Use static generation or server-side hydration (like Next.js or Vite SSG) to render content with minimal JS weight.
* **Image Management:** Always serve optimized WebP formats instead of massive raw JPEGs, and set explicit aspect ratios to avoid layout shifting (CLS).
* **Lazy Loading:** Only fetch assets and libraries as they enter the browser viewport.

### 2. Search Engine Optimization (SEO) of Today
Modern SEO is not about packing keywords into paragraphs. It is about semantic accuracy, metadata relevance, structure, and accessibility:
* **Semantic HTML:** Utilizing correct header tags (\`<header>\`, \`<article>\`, \`<section>\`) so Google crawlers read your content's hierarchy.
* **Structured schema metadata:** Writing JSON-LD properties identifying your office location ('Abuja, Nigeria'), prices, and services clearly.
* **Perfect mobile viewporting:** Fluid layouts adjusting to varied mobile devices, ensuring touch targets are large, finger-friendly, and clickable.

Every line of code Zobmi Digi Services compiles is optimized for the highest-tier Speed index and perfect search discoverability.`
  },
  {
    id: 4,
    title: "Mapping Your Digital Transformation: Navigating the Cloud with Safety",
    excerpt: "Migrating from physical server towers to cloud infrastructure can seem intimidating. Here is the step-by-step security roadmap to succeed.",
    category: "Digital Transformation",
    publishedAt: "May 02, 2026",
    author: "Miracle Okpara",
    readTime: "8 min read",
    content: `For classic African institutions, NGOs, and expanding SMEs, "Digital Transformation" is often treated as a buzzword. But in reality, it's a vital survival strategy. Digitizing manual pipelines, adopting cloud environments, and streamlining communication can easily save 30-40% of standard operating costs.

However, moving to the cloud without a concrete security framework is a recipe for catastrophic data exposure. Here is how to navigate the shift securely:

### Step 1: The 'Secure by Design' Assessment
Do not migrate everything at once. Categorize your company data assets:
* **Public tier:** Static marketing collateral, brochures, and documentation.
* **Operational tier:** Inventory rosters, general communications, and staff schedules.
* **Sensitive/Regulated tier:** Customer personal identities, financial records, ledger details under NDPR.

### Step 2: The Right Identity and Access Management (IAM)
The vast majority of cloud leaks do not come from elite master hackers. They come from misconfigured permissions and weak cloud database configurations. Adopt the **Principle of Least Privilege**: nobody has access to sensitive files unless it is strictly essential to their hourly role. 

### Step 3: Localized Data Regulation Compliance
As an African business, you must operate within local legal frameworks. The **Nigeria Data Protection Regulation (NDPR)** requires robust measures for personal data storage, transmission, and processing. Your cloud strategy must incorporate end-to-end encryption in transit and at rest, and localized cloud nodes where legislation dictates.

Partner with Zobmi Digi Services to craft a risk-insulated digital roadmap, and transform your business into a resilient powerhouse.`
  }
];
