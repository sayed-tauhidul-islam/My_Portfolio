'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { label: t('nav.home'), href: '/' },
      { label: t('nav.about'), href: '/about' },
      { label: t('nav.projects'), href: '/projects' },
      { label: t('nav.skills'), href: '/skills' },
      { label: t('nav.contact'), href: '/contact' }
    ],
    services: [
      { label: t('footer.services.web') },
      { label: t('footer.services.mobile') },
      { label: t('footer.services.uiux') },
      { label: t('footer.services.consulting') }
    ],
    social: [
      { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Tauhidul487', label: 'GitHub' },
      { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/sayed-tauhidul-islam-078554326', label: 'LinkedIn' },
      { icon: <Twitter className="w-5 h-5" />, href: 'https://www.facebook.com/Touhidulislam.104568/', label: 'Facebook' },
      { icon: <Mail className="w-5 h-5" />, href: 'mailto:tauhidulislam104568@gmail.com', label: 'Email' }
    ]
  };

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                Tauhidul.dev
              </motion.h3>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index} className="text-slate-400 text-sm">
                  {service.label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:tauhidulislam104568@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors block"
                >
                  tauhidulislam104568@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                Dhaka, Bangladesh
              </li>
              <li className="text-slate-400">
                Available for freelance
              </li>
            </ul>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-medium transition-all shadow-lg shadow-cyan-500/30"
              >
                {t('footer.contact.cta')}
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tauhidul. {t('footer.copyright')}
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
