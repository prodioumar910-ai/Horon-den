import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gray-200 to-transparent rounded-full blur-3xl opacity-50" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl bg-black border border-gray-100"
            >
              <img 
                src="https://drive.google.com/thumbnail?id=1YocY4_43-DWuhQ1zjU95Xyui2k3-GPtZ&sz=w1000" 
                alt="Horon Phone Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-gray-200/50 text-gray-600 text-xs font-semibold tracking-wider uppercase mb-6">
            La référence au Mali
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-10 leading-[1.1]">
            L'excellence technologique <br className="hidden md:block" />
            <span className="text-gray-400">à votre portée.</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#produits"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
            >
              Voir les produits
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="tel:+22371883207"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Phone size={18} />
              Appeler (+223 71 88 32 07)
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
