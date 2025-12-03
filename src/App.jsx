import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Team from './components/Team';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-body font-sans selection:bg-primary-start/20">
      <Header />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Team />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-neutral-gray to-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Win more deals, faster with Tender
            </h2>
            <p className="text-lg text-neutral-body mb-10 max-w-2xl mx-auto">
              Changing how companies compete. It's time to close.
            </p>
            
            <div className="flex justify-center">
              <SignupForm source="footer_cta" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
