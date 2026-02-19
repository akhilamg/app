import React from 'react';
import { Mail, Linkedin, Award } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">
              {personal.name}
            </h3>
            <p className="text-slate-300 mb-4">
              Cost & Management Accountant (CMA) | University Gold Medallist
            </p>
            <div className="flex items-center text-emerald-400">
              <Award className="w-5 h-5 mr-2" />
              Rank 1, B.Com (Hons.)
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Education', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                {personal.email}
              </a>
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Designed & Developed with passion for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
