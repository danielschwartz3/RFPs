import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shuffle, Database, AlertCircle, Quote } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Slow and fragmented workflows",
      description: "Missed opportunities and wasted effort chasing documents."
    },
    {
      icon: Shuffle,
      title: "Messy coordination",
      description: "Cross-functional chaos leads to slow decisions and unclear ownership."
    },
    {
      icon: Database,
      title: "Buried knowledge",
      description: "Critical info is scattered across long docs, inboxes, and tools."
    },
    {
      icon: AlertCircle,
      title: "Manual quality assurance",
      description: "Outdated info and inconsistent messaging create compliance risks."
    }
  ];

  const testimonials = [
    {
      quote: "No systematic way to track question ownership. It's difficult to know what's complete versus in progress.",
      role: "Solutions Engineer, CrowdStrike",
      delay: 0
    },
    {
      quote: "Coordination is a huge pain point – involving more people leads to exponentially more coordination time.",
      role: "Director, Impact Investing",
      delay: 0.1
    },
    {
      quote: "Last minute RFP requests happen all the time. Last week, I sent my engineer home before opening one so he wouldn't have to deal with it.",
      role: "Engineering Manager, Cybersecurity",
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 bg-neutral-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
            >
              RFPs are slow, fragmented, and painful.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-body mb-10"
            >
              B2B companies spend billions and thousands of hours on Requests for Proposals—pulling teams away from higher-value work. And after all that effort, they still can't close.
            </motion.p>

            <div className="space-y-6">
              {problems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mt-1 mr-4 p-2 bg-white rounded-lg shadow-sm text-red-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark">{item.title}</h3>
                    <p className="text-neutral-body text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract "Broken Workflow" Graphic */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-50 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-50 rounded-full blur-2xl opacity-50"></div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 opacity-50">
                  <div className="h-2 w-1/3 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex justify-center">
                  <Shuffle className="w-6 h-6 text-gray-300 rotate-90" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold text-red-700">Overdue</span>
                    </div>
                    <div className="h-2 w-full bg-red-200 rounded mb-1"></div>
                    <div className="h-2 w-2/3 bg-red-200 rounded"></div>
                  </div>
                  <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-100 opacity-60">
                    <div className="h-2 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Quote Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 right-6 max-w-xs bg-neutral-dark text-white p-4 rounded-xl shadow-lg text-sm italic"
              >
                "We search manually through past proposals... scattered across desktops and not centralized."
                <div className="mt-2 text-xs text-gray-400 not-italic">— Management Consultant, MBB</div>
              </motion.div>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="p-8 rounded-2xl bg-white border border-gray-100 relative shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary-start/20 mb-4" />
              <p className="text-neutral-body italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="font-bold text-neutral-dark text-sm">
                {item.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;