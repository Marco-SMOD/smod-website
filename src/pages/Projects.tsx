import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Building2, ArrowUpRight, CheckCircle2, Clock, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'citizenM Menlo Park',
    location: 'Menlo Park, California',
    status: 'Completed',
    completion: '2023',
    stories: '5-storey',
    units: '240 units',
    modules: '160 mods',
    description: 'A modern hotel project showcasing the efficiency of modular construction in the hospitality sector.',
    image: '/images/project-mpk.jpg',
    highlights: ['Fast-track delivery', 'High-quality finishes', 'Sustainable design'],
  },
  {
    id: 2,
    name: 'citizenM DTLA',
    location: 'Los Angeles, California',
    status: 'Completed',
    completion: '2021',
    stories: '11-storey',
    units: '315 units',
    modules: '240 mods',
    description: 'Landmark downtown LA hotel demonstrating vertical scalability of modular construction.',
    image: '/images/project-dtla.jpg',
    highlights: ['Urban infill', '11 stories', 'Premium location'],
  },
  {
    id: 3,
    name: '2711 Shattuck Ave',
    location: 'Berkeley, California',
    status: 'Completed',
    completion: '2018',
    stories: '4-storey',
    units: '24 units',
    modules: '30 mods',
    description: 'The first permanent steel modular project in California, setting the standard for future developments.',
    image: '/images/project-2711.jpg',
    highlights: ['First in CA', 'Steel modular', 'Pioneering project'],
  },
  {
    id: 4,
    name: 'Micro PAD',
    location: 'San Francisco, California',
    status: 'Completed',
    completion: '2017',
    stories: '1-storey',
    units: '1 unit',
    modules: '1 mod',
    description: 'Innovative micro-unit prototype demonstrating compact living solutions.',
    image: '/images/project-micropad.jpg',
    highlights: ['Micro living', 'Prototype', 'Innovation'],
  },
  {
    id: 5,
    name: '1899 Oxford',
    location: 'Berkeley, California',
    status: 'On-Going',
    completion: '2027',
    stories: '7-storey',
    units: '222 units',
    modules: '190 mods',
    description: 'Large-scale residential development showcasing SMOD\'s capacity for high-density housing.',
    image: '/images/project-1899.jpg',
    highlights: ['High-density', 'Mixed-use', 'Sustainable'],
  },
  {
    id: 6,
    name: 'Bamboo PA',
    location: 'Port Angeles, Washington',
    status: 'On-Going',
    completion: '2027',
    stories: '4-storey',
    units: '78 units',
    modules: '65 mods',
    description: 'Sustainable housing project in the Pacific Northwest with eco-friendly design principles.',
    image: '/images/project-bamboo.jpg',
    highlights: ['Eco-friendly', 'PNW location', 'Community focus'],
  },
];

const filters = ['All', 'Completed', 'On-Going'] as const;
type FilterType = typeof filters[number];

export default function Projects() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>([false, false]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.status === activeFilter);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <main className="relative pt-20 bg-[#0a0a0f]">
      {/* Hero Section - Full Width Image */}
      <section
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="relative h-[60vh] min-h-[400px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/head-projects.jpg"
            alt="SMOD Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]/30" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="w-full px-6 lg:px-12 pb-16">
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                visibleSections[0] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="h-px w-8 bg-[#e53935]" />
              <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 ${
                visibleSections[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Our <span className="text-gradient-red">Projects</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="relative py-24 lg:py-32"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative w-full px-6 lg:px-12">
          {/* Filters */}
          <div
            className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 ${
              visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-[#e53935] text-white border-[#e53935]'
                    : 'bg-[#111118] text-[#7a7a8a] border-[#1a1a25] hover:border-[#e53935]/50 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-[#111118] rounded-2xl overflow-hidden tech-card transition-all duration-700 ${
                  visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-500/90 text-white'
                        : 'bg-[#e53935]/90 text-white'
                    }`}>
                      {project.status === 'Completed' ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                      {project.status}
                    </span>
                  </div>
                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#111118]/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 border border-[#1a1a25]">
                    <ArrowUpRight className="w-5 h-5 text-[#e53935]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Location & Year */}
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-[#7a7a8a]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.completion}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#e53935] transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#7a7a8a] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a25]">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#e53935]" />
                      <span className="text-white text-sm">{project.units}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#7a7a8a]" />
                      <span className="text-[#7a7a8a] text-sm font-mono">{project.modules}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 bg-[#1a1a25] text-[#7a7a8a] text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#7a7a8a]">No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
