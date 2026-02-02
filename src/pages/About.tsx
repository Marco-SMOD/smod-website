import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Download, Linkedin } from 'lucide-react';

const leadership = [
  {
    name: 'Marco Ma',
    role: 'Managing Director',
    bio: 'The visionary behind SMOD who made California\'s first steel modular high-rise a reality. A 15+ year industry veteran who transformed modular construction from concept to benchmark.',
    linkedin: '#',
  },
  {
    name: 'Linsen Zhang',
    role: 'Principal & Co-Founder',
    bio: 'A seasoned real estate developer and investment strategist with deep expertise in project financing, capital markets, and development advisory. Trusted partner to developers and investors across North America.',
    linkedin: '#',
  },
  {
    name: 'Menno Hilberts',
    role: 'Project Director & Partner',
    bio: 'A pioneer in the modular building industry with over two decades of experience. Having delivered 12+ modular projects, he is widely recognized as one of the most influential figures in advancing modular construction globally.',
    linkedin: '#',
  },
];

const locations = [
  {
    city: 'New York',
    address: '1250 Broadway, Ste 3646',
    state: 'New York, NY 10001',
  },
  {
    city: 'Seattle',
    address: '1025 103rd Avenue Northeast Ste 210',
    state: 'Bellevue, WA 98004',
  },
];

const promises = [
  { letter: 'S', word: 'Smart' },
  { letter: 'S', word: 'Speedy' },
  { letter: 'S', word: 'Simplified' },
  { letter: 'S', word: 'Stackable' },
  { letter: 'S', word: 'Schedulable' },
  { letter: 'S', word: 'Sustainable' },
];

export default function About() {
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
        { threshold: 0.2 }
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
            src="/images/hero-about.png"
            alt="SMOD About"
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
                About Us
              </span>
            </div>
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 ${
                visibleSections[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Building the <span className="text-gradient-red">Future</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="relative py-24 lg:py-32"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#e53935]/10 rounded-full blur-[128px] -translate-y-1/2" />
        
        <div className="relative w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                  visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="h-px w-8 bg-[#e53935]" />
                <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
                  visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                Transforming Construction Into Manufacturing
              </h2>
              <p
                className={`text-lg text-[#7a7a8a] leading-relaxed transition-all duration-700 ${
                  visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                To transform construction into a manufacturing-driven, globally coordinated 
                system that delivers higher-quality, more affordable housing. We believe that 
                by applying industrial principles to building, we can solve the housing crisis 
                while creating sustainable, beautiful spaces.
              </p>
            </div>

            {/* The SMOD Promise */}
            <div
              className={`bg-[#111118] rounded-3xl p-8 lg:p-10 border border-[#1a1a25] transition-all duration-700 ${
                visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                The SMOD Promise:
              </h3>
              <div className="space-y-4">
                {promises.map((promise) => (
                  <div
                    key={promise.word}
                    className="flex items-center gap-4"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#e53935]/20 flex items-center justify-center text-[#e53935] font-bold text-lg">
                      {promise.letter}
                    </span>
                    <span className="text-lg font-medium text-white">
                      {promise.word}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
                Our Team
              </span>
              <div className="h-px w-8 bg-[#e53935]" />
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${
                visibleSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Leadership <span className="text-gradient-red">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <div
                key={person.name}
                className={`group bg-[#111118] rounded-3xl p-8 tech-card transition-all duration-700 ${
                  visibleSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e53935] to-[#ef5350] flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">
                    {person.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {person.name}
                </h3>
                <p className="text-[#e53935] font-medium text-sm mb-4">
                  {person.role}
                </p>
                <p className="text-[#7a7a8a] text-sm leading-relaxed mb-6">
                  {person.bio}
                </p>

                <a
                  href={person.linkedin}
                  className="inline-flex items-center gap-2 text-[#7a7a8a] hover:text-[#e53935] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">Connect</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations & Contact Section */}
      <section
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="relative py-24 lg:py-32"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4a4a4a]/10 rounded-full blur-[128px]" />
        
        <div className="relative w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Locations */}
            <div>
              <div
                className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                  visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="h-px w-8 bg-[#e53935]" />
                <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                  Our Offices
                </span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-white mb-8 transition-all duration-700 ${
                  visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                Locations
              </h2>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`flex items-start gap-4 bg-[#111118] rounded-2xl p-6 border border-[#1a1a25] transition-all duration-700 ${
                      visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#e53935]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#e53935]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{location.city}</h3>
                      <p className="text-[#7a7a8a] text-sm">{location.address}</p>
                      <p className="text-[#7a7a8a] text-sm">{location.state}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div
                className={`mt-6 flex items-start gap-4 bg-[#111118] rounded-2xl p-6 border border-[#1a1a25] transition-all duration-700 ${
                  visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#e53935]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#e53935]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:mennoh@smod.net"
                    className="text-[#7a7a8a] text-sm hover:text-[#e53935] transition-colors"
                  >
                    mennoh@smod.net
                  </a>
                </div>
              </div>
            </div>

            {/* Download Brochure */}
            <div
              className={`flex flex-col justify-center transition-all duration-700 ${
                visibleSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="bg-[#111118] rounded-3xl p-8 lg:p-10 border border-[#1a1a25]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Download Our Project Brochure
                </h3>
                <p className="text-[#7a7a8a] mb-8">
                  Get detailed information about our capabilities, past projects, and 
                  how we can help bring your vision to life.
                </p>
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e53935] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#e53935]/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
