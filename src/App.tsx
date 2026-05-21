import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-all duration-300">

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <section className="bg-slate-100">
        <Hero />
      </section>

      {/* About */}
      <section className="bg-white/70">
        <About />
      </section>

      {/* Skills */}
      <section className="bg-slate-100">
        <Skills />
      </section>

      {/* Projects */}
      <section className="bg-white/60">
        <Projects />
      </section>

      {/* Education */}
      <section className="bg-slate-100">
        <Education />
      </section>

      {/* Certifications */}
      <section className="bg-white/70">
        <Certifications />
      </section>

      {/* Contact */}
      <section className="bg-slate-100">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <Footer />
      </footer>
    </div>
  );
}