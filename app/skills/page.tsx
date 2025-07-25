'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <i className={`${skill.icon} text-primary-foreground`}></i>
          </div>
          <h3 className="font-semibold text-lg">{skill.name}</h3>
        </div>
        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <i className="ri-layout-line text-white text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold">Frontend Development</h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SKILLS.frontend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
              <i className="ri-server-line text-white text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold">Backend Development</h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SKILLS.backend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
              <i className="ri-tools-line text-white text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold">Tools & Technologies</h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SKILLS.tools.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-secondary/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Always Learning</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            The tech industry is constantly evolving, and I believe in staying current with the latest technologies and best practices. 
            I'm always experimenting with new tools and frameworks to improve my development process and deliver better solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="bg-background p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-line text-white text-xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm">
                I regularly take courses and attend workshops to stay updated with industry trends.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-white text-xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Community Involvement</h3>
              <p className="text-muted-foreground text-sm">
                Active in developer communities, contributing to open-source projects and sharing knowledge.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-white text-xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Always exploring new technologies and methodologies to solve problems more efficiently.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}