import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors overflow-hidden">
            <img 
              src="https://drive.google.com/thumbnail?id=1YocY4_43-DWuhQ1zjU95Xyui2k3-GPtZ&sz=w1000" 
              alt="Horon Phone Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-semibold text-xl tracking-tight">Horon Phone</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#produits" className="hover:text-black transition-colors">Produits</a>
          <a href="#equipe" className="hover:text-black transition-colors">Notre Équipe</a>
          <a 
            href="https://wa.me/22371883207" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
