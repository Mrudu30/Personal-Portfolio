import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Terminal,
  ChevronRight,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';
import { useRef, useState, type ReactNode } from 'react';

const RESUME_DATA = {
  name: "MRUDANI SONGADE",
  role: "BACKEND ENGINEER | PYTHON DEVELOPER | MERN STACK",
  email: "mrudanisongade@gmail.com",
  phone: "+9173837900",
  links: {
    github: "https://github.com/Mrudu30/",
    linkedin: "https://www.linkedin.com/in/mrudani-songade-b064b5234/"
  },
  summary: "Results-driven Backend Engineer with hands-on experience in designing scalable APIs, backend architecture, and database optimization. Currently leading backend development for a core product, contributing to MVP documentation and mentoring junior developers. Strong expertise in Python, Django, Flask, PostgreSQL, and MERN stack with Next.js.",
  experience: [
    {
      company: "Codfleet",
      role: "Lead Backend Developer",
      period: "Mar 2025 - Present",
      points: [
        "Designed and implemented scalable REST APIs and backend architecture for the company’s core product.",
        "Worked extensively with PostgreSQL using pgAdmin 4 for database management and optimisation.",
        "Contributed to prototype and MVP technical documentation, defining backend workflows and system structure.",
        "Mentored and trained new developers, reducing onboarding learning time.",
        "Conducted technical brainstorming sessions and stakeholder discussions.",
        "Collaborated closely with QA and database teams to improve performance and ensure stable deployments.",
        "Optimized database queries and backend logic to enhance overall system efficiency."
      ]
    },
    {
      company: "Appeak Technologies",
      role: "Jr. QA / Project Manager",
      period: "Sept 2024 - Mar 2025",
      points: [
        "Managed project scope, timelines, and stakeholder expectations through effective communication.",
        "Developed and maintained test plans, test cases, and test automation frameworks.",
        "Identified and reported defects, ensuring a high level of product quality before release.",
        "Coordinated with clients to gather requirements and provide regular progress updates."
      ]
    },
    {
      company: "Cyblance Technologies",
      role: "Python Developer",
      period: "Jan 2024 - Aug 2024",
      points: [
        "Collaborated with design and front-end teams to implement responsive and interactive web applications using HTML, CSS, and JavaScript.",
        "Enhanced user interfaces and user experiences with modern frameworks and libraries such as React and jQuery.",
        "Integrated front-end components with back-end services and APIs built using Django and Flask.",
        "Utilized React Native to develop and enhance mobile applications, ensuring a seamless user experience across both web and mobile platforms.",
        "Experienced with version control systems (Git) and agile development methodologies."
      ]
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "SQL"],
    frameworks: ["Django", "Flask", "Next JS", "React JS", "React Native", "Express JS", "Node JS"],
    databases: ["Postgres SQL", "MYSQL", "Supabase", "Mongo DB"],
    tools: ["Git/Github", "Selenium WebDriver", "Trello", "G-Suite"]
  },
  education: [
    {
      school: "Lok Jagruti University (LJU)",
      degree: "Bachelor of Engineering (A.I. and Data Science)",
      period: "2021 - 2025",
      details: "Passed with First Class Distinction."
    },
    {
      school: "Doon School of Achievers",
      degree: "High Secondary School (11th - 12th)",
      period: "May 2019 - May 2021",
      details: "82.5% in 12th Science (PCM)"
    },
    {
      school: "Mount Carmel School",
      degree: "Primary - High School (till 10th)",
      period: "Till May 2019",
      details: "82% in 10th Boards"
    }
  ],
  certifications: [
    { name: "Selenium WebDriver 4 with Python - Zero To Hero", url: "https://www.coursera.org/account/accomplishments/specialization/9KHEBT1FN90M" },
    { name: "Building Generative AI-Powered Applications with Python", url: "https://www.coursera.org/account/accomplishments/verify/BKVATK1CVJW6" },
    { name: "Machine Learning with Python", url: "https://www.coursera.org/account/accomplishments/verify/1D7GHG3JRLA3" },
    { name: "Data Analysis Course", url: "https://www.coursera.org/account/accomplishments/verify/9YBMBPCBBFAD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
    { name: "Advanced Automation Frameworks and Continuous Integration", url: "https://www.coursera.org/account/accomplishments/verify/QK1L6DI932T6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" }
  ],
  projects: [
    {
      name: "ASL Language Detection Using CNN",
      period: "Jun 2024 - Present",
      description: "Objective: Develop a model to recognize and classify American Sign Language gestures from images. Key Achievements: Developed a robust ASL gesture detection model with high accuracy.",
      technologies: ["OpenCV", "TensorFlow", "Keras", "NumPy", "Pandas", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Car Price Predictor Model",
      period: "May 2023 - Jun 2024",
      description: "Objective: Develop a machine learning model to predict car prices based on various features.",
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Inventory Management System",
      period: "Dec 2023 - Jan 2024",
      description: "Built with Django and Python, optimized for handling large data sets efficiently.",
      technologies: ["Django", "Python"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Video Chat/Stream Application",
      period: "Nov 2023 - Jan 2024",
      description: "Utilized Agora SDK and Django to create a real-time video streaming application.",
      technologies: ["Agora SDK", "Django", "Python"],
      image: "https://images.unsplash.com/photo-1588196749597-9ff0464ac839?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Cricket Scoreboard Application",
      period: "Dec 2023 - Dec 2023",
      description: "Implemented using ReactJS for dynamic and interactive user experience.",
      technologies: ["ReactJS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Movie Recommendation Website",
      period: "Sep 2023 - Oct 2023",
      description: "Developed using Django and Python, implementing recommendation algorithms to enhance user experience.",
      technologies: ["Django", "Python", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Shopping Website",
      period: "Mar 2023 - Apr 2023",
      description: "Created using MERN stack, featuring a comprehensive e-commerce platform.",
      technologies: ["MongoDB", "Express JS", "React JS", "Node JS"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Phonebook Management System",
      period: "Jun 2022 - Jul 2022",
      description: "Implemented with SQL Oracle to manage contact information.",
      technologies: ["SQL Oracle"],
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      name: "Bank Management System",
      period: "Jun 2022 - Jun 2022",
      description: "Designed using SQL Oracle for secure and efficient financial operations.",
      technologies: ["SQL Oracle"],
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ]
};

const SectionHeader = ({ id, number, title }: { id: string, number: string, title: string }) => (
  <div id={id} className="flex items-baseline gap-3 md:gap-4 mb-8 md:mb-12 border-b border-line pb-4">
    <span className="font-mono text-accent text-xs md:text-sm">{number}</span>
    <h2 className="font-display text-3xl md:text-4xl uppercase font-bold tracking-tighter">{title}</h2>
  </div>
);

function Home() {
  const containerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-bg selection:bg-accent selection:text-black scroll-smooth overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <motion.div 
          style={{ y }}
          className="absolute -top-20 -left-20 text-[25vw] font-display font-black text-stroke leading-none whitespace-nowrap"
        >
          {RESUME_DATA.name.split(' ')[0]}
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference border-b border-line bg-bg/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-display font-bold text-xl tracking-tighter lowercase relative z-[60] hover:text-accent transition-colors">m.songade</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-accent transition-colors cursor-pointer">/ about</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-accent transition-colors cursor-pointer">/ experience</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-accent transition-colors cursor-pointer">/ skills</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-accent transition-colors cursor-pointer">/ contact</a>
          </div>

          <div className="flex items-center gap-4 relative z-[60]">
            <button 
              className="md:hidden p-2 border border-line rounded-full hover:bg-white hover:text-black transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-bg/95 border-b border-line backdrop-blur-lg flex flex-col items-center py-8 gap-6 font-mono text-xs uppercase tracking-widest z-50"
          >
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-accent transition-colors cursor-pointer">/ about</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-accent transition-colors cursor-pointer">/ experience</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-accent transition-colors cursor-pointer">/ skills</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-accent transition-colors cursor-pointer">/ contact</a>
          </motion.div>
        )}
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center mt-12 md:mt-0 mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] font-black tracking-tighter uppercase mb-6 md:mb-8">
              {RESUME_DATA.name.split(' ')[0]} <br />
              <span className="text-stroke">{RESUME_DATA.name.split(' ')[1]}</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-6 justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-accent uppercase tracking-widest mb-2 text-xs">Available for new opportunities</p>
                <p className="text-xl text-secondary leading-relaxed">
                  {RESUME_DATA.role}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="w-full md:w-auto px-8 py-4 bg-accent text-black font-bold uppercase tracking-tighter hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer">
                  Contact Me <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT / BENTO SECTION */}
        <section id="about" className="mb-24 md:mb-40 scroll-mt-32">
          <SectionHeader id="about-header" number="01" title="Background" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 md:p-10 bg-surface border border-line rounded-3xl flex flex-col justify-between">
              <p className="text-2xl md:text-3xl font-display leading-tight mb-8">
                {RESUME_DATA.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href={RESUME_DATA.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
                  <Github size={20} /> GitHub
                </a>
                <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
                  <Mail size={20} /> Email
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 md:p-8 bg-accent/10 border border-accent/20 rounded-3xl flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-display font-bold text-accent mb-2">2+</span>
                <span className="font-mono text-xs uppercase tracking-widest opacity-60 text-white">Years Experience</span>
              </div>
              <Link to="/projects" className="p-6 md:p-8 bg-surface border border-line rounded-3xl flex flex-col justify-center items-center text-center group cursor-pointer hover:border-accent transition-colors">
                <Code2 className="text-accent mb-4 group-hover:scale-110 transition-transform" size={40} />
                <span className="font-display font-medium uppercase tracking-tighter">View Projects</span>
              </Link>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-24 md:mb-40 scroll-mt-32">
          <SectionHeader id="exp-header" number="02" title="Work Experience" />
          <div className="flex flex-col border-t border-line">
            {RESUME_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                className="grid grid-cols-1 md:grid-cols-4 py-12 px-4 border-b border-line group cursor-default transition-colors"
                id={`exp-item-${idx}`}
              >
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <span className="font-mono text-sm opacity-50 uppercase tracking-widest">{exp.period}</span>
                </div>
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tighter">{exp.company}</h3>
                  <p className="text-accent font-mono text-xs uppercase tracking-widest">{exp.role}</p>
                </div>
                <div className="md:col-span-2">
                  <ul className="space-y-4">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-4 text-secondary leading-relaxed group-hover:text-white transition-colors">
                        <span className="mt-2 w-1.5 h-1.5 bg-accent shrink-0 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-24 md:mb-40 scroll-mt-32">
          <SectionHeader id="skills-header" number="03" title="Technical Arsenal" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard icon={<Terminal size={24} />} title="Languages" items={RESUME_DATA.skills.languages} />
            <SkillCard icon={<Layout size={24} />} title="Frameworks" items={RESUME_DATA.skills.frameworks} />
            <SkillCard icon={<Database size={24} />} title="Databases" items={RESUME_DATA.skills.databases} />
            <SkillCard icon={<Terminal size={24} />} title="Tools/Other" items={RESUME_DATA.skills.tools} />
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-40">
          <section id="education" className="scroll-mt-32">
            <SectionHeader id="edu-header" number="04" title="Academic Path" />
            <div className="space-y-12">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-accent/30" id={`edu-item-${idx}`}>
                  <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-accent" />
                  <span className="font-mono text-xs opacity-50 uppercase tracking-widest block mb-1">{edu.period}</span>
                  <h4 className="font-display text-xl font-bold uppercase tracking-tight">{edu.school}</h4>
                  <p className="text-secondary mt-2">{edu.degree}</p>
                  <p className="text-accent/80 font-mono text-[10px] mt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="scroll-mt-32">
            <SectionHeader id="certs-header" number="05" title="Certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <a key={idx} href={cert.url} target="_blank" rel="noopener noreferrer" className="p-4 border border-line rounded-xl hover:bg-surface transition-colors flex items-center justify-between group" id={`cert-item-${idx}`}>
                  <span className="text-secondary text-sm group-hover:text-white transition-colors max-w-[90%]">{cert.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32">
          <SectionHeader id="contact-header" number="06" title="Get in Touch" />
          <div className="p-8 md:p-24 bg-surface border border-line rounded-3xl md:rounded-[3rem] text-center">
            <h2 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Let's create <br className="md:hidden" /> something <br className="hidden md:block" />
              <span className="text-accent italic font-serif normal-case tracking-normal">extraordinary</span> together.
            </h2>
            <p className="text-secondary text-lg mb-12 max-w-lg mx-auto">
              Open for backend engineering roles, AI/ML projects, and everything in between.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href={`mailto:${RESUME_DATA.email}`} className="text-xl sm:text-2xl md:text-3xl font-display font-bold hover:text-accent transition-colors underline underline-offset-4 md:underline-offset-8 decoration-accent/30 decoration-2 break-all">
                {RESUME_DATA.email}
              </a>
              <span className="hidden md:block opacity-30">/</span>
              <a href={`tel:${RESUME_DATA.phone}`} className="text-2xl md:text-3xl font-display font-medium text-secondary hover:text-white transition-colors">
                {RESUME_DATA.phone}
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 font-mono text-[10px] uppercase tracking-widest">
          <p>© 2026 Mrudani Songade. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Settings</a>
          </div>
          <p>Built with React & Vite</p>
        </footer>
      </main>
    </div>
  );
}

function Projects() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-bg selection:bg-accent selection:text-black scroll-smooth overflow-x-hidden">
      {/* Navigation for Projects page */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference border-b border-line bg-bg/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter lowercase relative z-[60] hover:text-accent transition-colors">m.songade</Link>
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <SectionHeader id="projects-header" number="01" title="Selected Works" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="group rounded-3xl border border-line bg-surface overflow-hidden hover:border-accent transition-all flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-black relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                {project.period && <span className="font-mono text-xs opacity-50 uppercase tracking-widest block mb-2">{project.period}</span>}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">{project.name}</h3>
                <p className="text-secondary mb-6 flex-1 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-secondary border border-line">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-accent/10 text-accent font-bold uppercase tracking-tighter hover:bg-accent hover:text-black transition-colors rounded-xl flex items-center justify-center gap-2"
                >
                  View Live Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* FOOTER */}
        <footer className="mt-32 pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 font-mono text-[10px] uppercase tracking-widest">
          <p>© 2026 Mrudani Songade. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Settings</a>
          </div>
          <p>Built with React & Vite</p>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

function SkillCard({ icon, title, items }: { icon: ReactNode, title: string, items: string[] }) {
  return (
    <div className="p-8 bg-surface border border-line rounded-3xl hover:border-accent transition-all group flex flex-col h-full">
      <div className="p-3 bg-accent/10 rounded-2xl w-fit mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-auto">
        {items.map((item, idx) => (
          <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-secondary group-hover:text-white border border-transparent group-hover:border-white/10 transition-all">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
