
'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';

export function QuickAbout() {
  const statsData = [
    { value: "2+", label: "Years Experience", icon: "ri-time-line", color: "from-blue-500 to-purple-500" },
    { value: "10+", label: "Projects Completed", icon: "ri-folder-line", color: "from-purple-500 to-pink-500" },
    { value: "15+", label: "Technologies", icon: "ri-code-s-slash-line", color: "from-pink-500 to-red-500" },
    { value: "20+", label: "Tools Mastered", icon: "ri-tools-line", color: "from-red-500 to-orange-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-secondary/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <i className="ri-user-line mr-2"></i>
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Creating{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Magic
              </span>
              <br />
              with Code
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm a passionate Frontend Developer with 2+ years of experience building responsive web and mobile applications. 
              I specialize in React.js, Next.js, React Native, and modern frontend technologies, creating user-centric interfaces with scalable, high-performance solutions.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing and mentoring aspiring developers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/about" size="lg" className="group">
                  Learn More About Me
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/projects" variant="outline" size="lg" className="group">
                  <i className="ri-folder-line mr-2 group-hover:animate-bounce"></i>
                  View My Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </motion.div>
                
                {/* Value */}
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Docker'].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm font-medium hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
