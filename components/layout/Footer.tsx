'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PERSONAL_INFO, PROJECTS } from '@/lib/constants';
import Image from 'next/image';
import Logo from "../../app/assets/photos/CREATE LOGO WITH THIS NAME Ram Surat.jpg"

const MotionLink = motion(Link);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8 lg:py-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-3">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 px-4 py-3 rounded-xl shadow-sm border border-gray-200/50 dark:border-slate-600/50 inline-block">
                <Image src={Logo?.src} height={50} width={200} alt='logo' className="h-12 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm">
              {PERSONAL_INFO.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <MotionLink
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent/80 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-github-fill text-lg"></i>
              </MotionLink>
              <MotionLink
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent/80 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </MotionLink>
              <MotionLink
                href={PERSONAL_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent/80 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-twitter-fill text-lg"></i>
              </MotionLink>
              <MotionLink
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 bg-accent/80 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-mail-fill text-lg"></i>
              </MotionLink>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground text-sm hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">Projects</h3>
            <ul className="space-y-2">
              {PROJECTS.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <Link 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-start gap-2"
                >
                  <i className="ri-mail-line mt-0.5 flex-shrink-0"></i>
                  <span className="break-all">{PERSONAL_INFO.email}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <i className="ri-phone-line flex-shrink-0"></i>
                  <span>{PERSONAL_INFO.phone}</span>
                </Link>
              </li>
              <li className="text-muted-foreground text-sm flex items-start gap-2">
                <i className="ri-map-pin-line mt-0.5 flex-shrink-0"></i>
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              Made with <i className="ri-heart-fill text-red-500"></i> in India
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}