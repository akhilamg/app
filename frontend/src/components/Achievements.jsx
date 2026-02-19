import React from 'react';
import { Award, Trophy, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../mock';

const Achievements = () => {
  const { achievements } = portfolioData;

  const iconMap = {
    award: Award,
    trophy: Trophy,
    sparkles: Sparkles
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon];
            return (
              <Card
                key={achievement.id}
                className="border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-emerald-600 mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
