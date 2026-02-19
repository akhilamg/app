import React from 'react';
import { Award, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { summary } = portfolioData;

  const highlights = [
    {
      icon: Award,
      title: 'University Gold Medallist',
      description: 'Rank 1 in B.Com (Hons.) with 89.6% aggregate'
    },
    {
      icon: TrendingUp,
      title: 'Process Digitalization',
      description: 'Led Power BI dashboard implementation at Saint-Gobain'
    },
    {
      icon: Target,
      title: 'CMA Qualified',
      description: 'Cost & Management Accountant (ICMAI)'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {summary}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
