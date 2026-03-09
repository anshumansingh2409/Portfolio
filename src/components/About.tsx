import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Award, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// const myPhoto = new URL('../assets/Image.png', import.meta.url).href;
const myPhoto = '/assets/Image.png';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="relative py-32 bg-slate-900 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-2xl" />
                <div className="relative px-6 py-3 bg-slate-900 border-2 border-purple-500 rounded-2xl flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    2+ Years of Experience
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Full Stack Developer & Problem Solver
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="text-lg text-slate-300 mb-6 leading-relaxed font-medium"
            >
              I craft high-performance web applications using modern technologies. With 2+ years of experience, I specialize in React, TypeScript, and Tailwind CSS to build beautiful, responsive user interfaces that users love.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed font-medium"
            >
              Passionate about clean code, UI/UX design, and solving complex problems. I continuously learn new technologies and contribute to building innovative solutions that make a difference.
            </motion.p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Briefcase, label: "Projects Completed", value: "10+" },
                { icon: Award, label: "Certifications", value: "8+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl group-hover:blur-2xl transition-all rounded-xl" />
                  <div className="relative bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                    <stat.icon className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Animated Glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-25 blur-3xl group-hover:opacity-50 transition duration-500 animate-pulse" />

              {/* Gradient Border Ring */}
              <div className="relative p-[6px] rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-500 shadow-2xl">
                {/* Image Container */}
                <div className="relative w-[300px] sm:w-[340px] md:w-[420px] h-[300px] sm:h-[340px] md:h-[420px] rounded-full overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={myPhoto}
                    alt="Profile"
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 420px"
                  />

                  {/* Glass Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Bottom Dark Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Shadow */}
              <div className="absolute inset-0 rounded-full shadow-[0_20px_60px_rgba(168,85,247,0.35)] -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
