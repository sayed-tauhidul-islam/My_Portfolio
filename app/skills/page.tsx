'use client';

import React from 'react';
import { Code2, Database, Cpu, Settings, Globe, Package, Shield, Smartphone } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "React.js / Next.js", level: 92, years: "3+ years" },
        { name: "TypeScript", level: 88, years: "2+ years" },
        { name: "Tailwind CSS", level: 95, years: "3+ years" },
        { name: "Vue.js / Nuxt.js", level: 78, years: "1+ year" },
        { name: "HTML5 & CSS3", level: 98, years: "4+ years" },
        { name: "JavaScript (ES6+)", level: 90, years: "3+ years" },
        { name: "Redux / Zustand", level: 85, years: "2+ years" },
        { name: "Responsive Design", level: 95, years: "4+ years" }
      ]
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      color: "green",
      skills: [
        { name: "Python (FastAPI/Django)", level: 92, years: "3+ years" },
        { name: "PHP (Laravel)", level: 88, years: "3+ years" },
        { name: "Node.js / Express", level: 85, years: "2+ years" },
        { name: "REST & GraphQL APIs", level: 90, years: "3+ years" },
        { name: "PostgreSQL", level: 87, years: "3+ years" },
        { name: "MySQL / MariaDB", level: 90, years: "4+ years" },
        { name: "MongoDB", level: 82, years: "2+ years" },
        { name: "Redis / Caching", level: 80, years: "2+ years" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "OpenAI API / GPT Integration", level: 95, years: "2+ years" },
        { name: "LangChain / LlamaIndex", level: 88, years: "1+ year" },
        { name: "RAG (Retrieval-Augmented Generation)", level: 90, years: "1+ year" },
        { name: "Vector Databases (Pinecone/Weaviate)", level: 85, years: "1+ year" },
        { name: "Prompt Engineering", level: 92, years: "2+ years" },
        { name: "Fine-tuning & Model Training", level: 75, years: "1+ year" },
        { name: "Hugging Face Transformers", level: 78, years: "1+ year" },
        { name: "Sentiment Analysis & NLP", level: 82, years: "2+ years" }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: <Settings className="w-8 h-8" />,
      color: "orange",
      skills: [
        { name: "Docker / Docker Compose", level: 88, years: "2+ years" },
        { name: "Git / GitHub Actions", level: 93, years: "4+ years" },
        { name: "AWS (EC2, S3, Lambda)", level: 82, years: "2+ years" },
        { name: "Vercel / Netlify", level: 90, years: "3+ years" },
        { name: "Linux / Bash Scripting", level: 87, years: "3+ years" },
        { name: "CI/CD Pipelines", level: 80, years: "2+ years" },
        { name: "Nginx / Apache", level: 85, years: "2+ years" },
        { name: "Kubernetes (Basics)", level: 65, years: "6 months" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Package className="w-8 h-8" />,
      color: "cyan",
      skills: [
        { name: "VS Code / JetBrains IDEs", level: 95, years: "4+ years" },
        { name: "Postman / Insomnia", level: 92, years: "3+ years" },
        { name: "Figma / Adobe XD", level: 75, years: "2+ years" },
        { name: "Webpack / Vite", level: 80, years: "2+ years" },
        { name: "Jest / Pytest (Testing)", level: 78, years: "2+ years" },
        { name: "Stripe / Payment Integration", level: 88, years: "2+ years" },
        { name: "WebSockets / Real-time", level: 82, years: "2+ years" },
        { name: "SEO & Performance Optimization", level: 85, years: "3+ years" }
      ]
    },
    {
      category: "Mobile & Cross-Platform",
      icon: <Smartphone className="w-8 h-8" />,
      color: "pink",
      skills: [
        { name: "React Native", level: 72, years: "1+ year" },
        { name: "Progressive Web Apps (PWA)", level: 85, years: "2+ years" },
        { name: "Responsive Mobile Design", level: 90, years: "3+ years" },
        { name: "Flutter (Basics)", level: 60, years: "6 months" }
      ]
    },
    {
      category: "Security & Best Practices",
      icon: <Shield className="w-8 h-8" />,
      color: "red",
      skills: [
        { name: "Authentication (JWT, OAuth)", level: 90, years: "3+ years" },
        { name: "OWASP Security Practices", level: 82, years: "2+ years" },
        { name: "Data Encryption", level: 80, years: "2+ years" },
        { name: "API Security", level: 88, years: "3+ years" },
        { name: "Code Review & Quality", level: 85, years: "2+ years" }
      ]
    },
    {
      category: "CMS & E-Commerce",
      icon: <Globe className="w-8 h-8" />,
      color: "indigo",
      skills: [
        { name: "WordPress Development", level: 85, years: "3+ years" },
        { name: "WooCommerce", level: 80, years: "2+ years" },
        { name: "Shopify / Liquid", level: 70, years: "1+ year" },
        { name: "Headless CMS (Strapi/Contentful)", level: 78, years: "1+ year" }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Meta Front-End Developer Certificate",
    "Google IT Automation with Python",
    "Responsive Web Design (freeCodeCamp)"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <MouseTrail />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise built through years of hands-on experience, 
            continuous learning, and real-world project delivery.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-${category.color}-400`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <div>
                          <span className="text-slate-200 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-xs ml-2">({skill.years})</span>
                        </div>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${
                            category.color === 'blue' ? 'from-blue-500 to-cyan-400' :
                            category.color === 'green' ? 'from-green-500 to-emerald-400' :
                            category.color === 'purple' ? 'from-purple-500 to-pink-400' :
                            category.color === 'orange' ? 'from-orange-500 to-yellow-400' :
                            category.color === 'cyan' ? 'from-cyan-500 to-blue-400' :
                            category.color === 'pink' ? 'from-pink-500 to-rose-400' :
                            category.color === 'red' ? 'from-red-500 to-orange-400' :
                            'from-indigo-500 to-purple-400'
                          } rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Learning</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center gap-4"
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© 2025 Tauhidul. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
