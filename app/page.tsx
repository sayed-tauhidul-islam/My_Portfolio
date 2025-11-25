'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { ExternalLink, Code2, Terminal, Briefcase, Award, Coffee, Users, Rocket, Star, Quote, Sparkles, Database, Cloud } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

// Counter Component for Stats
const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const { t } = useLanguage();
  
  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: 50, label: t('home.stats.projects'), suffix: "+" },
    { icon: <Coffee className="w-8 h-8" />, value: 1000, label: "Cups of Coffee", suffix: "+" },
    { icon: <Users className="w-8 h-8" />, value: 30, label: t('home.stats.clients'), suffix: "+" },
    { icon: <Award className="w-8 h-8" />, value: 3, label: t('home.stats.experience'), suffix: "+" }
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: t('home.services.web.title'),
      description: t('home.services.web.desc')
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('home.services.ui.title'),
      description: t('home.services.ui.desc')
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('home.services.mobile.title'),
      description: t('home.services.mobile.desc')
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t('home.services.api.title'),
      description: t('home.services.api.desc')
    }
  ];

  const techStack = [
    { name: "Python", color: "from-blue-400 to-yellow-400" },
    { name: "PHP", color: "from-purple-400 to-indigo-400" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", color: "from-slate-400 to-slate-600" },
    { name: "FastAPI", color: "from-teal-400 to-green-500" },
    { name: "Laravel", color: "from-red-400 to-orange-500" },
    { name: "TailwindCSS", color: "from-cyan-300 to-blue-400" },
    { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
    { name: "MongoDB", color: "from-green-400 to-emerald-600" },
    { name: "Docker", color: "from-blue-400 to-cyan-500" },
    { name: "AWS", color: "from-orange-400 to-amber-500" },
    { name: "Git", color: "from-orange-500 to-red-500" }
  ];

  const testimonials = [
    {
      name: t('home.testimonials.1.name'),
      role: t('home.testimonials.1.role'),
      content: t('home.testimonials.1.text'),
      rating: 5
    },
    {
      name: t('home.testimonials.2.name'),
      role: t('home.testimonials.2.role'),
      content: t('home.testimonials.2.text'),
      rating: 5
    },
    {
      name: t('home.testimonials.3.name'),
      role: t('home.testimonials.3.role'),
      content: t('home.testimonials.3.text'),
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-cyan-900 relative">
      <AnimatedBackground />
      <MouseTrail />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 relative flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 md:order-1"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium border border-cyan-500/20 animate-pulse-glow"
              >
                ✨ Available for hire & freelance
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Building Scalable <br />
                <TypeAnimation
                  sequence={[
                    'Web Solutions',
                    2000,
                    'AI Applications',
                    2000,
                    'SaaS Products',
                    2000,
                    'API Systems',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient"
                  repeat={Infinity}
                />
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-slate-400 leading-relaxed"
              >
                {t('home.greeting')} <span className="text-white font-semibold">Tauhidul</span>. 
                {t('home.description')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 pt-4 flex-wrap"
              >
                <Link 
                  href="/projects"
                  className="group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
                >
                  <span className="flex items-center gap-2">
                    {t('home.cta.portfolio')}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 rounded-lg glass border-2 border-cyan-500/30 hover:border-cyan-500 text-white font-medium transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {t('home.cta.hire')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative group animate-float">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"
                />
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                  <Image 
                    src="/profile.png" 
                    alt="Tauhidul - Full Stack Developer" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code2 className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Terminal className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 glass border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all text-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4 text-cyan-400"
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  <Counter end={stat.value} />{stat.suffix}
                </h3>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Specialized services to bring your ideas to life with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 glass border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('home.tech.title')}
            </h2>
            <p className="text-slate-400">Technologies I work with daily</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 rounded-full glass border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <span className={`font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-slate-400">What clients say about working with me</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
                <p className="text-slate-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 glass border-y border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.cta.work')}
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            {t('home.cta.project')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              {t('home.cta.button')}
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg glass border-2 border-cyan-500/30 hover:border-cyan-500 text-white font-medium transition-all transform hover:scale-105"
            >
              {t('home.cta.portfolio')}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
