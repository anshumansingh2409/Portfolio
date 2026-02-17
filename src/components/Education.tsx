import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "Bachelor of Technology in CSE",
      institution: "Galgotias University",
      location: "Gr. Noida (U.P.)",
      period: "2023 - 2027",
      description:
        "Specialized in Software Engineering and Web Development. Graduated with honors.",
      grade: "GPA: 9.0/10.0",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      degree: "CBSE(XII) - PCM with Hindi Literature",
      institution: "Saraswati Vidya  Mandir Sr. Sec. School",
      location: "Sultanpur (U.P.)",
      period: "2021 - 2022",
      description:
        "I completed my class 12 education from Saraswati Vidya Mandir Sr. Sec. School, Sultanpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Hindi Literature.",
      grade: "76% out of 100",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      degree: "CBSE(X), Science with Sanskrit",
      institution: "Saraswati Vidya  Mandir Sr. Sec. School",
      location: "Sultanpur (U.P.)",
      period: "2019 - 2020",
      description:
        "I completed my class 10 education from Saraswati Vidya Mandir Sr. Sec. School, Sultanpur, under the CBSE board, where I studied Science with Sanskrit.",
      grade: "78% out of 100",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-32 bg-slate-950 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6"
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            My academic journey and learning milestones
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <motion.div
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${edu.gradient}`}
                      />
                    </div>

                    <div
                      className={`relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {/* Period badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${edu.gradient} rounded-full text-white text-sm font-medium mb-4`}
                      >
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>

                      <div className="flex items-center gap-2 text-purple-400 mb-3 justify-end text-right">
                        <span>{edu.institution}</span>
                      </div>

                      <div
                        className={`flex items-center gap-2 text-slate-500 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                      >
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>

                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      <div
                        className={`flex items-center gap-2 text-green-400 font-medium ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                      >
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-12 h-12 items-center justify-center relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-950" />
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
