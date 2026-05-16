'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';

const FILTER_TECHS = [
  'all',
  'React Native',
  'Next.js',
  'React',
  'Node.js',
  'Firebase',
  'TypeScript',
  'JavaScript',
] as const;

function projectMatchesTech(project: (typeof PROJECTS)[number], filter: string) {
  if (filter === 'all') return true;
  return project.technologies.some(
    (tech) => tech === filter || tech.startsWith(`${filter} `)
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((project) =>
    projectMatchesTech(project, filter)
  );

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience across
            web, mobile, and full-stack development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {FILTER_TECHS.map((tech) => (
            <motion.button
              key={tech}
              type="button"
              onClick={() => setFilter(tech)}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                filter === tech
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-100 via-secondary/30 to-slate-200 dark:from-slate-900 dark:via-secondary/20 dark:to-slate-800 flex items-center justify-center px-4 py-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full w-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                {project.period && (
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    {project.period}
                  </p>
                )}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 mb-4 list-disc pl-4 leading-snug">
                    {project.highlights.map((item, hi) => (
                      <li key={hi}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.live ? (
                    <Button href={project.live} variant="primary" size="sm">
                      <i className="ri-external-link-line mr-2"></i>
                      Live Demo
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="opacity-70">
                      <i className="ri-lock-line mr-2"></i>
                      No public demo
                    </Button>
                  )}
                  {project.github ? (
                    <Button href={project.github} variant="outline" size="sm">
                      <i className="ri-github-line mr-2"></i>
                      Code
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="opacity-70">
                      <i className="ri-git-repository-private-line mr-2"></i>
                      Code private
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w lg:max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting
            projects. Let&apos;s create something amazing together!
          </p>
          <Button href="/contact" size="lg">
            <i className="ri-mail-line mr-2"></i>
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
