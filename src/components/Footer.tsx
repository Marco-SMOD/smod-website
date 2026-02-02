import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'Steel Frame Modular', href: '/solutions' },
    { name: 'Turnkey Living', href: '/solutions' },
    { name: 'High-Density Housing', href: '/solutions' },
  ],
  projects: [
    { name: 'Completed', href: '/projects' },
    { name: 'On-Going', href: '/projects' },
    { name: 'Case Studies', href: '/projects' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/about' },
    { name: 'Careers', href: '/about' },
  ],
  contact: [
    { name: 'Get in Touch', href: '/contact' },
    { name: 'New York Office', href: '/contact' },
    { name: 'Seattle Office', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:mennoh@smod.net' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050508] border-t border-[#1a1a25]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e53935]/50 to-transparent" />
      
      <div className="w-full px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img 
                src="/images/logo.png" 
                alt="SMOD" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-white">SMOD</span>
            </Link>
            <p className="text-[#7a7a8a] text-sm leading-relaxed max-w-sm mb-6">
              Smart Build, Future Shaped. Merging Asian manufacturing excellence with 
              world-class modular expertise to deliver next-generation building solutions.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-[#1a1a25] flex items-center justify-center text-[#7a7a8a] hover:text-white hover:bg-[#e53935] transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#7a7a8a] hover:text-[#e53935] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Projects
            </h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#7a7a8a] hover:text-[#e53935] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#7a7a8a] hover:text-[#e53935] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1a1a25] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7a7a8a] text-sm">
            © {new Date().getFullYear()} SMOD. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-[#7a7a8a] hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-[#7a7a8a] hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
