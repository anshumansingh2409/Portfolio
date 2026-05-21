import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react';

const roles = [
  "Full Stack Developer",
  "Java Programming Solver",
  "UI/UX Designer",
  "React Developer",
  "Problem Solver",
];

const roleColors = [
  "from-blue-400 via-cyan-400 to-blue-400",      // Full Stack Developer
  "from-green-400 via-emerald-400 to-green-400", // Java Programming Solver
  "from-pink-400 via-rose-400 to-pink-400",      // UI/UX Designer
  "from-yellow-400 via-orange-400 to-yellow-400", // React Developer
  "from-purple-400 via-violet-400 to-purple-400", // Problem Solver
];

export function Hero() {
  const [index, setIndex] = useState<number>(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % roles.length);
    }, 2500); // change text every 2.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-8 pt-32"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-blue-700 bg-clip-text text-transparent">
                Anshuman Singh
              </span>
            </motion.h1>

            {/* Typing effect subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 h-12 md:h-14 perspective"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[index]}
                  className="relative"
                  initial={{ opacity: 0, x: -50, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 50, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.p 
                    className={`text-2xl md:text-3xl bg-gradient-to-r ${roleColors[index]} bg-clip-text text-transparent font-bold inline`}
                    initial={{ filter: "blur(10px)" }}
                    animate={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                  >
                    {roles[index].split('').map((char, i) => (
                      <motion.span
                        key={`${roles[index]}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.3 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              I craft beautiful, high-performance web applications with modern technologies. 
              Passionate about creating seamless user experiences and writing clean, maintainable code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-cyan-900 text-white rounded-full font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CV.pdf';
                  link.download = 'Anshuman_Singh_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-full font-medium hover:border-purple-500 hover:bg-slate-800 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Done' },
                { value: '10+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Main Display Card */}
              <div className="relative">
                {/* Glow effects */}
                <motion.div
                  className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                {/* Card Stack Effect */}
                <div className="relative space-y-4">
                  {/* Card 1 - Profile Info */}
                  <motion.div
                    className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            className="w-3 h-3 bg-green-500 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-sm text-slate-400">Available for work</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Developer Profile</h3>
                      </div>
                      
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-xl">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-xs text-slate-500">Email</p>
                          <p className="text-sm text-white">anshumansingh2409@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-xl">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-xs text-slate-500">Phone</p>
                          <p className="text-sm text-white">+91 9216169251</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-xl">
                        <MapPin className="w-5 h-5 text-pink-400" />
                        <div>
                          <p className="text-xs text-slate-500">Location</p>
                          <p className="text-sm text-white">Uttar Pradesh, INDIA</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2 - Tech Stack Visualization */}
                  <motion.div
                    className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl"
                    initial={{ y: 20, opacity: 0.8 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React','.jsx', '.tsx','HTML', 'CSS','JavaScript','TailwindCSS'].map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white/30"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
