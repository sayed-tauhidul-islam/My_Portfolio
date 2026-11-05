'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cpu, Settings, Globe, Package, Shield, Smartphone } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

// Animated Progress Bar Component
const AnimatedProgress = ({ level, inView }: { level: number; inView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  return (
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
      >
        <motion.div
          animate={{ x: [-20, 100] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  
  const skillCategories = [
    {
      category: t('skills.frontend'),
      icon: <Code2 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
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
      category: t('skills.backend'),
      icon: <Database className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
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
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
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
      category: t('skills.devops'),
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/20 to-amber-500/20",
      skills: [
        { name: "Docker / Docker Compose", level: 88, years: "2+ years" },
        { name: "Git / GitHub Actions", level: 93, years: "4+ years" },
        { name: "AWS (EC2, S3, Lambda)", level: 82, years: "2+ years" },
        { name: "CI/CD Pipelines", level: 85, years: "2+ years" },
        { name: "Nginx / Apache", level: 87, years: "3+ years" },
        { name: "Linux Server Administration", level: 90, years: "3+ years" },
        { name: "Kubernetes Basics", level: 70, years: "1+ year" },
        { name: "Monitoring (PM2, Sentry)", level: 80, years: "2+ years" }
      ]
    },
    {
      category: t('skills.tools'),
      icon: <Package className="w-8 h-8" />,
      gradient: "from-indigo-500 to-violet-500",
      bgGradient: "from-indigo-500/20 to-violet-500/20",
      skills: [
        { name: "VS Code / JetBrains IDEs", level: 95, years: "4+ years" },
        { name: "Postman / Insomnia", level: 92, years: "3+ years" },
        { name: "Figma / Design Tools", level: 75, years: "2+ years" },
        { name: "Webpack / Vite", level: 82, years: "2+ years" },
        { name: "NPM / Composer", level: 90, years: "4+ years" },
        { name: "Chrome DevTools", level: 93, years: "4+ years" },
        { name: "Jira / Linear / Trello", level: 88, years: "3+ years" },
        { name: "Slack / Discord Integration", level: 85, years: "2+ years" }
      ]
    },
    {
      category: t('skills.mobile'),
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-500/20 to-pink-500/20",
      skills: [
        { name: "React Native", level: 75, years: "1+ year" },
        { name: "Progressive Web Apps (PWA)", level: 85, years: "2+ years" },
        { name: "Responsive Mobile Design", level: 92, years: "3+ years" },
        { name: "Mobile API Optimization", level: 80, years: "2+ years" },
        { name: "App Store Deployment", level: 70, years: "1+ year" },
        { name: "Push Notifications", level: 78, years: "1+ year" },
        { name: "Offline-First Apps", level: 75, years: "1+ year" },
        { name: "Mobile Performance", level: 82, years: "2+ years" }
      ]
    },
    {
      category: "Security & Best Practices",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/20 to-orange-500/20",
      skills: [
        { name: "Authentication (JWT, OAuth)", level: 90, years: "3+ years" },
        { name: "API Security & Rate Limiting", level: 88, years: "2+ years" },
        { name: "SQL Injection Prevention", level: 92, years: "3+ years" },
        { name: "XSS & CSRF Protection", level: 87, years: "3+ years" },
        { name: "HTTPS / SSL Implementation", level: 85, years: "3+ years" },
        { name: "Data Encryption", level: 80, years: "2+ years" },
        { name: "OWASP Best Practices", level: 83, years: "2+ years" },
        { name: "Penetration Testing Basics", level: 70, years: "1+ year" }
      ]
    },
    {
      category: "CMS & E-Commerce",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/20 to-cyan-500/20",
      skills: [
        { name: "WordPress Development", level: 85, years: "3+ years" },
        { name: "WooCommerce", level: 82, years: "2+ years" },
        { name: "Shopify / Liquid", level: 75, years: "1+ year" },
        { name: "Stripe / Payment Integration", level: 90, years: "2+ years" },
        { name: "Headless CMS (Strapi/Sanity)", level: 80, years: "1+ year" },
        { name: "SEO Optimization", level: 87, years: "3+ years" },
        { name: "Google Analytics / Tag Manager", level: 83, years: "2+ years" },
        { name: "E-Commerce Analytics", level: 78, years: "2+ years" }
      ]
    }
  ];

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
              {t('skills.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              {t('skills.subtitle')}
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((cat, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`group px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-3 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                    : 'glass border border-slate-700 text-slate-400 hover:border-cyan-500/50'
                }`}
              >
                <motion.div
                  animate={{ rotate: activeCategory === index ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {cat.icon}
                </motion.div>
                <span className="hidden sm:inline">{cat.category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            {/* Category Header */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8 p-8 rounded-2xl glass border border-slate-800 relative overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].bgGradient} blur-3xl -z-10`}
              />
              
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {skillCategories[activeCategory].icon}
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {skillCategories[activeCategory].category}
                  </h2>
                  <p className="text-slate-400">
                    {skillCategories[activeCategory].skills.length} skills in this category
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills List */}
            <div className="grid gap-4">
              {skillCategories[activeCategory].skills.map((skill, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
                
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-sm text-slate-500">{skill.years}</span>
                      </div>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: inView ? 1 : 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-2xl font-bold bg-gradient-to-r ${skillCategories[activeCategory].gradient} bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <AnimatedProgress level={skill.level} inView={inView} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-slate-400 mb-6 text-lg">Want to see these skills in action?</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all shadow-lg shadow-cyan-500/50"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 rounded-lg glass border-2 border-cyan-500/30 hover:border-cyan-500 text-white font-medium transition-all"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
