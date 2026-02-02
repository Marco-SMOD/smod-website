import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Clock,
    value: '20-50%',
    label: 'Faster Delivery',
    description: 'Accelerated construction timeline',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Predictability',
    description: 'Project delivery certainty',
  },
  {
    icon: Shield,
    value: '70%',
    label: 'Fewer Workers',
    description: 'Reduced on-site workforce',
  },
  {
    icon: Zap,
    value: '20%',
    label: 'Cost Savings',
    description: 'Total project cost reduction',
  },
];

export default function Methodology() {
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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#050508]">
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/project-mpk.jpg"
          alt="SMOD Methodology"
          className={`w-full h-full object-cover transition-transform duration-1500 ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/90 to-[#050508]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/50" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#e53935]" />
                <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                  Our Approach
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                The SMOD Methodology:
                <span className="text-gradient-red"> Engineering Certainty.</span>
              </h2>

              <p className="text-lg text-white/60 leading-relaxed mb-10">
                Modular construction is not merely an alternative; it is a strategic 
                evolution in speed, cost, and quality control. By leveraging deep technical 
                expertise and a global operational model, SMOD maximizes the potential of 
                off-site manufacturing to deliver projects with unmatched precision.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.label}
                    className="bg-[#111118]/80 backdrop-blur-sm rounded-xl p-5 border border-[#1a1a25] hover:border-[#e53935]/30 transition-colors duration-300"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#e53935]/20 flex items-center justify-center mb-3">
                      <benefit.icon className="w-5 h-5 text-[#e53935]" />
                    </div>
                    <div className="text-2xl font-bold text-white font-mono mb-1">{benefit.value}</div>
                    <div className="text-white font-medium text-sm mb-1">{benefit.label}</div>
                    <div className="text-white/40 text-xs">{benefit.description}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e53935] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#e53935]/30 transition-all duration-300"
              >
                Discover Our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Empty for image visibility */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
