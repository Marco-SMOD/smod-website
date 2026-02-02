import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Building2, MapPin, Calendar, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: '2711 Shattuck Ave',
    location: 'Berkeley, California',
    year: '2018',
    units: '24 units',
    modules: '30 mods',
    description: 'The first permanent steel modular project in California, setting the standard for future developments.',
    image: '/images/project-2711.jpg',
    highlight: 'First in CA',
  },
  {
    id: 2,
    name: 'Micro PAD',
    location: 'San Francisco, California',
    year: '2017',
    units: '1 unit',
    modules: '1 mod',
    description: 'Innovative micro-unit prototype demonstrating compact living solutions.',
    image: '/images/project-micropad.jpg',
    highlight: 'Innovation',
  },
];

export default function HighDensity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Gradient Orb */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a4a4a]/10 rounded-full blur-[128px]" />

      <div className="relative w-full px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="h-px w-8 bg-[#e53935]" />
            <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
              High-Density Solutions
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Engineered for{' '}
            <span className="text-gradient-red">High Density</span>
          </h2>
          <p
            className={`text-lg text-[#7a7a8a] leading-relaxed transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Solve the housing shortage with efficiency. SMOD's steel modules are designed 
            for vertical scalability, enabling rapid delivery of mid-to-high-rise residential 
            projects. We turn construction constraints into competitive advantages.
          </p>
        </div>

        {/* Projects Showcase - Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#111118] tech-card">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Highlight Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-[#e53935] text-white text-xs font-medium rounded-lg">
                        {project.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center">
                    {/* Project Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-[#7a7a8a]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#e53935]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#e53935]" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e53935] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-[#7a7a8a] text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a25]">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#e53935]" />
                        <span className="text-white text-sm font-medium">{project.units}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#7a7a8a]" />
                        <span className="text-[#7a7a8a] text-sm font-mono">{project.modules}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#e53935]/40 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e53935] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#e53935]/30 hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
