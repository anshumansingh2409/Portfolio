import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/anshumansingh2409' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anshuman-singh-04611022b/' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            className="text-slate-400 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> by Anshuman Singh
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-400" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright year */}
          <motion.p
            className="text-slate-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © 2026 All rights reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
