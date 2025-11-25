'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Globe, Send, MapPin, Clock, Phone, CheckCircle, MessageSquare } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
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
      label: t('contact.info.email'),
      value: "tauhidulislam104568@gmail.com",
      link: "mailto:tauhidulislam104568@gmail.com",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contact.info.phone'),
      value: "+880 1325819600",
      link: "tel:+8801325819600",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contact.info.location'),
      value: "Dhaka, Bangladesh",
      link: null,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Availability",
      value: "Mon - Sat (9AM - 6PM)",
      link: null,
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "https://github.com/Tauhidul487", gradient: "from-slate-600 to-slate-800" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "https://www.linkedin.com/in/sayed-tauhidul-islam-078554326", gradient: "from-blue-600 to-blue-800" },
    { icon: <Twitter className="w-6 h-6" />, label: "Facebook", link: "https://www.facebook.com/Touhidulislam.104568/", gradient: "from-sky-500 to-blue-600" },
    { icon: <Globe className="w-6 h-6" />, label: "YouTube", link: "https://www.youtube.com/@Lifehacks-uz5xm", gradient: "from-cyan-500 to-teal-600" }
  ];

  const faqs = [
    {
      q: t('contact.faq.1.q'),
      a: t('contact.faq.1.a')
    },
    {
      q: t('contact.faq.2.q'),
      a: t('contact.faq.2.a')
    },
    {
      q: t('contact.faq.3.q'),
      a: t('contact.faq.3.a')
    },
    {
      q: t('contact.faq.4.q'),
      a: t('contact.faq.4.a')
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
              {t('contact.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              {t('contact.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-8 rounded-2xl glass border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400"
                  >
                    <MessageSquare className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-slate-400 mb-2 text-sm">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass border border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-slate-400 mb-2 text-sm">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass border border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-slate-400 mb-2 text-sm">{t('contact.form.subject')}</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass border border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                      placeholder="Project Inquiry"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-slate-400 mb-2 text-sm">{t('contact.form.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg glass border border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        {t('contact.form.sending')}
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        {t('contact.form.success')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Info & Social */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="block p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all group"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white mb-3 shadow-lg`}
                        >
                          {info.icon}
                        </motion.div>
                        <p className="text-xs text-slate-500 mb-1">{info.label}</p>
                        <p className="text-sm text-white group-hover:text-cyan-400 transition-colors font-medium">
                          {info.value}
                        </p>
                      </a>
                    ) : (
                      <div className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white mb-3 shadow-lg`}
                        >
                          {info.icon}
                        </motion.div>
                        <p className="text-xs text-slate-500 mb-1">{info.label}</p>
                        <p className="text-sm text-white font-medium">{info.value}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-8 rounded-2xl glass border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-6">{t('contact.social.title')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-4 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        {social.icon}
                      </motion.div>
                      <span className="text-white group-hover:text-cyan-400 transition-colors font-medium">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl"
                  >
                    ⚡
                  </motion.div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Quick Response Time</h4>
                    <p className="text-slate-400 text-sm">
                      I typically respond within 24 hours. For urgent inquiries, feel free to call!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t('contact.faq.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl glass border border-slate-800 hover:border-cyan-500/50 transition-all"
                >
                  <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                  <p className="text-slate-400 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
