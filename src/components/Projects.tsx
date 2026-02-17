import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const DashBoard = new URL("../assets/DashBoard.png", import.meta.url).href;
const SpotifyClone = new URL("../assets/SpotifyClone.png", import.meta.url).href;
const Tomato = new URL("../assets/Tomato.png", import.meta.url).href;

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "i-Rail Connect (RailSched.AI)",
      description:
        "AI-driven railway scheduling system designed to optimize timetables, reduce delays, and provide real-time updates via WebSockets.",
      image: DashBoard,
      tags: ["React", "TypeScript", "TailwindCSS", "WebSockets", "Mapbox"],
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured shopping experience with seamless checkout and payment integration",
      image:
        "https://images.unsplash.com/photo-1762279389053-d5a30239ae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwOTU2MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Spotify Clone",
      description:"A fully responsive music player UI featuring a sidebar, sticky navigation, and custom-styled playback controls using CSS Flexbox.",
      image: SpotifyClone,
      tags: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
      gradient: "from-green-600 to-black",
    },
    {
      title: "Tomato",
      description:"Comprehensive component library with documentation and interactive playground",
      image: Tomato,
      tags: ["React", "TailwindCSS", ".JSX", "Figma"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
      ref={ref}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Exploring the intersection of creativity and technology
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                animate={hoveredIndex === index ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-r ${project.gradient}`}
                />
              </motion.div>

              <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group-hover:border-slate-700 transition-colors">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity`}
                  />

                  {/* Action buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 0.5 + index * 0.1 + tagIndex * 0.05,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgb(71, 85, 105)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
