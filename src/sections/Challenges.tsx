import { useEffect, useRef, useState } from 'react';
import { Zap, DollarSign, Shield, Leaf, BarChart3 } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: '20-50%',
    label: 'Faster',
    description: 'Construction timeline acceleration',
  },
  {
    icon: DollarSign,
    value: '20%',
    label: 'Cost Savings',
    description: 'Up to 20% reduction in total costs',
  },
  {
    icon: Shield,
    value: '70%',
    label: 'Fewer Workers',
    description: 'Reduced on-site workforce needed',
  },
  {
    icon: Leaf,
    value: '<5%',
    label: 'Waste',
    description: 'Minimal construction waste',
  },
  {
    icon: BarChart3,
    value: '98%',
    label: 'Predictable',
    description: 'Project delivery certainty',
  },
];

export default function Challenges() {
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e53935]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4a4a4a]/10 rounded-full blur-[128px]" />

      <div className="relative w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-32">
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="h-px w-8 bg-[#e53935]" />
              <span className="text-[#e53935] text-sm font-mono uppercase tracking-widest">
                Why SMOD
              </span>
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Built to Solve the Industry's{' '}
              <span className="text-gradient-red">Toughest Challenges</span>
            </h2>
            <p
              className={`text-lg text-[#7a7a8a] leading-relaxed transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              SMOD was created to answer the industry's most critical crises. We provide 
              engineering certainty in an era of housing shortages, labor drains, and 
              spiraling costs. Our integrated modular methodology is a systemic solution 
              designed specifically to eliminate these long-standing industry pain points.
            </p>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative bg-[#111118] rounded-2xl p-6 tech-card transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                } ${index === 0 ? 'sm:col-span-2' : ''}`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#e53935]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-[#e53935]" />
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 font-mono">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-[#7a7a8a]">
                  {stat.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#e53935]/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
