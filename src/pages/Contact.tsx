import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const offices = [
  {
    city: 'New York',
    address: '1250 Broadway, Ste 3646',
    state: 'New York, NY 10001',
    phone: '+1 (212) 555-0123',
  },
  {
    city: 'Seattle',
    address: '1025 103rd Avenue Northeast Ste 210',
    state: 'Bellevue, WA 98004',
    phone: '+1 (206) 555-0456',
  },
];

export default function Contact() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>([false, false]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', location: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            src="/images/hero-contact.jpg"
            alt="SMOD Contact"
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
                Contact Us
              </span>
            </div>
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 ${
                visibleSections[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Get In <span className="text-gradient-red">Touch</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="relative py-24 lg:py-32"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#e53935]/10 rounded-full blur-[128px] -translate-y-1/2" />
        
        <div className="relative w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div
              className={`bg-[#111118] rounded-3xl p-8 lg:p-10 border border-[#1a1a25] transition-all duration-700 ${
                visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e53935]/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#e53935]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#7a7a8a]">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#7a7a8a] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-[#1a1a25] text-white focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#7a7a8a] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-[#1a1a25] text-white focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#7a7a8a] mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-[#1a1a25] text-white focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20 outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-[#7a7a8a] mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-[#1a1a25] text-white focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20 outline-none transition-all"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#7a7a8a] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-[#1a1a25] text-white focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e53935] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-[#e53935]/30 transition-all duration-300"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-700 ${
                visibleSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {/* Offices */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Our Offices
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-[#111118] rounded-2xl p-6 border border-[#1a1a25]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#e53935]/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#e53935]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{office.city}</h3>
                          <p className="text-[#7a7a8a] text-sm">{office.address}</p>
                          <p className="text-[#7a7a8a] text-sm">{office.state}</p>
                          <p className="text-[#7a7a8a] text-sm mt-2 flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {office.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-[#111118] rounded-2xl p-6 border border-[#1a1a25]">
                <h3 className="text-lg font-bold text-white mb-4">
                  For Further Enquiries
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e53935]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#e53935]" />
                  </div>
                  <div>
                    <p className="text-[#7a7a8a] text-sm">Project Email</p>
                    <a
                      href="mailto:mennoh@smod.net"
                      className="text-white font-medium hover:text-[#e53935] transition-colors"
                    >
                      mennoh@smod.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-[#111118] rounded-2xl p-6 border border-[#1a1a25]">
                <h3 className="text-lg font-bold text-white mb-4">
                  Working Hours
                </h3>
                <div className="space-y-2 text-[#7a7a8a]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
