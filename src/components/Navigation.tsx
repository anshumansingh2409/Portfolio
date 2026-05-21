import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/anshuman-singh-04611022b/',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/10'
    },
    { 
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Anshumansingh2409/',
      color: 'hover:text-orange-400',
      bgColor: 'hover:bg-orange-500/10',
      renderIcon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          <path d="M13.5 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          <path d="M3 13h8v2H3z"/>
          <path d="M3 8h12v2H3z"/>
        </svg>
      )
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/anshumansingh2409',
      color: 'hover:text-purple-400',
      bgColor: 'hover:bg-purple-500/10'
    },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="hidden lg:grid grid-cols-3 items-center gap-8">
            {/* LEFT SECTION - Logo */}
            <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, type: "spring" }}
  className="relative"
>
  <motion.a
    href="#hero"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection('#hero');
    }}
    className="relative inline-flex items-center gap-4 group"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
  >
    {/* Animated Vertical Bar */}
    <motion.div
      className="relative w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 overflow-hidden"
      animate={{
        height: [48, 56, 48],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-white/40"
        animate={{
          y: ["-100%", "120%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>

    {/* Name Section */}
    <div className="relative">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.h1
        className="relative text-2xl font-black tracking-wide bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
        whileHover={{
          x: 4,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Anshuman Singh
      </motion.h1>

      {/* Animated Tech Line */}
      <motion.div
        className="flex items-center gap-2 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-cyan-400"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />

        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
          Full Stack Developer
        </span>

        <motion.div
          className="h-[1px] w-8 bg-gradient-to-r from-cyan-400 to-transparent"
          animate={{
            width: [30, 45, 30],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>

    {/* Floating Orb */}
    <motion.div
      className="absolute -top-1 -right-4 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60"
      animate={{
        y: [0, -8, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.a>
</motion.div>

            {/* CENTER SECTION - Navigation Items in Border Box */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex justify-center relative"
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl blur-lg -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="border border-slate-700/50 rounded-2xl px-1 py-1 bg-gradient-to-br from-slate-900/60 to-slate-950/40 backdrop-blur-md shadow-lg shadow-purple-500/5 hover:border-slate-600/60 hover:shadow-purple-500/10 transition-all">
                <div className="flex items-center gap-0.5">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-all rounded-xl relative group"
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.06, type: "spring" }}
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.div
                        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30"
                        initial={{ scaleX: 0, scaleY: 0.8 }}
                        whileHover={{ scaleX: 1, scaleY: 1 }}
                        transition={{ duration: 0.25 }}
                      />
                      {/* Active indicator dot */}
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100"
                        initial={{ x: '-50%', scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SECTION - Social Links */}
            <div className="flex items-center justify-end gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -4 }}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-400 ${social.color} ${social.bgColor} transition-all backdrop-blur-sm relative group`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {/* Glow effect background */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${
                        social.label === 'LinkedIn' ? 'from-blue-500/40 to-blue-600/20' :
                        social.label === 'LeetCode' ? 'from-orange-500/40 to-orange-600/20' :
                        'from-purple-500/40 to-purple-600/20'
                      } opacity-0 group-hover:opacity-100 transition-opacity blur-md -inset-2`}
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                    {/* Icon */}
                    <motion.div className="relative z-10">
                      {social.renderIcon ? social.renderIcon() : <social.icon className="w-5 h-5" />}
                    </motion.div>
                    {/* Tooltip */}
                    <motion.div
                      className="absolute bottom-full mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900 border border-slate-700 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.label}
                    </motion.div>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Header - Simplified */}
          <div className="lg:hidden flex items-center justify-between">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.button
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-white z-20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden bg-slate-950/98 backdrop-blur-xl pt-24"
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center justify-start h-full gap-6 px-6">
          {/* Navigation Items */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="border border-slate-700/50 rounded-2xl px-4 py-3 bg-gradient-to-br from-slate-900/60 to-slate-950/40 w-full backdrop-blur-md shadow-lg shadow-purple-500/5"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all text-center font-medium text-sm relative group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mobile Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-400 ${social.color} ${social.bgColor} transition-all relative group`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-br ${
                      social.label === 'LinkedIn' ? 'from-blue-500/40 to-blue-600/20' :
                      social.label === 'LeetCode' ? 'from-orange-500/40 to-orange-600/20' :
                      'from-purple-500/40 to-purple-600/20'
                    } opacity-0 group-hover:opacity-100 transition-opacity blur-md -inset-2`}
                  />
                  <motion.div className="relative z-10">
                    {social.renderIcon ? social.renderIcon() : <social.icon className="w-6 h-6" />}
                  </motion.div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Labels */}
          <motion.div
            className="text-xs text-slate-500 flex gap-4 mt-2"
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <span>LinkedIn</span>
            <span>LeetCode</span>
            <span>GitHub</span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
