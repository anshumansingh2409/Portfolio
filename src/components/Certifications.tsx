import { motion } from 'motion/react';
import { useRef } from 'react';
import { Award, Star, Eye } from 'lucide-react';

const internshipImg = '/assets/Internship.jpeg';
const c1Img = '/assets/c1.jpeg';
const c2Img = '/assets/c2.jpeg';
const c3Img = '/assets/c3.jpeg';
const c4Img = '/assets/c4.jpeg';
const c5Img = '/assets/c5.jpeg';

export function Certifications() {
  const certifications = [
    { name: 'Android Developer Virtual Internship', issuer: 'AICTE & EduSkills', date: 'Oct – Dec 2025', credentialId: 'b8cc4078c31d321b26dcb01b29caf886', skills: ['Android', 'Kotlin'], gradient: 'from-blue-500 to-orange-500', icon: '🎓', image: internshipImg },
    { name: 'AI Transformative Learning Internship', issuer: 'Microsoft & SAP', date: '2025', credentialId: 'TSPIN24_610934', skills: ['AI', 'ML'], gradient: 'from-indigo-500 to-blue-600', icon: '🤖', image: c1Img },
    { name: 'Database Design Certification', issuer: 'Oracle Academy', date: 'Dec 2024', credentialId: 'Oracle-DB-2024', skills: ['SQL', 'Data Modeling'], gradient: 'from-red-500 to-orange-600', icon: '🗄️', image: c2Img },
    { name: 'Bharat Shiksha Expo Hackathon', issuer: 'MIET Incubation Center', date: '2024', credentialId: 'Hackathon-2024', skills: ['Innovation', 'Problem Solving'], gradient: 'from-green-500 to-emerald-600', icon: '🏆', image: c3Img },
    { name: 'Python Programming', issuer: 'Infosys Springboard', date: 'Aug 2024', credentialId: 'Infosys-Python', skills: ['Python', 'Logic'], gradient: 'from-sky-500 to-blue-500', icon: '🐍', image: c4Img },
    { name: 'Data Structures using Java', issuer: 'GUVI Geek Networks', date: 'Aug 2024', credentialId: 'zj87938l27lH8T0n77', skills: ['Java', 'DSA'], gradient: 'from-emerald-500 to-teal-600', icon: '☕', image: c5Img },
  ];

  // List ko double kar rahe hain for seamless infinite loop
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <section id="certifications" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* BACKGROUND GRADIENT (KAM KIYA GAYA HAI) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* TITLE */}
        <div className="text-center mb-16">
          <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4 items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        {/* INFINITE HORIZONTAL SLIDER */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              ease: "linear", 
              repeat: Infinity 
            }}
            whileHover={{ transition: { duration: 60 } }} // Slows down on hover
          >
            {duplicatedCerts.map((cert, index) => (
              <div 
                key={index} 
                className="w-[350px] flex-shrink-0 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
              >
                {/* IMAGE */}
                <div className="h-40 overflow-hidden">
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className={`inline-block p-2 rounded-lg bg-gradient-to-r ${cert.gradient} mb-3`}>
                    <span className="text-xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white truncate">{cert.name}</h3>
                  <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <Star className="w-3 h-3" /> {cert.date}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 2).map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-slate-800 text-[10px] rounded-full text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => window.open(cert.image, '_blank')}
                    className="mt-4 w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <Eye className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
                <div className={`h-1 bg-gradient-to-r ${cert.gradient}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}