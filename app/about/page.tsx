'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, GraduationCap, Heart, Target, Lightbulb, Trophy } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';

export default function About() {
  const timeline = [
    {
      year: "2022 - Present",
      title: "Full Stack Developer & Freelancer",
      company: "Self-Employed",
      description: "Building custom web applications, AI-powered solutions, and SaaS products for clients worldwide. Specialized in Python, PHP, and modern JavaScript frameworks."
    },
    {
      year: "2021 - 2022",
      title: "Junior Web Developer",
      company: "Tech Solutions BD",
      description: "Developed responsive websites and e-commerce platforms. Collaborated with designers and backend teams to deliver high-quality projects."
    },
    {
      year: "2020 - 2021",
      title: "Web Development Intern",
      company: "Digital Agency",
      description: "Learned professional development workflows, version control, and agile methodologies. Built landing pages and WordPress sites."
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Oriented",
      description: "I set clear objectives and work systematically to achieve them, ensuring every project meets its goals."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Thinker",
      description: "I love exploring new technologies and creative solutions to solve complex problems efficiently."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Focused",
      description: "Building products that people love to use is my priority. User experience drives every decision I make."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Quality First",
      description: "I believe in writing clean, maintainable code and delivering polished products that stand the test of time."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <MouseTrail />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Profile Image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl">
                  <Image 
                    src="/profile.png" 
                    alt="Tauhidul - Full Stack Developer" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                I&apos;m a passionate Full Stack Developer from Bangladesh with a deep love for creating elegant solutions 
                to complex problems. My journey in tech started with curiosity and has evolved into a career dedicated to 
                building impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            My Journey
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              My fascination with technology began when I built my first website at age 16. What started as a simple HTML page 
              quickly evolved into a passion for understanding how the web works. I taught myself programming through online resources, 
              countless tutorials, and lots of trial and error.
            </p>
            <p>
              After completing my computer science education, I dove headfirst into freelancing and quickly discovered my love for 
              full-stack development. The ability to bring an idea to life from concept to deployment is incredibly rewarding. 
              I&apos;ve worked on diverse projects ranging from e-commerce platforms to AI-powered applications.
            </p>
            <p>
              Today, I specialize in building scalable web applications using Python (FastAPI/Django), PHP (Laravel), and modern 
              JavaScript frameworks like React and Next.js. I&apos;m particularly excited about AI integration and how it&apos;s 
              transforming the way we build software. My recent work with RAG systems and GPT integration has been especially fulfilling.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
              or mentoring aspiring developers in my community.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors"
              >
                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-1"></div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
                  <div className="text-cyan-400 font-semibold mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-slate-400 mb-3">{item.company}</div>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Drives Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mb-8 text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/projects"
              className="px-6 py-3 rounded-lg border-2 border-slate-700 hover:border-cyan-500 text-white font-medium transition-all transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Get In Touch
            </Link>
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
