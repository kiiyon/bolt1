import React from 'react';
import { Search, Share2, PenTool, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO最適化',
      description: '検索エンジンで上位表示を実現し、理想の生徒との出会いを創出します。',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'SNSマーケティング',
      description: 'InstagramやYouTubeでの効果的な発信で、ファン層を拡大します。',
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'コンテンツ作成支援',
      description: '生徒の心を掴む魅力的なコンテンツ戦略をご提案します。',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'ウェブサイト制作・改善',
      description: '申し込み率を高める、最適化されたWebサイトを制作します。',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">サービス内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;