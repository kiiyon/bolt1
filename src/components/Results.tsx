import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const Results = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      number: '300%',
      description: 'サイト訪問者数の増加',
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      number: '2.5倍',
      description: 'SNSフォロワーの増加',
    },
    {
      icon: <Target className="w-12 h-12 text-indigo-600" />,
      number: '90%',
      description: '生徒定着率',
    },
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">実績</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.description} className="text-center">
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {achievement.number}
              </div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;