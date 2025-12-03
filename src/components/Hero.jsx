import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, BrainCircuit } from 'lucide-react';
import SignupForm from './SignupForm';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-start to-accent blur-3xl opacity-40" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200 to-primary-end blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight mb-6">
              The AI operating system for <span className="text-primary-start">procurement</span>
            </h1>
            <p className="text-xl text-neutral-body mb-8 leading-relaxed">
              Win more deals, faster — automate RFP intake, routing, and proposal drafting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 text-neutral-body font-medium">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-start mr-3">
                  <Users className="w-4 h-4" />
                </div>
                Collaboration
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-start mr-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                Knowledge
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-start mr-3">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                Intelligence
              </div>
            </div>

            <div id="signup-form">
              <SignupForm />
            </div>
          </motion.div>

          {/* Visual / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Abstract Graphic representing the "Tender" flow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-start to-primary-end rounded-2xl shadow-2xl opacity-10 transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
                {/* Mock UI Header */}
                <div className="h-12 border-b border-gray-100 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mock UI Body */}
                <div className="flex-1 p-6 bg-neutral-gray/30 relative">
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-white rounded shadow-sm animate-pulse"></div>
                    <div className="h-32 w-full bg-white rounded shadow-sm p-4 space-y-2">
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                      <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-10 w-1/3 bg-primary-start/10 rounded border border-primary-start/20"></div>
                      <div className="h-10 w-1/3 bg-white rounded border border-gray-200"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-1/4 right-8 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Confidence Score</div>
                      <div className="text-sm font-bold text-gray-800">94% Match</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-8 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Assigned to</div>
                      <div className="text-sm font-bold text-gray-800">Solutions Eng.</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper for the graphic
const Check = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Hero;