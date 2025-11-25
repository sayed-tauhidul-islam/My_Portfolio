'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart, Target, Lightbulb, Trophy, Code2, Rocket, Award, Zap } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  const timeline = [
    {
      year: "2022 - Present",
      title: "Full Stack Developer & Freelancer",
      company: "Self-Employed",
      description: "Building custom web applications, AI-powered solutions, and SaaS products for clients worldwide. Specialized in Python, PHP, and modern JavaScript frameworks.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      year: "2021 - 2022",
      title: "Junior Web Developer",
      company: "Tech Solutions BD",
      description: "Developed responsive websites and e-commerce platforms. Collaborated with designers and backend teams to deliver high-quality projects.",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      year: "2020 - 2021",
      title: "Web Development Intern",
      company: "Digital Agency",
      description: "Learned professional development workflows, version control, and agile methodologies. Built landing pages and WordPress sites.",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc'),
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('about.values.learning.title'),
      description: t('about.values.learning.desc'),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.desc'),
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, label: "Years Experience", value: "3+" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Projects Completed", value: "50+" },
    { icon: <Zap className="w-6 h-6" />, label: "Technologies", value: "60+" },
    { icon: <Trophy className="w-6 h-6" />, label: "Happy Clients", value: "30+" }
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
              {t('about.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              {t('about.subtitle')}
            </motion.p>
          </motion.div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <div className="relative group">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"
                />
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl">
                  <Image 
                    src="/profile.png" 
                    alt="Tauhidul - Full Stack Developer" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white"
              >
                Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tauhidul</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 leading-relaxed"
              >
                A passionate Full Stack Developer from Bangladesh with 3+ years of experience building modern web applications. 
                I specialize in creating scalable, user-friendly solutions using cutting-edge technologies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 leading-relaxed"
              >
                {t('about.intro')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 leading-relaxed"
              >
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects,
                or mentoring aspiring developers.
              </motion.p>

              {/* Mini Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-cyan-400">{stat.icon}</div>
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 pb-12 border-l-2 border-slate-800 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-slate-950"
                  />

                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400"
                      >
                        {item.icon}
                      </motion.div>
                      <span className="px-3 py-1 rounded-full glass text-cyan-400 text-sm font-medium border border-cyan-500/30">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-cyan-400 mb-3">{item.company}</p>
                    <p className="text-slate-400">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t('about.values.title')}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 mb-6 text-lg">Let&apos;s work together and create something amazing!</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="px-8 py-4 rounded-lg glass border-2 border-cyan-500/30 hover:border-cyan-500 text-white font-medium transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all shadow-lg shadow-cyan-500/50"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
