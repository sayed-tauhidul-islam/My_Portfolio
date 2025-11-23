'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Globe, Send, MapPin, Clock, Phone } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "tauhidul@example.com",
      link: "mailto:tauhidul@example.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Response Time",
      value: "Within 24 hours",
      link: null
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Availability",
      value: "Open for freelance",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-slate-700"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-sky-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Portfolio",
      url: "https://tauhidul.dev",
      color: "hover:bg-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <MouseTrail />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you. 
            Let&apos;s create something amazing together!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : status === 'success' ? (
                      '✓ Message Sent!'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-cyan-400 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-white font-medium hover:text-cyan-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-lg bg-slate-950 border border-slate-800 ${social.color} transition-all group`}
                    >
                      <div className="text-slate-300 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-slate-300 group-hover:text-white font-medium transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What services do you offer?</h3>
              <p className="text-slate-400">
                I specialize in full-stack web development, AI integration, custom web applications, SaaS development, 
                API development, and technical consulting. I work with Python, PHP, JavaScript/TypeScript, and modern frameworks.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What is your typical response time?</h3>
              <p className="text-slate-400">
                I typically respond to inquiries within 24 hours on weekdays. For urgent matters, feel free to mention it 
                in your message, and I&apos;ll prioritize accordingly.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Are you available for remote work?</h3>
              <p className="text-slate-400">
                Yes! I&apos;m currently seeking remote opportunities and am experienced in working with distributed teams 
                across different time zones. I&apos;m also open to freelance projects and contract work.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What is your tech stack?</h3>
              <p className="text-slate-400">
                My primary stack includes React/Next.js for frontend, Python (FastAPI/Django) and PHP (Laravel) for backend, 
                PostgreSQL/MySQL for databases, and various AI tools like OpenAI and LangChain. I&apos;m always learning new technologies!
              </p>
            </div>
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
