import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: '1899 Oxford',
    location: 'Berkeley, California',
    status: 'Ongoing',
    completion: '2027',
    units: '222 units with 190 mods',
    image: '/images/project-1899.jpg',
  },
  {
    id: 2,
    name: 'Bamboo PA',
    location: 'Port Angeles, Washington',
    status: 'Ongoing',
    completion: '2027',
    units: '78 units with 65 mods',
    image: '/images/project-bamboo.jpg',
  },
  {
    id: 3,
    name: 'citizenM Menlo Park',
    location: 'Menlo Park, California',
    status: 'Completed',
    completion: '2023',
    units: '240 units',
    modules: '160 mods',
    image: '/images/project-mpk.jpg',
  },
  {
    id: 4,
    name: 'citizenM DTLA',
    location: 'Los Angeles, California',
    status: 'Completed',
    completion: '2021',
    units: '315 units',
    modules: '240 mods',
    image: '/images/project-dtla.jpg',
  },
];

export default function Portfolio() {
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
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#e53935]/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="h-px w-8 bg-[#e53935]" />
              <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                Featured Work
              </span>
            </div>
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Our <span className="text-gradient-red">Portfolio</span>
            </h2>
          </div>
          <p
            className={`text-lg text-[#7a7a8a] max-w-md transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Let our completed projects speak for themselves. Explore our collection of 
            successful case studies and delivered projects.
          </p>
        </div>

        {/* Projects Grid - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <Link to="/projects" className="block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111118] tech-card">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                      project.status === 'Completed'
                        ? 'bg-green-500/90 text-white'
                        : 'bg-[#e53935]/90 text-white'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-white' : 'bg-white animate-pulse'}`} />
                      {project.status}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-[#111118]/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 border border-[#1a1a25]">
                    <ArrowUpRight className="w-5 h-5 text-[#e53935]" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    {/* Location & Year */}
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#e53935]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#e53935]" />
                        {project.completion}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#e53935] transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.units}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#1a1a25] text-white font-medium rounded-lg hover:border-[#e53935]/50 hover:bg-[#e53935]/5 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
