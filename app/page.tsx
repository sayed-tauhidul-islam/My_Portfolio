'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Code2, Terminal, Briefcase, Award, Coffee, Users, Rocket, Zap, CheckCircle, Star, Quote, TrendingUp, Heart } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';

export default function Home() {
  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: "50+", label: "Projects Completed" },
    { icon: <Coffee className="w-8 h-8" />, value: "1000+", label: "Cups of Coffee" },
    { icon: <Users className="w-8 h-8" />, value: "30+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, value: "3+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-cyan-900">
      <MouseTrail />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 animate-pulse">
                ✨ Available for hire & freelance
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Building Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                  Web & AI Solutions
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Hi, I&apos;m <span className="text-white font-semibold">Tauhidul</span>. 
                A Full Stack Engineer based in Bangladesh. I bridge the gap between complex backend logic 
                and beautiful user interfaces, specializing in Python, PHP, and Modern Web Technologies.
              </p>
              
              <div className="flex gap-4 pt-4 flex-wrap">
                <Link 
                  href="/projects"
                  className="group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
                >
                  <span className="flex items-center gap-2">
                    View My Work
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 rounded-lg border-2 border-slate-700 hover:border-cyan-500 text-white font-medium transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                  <Image 
                    src="/profile.png" 
                    alt="Tauhidul - Full Stack Developer" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.3s'}}>
                  <Terminal className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all transform hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all transform hover:scale-105">
              <div className="text-cyan-400 mb-4">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">About Me</h3>
              <p className="text-slate-400">Learn more about my background, experience, and what drives me as a developer.</p>
            </Link>

            <Link href="/projects" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all transform hover:scale-105">
              <div className="text-cyan-400 mb-4">
                <Briefcase className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">My Projects</h3>
              <p className="text-slate-400">Explore my portfolio of web applications, AI integrations, and full-stack solutions.</p>
            </Link>

            <Link href="/skills" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all transform hover:scale-105">
              <div className="text-cyan-400 mb-4">
                <Code2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Technical Skills</h3>
              <p className="text-slate-400">Discover my comprehensive skill set across frontend, backend, AI, and DevOps.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What I Do Best</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Specialized services tailored to bring your digital vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-slate-400 text-sm">Building responsive, high-performance websites and web applications with modern frameworks.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Integration</h3>
              <p className="text-slate-400 text-sm">Implementing intelligent features using OpenAI, LangChain, and custom ML solutions.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">API Development</h3>
              <p className="text-slate-400 text-sm">Creating robust RESTful and GraphQL APIs with comprehensive documentation.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SaaS Solutions</h3>
              <p className="text-slate-400 text-sm">Developing scalable software-as-a-service platforms with subscription management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
              <p className="text-slate-400">Some of my recent work that I&apos;m proud of</p>
            </div>
            <Link 
              href="/projects"
              className="px-6 py-3 rounded-lg border-2 border-slate-700 hover:border-cyan-500 text-white font-medium transition-all hidden md:block"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">AI DocuChat SaaS</h3>
                <p className="text-slate-400 text-sm mb-4">RAG-powered document analysis platform with intelligent chat capabilities.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Python</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">OpenAI</span>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">TaskFlow Pro</h3>
                <p className="text-slate-400 text-sm mb-4">Project management SaaS with real-time collaboration features.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Next.js</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Laravel</span>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-green-600 to-teal-400 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">E-Commerce Platform</h3>
                <p className="text-slate-400 text-sm mb-4">Full-featured marketplace with vendor management and payments.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Laravel</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Vue.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:hidden">
            <Link 
              href="/projects"
              className="inline-block px-6 py-3 rounded-lg border-2 border-slate-700 hover:border-cyan-500 text-white font-medium transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies I Work With</h2>
            <p className="text-slate-400">Modern tools and frameworks for building exceptional digital experiences</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "React", color: "from-blue-400 to-cyan-400" },
              { name: "Next.js", color: "from-slate-400 to-slate-200" },
              { name: "Python", color: "from-yellow-400 to-blue-500" },
              { name: "PHP", color: "from-purple-400 to-indigo-500" },
              { name: "Node.js", color: "from-green-500 to-emerald-400" },
              { name: "TypeScript", color: "from-blue-500 to-blue-600" },
              { name: "Laravel", color: "from-red-500 to-orange-500" },
              { name: "Tailwind", color: "from-cyan-400 to-teal-500" },
              { name: "PostgreSQL", color: "from-blue-600 to-indigo-600" },
              { name: "MongoDB", color: "from-green-600 to-emerald-600" },
              { name: "Docker", color: "from-blue-500 to-cyan-500" },
              { name: "AWS", color: "from-orange-500 to-yellow-500" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all text-center group cursor-pointer"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Me?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I bring more than just code to the table. Here&apos;s what sets me apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Quality Focused</h3>
              <p className="text-slate-400">
                I write clean, maintainable code following best practices. Every project is delivered with attention to detail and thoroughly tested.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Fast Delivery</h3>
              <p className="text-slate-400">
                Time is valuable. I work efficiently to meet deadlines without compromising on quality, keeping you updated throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Client Satisfaction</h3>
              <p className="text-slate-400">
                Your success is my success. I&apos;m committed to understanding your needs and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-slate-400">What people say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-6">
                &quot;Tauhidul delivered our SaaS platform ahead of schedule. His expertise in Python and React made the development process smooth and efficient.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-slate-400 text-sm">CEO, TechStart</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-6">
                &quot;Working with Tauhidul was a pleasure. His AI integration knowledge helped us implement features we thought were impossible.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-slate-400 text-sm">CTO, DataFlow</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-6">
                &quot;Excellent communication and technical skills. Tauhidul transformed our e-commerce vision into a reality that exceeded our expectations.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500"></div>
                <div>
                  <div className="text-white font-semibold">Emma Rodriguez</div>
                  <div className="text-slate-400 text-sm">Founder, ShopHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your ideas to life. Whether it&apos;s a new project or improving an existing one, I&apos;m here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
              >
                Get In Touch
              </Link>
              <Link 
                href="/projects"
                className="px-8 py-4 rounded-lg border-2 border-slate-700 hover:border-cyan-500 text-white font-medium transition-all transform hover:scale-105"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p className="mb-2">© 2025 Tauhidul. Built with Next.js & Tailwind CSS.</p>
        <p className="text-xs text-slate-700">Designed & Developed with 💙 in Bangladesh</p>
      </footer>
    </div>
  );
}
