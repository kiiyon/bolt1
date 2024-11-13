import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: 'このアドバイスでオンライン授業の受講者が増えました。特にSNSの活用方法が勉強になりました。',
      author: '40代女性 / 日本語講師',
    },
    {
      content: '自分のブランディングが明確になり、生徒からの反応も向上しました。継続的なサポートに感謝です。',
      author: '30代男性 / オンライン講師',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
              <Quote className="w-8 h-8 text-indigo-200 absolute top-4 left-4" />
              <div className="pl-8">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="text-gray-500 font-medium">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;