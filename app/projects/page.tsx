'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Rocket, Briefcase, Globe, Zap, BookOpen, TrendingUp, ShoppingCart, Video, Shield, MessageSquare, Activity, Utensils } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: t('projects.filter.all'), count: 15 },
    { id: 'ai', label: 'AI & ML', count: 3 },
    { id: 'saas', label: 'SaaS', count: 4 },
    { id: 'web', label: t('projects.filter.web'), count: 8 }
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      category: "web",
      description: "Modern, responsive portfolio website with multi-language support (English, Bengali, Hindi), dark/light theme toggle, and stunning animations. Built with Next.js 15 and features glass morphism design, interactive mouse trails, and smooth page transitions.",
      gradient: "from-purple-600 to-pink-400",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/sayed-tauhidul-islam/My_Portfolio2",
      live: "#",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Online Food Court",
      category: "web",
      description: "Complete online food ordering system with restaurant menus, cart functionality, order management, and user authentication. Features responsive design and MySQL database integration.",
      gradient: "from-orange-600 to-red-400",
      tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      github: "https://github.com/sayed-tauhidul-islam/Online_Food_Court",
      live: "#",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Study Abroad Platform",
      category: "web",
      description: "Educational platform for international students with university listings, application management, course information, and student resources. Built with modern Laravel framework and Tailwind CSS.",
      gradient: "from-blue-600 to-indigo-400",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "PHP", "JavaScript"],
      github: "https://github.com/sayed-tauhidul-islam/Study_in_Abroad",
      live: "#",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "AI DocuChat SaaS",
      category: "ai",
      description: "Enterprise document analysis platform using RAG technology. Users upload PDFs and interact via intelligent chat. Built for 10K+ concurrent users with Redis caching and PostgreSQL.",
      gradient: "from-blue-600 to-cyan-400",
      tags: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis", "Docker"],
      github: "#",
      live: "#",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "TaskFlow Pro",
      category: "saas",
      description: "Real-time project management SaaS with Kanban boards, time tracking, team collaboration, and Stripe payment integration. Features real-time updates via WebSockets.",
      gradient: "from-purple-600 to-pink-400",
      tags: ["React", "Next.js", "Laravel", "MySQL", "Tailwind", "Stripe"],
      github: "#",
      live: "#",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack marketplace with vendor dashboard, inventory management, order tracking, payment gateway, and AWS S3 for image storage. Supports multiple vendors.",
      gradient: "from-green-600 to-teal-400",
      tags: ["PHP", "Laravel", "Vue.js", "MySQL", "Stripe", "AWS S3"],
      github: "#",
      live: "#",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "AI Content Generator",
      category: "ai",
      description: "Marketing content creation tool powered by GPT-4. Generates blog posts, social media content, SEO-optimized articles, and marketing copy with tone customization.",
      gradient: "from-orange-600 to-yellow-400",
      tags: ["TypeScript", "Node.js", "OpenAI", "MongoDB", "React", "Express"],
      github: "#",
      live: "#",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Learning Management System",
      category: "web",
      description: "Complete LMS with course creation, student enrollment, video hosting, interactive quizzes, progress tracking, certificates, and payment processing.",
      gradient: "from-red-600 to-pink-400",
      tags: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Celery"],
      github: "#",
      live: "#",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      category: "saas",
      description: "Real-time business intelligence dashboard with custom reporting, data visualization using D3.js, and export capabilities. Processes millions of data points.",
      gradient: "from-indigo-600 to-blue-400",
      tags: ["React", "D3.js", "Node.js", "GraphQL", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Video Streaming Platform",
      category: "web",
      description: "Netflix-like streaming service with video transcoding, adaptive bitrate streaming, user subscriptions, watch history, and recommendation engine.",
      gradient: "from-pink-600 to-rose-400",
      tags: ["Next.js", "Node.js", "MongoDB", "AWS S3", "FFmpeg", "Stripe"],
      github: "#",
      live: "#",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Healthcare Portal",
      category: "web",
      description: "HIPAA-compliant patient management system with appointment scheduling, telemedicine, electronic health records, prescription management, and secure messaging.",
      gradient: "from-teal-600 to-green-400",
      tags: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io", "AWS"],
      github: "#",
      live: "#",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Cybersecurity Dashboard",
      category: "saas",
      description: "Network security monitoring platform with threat detection, vulnerability scanning, real-time alerts, compliance reporting, and incident response automation.",
      gradient: "from-red-600 to-orange-400",
      tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "React", "Docker"],
      github: "#",
      live: "#",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "AI Chatbot Platform",
      category: "ai",
      description: "Conversational AI platform for businesses. Multi-language support, sentiment analysis, CRM integration, and analytics dashboard. Handles 1M+ conversations monthly.",
      gradient: "from-cyan-600 to-blue-400",
      tags: ["Python", "TensorFlow", "FastAPI", "MongoDB", "React", "Docker"],
      github: "#",
      live: "#",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Social Media Dashboard",
      category: "saas",
      description: "Multi-platform social media management tool with post scheduling, analytics, engagement tracking, and AI-powered content suggestions.",
      gradient: "from-violet-600 to-purple-400",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "OpenAI", "Tailwind"],
      github: "#",
      live: "#",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Restaurant POS System",
      category: "web",
      description: "Point of sale system for restaurants with order management, kitchen display, inventory tracking, staff management, and sales analytics.",
      gradient: "from-amber-600 to-orange-400",
      tags: ["React", "Laravel", "MySQL", "Socket.io", "Tailwind", "Stripe"],
      github: "#",
      live: "#",
      icon: <Utensils className="w-6 h-6" />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-cyan-900">
      <AnimatedBackground />
      <MouseTrail />
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              {t('projects.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              {t('projects.subtitle')}
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'glass border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
              >
                {cat.label} <span className="text-xs opacity-75">({cat.count})</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-6 rounded-2xl glass border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                    {/* Background Gradient */}
                    <motion.div
                      animate={{
                        scale: hoveredCard === index ? 1.2 : 1,
                        opacity: hoveredCard === index ? 0.2 : 0.1,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-3xl -z-10`}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 rounded-full glass text-xs text-cyan-400 border border-slate-700"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1 rounded-full glass text-xs text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg glass border border-slate-700 hover:border-cyan-500 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        {t('projects.viewCode')}
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live !== '#' ? project.live : project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        {project.live !== '#' ? t('projects.viewProject') : t('projects.viewCode')}
                      </motion.a>
                    </div>

                    {/* Hover Shimmer Effect */}
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: hoveredCard === index ? '200%' : '-100%' }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg">No projects found in this category.</p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-slate-400 mb-6">Interested in working together?</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all shadow-lg shadow-cyan-500/50"
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
