import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import WhyMe from './components/WhyMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Results />
      <WhyMe />
      <Testimonials />
      <Contact />
      
      <footer className="py-6 bg-gray-900 text-gray-400">
        <div className="text-center">
          <p>© 2024 Kiyohiro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;