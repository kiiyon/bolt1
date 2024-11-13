import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
        <p className="text-xl text-gray-600 mb-12">
          まずは気軽にご相談ください。あなたの課題に最適なWeb戦略を提案します。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            無料相談を申し込む
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            LINEで相談する
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;