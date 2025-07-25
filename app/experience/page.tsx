
'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, Users, Code, Rocket } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Led team of 5 developers in delivering 3 major projects ahead of schedule",
      "Improved application performance by 40% through optimization techniques",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"],
    icon: Rocket,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "InnovateHub",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: "Developed and maintained scalable web applications for startup clients. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Built 12+ web applications from concept to deployment",
      "Reduced bug reports by 50% through comprehensive testing",
      "Mentored 3 junior developers in modern web technologies"
    ],
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis", "Kubernetes"],
    icon: Code,
    color: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Specialized in creating responsive, user-friendly interfaces for diverse clients. Worked closely with designers to implement pixel-perfect designs.",
    achievements: [
      "Delivered 20+ responsive websites with 98% client satisfaction",
      "Improved website loading speed by 35% through optimization",
      "Collaborated with UX team to enhance user experience"
    ],
    technologies: ["React", "Sass", "Webpack", "Figma", "Adobe Creative Suite"],
    icon: Users,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "StartupLab",
    location: "Boston, MA",
    period: "2018 - 2019",
    description: "Started career building dynamic web applications and learning modern development practices. Contributed to multiple client projects.",
    achievements: [
      "Contributed to 8 successful project launches",
      "Learned and implemented modern JavaScript frameworks",
      "Participated in agile development processes"
    ],
    technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "jQuery", "PHP"],
    icon: Award,
    color: "from-yellow-500 to-orange-600"
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold mb-6"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A journey through my professional career, showcasing growth, achievements, and the technologies I've mastered along the way.
          </motion.p>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${experience.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                  >
                    <experience.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8' : 'pl-8'
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "5+", label: "Years Experience", icon: Calendar },
              { number: "40+", label: "Projects Completed", icon: Briefcase },
              { number: "15+", label: "Technologies Mastered", icon: Code }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
