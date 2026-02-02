import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#050508] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#e53935]/15 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#4a4a4a]/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="h-px w-8 bg-[#e53935]" />
            <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-[#e53935]" />
          </div>

          {/* Title */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Start Your Next Project
            <span className="text-gradient-red"> with Certainty</span>
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-[#7a7a8a] leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Whether you are in the early conceptual phase or looking for a partner to 
            deliver results, we are ready to connect. Let's build the future together—starting today.
          </p>

          {/* Contact Info */}
          <div
            className={`flex flex-wrap justify-center gap-8 mb-10 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <a
              href="mailto:mennoh@smod.net"
              className="flex items-center gap-3 text-[#7a7a8a] hover:text-[#e53935] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#111118] border border-[#1a1a25] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">mennoh@smod.net</span>
            </a>
            <div className="flex items-center gap-3 text-[#7a7a8a]">
              <div className="w-12 h-12 rounded-xl bg-[#111118] border border-[#1a1a25] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium">New York & Seattle</span>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#e53935] text-white text-lg font-medium rounded-lg hover:shadow-xl hover:shadow-[#e53935]/30 hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
