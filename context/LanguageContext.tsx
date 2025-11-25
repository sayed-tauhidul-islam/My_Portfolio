'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.greeting': "Hi, I'm",
    'home.role1': 'Full Stack Developer',
    'home.role2': 'UI/UX Designer',
    'home.role3': 'Problem Solver',
    'home.description': "Passionate about creating beautiful, functional, and user-centered digital experiences. I combine creativity with technical expertise to build solutions that make a difference.",
    'home.cta.hire': 'Hire Me',
    'home.cta.portfolio': 'View Portfolio',
    'home.stats.projects': 'Projects Completed',
    'home.stats.clients': 'Happy Clients',
    'home.stats.experience': 'Years Experience',
    'home.stats.awards': 'Awards Won',
    'home.services.title': 'What I Do',
    'home.services.web.title': 'Web Development',
    'home.services.web.desc': 'Building responsive and performant web applications using modern technologies.',
    'home.services.ui.title': 'UI/UX Design',
    'home.services.ui.desc': 'Creating intuitive and beautiful user interfaces that users love.',
    'home.services.mobile.title': 'Mobile Apps',
    'home.services.mobile.desc': 'Developing cross-platform mobile applications with native performance.',
    'home.services.api.title': 'API Development',
    'home.services.api.desc': 'Designing and building robust RESTful and GraphQL APIs.',
    'home.tech.title': 'Technologies I Work With',
    'home.testimonials.title': 'What People Say',
    'home.testimonials.1.text': 'Outstanding developer! Delivered our project ahead of schedule with exceptional quality.',
    'home.testimonials.1.name': 'Sarah Johnson',
    'home.testimonials.1.role': 'CEO, TechStart Inc',
    'home.testimonials.2.text': 'Great attention to detail and excellent communication throughout the entire project.',
    'home.testimonials.2.name': 'Michael Chen',
    'home.testimonials.2.role': 'Product Manager, InnovateCo',
    'home.testimonials.3.text': 'Transformed our ideas into reality with beautiful design and clean code.',
    'home.testimonials.3.name': 'Emily Rodriguez',
    'home.testimonials.3.role': 'Founder, CreativeSpace',
    'home.cta.work': "Let's Work Together",
    'home.cta.project': "Have a project in mind? Let's discuss how I can help bring your ideas to life.",
    'home.cta.button': 'Start a Project',
    
    // Projects Page
    'projects.title': 'My Projects',
    'projects.subtitle': 'Explore my latest work',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web Apps',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.design': 'Design',
    'projects.viewProject': 'View Project',
    'projects.viewCode': 'View Code',
    
    // Skills Page
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technologies and tools I work with',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.database': 'Database',
    'skills.devops': 'DevOps',
    'skills.design': 'Design',
    'skills.tools': 'Tools',
    'skills.other': 'Other',
    
    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    'about.intro': "I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With years of experience in web development, I specialize in building scalable applications that provide exceptional user experiences.",
    'about.journey.title': 'My Journey',
    'about.journey.1.year': '2020',
    'about.journey.1.title': 'Started Learning',
    'about.journey.1.desc': 'Began my journey in web development with HTML, CSS, and JavaScript.',
    'about.journey.2.year': '2021',
    'about.journey.2.title': 'First Project',
    'about.journey.2.desc': 'Completed my first full-stack project and fell in love with development.',
    'about.journey.3.year': '2022',
    'about.journey.3.title': 'Professional Work',
    'about.journey.3.desc': 'Started working professionally and expanded my skill set significantly.',
    'about.journey.4.year': '2023',
    'about.journey.4.title': 'Specialization',
    'about.journey.4.desc': 'Specialized in React, Next.js, and modern web technologies.',
    'about.journey.5.year': '2024',
    'about.journey.5.title': 'Current',
    'about.journey.5.desc': 'Building innovative solutions and helping businesses grow digitally.',
    'about.values.title': 'Core Values',
    'about.values.quality.title': 'Quality First',
    'about.values.quality.desc': 'I believe in writing clean, maintainable code that stands the test of time.',
    'about.values.learning.title': 'Continuous Learning',
    'about.values.learning.desc': 'Technology evolves, and so do I. Always learning and improving.',
    'about.values.collaboration.title': 'Collaboration',
    'about.values.collaboration.desc': 'Great things happen when talented people work together.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.desc': 'Always looking for creative solutions to challenging problems.',
    
    // Contact Page
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's create something amazing together",
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message Sent Successfully!',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.availability': 'Availability',
    'contact.social.title': 'Follow Me',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.1.q': 'What is your hourly rate?',
    'contact.faq.1.a': 'My rates vary depending on the project scope and requirements. Contact me for a detailed quote.',
    'contact.faq.2.q': 'How long does a typical project take?',
    'contact.faq.2.a': 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-3 months.',
    'contact.faq.3.q': 'Do you work with international clients?',
    'contact.faq.3.a': 'Yes! I work with clients worldwide and am experienced in remote collaboration.',
    'contact.faq.4.q': 'What technologies do you specialize in?',
    'contact.faq.4.a': 'I specialize in React, Next.js, Node.js, TypeScript, and modern web technologies.',
    
    // Footer
    'footer.tagline': 'Building digital experiences that make a difference',
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.services.web': 'Web Development',
    'footer.services.mobile': 'Mobile Apps',
    'footer.services.uiux': 'UI/UX Design',
    'footer.services.consulting': 'Consulting',
    'footer.contact.title': 'Get In Touch',
    'footer.contact.cta': 'Start Your Project',
    'footer.copyright': 'All rights reserved.',
  },
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.projects': 'প্রজেক্ট',
    'nav.skills': 'দক্ষতা',
    'nav.about': 'সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    
    // Home Page
    'home.greeting': 'হাই, আমি',
    'home.role1': 'ফুল স্ট্যাক ডেভেলপার',
    'home.role2': 'UI/UX ডিজাইনার',
    'home.role3': 'সমস্যা সমাধানকারী',
    'home.description': 'সুন্দর, কার্যকরী এবং ব্যবহারকারী-কেন্দ্রিক ডিজিটাল অভিজ্ঞতা তৈরি করতে আগ্রহী। আমি সৃজনশীলতার সাথে প্রযুক্তিগত দক্ষতা একত্রিত করি এমন সমাধান তৈরি করতে যা পার্থক্য তৈরি করে।',
    'home.cta.hire': 'আমাকে নিয়োগ করুন',
    'home.cta.portfolio': 'পোর্টফোলিও দেখুন',
    'home.stats.projects': 'সম্পন্ন প্রজেক্ট',
    'home.stats.clients': 'সন্তুষ্ট ক্লায়েন্ট',
    'home.stats.experience': 'বছরের অভিজ্ঞতা',
    'home.stats.awards': 'পুরস্কার জিতেছে',
    'home.services.title': 'আমি কি করি',
    'home.services.web.title': 'ওয়েব ডেভেলপমেন্ট',
    'home.services.web.desc': 'আধুনিক প্রযুক্তি ব্যবহার করে রেস্পন্সিভ এবং পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন তৈরি করা।',
    'home.services.ui.title': 'UI/UX ডিজাইন',
    'home.services.ui.desc': 'স্বজ্ঞাত এবং সুন্দর ইউজার ইন্টারফেস তৈরি করা যা ব্যবহারকারীরা পছন্দ করে।',
    'home.services.mobile.title': 'মোবাইল অ্যাপ',
    'home.services.mobile.desc': 'নেটিভ পারফরম্যান্স সহ ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরি করা।',
    'home.services.api.title': 'API ডেভেলপমেন্ট',
    'home.services.api.desc': 'শক্তিশালী RESTful এবং GraphQL API ডিজাইন এবং তৈরি করা।',
    'home.tech.title': 'আমি যে প্রযুক্তি নিয়ে কাজ করি',
    'home.testimonials.title': 'মানুষ কি বলে',
    'home.testimonials.1.text': 'অসাধারণ ডেভেলপার! ব্যতিক্রমী মানের সাথে আমাদের প্রজেক্ট সময়সূচীর আগে ডেলিভার করেছে।',
    'home.testimonials.1.name': 'সারাহ জনসন',
    'home.testimonials.1.role': 'সিইও, টেকস্টার্ট ইনক',
    'home.testimonials.2.text': 'পুরো প্রজেক্ট জুড়ে বিস্তারিত মনোযোগ এবং চমৎকার যোগাযোগ।',
    'home.testimonials.2.name': 'মাইকেল চেন',
    'home.testimonials.2.role': 'প্রোডাক্ট ম্যানেজার, ইনোভেটকো',
    'home.testimonials.3.text': 'সুন্দর ডিজাইন এবং পরিষ্কার কোড দিয়ে আমাদের ধারণাগুলিকে বাস্তবে রূপান্তরিত করেছে।',
    'home.testimonials.3.name': 'এমিলি রড্রিগেজ',
    'home.testimonials.3.role': 'প্রতিষ্ঠাতা, ক্রিয়েটিভস্পেস',
    'home.cta.work': 'চলুন একসাথে কাজ করি',
    'home.cta.project': 'মনে একটি প্রজেক্ট আছে? চলুন আলোচনা করি কিভাবে আমি আপনার ধারণাগুলিকে জীবন্ত করতে সাহায্য করতে পারি।',
    'home.cta.button': 'একটি প্রজেক্ট শুরু করুন',
    
    // Projects Page
    'projects.title': 'আমার প্রজেক্ট',
    'projects.subtitle': 'আমার সর্বশেষ কাজ দেখুন',
    'projects.filter.all': 'সব',
    'projects.filter.web': 'ওয়েব অ্যাপ',
    'projects.filter.mobile': 'মোবাইল',
    'projects.filter.design': 'ডিজাইন',
    'projects.viewProject': 'প্রজেক্ট দেখুন',
    'projects.viewCode': 'কোড দেখুন',
    
    // Skills Page
    'skills.title': 'দক্ষতা এবং দক্ষতা',
    'skills.subtitle': 'প্রযুক্তি এবং টুলস যা আমি ব্যবহার করি',
    'skills.frontend': 'ফ্রন্টএন্ড',
    'skills.backend': 'ব্যাকএন্ড',
    'skills.mobile': 'মোবাইল',
    'skills.database': 'ডাটাবেস',
    'skills.devops': 'ডেভঅপস',
    'skills.design': 'ডিজাইন',
    'skills.tools': 'টুলস',
    'skills.other': 'অন্যান্য',
    
    // About Page
    'about.title': 'আমার সম্পর্কে',
    'about.subtitle': 'আমাকে আরও ভালভাবে জানুন',
    'about.intro': 'আমি একজন আগ্রহী ফুল-স্ট্যাক ডেভেলপার যিনি জটিল সমস্যার জন্য মার্জিত সমাধান তৈরি করতে ভালবাসি। ওয়েব ডেভেলপমেন্টে বছরের অভিজ্ঞতা সহ, আমি স্কেলেবল অ্যাপ্লিকেশন তৈরিতে বিশেষজ্ঞ যা ব্যতিক্রমী ব্যবহারকারীর অভিজ্ঞতা প্রদান করে।',
    'about.journey.title': 'আমার যাত্রা',
    'about.journey.1.year': '২০২০',
    'about.journey.1.title': 'শেখা শুরু',
    'about.journey.1.desc': 'HTML, CSS, এবং JavaScript দিয়ে ওয়েব ডেভেলপমেন্টে আমার যাত্রা শুরু করেছি।',
    'about.journey.2.year': '২০২১',
    'about.journey.2.title': 'প্রথম প্রজেক্ট',
    'about.journey.2.desc': 'আমার প্রথম ফুল-স্ট্যাক প্রজেক্ট সম্পন্ন করেছি এবং ডেভেলপমেন্টের প্রেমে পড়েছি।',
    'about.journey.3.year': '২০২২',
    'about.journey.3.title': 'পেশাদার কাজ',
    'about.journey.3.desc': 'পেশাদারভাবে কাজ শুরু করেছি এবং আমার দক্ষতা উল্লেখযোগ্যভাবে প্রসারিত করেছি।',
    'about.journey.4.year': '২০২৩',
    'about.journey.4.title': 'বিশেষীকরণ',
    'about.journey.4.desc': 'React, Next.js, এবং আধুনিক ওয়েব প্রযুক্তিতে বিশেষীকরণ করেছি।',
    'about.journey.5.year': '২০২৪',
    'about.journey.5.title': 'বর্তমান',
    'about.journey.5.desc': 'উদ্ভাবনী সমাধান তৈরি করছি এবং ব্যবসায়কে ডিজিটালভাবে বৃদ্ধি করতে সাহায্য করছি।',
    'about.values.title': 'মূল মূল্যবোধ',
    'about.values.quality.title': 'গুণমান প্রথম',
    'about.values.quality.desc': 'আমি পরিষ্কার, রক্ষণাবেক্ষণযোগ্য কোড লেখায় বিশ্বাস করি যা সময়ের পরীক্ষায় টিকে থাকে।',
    'about.values.learning.title': 'ক্রমাগত শেখা',
    'about.values.learning.desc': 'প্রযুক্তি বিকশিত হয়, এবং আমিও তাই। সবসময় শিখছি এবং উন্নতি করছি।',
    'about.values.collaboration.title': 'সহযোগিতা',
    'about.values.collaboration.desc': 'মহান জিনিস ঘটে যখন প্রতিভাবান মানুষ একসাথে কাজ করে।',
    'about.values.innovation.title': 'উদ্ভাবন',
    'about.values.innovation.desc': 'চ্যালেঞ্জিং সমস্যার সৃজনশীল সমাধান সবসময় খুঁজছি।',
    
    // Contact Page
    'contact.title': 'যোগাযোগ করুন',
    'contact.subtitle': 'চলুন একসাথে অসাধারণ কিছু তৈরি করি',
    'contact.form.name': 'আপনার নাম',
    'contact.form.email': 'আপনার ইমেইল',
    'contact.form.subject': 'বিষয়',
    'contact.form.message': 'আপনার বার্তা',
    'contact.form.send': 'বার্তা পাঠান',
    'contact.form.sending': 'পাঠানো হচ্ছে...',
    'contact.form.success': 'বার্তা সফলভাবে পাঠানো হয়েছে!',
    'contact.info.email': 'ইমেইল',
    'contact.info.phone': 'ফোন',
    'contact.info.location': 'অবস্থান',
    'contact.info.availability': 'উপলব্ধতা',
    'contact.social.title': 'আমাকে ফলো করুন',
    'contact.faq.title': 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    'contact.faq.1.q': 'আপনার ঘন্টায় হার কত?',
    'contact.faq.1.a': 'প্রজেক্টের সুযোগ এবং প্রয়োজনীয়তার উপর নির্ভর করে আমার হার পরিবর্তিত হয়। বিস্তারিত উদ্ধৃতির জন্য আমার সাথে যোগাযোগ করুন।',
    'contact.faq.2.q': 'একটি সাধারণ প্রজেক্ট কতক্ষণ সময় নেয়?',
    'contact.faq.2.a': 'জটিলতার উপর ভিত্তি করে প্রজেক্টের সময়সীমা পরিবর্তিত হয়। একটি সাধারণ ওয়েবসাইট ২-৪ সপ্তাহ সময় নিতে পারে, জটিল অ্যাপ্লিকেশনগুলি ২-৩ মাস সময় নিতে পারে।',
    'contact.faq.3.q': 'আপনি কি আন্তর্জাতিক ক্লায়েন্টদের সাথে কাজ করেন?',
    'contact.faq.3.a': 'হ্যাঁ! আমি বিশ্বব্যাপী ক্লায়েন্টদের সাথে কাজ করি এবং দূরবর্তী সহযোগিতায় অভিজ্ঞ।',
    'contact.faq.4.q': 'আপনি কোন প্রযুক্তিতে বিশেষজ্ঞ?',
    'contact.faq.4.a': 'আমি React, Next.js, Node.js, TypeScript, এবং আধুনিক ওয়েব প্রযুক্তিতে বিশেষজ্ঞ।',
    
    // Footer
    'footer.tagline': 'ডিজিটাল অভিজ্ঞতা তৈরি করা যা পার্থক্য তৈরি করে',
    'footer.navigation': 'নেভিগেশন',
    'footer.services': 'সেবা',
    'footer.services.web': 'ওয়েব ডেভেলপমেন্ট',
    'footer.services.mobile': 'মোবাইল অ্যাপ',
    'footer.services.uiux': 'UI/UX ডিজাইন',
    'footer.services.consulting': 'পরামর্শ',
    'footer.contact.title': 'যোগাযোগ করুন',
    'footer.contact.cta': 'আপনার প্রজেক্ট শুরু করুন',
    'footer.copyright': 'সমস্ত অধিকার সংরক্ষিত।',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.skills': 'कौशल',
    'nav.about': 'के बारे में',
    'nav.contact': 'संपर्क',
    
    // Home Page
    'home.greeting': 'नमस्ते, मैं हूं',
    'home.role1': 'फुल स्टैक डेवलपर',
    'home.role2': 'UI/UX डिज़ाइनर',
    'home.role3': 'समस्या समाधानकर्ता',
    'home.description': 'सुंदर, कार्यात्मक और उपयोगकर्ता-केंद्रित डिजिटल अनुभव बनाने के बारे में भावुक। मैं रचनात्मकता को तकनीकी विशेषज्ञता के साथ जोड़ता हूं ऐसे समाधान बनाने के लिए जो फर्क करते हैं।',
    'home.cta.hire': 'मुझे काम पर रखें',
    'home.cta.portfolio': 'पोर्टफोलियो देखें',
    'home.stats.projects': 'पूर्ण प्रोजेक्ट',
    'home.stats.clients': 'खुश ग्राहक',
    'home.stats.experience': 'वर्षों का अनुभव',
    'home.stats.awards': 'पुरस्कार जीते',
    'home.services.title': 'मैं क्या करता हूं',
    'home.services.web.title': 'वेब डेवलपमेंट',
    'home.services.web.desc': 'आधुनिक तकनीकों का उपयोग करके उत्तरदायी और प्रदर्शनशील वेब एप्लिकेशन बनाना।',
    'home.services.ui.title': 'UI/UX डिज़ाइन',
    'home.services.ui.desc': 'सहज और सुंदर उपयोगकर्ता इंटरफेस बनाना जिन्हें उपयोगकर्ता पसंद करते हैं।',
    'home.services.mobile.title': 'मोबाइल ऐप्स',
    'home.services.mobile.desc': 'नेटिव प्रदर्शन के साथ क्रॉस-प्लेटफॉर्म मोबाइल एप्लिकेशन विकसित करना।',
    'home.services.api.title': 'API डेवलपमेंट',
    'home.services.api.desc': 'मजबूत RESTful और GraphQL API डिजाइन और निर्माण करना।',
    'home.tech.title': 'मैं जिन तकनीकों के साथ काम करता हूं',
    'home.testimonials.title': 'लोग क्या कहते हैं',
    'home.testimonials.1.text': 'उत्कृष्ट डेवलपर! हमारे प्रोजेक्ट को असाधारण गुणवत्ता के साथ समय से पहले डिलीवर किया।',
    'home.testimonials.1.name': 'सारा जॉनसन',
    'home.testimonials.1.role': 'सीईओ, टेकस्टार्ट इंक',
    'home.testimonials.2.text': 'पूरे प्रोजेक्ट में विस्तार पर बढ़िया ध्यान और उत्कृष्ट संचार।',
    'home.testimonials.2.name': 'माइकल चेन',
    'home.testimonials.2.role': 'प्रोडक्ट मैनेजर, इनोवेटको',
    'home.testimonials.3.text': 'सुंदर डिजाइन और साफ कोड के साथ हमारे विचारों को वास्तविकता में बदल दिया।',
    'home.testimonials.3.name': 'एमिली रोड्रिगेज',
    'home.testimonials.3.role': 'संस्थापक, क्रिएटिवस्पेस',
    'home.cta.work': 'चलो एक साथ काम करें',
    'home.cta.project': 'मन में एक प्रोजेक्ट है? चलो चर्चा करें कि मैं आपके विचारों को जीवन में कैसे ला सकता हूं।',
    'home.cta.button': 'एक प्रोजेक्ट शुरू करें',
    
    // Projects Page
    'projects.title': 'मेरे प्रोजेक्ट्स',
    'projects.subtitle': 'मेरा नवीनतम काम देखें',
    'projects.filter.all': 'सभी',
    'projects.filter.web': 'वेब ऐप्स',
    'projects.filter.mobile': 'मोबाइल',
    'projects.filter.design': 'डिज़ाइन',
    'projects.viewProject': 'प्रोजेक्ट देखें',
    'projects.viewCode': 'कोड देखें',
    
    // Skills Page
    'skills.title': 'कौशल और विशेषज्ञता',
    'skills.subtitle': 'तकनीकें और उपकरण जिनके साथ मैं काम करता हूं',
    'skills.frontend': 'फ्रंटएंड',
    'skills.backend': 'बैकएंड',
    'skills.mobile': 'मोबाइल',
    'skills.database': 'डेटाबेस',
    'skills.devops': 'डेवऑप्स',
    'skills.design': 'डिज़ाइन',
    'skills.tools': 'उपकरण',
    'skills.other': 'अन्य',
    
    // About Page
    'about.title': 'मेरे बारे में',
    'about.subtitle': 'मुझे बेहतर तरीके से जानें',
    'about.intro': 'मैं एक भावुक फुल-स्टैक डेवलपर हूं जो जटिल समस्याओं के लिए सुरुचिपूर्ण समाधान बनाने में प्यार करता है। वेब डेवलपमेंट में वर्षों के अनुभव के साथ, मैं स्केलेबल एप्लिकेशन बनाने में विशेषज्ञ हूं जो असाधारण उपयोगकर्ता अनुभव प्रदान करते हैं।',
    'about.journey.title': 'मेरी यात्रा',
    'about.journey.1.year': '२०२०',
    'about.journey.1.title': 'सीखना शुरू किया',
    'about.journey.1.desc': 'HTML, CSS, और JavaScript के साथ वेब डेवलपमेंट में अपनी यात्रा शुरू की।',
    'about.journey.2.year': '२०२१',
    'about.journey.2.title': 'पहला प्रोजेक्ट',
    'about.journey.2.desc': 'अपना पहला फुल-स्टैक प्रोजेक्ट पूरा किया और डेवलपमेंट से प्यार हो गया।',
    'about.journey.3.year': '२०२२',
    'about.journey.3.title': 'पेशेवर काम',
    'about.journey.3.desc': 'पेशेवर रूप से काम करना शुरू किया और अपने कौशल को काफी बढ़ाया।',
    'about.journey.4.year': '२०२३',
    'about.journey.4.title': 'विशेषज्ञता',
    'about.journey.4.desc': 'React, Next.js, और आधुनिक वेब तकनीकों में विशेषज्ञता हासिल की।',
    'about.journey.5.year': '२०२४',
    'about.journey.5.title': 'वर्तमान',
    'about.journey.5.desc': 'नवीन समाधान बना रहे हैं और व्यवसायों को डिजिटल रूप से बढ़ने में मदद कर रहे हैं।',
    'about.values.title': 'मूल मूल्य',
    'about.values.quality.title': 'गुणवत्ता पहले',
    'about.values.quality.desc': 'मैं साफ, रखरखाव योग्य कोड लिखने में विश्वास करता हूं जो समय की कसौटी पर खरा उतरता है।',
    'about.values.learning.title': 'निरंतर सीखना',
    'about.values.learning.desc': 'तकनीक विकसित होती है, और मैं भी। हमेशा सीखना और सुधार करना।',
    'about.values.collaboration.title': 'सहयोग',
    'about.values.collaboration.desc': 'महान चीजें तब होती हैं जब प्रतिभाशाली लोग एक साथ काम करते हैं।',
    'about.values.innovation.title': 'नवाचार',
    'about.values.innovation.desc': 'चुनौतीपूर्ण समस्याओं के लिए हमेशा रचनात्मक समाधान की तलाश में।',
    
    // Contact Page
    'contact.title': 'संपर्क में रहें',
    'contact.subtitle': 'चलो एक साथ कुछ अद्भुत बनाएं',
    'contact.form.name': 'आपका नाम',
    'contact.form.email': 'आपका ईमेल',
    'contact.form.subject': 'विषय',
    'contact.form.message': 'आपका संदेश',
    'contact.form.send': 'संदेश भेजें',
    'contact.form.sending': 'भेजा जा रहा है...',
    'contact.form.success': 'संदेश सफलतापूर्वक भेज दिया गया!',
    'contact.info.email': 'ईमेल',
    'contact.info.phone': 'फोन',
    'contact.info.location': 'स्थान',
    'contact.info.availability': 'उपलब्धता',
    'contact.social.title': 'मुझे फॉलो करें',
    'contact.faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
    'contact.faq.1.q': 'आपकी प्रति घंटा दर क्या है?',
    'contact.faq.1.a': 'प्रोजेक्ट के दायरे और आवश्यकताओं के आधार पर मेरी दरें भिन्न होती हैं। विस्तृत उद्धरण के लिए मुझसे संपर्क करें।',
    'contact.faq.2.q': 'एक सामान्य प्रोजेक्ट में कितना समय लगता है?',
    'contact.faq.2.a': 'जटिलता के आधार पर प्रोजेक्ट की समयसीमा भिन्न होती है। एक साधारण वेबसाइट को 2-4 सप्ताह लग सकते हैं, जबकि जटिल एप्लिकेशन को 2-3 महीने लग सकते हैं।',
    'contact.faq.3.q': 'क्या आप अंतरराष्ट्रीय ग्राहकों के साथ काम करते हैं?',
    'contact.faq.3.a': 'हां! मैं दुनिया भर के ग्राहकों के साथ काम करता हूं और दूरस्थ सहयोग में अनुभवी हूं।',
    'contact.faq.4.q': 'आप किन तकनीकों में विशेषज्ञ हैं?',
    'contact.faq.4.a': 'मैं React, Next.js, Node.js, TypeScript, और आधुनिक वेब तकनीकों में विशेषज्ञ हूं।',
    
    // Footer
    'footer.tagline': 'डिजिटल अनुभव बनाना जो फर्क करते हैं',
    'footer.navigation': 'नेविगेशन',
    'footer.services': 'सेवाएं',
    'footer.services.web': 'वेब डेवलपमेंट',
    'footer.services.mobile': 'मोबाइल ऐप्स',
    'footer.services.uiux': 'UI/UX डिज़ाइन',
    'footer.services.consulting': 'परामर्श',
    'footer.contact.title': 'संपर्क में रहें',
    'footer.contact.cta': 'अपना प्रोजेक्ट शुरू करें',
    'footer.copyright': 'सर्वाधिकार सुरक्षित।',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'bn', 'hi'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    return translation || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
