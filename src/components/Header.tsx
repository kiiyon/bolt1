import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const navItems = [
    { name: 'サービス内容', href: '#services' },
    { name: '実績', href: '#results' },
    { name: 'なぜ私なのか', href: '#why-me' },
    { name: 'お客様の声', href: '#testimonials' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Kiyohiro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-gray-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;