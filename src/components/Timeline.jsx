import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      phase: "Milestone 0",
      date: "Jan 2026",
      title: "RFP Intake + Routing Slackbot",
      items: ["Simple proposal editor", "Basic routing"]
    },
    {
      phase: "Milestone 1",
      date: "March 2026",
      title: "Knowledge Layer",
      items: ["Intelligent intake", "Knowledge extraction"]
    },
    {
      phase: "Milestone 2",
      date: "Mid 2026",
      title: "QA & Consistency",
      items: ["Automated drafting", "Internal API integrations"]
    },
    {
      phase: "Milestone 3",
      date: "Late 2026",
      title: "Growth Engine",
      items: ["QA engine", "Continuous improvement loop"]
    }
  ];

  return (
    <section className="py-20 bg-neutral-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Product Roadmap
          </h2>
          <p className="text-lg text-neutral-body">
            Building the future of procurement intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 w-4 h-4 bg-primary-start rounded-full border-4 border-white shadow-sm -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Card */}
                <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:mb-12' : 'md:mt-12'}`}>
                  <div className="text-xs font-bold text-primary-start uppercase tracking-wider mb-1">
                    {milestone.date}
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-3">
                    {milestone.phase}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-3">
                    {milestone.title}
                  </h3>
                  <ul className="space-y-2">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-body flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;