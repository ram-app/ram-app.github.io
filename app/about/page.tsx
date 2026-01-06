'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCE } from '@/lib/constants';
import profileImage from "../assets/photos/ram.jpeg";

export default function About() {
  return (
    <div className="min-h-screen py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, experience, and what drives me as a developer.
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage?.src}
                alt="Ram Surat"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">My Story</h2>
            <p className="text-lg text-muted-foreground">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-lg text-muted-foreground">
              My journey in tech started with a <span className="text-primary font-medium">Computer Science Engineering Diploma</span> from Sams Institute of Technologies, Varanasi, where I built a strong foundation in programming fundamentals, data structures, and algorithms using languages like C, C++, Java, and Python.
            </p>
            <p className="text-lg text-muted-foreground">
              After completing my diploma, I worked as a <span className="text-primary font-medium">Computer Executive Operations</span> for 1 year, gaining valuable experience in understanding business workflows and technical operations. This experience helped me understand how technology serves real business needs.
            </p>
            <p className="text-lg text-muted-foreground">
              Driven by my passion for development, I enrolled in the <span className="text-primary font-medium">Full Stack Web Development program at Masai School, Bengaluru</span>. During this intensive program, I built 10+ projects using React.js, JavaScript, Node.js, Express.js, and MongoDB, mastering both frontend and backend technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              Currently, I'm working as a <span className="text-primary font-medium">Frontend Developer at Phantasm Solutions Pvt Ltd, Vijayawada</span>, where I lead 5+ frontend teams building enterprise-level applications. My key projects include:
            </p>
            <ul className="text-lg text-muted-foreground list-disc list-inside space-y-2 ml-4">
              <li><span className="font-medium">ERP Systems</span> - User and Admin panels for enterprise resource planning</li>
              <li><span className="font-medium">E-commerce Platforms</span> - Full-featured online shopping websites</li>
              <li><span className="font-medium">Course Management Systems</span> - Educational platform websites</li>
              <li><span className="font-medium">Slot Management System</span> - Scheduling and booking management application</li>
              <li><span className="font-medium">Driver App</span> - Mobile application for driver tracking and management</li>
              <li><span className="font-medium">Picker App</span> - Order picking and inventory management mobile application</li>
              <li><span className="font-medium">Barcode Generator App</span> - Cross-platform mobile application using React Native</li>
            </ul>
            <p className="text-lg text-muted-foreground">
              I work with modern technologies including React.js, Next.js, React Native, TypeScript, Tailwind CSS, Material UI, Bootstrap, and Docker to deliver scalable, high-performance solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">{PERSONAL_INFO.location}</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">2+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className={`bg-background p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} ml-12 md:ml-0`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <i className="ri-briefcase-line text-primary-foreground"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Frontend Development", icon: "ri-layout-line" },
              { name: "Backend Development", icon: "ri-server-line" },
              { name: "Database Design", icon: "ri-database-line" },
              { name: "DevOps & Deployment", icon: "ri-cloud-line" },
              { name: "API Development", icon: "ri-api-line" },
              { name: "Testing & QA", icon: "ri-test-tube-line" },
              { name: "UI/UX Design", icon: "ri-palette-line" },
              { name: "Project Management", icon: "ri-team-line" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-secondary/50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${skill.icon} text-primary-foreground text-xl`}></i>
                </div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}