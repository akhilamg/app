import React from 'react';
import { Database, BarChart3, FileSpreadsheet, Laptop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Skills = () => {
  const { technicalSkills, coreCompetencies } = portfolioData;

  const categoryIcons = {
    'ERP Systems': Database,
    'Data Analytics & BI': BarChart3,
    'Microsoft Excel': FileSpreadsheet,
    'Office Suite': Laptop
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Competencies</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skillGroup, index) => {
                const Icon = categoryIcons[skillGroup.category];
                return (
                  <Card
                    key={index}
                    className="border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        {Icon && <Icon className="w-5 h-5 mr-2 text-emerald-600" />}
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-emerald-200 text-slate-700 hover:bg-emerald-50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Competencies</h3>
            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((competency, index) => (
                    <Badge
                      key={index}
                      className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200"
                    >
                      {competency}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
