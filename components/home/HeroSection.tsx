
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';
import profileImage from "../../app/assets/photos/ram.jpeg"

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const titles = [
    'Frontend Developer',
    'Full Stack Developer',
    'Mobile App Developer',
    'Mern Stack Developer'
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const type = () => {
      const current = titles[currentIndex];
      
      if (isDeleting) {
        setCurrentTitle(current.substring(0, currentTitle.length - 1));
        
        if (currentTitle === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCurrentTitle(current.substring(0, currentTitle.length + 1));
        
        if (currentTitle === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentTitle, currentIndex, isDeleting, titles, isMounted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const handleScrollToNext = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Welcome Badge */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-6"
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block mr-2"
                >
                  👋
                </motion.span>
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight whitespace-nowrap"
            >
              Hi, I'm <motion.span 
                className="inline bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {PERSONAL_INFO.name}
              </motion.span>
            </motion.h1>

            {/* Typewriter Title */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="text-2xl md:text-4xl font-semibold text-muted-foreground flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="text-primary min-w-[300px] text-left">
                  {currentTitle}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-purple-600"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/contact" size="lg" className="group">
                  <i className="ri-mail-line mr-2 group-hover:animate-bounce"></i>
                  Contact Me
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href={PERSONAL_INFO.resume} variant="outline" size="lg" className="group">
                  <i className="ri-download-line mr-2 group-hover:animate-bounce"></i>
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {[
                { href: PERSONAL_INFO.social.github, icon: 'ri-github-fill', color: 'hover:bg-gray-800' },
                { href: PERSONAL_INFO.social.linkedin, icon: 'ri-linkedin-fill', color: 'hover:bg-blue-600' },
                { href: PERSONAL_INFO.social.twitter, icon: 'ri-twitter-fill', color: 'hover:bg-blue-400' },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-secondary rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 p-1 shadow-2xl"
                // animate={{
                //   rotate: [0, 360],
                // }}
                // transition={{
                //   duration: 20,
                //   repeat: Infinity,
                //   ease: 'linear',
                // }}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src={profileImage?.src}
                    alt={PERSONAL_INFO.name}
                    className="w-[200%] h-[100%] object-cover object-[center_15%]"
                  />
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg"
                variants={floatingVariants}
                animate="animate"
              >
                <i className="ri-code-line"></i>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                <i className="ri-rocket-line"></i>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <i className="ri-palette-line"></i>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1.5 }}
              >
                <i className="ri-heart-line"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center cursor-pointer"
          onClick={handleScrollToNext}
        >
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
