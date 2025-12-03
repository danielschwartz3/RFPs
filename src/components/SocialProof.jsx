import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SocialProof = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Trusted by industry leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="p-8 rounded-2xl bg-neutral-gray border border-gray-100 relative"
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

export default SocialProof;