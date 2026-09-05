/**
 * ============================================================================
 *  SITE CONTENT — edit this file to update almost everything on the site.
 * ============================================================================
 *  This is the ONLY file most people need to touch. It holds your name,
 *  bio, skills, experience, projects, certifications, education and
 *  contact details. main.js reads this object and builds the page.
 *
 *  Notes:
 *  - Keep the structure (keys) the same; only change the values.
 *  - For icons, use any short label from the ICONS map in js/main.js,
 *    or leave "icon" blank to fall back to a default glyph.
 *  - Set "featured: true" on a project to add a "Featured" tag.
 * ============================================================================
 */

window.SITE_CONTENT = {

  // ---------------------------------------------------------------------
  // META — used in the browser tab, social previews and footer
  // ---------------------------------------------------------------------
  meta: {
    siteTitle: "Lalit Joshi — AEM Developer & Software Engineer",
    description: "Portfolio of Lalit Joshi, an AEM / Java full-stack developer specializing in Adobe Experience Manager, headless CMS and cloud-native delivery.",
    themeColor: "#0A2540"
  },

  // ---------------------------------------------------------------------
  // PERSONAL / HERO
  // ---------------------------------------------------------------------
  personal: {
    name: "Lalit Joshi",
    initials: "LJ",
    role: "AEM Developer & Software Engineer",
    tagline: "I design and build content platforms on Adobe Experience Manager — from component architecture to cloud delivery.",
    location: "Pune, Maharashtra, India",
    yearsExperience: "3+",
    availability: "Open to new opportunities",
    email: "lalitjoshi0726@gmail.com",
    phone: "+91 7249271399",
    resumeFile: "assets/resume.pdf",
    socials: {
      github: "https://github.com/LalitJoshi25",
      linkedin: "https://www.linkedin.com/in/lalit-joshi2507/",
      naukri: "https://www.naukri.com/mnjuser/profile?id=&altresid",
      twitter: ""
    }
  },

  // ---------------------------------------------------------------------
  // ABOUT
  // ---------------------------------------------------------------------
  about: {
    paragraphs: [
      "I'm a software engineer who has spent the last three years building enterprise websites and digital experience platforms on Adobe Experience Manager (AEM), backed by a solid Java foundation.",
      "My work sits at the intersection of content authoring and engineering: I build component libraries, integrate headless content delivery, and keep large AEM instances fast, secure and easy for marketing teams to use.",
      "Outside of AEM, I care about clean API design, CI/CD pipelines that don't get in anyone's way, and writing code that the next developer can actually understand."
    ],
    facts: [
      { label: "Based in", value: "Pune, India" },
      { label: "Experience", value: "3+ years" },
      { label: "Focus", value: "AEM · Java · Cloud" },
      { label: "Status", value: "Open to work" }
    ]
  },

  // ---------------------------------------------------------------------
  // SKILLS — grouped into categories, rendered as tag chips
  // ---------------------------------------------------------------------
  skillGroups: [
    {
      category: "AEM / CMS",
      skills: ["AEM 6.5 / Cloud Service", "Sling Models", "HTL (Sightly)", "OSGi Services", "Content Fragments", "Experience Fragments", "Dispatcher", "AEM Forms", "Sling Content Distribution"]
    },
    {
      category: "Languages",
      skills: ["Java", "JavaScript / TypeScript", "HTL", "SQL", "Groovy"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML5 & CSS3", "SCSS", "Webpack", "Core Components"]
    },
    {
      category: "Backend & APIs",
      skills: ["Spring Boot", "REST / GraphQL", "Apache Sling", "JCR / Oak"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AEM as a Cloud Service", "Adobe Cloud Manager", "AWS", "Git"]
    },
    {
      category: "Testing & Tools",
      skills: ["JUnit", "Maven", "Postman", "JIRA", "Confluence"]
    }
  ],

  // ---------------------------------------------------------------------
  // EXPERIENCE — most recent first
  // ---------------------------------------------------------------------
  experience: [
    {
      role: "Programmer Analyst",
      company: "Cognizant",
      period: "Feb 2026 — Present",
      location: "Pune, India",
      points: [
        "Upgraded the SDL Translation Connector from v1.2.9 to v1.9.18 on AEM as a Cloud Service, resolving deprecated APIs and modernizing multilingual MSM workflows.",
        "Owned end-to-end delivery of custom Sling Servlets, OSGi bundles and Sling Model Exporters integrating AWS DynamoDB and Coveo with the Apache Jackrabbit Oak repository.",
        "Built a production-ready AEM Weather component from scratch, integrating the Open-Meteo REST API with thread-safe caching and graceful fallback handling.",
        "Applied AI-native development practices with Claude Code, Cursor and GitHub Copilot across code generation, debugging and testing, boosting delivery speed and code quality."
      ]
    },
    {
      role: "Associate Engineer",
      company: "Avalara Technologies",
      period: "Apr 2023 — Jan 2026",
      location: "Pune, India",
      points: [
        "Built reusable AEM components, editable templates and OSGi services powering scalable features across Avalara's enterprise websites.",
        "Led the migration of a legacy AEM platform to a new MSM-based architecture, rolling out 500+ pages across multiple regional sites.",
        "Proposed and implemented an Experience Fragment-based header/footer/banner system, centralizing content management across all regional websites.",
        "Developed a custom Page Property Updater using Sling Servlets, HTL and JCR APIs, automating bulk metadata updates and cutting manual authoring effort."
      ]
    }
  ],

  // ---------------------------------------------------------------------
  // PROJECTS
  // ---------------------------------------------------------------------
  projects: [
    {
      title: "Multi-Brand AEMaaCS Platform",
      summary: "A component-driven AEM as a Cloud Service platform powering 6 regional marketing sites from one shared codebase.",
      stack: ["AEM Cloud Service", "Sling Models", "HTL", "Core Components", "Cloud Manager"],
      featured: true,
      links: { github: "#", demo: "" }
    },
    {
      title: "WYSIWYG Web Application with Headless AEM",
      summary: "Automated headless AEM page creation with Node.js, AWS Lambda, and API Gateway, eliminating manual authoring and reducing SLA delays.",
      stack: ["AEM", "JCR", "Node.JS", "AWS Lambda", "S3"],
      featured: true,
      links: { github: "#", demo: "" }
    },
    {
      title: "AEM Custom Utility– Page Property Updater",
      summary: "Developed a custom AEM utility with a Sling Servlet and Granite UI console, automating bulk page updates from Excel uploads and reducing manual effort for content teams.",
      stack: ["Sling Servlet", "Granite UI", "HTL", "ClientLibs", "JavaScript", "JCR APIs"],
      featured: false,
      links: { github: "https://github.com/your-username/aem-osgi-toolkit", demo: "" }
    },
    {
      title: "CI/CD Pipeline for AEM Cloud Manager",
      summary: "Automated build, test and deployment pipeline templates that cut manual release steps and standardized environments.",
      stack: ["Cloud Manager", "Jenkins", "Maven", "Git"],
      featured: false,
      links: { github: "https://github.com/your-username/aem-cicd-pipeline", demo: "" }
    },
    {
      title: "Personal Finance Tracker",
      summary: "A side project: a Spring Boot + React app for tracking expenses, with JWT auth and exportable monthly reports.",
      stack: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      featured: false,
      links: { github: "https://github.com/your-username/finance-tracker", demo: "" }
    },
    {
      title: "AEM Performance Audit Toolkit",
      summary: "A CLI tool that crawls an AEM site, flags render-blocking client libs and generates a dispatcher-caching report.",
      stack: ["Node.js", "AEM", "Dispatcher"],
      featured: false,
      links: { github: "https://github.com/your-username/aem-perf-audit", demo: "" }
    }
  ],

  // ---------------------------------------------------------------------
  // CERTIFICATIONS
  // ---------------------------------------------------------------------
  certifications: [
    {
      name: "Adobe Certified Expert — AEM Sites Developer",
      issuer: "Adobe",
      date: "2026",
      credentialUrl: "https://certification.adobe.com/credential/verify/f01386cd-72d3-11f1-9e60-42010a400fe7"
    },
    {
      name: "Adobe Certified Professional — AEM Sites Developer",
      issuer: "Adobe",
      date: "2026",
      credentialUrl: "https://certification.adobe.com/completion/verify/0c73bc18-68db-42c3-9427-b53e352cb84e"
    },
    {
      name: "Antrophic Claude 101",
      issuer: "Antrophic",
      date: "2026",
      credentialUrl: "https://verify.skilljar.com/c/txaprg95sdga"
    }
  ],

  // ---------------------------------------------------------------------
  // EDUCATION
  // ---------------------------------------------------------------------
  education: [
    {
      degree: "B.E in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2018 — 2022",
      detail: "Graduated with distinction."
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "D.B Science College",
      period: "2017 — 2018",
      detail: "Focus on Physics, Chemistry and Mathematics."
    }
  ],

  // ---------------------------------------------------------------------
  // CONTACT FORM — see README.md for how to make this actually deliver
  // email to your inbox on GitHub Pages (Formspree setup).
  // ---------------------------------------------------------------------
  contactForm: {
    // Replace YOUR_FORM_ID with the ID Formspree gives you after you
    // create a form at https://formspree.io. Example:
    // "https://formspree.io/f/abcdwxyz"
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
  }
};
