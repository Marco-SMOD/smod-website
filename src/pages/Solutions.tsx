import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight, Layers, Home, Building, Clock, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 'steel-frame',
    icon: Layers,
    title: 'Steel Frame Modular',
    subtitle: 'Structural Excellence',
    description: 'Steel-framed modules are constructed with a hollow structural steel frame that is infilled with light-gauge steel studs. The modules arrive on site with interior and exterior finish materials installed.',
    features: [
      'Maximum 28-story building capability',
      'Superior structural integrity',
      'Fire-resistant construction',
      'Precision engineering',
      'Rapid on-site assembly',
    ],
    stats: [
      { value: '28', label: 'Max Stories' },
      { value: '50%', label: 'Faster Build' },
    ],
    color: 'from-[#e53935] to-[#ef5350]',
  },
  {
    id: 'turnkey',
    icon: Home,
    title: 'Integrated Turnkey Living',
    subtitle: 'Plug-and-Play Solutions',
    description: 'SMOD delivers turnkey 3D modules with built-in furniture and smart systems. This approach maximizes spatial efficiency and drastically accelerates your time-to-market.',
    features: [
      'Pre-installed furniture & fixtures',
      'Smart home systems integrated',
      'Maximized spatial efficiency',
      'Quality-controlled manufacturing',
      'Immediate occupancy ready',
    ],
    stats: [
      { value: '3D', label: 'Complete Modules' },
      { value: '70%', label: 'Time Saved' },
    ],
    color: 'from-[#4a4a4a] to-[#6a6a6a]',
  },
  {
    id: 'high-density',
    icon: Building,
    title: 'High-Density Housing',
    subtitle: 'Vertical Scalability',
    description: 'Solve the housing shortage with efficiency. SMOD\'s steel modules are designed for vertical scalability, enabling rapid delivery of mid-to-high-rise residential projects.',
    features: [
      'Vertical scalability design',
      'Mid-to-high-rise capable',
      'Urban infill optimization',
      'Affordable housing solutions',
      'Sustainable construction',
    ],
    stats: [
      { value: '7000', label: 'Max Units/Project' },
      { value: '<5%', label: 'Waste' },
    ],
    color: 'from-[#e53935] to-[#ef5350]',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Speed',
    description: '20-50% faster construction timeline',
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Factory-controlled precision',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Minimal waste, maximum efficiency',
  },
];

export default function Solutions() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>([false, false, false, false]);

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
        className="relative h-[50vh] min-h-[350px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/project-2711.jpg"
            alt="SMOD Solutions"
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
                Solutions
              </span>
            </div>
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 ${
                visibleSections[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              What is <span className="text-gradient-red">Modular?</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="relative py-24 lg:py-32"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative w-full px-6 lg:px-12">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
                  visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <span className="text-sm font-medium text-[#e53935] mb-2 block">
                    {solution.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-[#7a7a8a] leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#e53935]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#e53935]" />
                        </div>
                        <span className="text-[#7a7a8a]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex gap-8">
                    {solution.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                        <div className="text-sm text-[#7a7a8a]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#111118] border border-[#1a1a25]">
                    <img
                      src={solution.id === 'steel-frame' ? '/images/solutions-steel.jpg' : solution.id === 'turnkey' ? '/images/solutions-living.jpg' : '/images/solutions-high-density.jpg'}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className={`absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-br ${solution.color} opacity-20 -bottom-4 -right-4`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="relative py-24 lg:py-32 bg-[#050508]"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative w-full px-6 lg:px-12">
          <div className="text-center mb-16">
            <div
              className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${
                visibleSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="h-px w-8 bg-[#e53935]" />
              <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                Why Choose Modular
              </span>
              <div className="h-px w-8 bg-[#e53935]" />
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${
                visibleSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Key <span className="text-gradient-red">Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`text-center p-8 rounded-3xl bg-[#111118] border border-[#1a1a25] tech-card transition-all duration-700 ${
                  visibleSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#e53935]/20 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#e53935]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#7a7a8a]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="relative py-24 lg:py-32"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e53935]/10 rounded-full blur-[128px]" />
        
        <div className="relative w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
                visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Ready to Build <span className="text-gradient-red">Smarter?</span>
            </h2>
            <p
              className={`text-lg text-[#7a7a8a] leading-relaxed mb-10 transition-all duration-700 ${
                visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Let's discuss how SMOD's modular solutions can transform your next project 
              with speed, quality, and cost efficiency.
            </p>
            <div
              className={`transition-all duration-700 ${
                visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[#e53935] text-white text-lg font-medium rounded-lg hover:shadow-xl hover:shadow-[#e53935]/30 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
