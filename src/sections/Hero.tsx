import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpg"
          alt="SMOD Modular Building"
          className={`w-full h-full object-cover transition-all duration-1500 ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e53935]/30 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4a4a4a]/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#e53935]/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#4a4a4a]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 py-32">
          <div className="max-w-4xl">
            {/* Tech Label */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="h-px w-12 bg-gradient-to-r from-[#e53935] to-transparent" />
              <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                Modular Construction Technology
              </span>
            </div>

            {/* Main Title */}
            <div className="overflow-hidden mb-6">
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white transition-all duration-1000 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <span className="text-gradient-red">SMOD</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mb-8">
              <p
                className={`text-2xl sm:text-3xl lg:text-4xl font-medium text-white/90 transition-all duration-1000 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                Smart Build, <span className="text-[#e53935]">Future Shaped.</span>
              </p>
            </div>

            {/* Description */}
            <p
              className={`text-lg lg:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Merging the cost advantages of Asian manufacturing with world-class modular 
              expertise to deliver disruptive, integrated building solutions for the North 
              American market.
            </p>

            {/* Stats Row */}
            <div
              className={`flex flex-wrap gap-8 mb-12 transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#e53935]/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#e53935] font-mono">50%</span>
                </div>
                <div>
                  <div className="text-white font-medium">Faster</div>
                  <div className="text-white/50 text-sm">Construction</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#4a4a4a]/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#e53935] font-mono">98%</span>
                </div>
                <div>
                  <div className="text-white font-medium">Predictable</div>
                  <div className="text-white/50 text-sm">Delivery</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#e53935]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#e53935] font-mono">&lt;5%</span>
                </div>
                <div>
                  <div className="text-white font-medium">Waste</div>
                  <div className="text-white/50 text-sm">Sustainable</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e53935] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#e53935]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="w-5 h-5" />
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-[#e53935]/50 hover:bg-[#e53935]/5 transition-all duration-300 backdrop-blur-sm"
              >
                Our Solutions
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-full px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-[#7a7a8a] text-sm mb-1">Latest Project</div>
                <div className="text-white font-medium">1899 Oxford — Berkeley, CA</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-[#7a7a8a] text-sm mb-1">Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e53935] rounded-full animate-pulse" />
                  <span className="text-white font-medium">In Progress</span>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-[#e53935] hover:text-white transition-colors flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
