import React from 'react';
import { Download, Mail, Linkedin, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal, targetRoles } = portfolioData;

  const handleDownloadResume = () => {
    window.open(personal.resumeUrl, '_blank');
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">
                Available for Full-Time Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {personal.name}
              </h1>
              <p className="text-2xl lg:text-3xl text-emerald-600 font-semibold">
                {personal.title}
              </p>
              <p className="text-lg text-slate-600">
                {personal.subtitle}
              </p>
              <div className="flex items-center text-slate-600 pt-2">
                <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                {personal.location}
              </div>
            </div>

            {/* Target Roles */}
            <div className="flex flex-wrap gap-2">
              {targetRoles.map((role, index) => (
                <Badge key={index} variant="outline" className="border-slate-300 text-slate-700">
                  {role}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={`mailto:${personal.email}`}
                className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
