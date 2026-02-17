import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle, Star, Eye } from 'lucide-react';

const internshipImg = new URL('../assets/Internship.jpeg', import.meta.url).href;
const c1Img = new URL('../assets/c1.jpeg', import.meta.url).href;
const c2Img = new URL('../assets/c2.jpeg', import.meta.url).href;
const c3Img = new URL('../assets/c3.jpeg', import.meta.url).href;
const c4Img = new URL('../assets/c4.jpeg', import.meta.url).href;
const c5Img = new URL('../assets/c5.jpeg', import.meta.url).href;

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [

    // ✅ 1 ANDROID INTERNSHIP (same)
    {
      name: 'Android Developer Virtual Internship',
      issuer: 'AICTE & EduSkills (Google for Developers)',
      date: 'Oct – Dec 2025',
      credentialId: 'b8cc4078c31d321b26dcb01b29caf886',
      skills: ['Android', 'Mobile Apps', 'Java', 'Kotlin'],
      gradient: 'from-blue-500 to-orange-500',
      icon: '🎓',
      image: internshipImg,
    },

    // ✅ 2 TECHSAKSHAM
    {
      name: 'AI Transformative Learning Internship',
      issuer: 'Microsoft & SAP (Edunet Foundation)',
      date: '2025',
      credentialId: 'TSPIN24_610934',
      skills: ['AI', 'Machine Learning', 'Industry Training'],
      gradient: 'from-indigo-500 to-blue-600',
      icon: '🤖',
      image: c1Img,
    },

    // ✅ 3 ORACLE
    {
      name: 'Database Design Certification',
      issuer: 'Oracle Academy',
      date: 'Dec 2024',
      credentialId: 'Oracle-DB-2024',
      skills: ['Database Design', 'SQL', 'Data Modeling'],
      gradient: 'from-red-500 to-orange-600',
      icon: '🗄️',
      image: c2Img,
    },

    // ✅ 4 HACKATHON
    {
      name: 'Bharat Shiksha Expo Hackathon',
      issuer: 'MIET Incubation Center',
      date: '2024',
      credentialId: 'Hackathon-2024',
      skills: ['Innovation', 'Problem Solving', 'Teamwork'],
      gradient: 'from-green-500 to-emerald-600',
      icon: '🏆',
      image: c3Img,
    },

    // ✅ 5 INFOSYS PYTHON
    {
      name: 'Python Programming',
      issuer: 'Infosys Springboard',
      date: 'Aug 2024',
      credentialId: 'Infosys-Python',
      skills: ['Python', 'Programming', 'Logic Building'],
      gradient: 'from-sky-500 to-blue-500',
      icon: '🐍',
      image: c4Img,
    },

    // ✅ 6 GUVI JAVA
    {
      name: 'Data Structures using Java',
      issuer: 'GUVI Geek Networks',
      date: 'Aug 2024',
      credentialId: 'zj87938l27lH8T0n77',
      skills: ['Java', 'Data Structures', 'Algorithms'],
      gradient: 'from-emerald-500 to-teal-600',
      icon: '☕',
      image: c5Img,
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
      ref={ref}
    >
      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-2xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 items-center justify-center">
            <Award className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">

                {/* IMAGE */}
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-44 overflow-hidden"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition cursor-pointer"
                  />
                </a>

                {/* HEADER */}
                <div className={`p-5 bg-gradient-to-r ${cert.gradient}`}>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl">{cert.icon}</span>
                    <button
                      onClick={() => window.open(cert.image, '_blank')}
                      className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition"
                    >
                      <Eye className="w-5 h-5" />
                      <span className="text-sm font-medium">View</span>
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.name}
                  </h3>

                  <p className="text-purple-400 mb-3">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <Star className="w-4 h-4" />
                    {cert.date}
                  </div>

                  <div className="text-xs text-slate-500 font-mono mb-3">
                    ID: {cert.credentialId}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-800 text-xs rounded-full text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`h-1 bg-gradient-to-r ${cert.gradient}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
