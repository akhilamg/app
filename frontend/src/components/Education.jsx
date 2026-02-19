import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu) => (
            <Card
              key={edu.id}
              className={`border-slate-200 hover:shadow-xl transition-all duration-300 ${
                edu.highlight ? 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-white' : 'hover:border-emerald-300'
              }`}
            >
              <CardHeader className="border-b border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    edu.highlight ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : 'bg-emerald-600'
                  }`}>
                    {edu.highlight ? (
                      <Award className="w-6 h-6 text-white" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl text-slate-900 mb-1">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-semibold text-emerald-600">
                          {edu.institution}
                        </p>
                      </div>
                      {edu.highlight && (
                        <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
                          Gold Medallist
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{edu.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
