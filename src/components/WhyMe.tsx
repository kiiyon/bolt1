import React from 'react';
import { BookOpen, Globe, Award } from 'lucide-react';

const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">なぜ私なのか</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <BookOpen className="w-10 h-10 text-indigo-600" />
            <h3 className="text-xl font-semibold">日本語講師としての経験</h3>
            <p className="text-gray-600">
              2021年から日本語教育に従事。独学で日本語教育検定に合格し、オンラインプラットフォームで多くの生徒を指導。自らもWeb集客の手法を駆使して安定した受講者を確保してきた経験があります。
            </p>
          </div>
          <div className="space-y-4">
            <Globe className="w-10 h-10 text-indigo-600" />
            <h3 className="text-xl font-semibold">WebマーケティングとAIの専門知識</h3>
            <p className="text-gray-600">
              個人事業主としてWeb制作からマーケティングまで一貫して提供。AIハッカソンではビジネス部門2位を獲得するなど、最新のデジタルスキルを活用した成果を上げています。
            </p>
          </div>
          <div className="space-y-4">
            <Award className="w-10 h-10 text-indigo-600" />
            <h3 className="text-xl font-semibold">海外と多文化交流の実績</h3>
            <p className="text-gray-600">
              ルワンダのオリンピック選手団との交流を担当し、多文化対応力を発揮。日本語教育においても多様な文化背景を理解しながら指導できる柔軟性を備えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;