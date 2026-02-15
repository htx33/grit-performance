import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
  {
    name: '1:1 Hybrid Coaching',
    price: '115',
    period: 'month',
    description: `A personalized lift + run system tailored to your lifestyle, including weekly performance reviews and direct access for ongoing guidance to keep you progressing at a high level.`,
    details: `\u003ci\u003eLift Heavy. Build Endurance. Get Lean.\u003c/i\u003e\n1:1 online coaching for guys who want to get lean, build muscle, and run consistently without burnout. As a NASM Certified Personal Trainer (CPT) I’ll create a personalized lift + run plan built around your daily schedule, plus weekly check-ins to keep progress moving forward.`,
    forYou: [
      'Want to lift + run without burnout',
      'Are seeking a structured personalized plan with flexibility',
      'Want a real coach with first hand experience',
    ],
    notForYou: [
      'Want extreme mileage or a bodybuilding program',
      'Expecting 30-day shreds',
      'Don’t want to be held accountable',
    ],
    subscribeUrl: '#',
    popular: true,
  },
  {
    name: '1:1 Hybrid Coaching (Elite)',
    price: '225',
    period: 'month',
    description: `Everything in the Base Plan plus personalized nutrition guidance, weekly 1:1 check-in calls, and direct 24/7 access for ongoing support and accountability.`,
    details: '',
    forYou: [],
    notForYou: [],
    subscribeUrl: '#',
    popular: false,
  },
];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Grit Performance Logo" className="h-32 w-auto mb-6" style={{objectFit:'contain'}} />
          <h2 className="text-3xl font-bold text-gray-900 mb-1">GRIT PERFORMANCE PROGRAMS</h2>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-10 rounded-xl border-2 ${plan.popular ? 'bg-gray-100 border-black shadow-xl' : 'bg-white border-black'} overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-2">
                <span className={`px-4 py-1 border rounded-full text-lg font-semibold ${plan.popular ? 'bg-white text-black border-black' : 'bg-gray-100 text-black border-black'}`}>${plan.price} a month</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-gray-700 mb-3" dangerouslySetInnerHTML={{__html: plan.details}} />
              <p className="text-gray-700 mb-4">{plan.description}</p>
              {plan.forYou.length > 0 && (
                <div className="mb-2">
                  <div className="font-semibold mb-1">This is for you if:</div>
                  <ul className="mb-2">
                    {plan.forYou.map((item, i) => (
                      <li key={i} className="flex items-center text-green-700 mb-1">
                        <span className="mr-2">✅</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {plan.notForYou.length > 0 && (
                <div className="mb-2">
                  <div className="font-semibold mb-1">This is NOT for you if:</div>
                  <ul className="mb-2">
                    {plan.notForYou.map((item, i) => (
                      <li key={i} className="flex items-center text-red-600 mb-1">
                        <span className="mr-2">❌</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="w-full mt-4 py-3 px-6 rounded-lg font-bold bg-black text-white hover:bg-gray-900 transition-colors text-lg shadow">
                Subscribe
              </button>
            </div>
          </motion.div>
        ))}
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">Powered by GRIT PERFORMANCE</div>
      </div>
    </section>
  );
};

export default Pricing;
