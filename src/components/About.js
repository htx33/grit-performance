import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 mb-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 mb-8 md:mb-0">
            <motion.img
              src="/about-photo.jpg"
              alt="About Grit Performance Trainer 1"
              className="w-full md:w-56 rounded-2xl shadow-lg object-cover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ maxHeight: 260 }}
            />
            <motion.img
              src="/about-photo-2.jpg"
              alt="About Grit Performance Trainer 2"
              className="w-full md:w-56 rounded-2xl shadow-lg object-cover"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ maxHeight: 260 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Grit Performance</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Grit Performance, we're dedicated to helping runners and fitness enthusiasts achieve their peak 
            performance through personalized training and nutrition plans. Our science-backed approach combines 
            cutting-edge techniques with proven methodologies to deliver real results.
          </p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Personalized Training",
            description: "Custom workout plans tailored to your fitness level, goals, and schedule."
          },
          {
            title: "Nutrition Guidance",
            description: "Expert nutrition plans designed to fuel your performance and recovery."
          },
          {
            title: "Proven Results",
            description: "Join hundreds of athletes who've transformed their performance with our programs."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default About;
