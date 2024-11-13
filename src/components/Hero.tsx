import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            日本語講師のための<br className="hidden sm:block" />
            <span className="text-indigo-600">Web戦略で、</span><br className="hidden sm:block" />
            集客と収益化をサポート
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            あなたの日本語レッスンをもっと多くの生徒に届けませんか？
            Webマーケティングと教育の専門家として、日本語講師の皆様の集客とブランディングを支援します。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            無料相談を申し込む
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;