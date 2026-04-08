import { motion } from 'motion/react';
import { PhoneCall } from 'lucide-react';
import { team } from '../data';

export default function Team() {
  return (
    <section id="equipe" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nos Experts à votre écoute</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Une équipe de passionnés prête à vous conseiller et vous accompagner dans votre choix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-gray-200 ring-4 ring-white shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <motion.a
                href="tel:+22371883207"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md"
              >
                <PhoneCall size={16} />
                Appeler (+223 71 88 32 07)
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
