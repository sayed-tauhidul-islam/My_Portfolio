'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Mail, Heart, ArrowUp } from 'lucide-react';
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
      { icon: <Github className="w-5 h-5" />, href: 'https://github.com/sayed-tauhidul-islam', label: 'GitHub' },
      { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/sayed-tauhidul-islam-078554326', label: 'LinkedIn' },
      { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/Touhidulislam.104568/', label: 'Facebook' },
      { icon: <Mail className="w-5 h-5" />, href: 'mailto:tauhidulislam104568@gmail.com', label: 'Email' }
    ]
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-cyan-500/[0.08] via-blue-500/[0.04] to-transparent" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/60 text-slate-400 transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
                    className="block text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none"
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
                  className="block break-all text-slate-400 transition-colors hover:text-cyan-300 focus-visible:text-cyan-300"
                >
                  tauhidulislam104568@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
              Khulna, Bangladesh
              </li>
              <li className="text-slate-400">
                Available for freelance
              </li>
            </ul>
            <Link href="/contact">
              <span className="mt-4 inline-flex rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-400 hover:shadow-cyan-500/40">
                {t('footer.contact.cta')}
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-6 text-center sm:flex-row sm:text-left"
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
