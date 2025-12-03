import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: "Manasi Maheshwari",
      role: "Co-Founder",
      bio: "Founding engineer at BCV-backed seed AI startup. Prev. tech lead at Bubble, Ramp.",
      initials: "MM"
    },
    {
      name: "Daniel Schwartz",
      role: "Co-Founder",
      bio: "PM at Eric Schmidt's philanthropy. Built 0-1 at 4 B2B startups. MechE & CS at McGill.",
      initials: "DS"
    },
    {
      name: "Noa Schwartz",
      role: "Co-Founder",
      bio: "Led product for Weights & Biases. Early PM at Scale AI. CS & Math at MIT.",
      initials: "NS"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            A team built for the challenge
          </h2>
          <p className="text-lg text-neutral-body">
            All pursuing MS in Engineering + MBA at Harvard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0072E6] to-[#00B7D9] opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-110"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0072E6] to-[#0047C1] flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg relative z-10">
                  {member.initials}
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-1 flex items-center justify-center gap-2">
                {member.name}
              </h3>
              <div className="text-sm font-semibold text-primary-start mb-3 uppercase tracking-wide">
                {member.role}
              </div>
              <p className="text-neutral-body text-sm leading-relaxed px-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;