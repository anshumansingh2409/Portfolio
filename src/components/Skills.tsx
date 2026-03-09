import { motion, useInView } from "motion/react";
import { useRef } from "react";

const htmlLogo = '/assets/html.png';
const cssLogo = '/assets/cssLogo.png';
const jsLogo = '/assets/jsLogo.png';
const reactLogo = '/assets/React.png';
const tailwindLogo = '/assets/tailwindLogo.png';

const javaLogo = '/assets/Java.png';
const pythonLogo = '/assets/Python.png';

const gitLogo = '/assets/Git.png';
const githubLogo = '/assets/github.png';
const vscodeLogo = '/assets/vscode.png';
const canvaLogo = '/assets/Canva.png';
const figmaLogo = '/assets/Figma.png';



export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: 'HTML', icon: htmlLogo, color: 'from-orange-500 to-orange-600' },
        { name: "CSS", icon: cssLogo, color: "from-blue-500 to-blue-600" },
        {name: "JavaScript",icon: jsLogo,color: "from-yellow-500 to-yellow-600",},
        { name: "React JS", icon: reactLogo, color: "from-cyan-500 to-blue-500" },
        {name: "Tailwind CSS",icon: tailwindLogo,color: "from-cyan-400 to-blue-500",},
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: javaLogo, color: "from-red-600 to-orange-600" },
        { name: "Python", icon: pythonLogo, color: "from-blue-500 to-yellow-500" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: gitLogo, color: "from-orange-600 to-red-600" },
        { name: "GitHub", icon: githubLogo, color: "from-gray-700 to-gray-900" },
        { name: "VS Code", icon: vscodeLogo, color: "from-blue-500 to-blue-700" },
        { name: "Canva", icon: canvaLogo, color: "from-teal-500 to-cyan-500" },
        { name: "Figma", icon: figmaLogo, color: "from-purple-500 to-pink-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 bg-slate-900 overflow-hidden"
      ref={ref}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
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
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <div className="relative bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-slate-700 transition-all">
                {/* Category Title */}
                <motion.h3
                  className="text-3xl font-bold text-slate-300 mb-8 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + categoryIndex * 0.15 }}
                >
                  {category.category}
                </motion.h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                      animate={
                        isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                      }
                      transition={{
                        delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.08,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      className="group/skill relative"
                    >
                      {/* Skill Badge */}
                      <div className="relative">
                        {/* Hover glow */}
                        <motion.div
                          className="absolute -inset-1 rounded-2xl opacity-0 group-hover/skill:opacity-100 blur-md transition-opacity"
                          style={{
                            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                          }}
                        >
                          <div
                            className={`w-full h-full bg-gradient-to-br ${skill.color}`}
                          />
                        </motion.div>

                        {/* Badge Content */}
                        <div className="relative flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all cursor-pointer">
                          <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 object-contain"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                          />

                          <span className="text-slate-300 font-medium whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
