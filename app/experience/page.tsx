
'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, Code, Rocket } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Phantasm Solutions Pvt Ltd",
    location: "Vijayawada, Andhra Pradesh",
    period: "2023 - Present",
    description: "Leading 5+ frontend teams for enterprise-level web and mobile application development. Building scalable, responsive applications with modern frontend technologies and best practices.",
    achievements: [
      "Led 5+ frontend teams delivering enterprise-level web and mobile applications",
      "Architected and developed responsive web apps using React.js and Next.js",
      "Built cross-platform mobile applications using React Native"
    ],
    technologies: ["React.js", "Next.js", "React Native", "Docker", "Tailwind CSS", "Material UI", "Bootstrap"],
    icon: Rocket,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    company: "Masai School",
    location: "Bengaluru, Karnataka",
    period: "2022 - 2023",
    description: "Completed intensive full stack web development program. Developed solo and collaborative projects, building real-world applications with modern web technologies.",
    achievements: [
      "Built 10+ projects including solo and collaborative applications",
      "Mastered full stack development with React and Node.js ecosystem",
      "Collaborated with peers on team projects following agile methodologies"
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
    icon: Code,
    color: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    title: "Computer Science Engineering",
    company: "Sams Institute of Technologies",
    location: "Varanasi, Uttar Pradesh",
    period: "2019 - 2021",
    description: "Pursued Computer Science Engineering with focus on both frontend and backend development. Gained strong foundation in programming fundamentals, data structures, algorithms, and web technologies.",
    achievements: [
      "Learned complete software development lifecycle and best practices",
      "Built multiple academic projects using various programming languages",
      "Developed strong foundation in data structures and algorithms"
    ],
    technologies: ["Python", "JavaScript", "Java", "C", "C++", "HTML", "CSS", "PHP"],
    icon: Award,
    color: "from-purple-500 to-pink-600"
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
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
              { number: "3+", label: "Years Experience", icon: Calendar },
              { number: "10+", label: "Projects Completed", icon: Briefcase },
              { number: "10+", label: "Technologies Mastered", icon: Code }
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
