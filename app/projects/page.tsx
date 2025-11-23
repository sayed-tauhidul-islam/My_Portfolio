'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, Rocket, Briefcase, Globe, Zap, BookOpen, TrendingUp, ShoppingCart, Video, Shield, Heart } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "AI DocuChat SaaS",
      category: "ai",
      description: "Enterprise document analysis platform using RAG technology. Users upload PDFs and interact via intelligent chat. Built for 10K+ concurrent users with Redis caching and PostgreSQL.",
      image: "from-blue-600 to-cyan-400",
      tags: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis", "Docker"],
      github: "#",
      live: "#",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "TaskFlow Pro",
      category: "saas",
      description: "Real-time project management SaaS with Kanban boards, time tracking, team collaboration, and Stripe payment integration. Features real-time updates via WebSockets.",
      image: "from-purple-600 to-pink-400",
      tags: ["React", "Next.js", "Laravel", "MySQL", "Tailwind", "Stripe"],
      github: "#",
      live: "#",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack marketplace with vendor dashboard, inventory management, order tracking, payment gateway, and AWS S3 for image storage. Supports multiple vendors.",
      image: "from-green-600 to-teal-400",
      tags: ["PHP", "Laravel", "Vue.js", "MySQL", "Stripe", "AWS S3"],
      github: "#",
      live: "#",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "AI Content Generator",
      category: "ai",
      description: "Marketing content creation tool powered by GPT-4. Generates blog posts, social media content, SEO-optimized articles, and marketing copy with tone customization.",
      image: "from-orange-600 to-yellow-400",
      tags: ["TypeScript", "Node.js", "OpenAI", "MongoDB", "React", "Express"],
      github: "#",
      live: "#",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Learning Management System",
      category: "web",
      description: "Complete LMS with course creation, student enrollment, video hosting, interactive quizzes, progress tracking, certificates, and payment processing.",
      image: "from-red-600 to-pink-400",
      tags: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Celery"],
      github: "#",
      live: "#",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      category: "web",
      description: "Real-time business intelligence dashboard with custom reporting, data visualization using D3.js, and export capabilities. Processes millions of data points.",
      image: "from-indigo-600 to-blue-400",
      tags: ["React", "D3.js", "Node.js", "GraphQL", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Video Streaming Platform",
      category: "web",
      description: "Netflix-like streaming service with video transcoding, adaptive bitrate streaming, user subscriptions, watch history, and recommendation engine.",
      image: "from-pink-600 to-rose-400",
      tags: ["Next.js", "Node.js", "MongoDB", "AWS S3", "FFmpeg", "Stripe"],
      github: "#",
      live: "#",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Healthcare Portal",
      category: "web",
      description: "HIPAA-compliant patient management system with appointment scheduling, medical records, telemedicine integration, and prescription management.",
      image: "from-teal-600 to-cyan-400",
      tags: ["React", "Laravel", "MySQL", "WebRTC", "AWS", "Docker"],
      github: "#",
      live: "#",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Cybersecurity Dashboard",
      category: "web",
      description: "Network monitoring and threat detection system with real-time alerts, log analysis, vulnerability scanning, and compliance reporting.",
      image: "from-slate-600 to-gray-400",
      tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Elasticsearch", "Docker"],
      github: "#",
      live: "#",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "AI Chatbot Platform",
      category: "ai",
      description: "White-label chatbot solution with natural language processing, multi-language support, sentiment analysis, and CRM integration using LangChain.",
      image: "from-violet-600 to-purple-400",
      tags: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL", "React"],
      github: "#",
      live: "#",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Social Media Dashboard",
      category: "saas",
      description: "Multi-platform social media management tool with post scheduling, analytics, engagement tracking, and AI-powered content suggestions.",
      image: "from-blue-500 to-indigo-500",
      tags: ["Next.js", "Node.js", "MongoDB", "Redis", "OpenAI", "Tailwind"],
      github: "#",
      live: "#",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Restaurant POS System",
      category: "web",
      description: "Point of sale system for restaurants with table management, kitchen display system, inventory tracking, and reporting dashboard.",
      image: "from-amber-600 to-orange-400",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "Express", "PWA"],
      github: "#",
      live: "#",
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'saas', label: 'SaaS' },
    { id: 'web', label: 'Web Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <MouseTrail />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my work across web development, AI integration, and SaaS solutions. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className={`h-48 bg-gradient-to-br ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  <div className="relative text-white z-10">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all" 
                        aria-label="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.live} 
                        className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all" 
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
