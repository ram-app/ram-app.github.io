
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code, Star, Heart, Zap, Sparkles, Terminal, Coffee } from 'lucide-react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    'Initializing Portfolio...',
    'Loading Projects...',
    'Loading Skills...',
    'Loading Experience...',
    'Almost Ready!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => clearInterval(textTimer);
  }, []);

  useEffect(() => {
    const text = loadingTexts[textIndex];
    let index = 0;
    setCurrentText('');
    
    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);

    return () => clearInterval(typeTimer);
  }, [textIndex]);

  const floatingIcons = [
    { icon: Code, color: 'from-blue-500 to-purple-600', delay: 0 },
    { icon: Terminal, color: 'from-green-500 to-blue-600', delay: 0.2 },
    { icon: Coffee, color: 'from-yellow-500 to-orange-600', delay: 0.4 },
    { icon: Sparkles, color: 'from-purple-500 to-pink-600', delay: 0.6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 2) * 40}%`,
          }}
        >
          <item.icon className="text-white w-6 h-6" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Rotating Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 relative"
            // animate={{ rotate: 360 }}
            // transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image 
                  src="/ram.png" 
                  fill
                  alt='logo' 
                  className="object-cover"
                />
              </div>
              
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-2 relative"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ram Surat
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                opacity: [0, 0.5, 0],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              Ram Surat
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8"
          >
            <span className="text-purple-400">Full Stack Developer</span>
          </motion.p>

          {/* Typewriter Loading Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-6 mb-8"
          >
            <span className="text-lg text-blue-300 font-mono">
              {currentText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1 text-purple-400"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Enhanced Progress Bar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-80 mx-auto"
          >
            <div className="relative w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 h-full rounded-full opacity-50"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400 font-mono">
                {progress}% Complete
              </span>
              <motion.div
                className="flex space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-10 left-10 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Star className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <Heart className="w-5 h-5 text-white" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-16 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <Zap className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
  );
}
