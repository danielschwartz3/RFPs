import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, CheckSquare } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Search,
      title: "Find winnable RFPs",
      description: "Identify the best opportunities with pipeline intelligence and win-probability scoring."
    },
    {
      icon: PenTool,
      title: "Automate proposal writing",
      description: "Draft responses instantly using Tender's knowledge layer. Integrates with Drive, Slack, CRM, JIRA, and GitHub."
    },
    {
      icon: CheckSquare,
      title: "Assign & track",
      description: "Streamline project management with automated routing, centralized assignments, and QA workflows."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Win more deals, faster
          </h2>
          <p className="text-lg text-neutral-body">
            Empower teams with faster, higher-quality proposal workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary-start mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;