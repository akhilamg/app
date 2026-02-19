import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <Card
              key={job.id}
              className="border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-white border-b border-slate-200">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-900 mb-2">
                        {job.position}
                      </CardTitle>
                      <p className="text-lg font-semibold text-emerald-600 mb-1">
                        {job.company}
                      </p>
                      <p className="text-sm text-slate-600 mb-2">{job.industry}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700">{responsibility}</span>
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

export default Experience;
