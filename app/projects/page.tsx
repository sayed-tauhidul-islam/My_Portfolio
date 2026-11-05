'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Rocket, Globe, Zap, BookOpen, ShoppingCart, Activity, Utensils } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    { title: "PaperMind-AI", category: "ai", description: "AI-assisted research paper analysis project for understanding papers and research faster.", gradient: "from-blue-600 to-cyan-400", tags: ["Python", "AI", "Research"], github: "https://github.com/sayed-tauhidul-islam/PaperMind-AI", live: "#", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Smart-Farmer-AI", category: "ai", description: "AI project focused on helping farmers make smarter decisions.", gradient: "from-green-600 to-teal-400", tags: ["TypeScript", "AI", "Agriculture"], github: "https://github.com/sayed-tauhidul-islam/Smart-Farmer-AI", live: "#", icon: <Rocket className="w-6 h-6" /> },
    { title: "AURA_AI", category: "ai", description: "Voice-enabled, context-aware personal AI assistant for desktop workflows and task automation.", gradient: "from-violet-600 to-purple-400", tags: ["Python", "AI", "Voice Assistant"], github: "https://github.com/sayed-tauhidul-islam/AURA_AI", live: "#", icon: <Zap className="w-6 h-6" /> },
    { title: "LIFE-PILOT-AI", category: "ai", description: "AI-powered personal finance and productivity assistant with a multilingual interface.", gradient: "from-cyan-600 to-blue-400", tags: ["Laravel", "PHP", "MongoDB", "AI"], github: "https://github.com/sayed-tauhidul-islam/LIFE-PILOT-AI", live: "#", icon: <Activity className="w-6 h-6" /> },
    { title: "Student-Daily-Portal", category: "web", description: "Personalized student dashboard for schedules, assignments, attendance, results, and academic activities.", gradient: "from-blue-600 to-indigo-400", tags: ["Blade", "Student Portal"], github: "https://github.com/sayed-tauhidul-islam/Student-Daily-Portal", live: "#", icon: <BookOpen className="w-6 h-6" /> },
    { title: "RJ-Mart", category: "web", description: "A multi-vendor e-commerce platform.", gradient: "from-orange-600 to-red-400", tags: ["E-commerce", "Multi-vendor"], github: "https://github.com/sayed-tauhidul-islam/RJ-Mart", live: "#", icon: <ShoppingCart className="w-6 h-6" /> },
    { title: "Edu_Sphere", category: "web", description: "Education-focused web project.", gradient: "from-indigo-600 to-blue-400", tags: ["PHP", "Education"], github: "https://github.com/sayed-tauhidul-islam/Edu_Sphere", live: "#", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Study_in_Abroad", category: "web", description: "A platform to help students explore study-abroad opportunities.", gradient: "from-blue-600 to-indigo-400", tags: ["Laravel", "PHP"], github: "https://github.com/sayed-tauhidul-islam/Study_in_Abroad", live: "#", icon: <Globe className="w-6 h-6" /> },
    { title: "Online_Food_Court", category: "web", description: "Online food ordering project.", gradient: "from-amber-600 to-orange-400", tags: ["PHP", "MySQL", "Food Ordering"], github: "https://github.com/sayed-tauhidul-islam/Online_Food_Court", live: "#", icon: <Utensils className="w-6 h-6" /> },
    { title: "weather_forcast", category: "web", description: "A weather forecast application.", gradient: "from-cyan-600 to-blue-400", tags: ["JavaScript", "Weather"], github: "https://github.com/sayed-tauhidul-islam/weather_forcast", live: "#", icon: <Globe className="w-6 h-6" /> },
    { title: "research_AI", category: "ai", description: "AI-focused research project.", gradient: "from-purple-600 to-pink-400", tags: ["Python", "AI", "Research"], github: "https://github.com/sayed-tauhidul-islam/research_AI", live: "#", icon: <Rocket className="w-6 h-6" /> },
    { title: "skills-copilot-codespaces-vscode", category: "web", description: "A GitHub Codespaces and VS Code skills project.", gradient: "from-blue-600 to-cyan-400", tags: ["GitHub", "VS Code"], github: "https://github.com/sayed-tauhidul-islam/skills-copilot-codespaces-vscode", live: "#", icon: <Zap className="w-6 h-6" /> },
    { title: "tauhid-creative", category: "web", description: "Creative project repository (private on GitHub).", gradient: "from-violet-600 to-purple-400", tags: ["TypeScript", "Private repo"], github: "https://github.com/sayed-tauhidul-islam/tauhid-creative", live: "#", icon: <Globe className="w-6 h-6" /> },
    { title: "react-portfolio", category: "web", description: "React portfolio project repository (private on GitHub).", gradient: "from-purple-600 to-pink-400", tags: ["JavaScript", "React", "Private repo"], github: "https://github.com/sayed-tauhidul-islam/react-portfolio", live: "#", icon: <Globe className="w-6 h-6" /> },
    { title: "Portfolio Website", category: "web", description: "Personal portfolio website repository.", gradient: "from-purple-600 to-pink-400", tags: ["Portfolio", "GitHub Pages"], github: "https://github.com/sayed-tauhidul-islam/sayed-tauhidul-islam.github.io", live: "https://sayed-tauhidul-islam.github.io", icon: <Globe className="w-6 h-6" /> },
  ];

  const categories = [
    { id: 'all', label: t('projects.filter.all'), count: projects.length },
    { id: 'ai', label: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', label: t('projects.filter.web'), count: projects.filter(p => p.category === 'web').length }
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
