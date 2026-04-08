import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';
import { products, Brand } from '../data';

const brands: Brand[] = ['iPhone', 'Samsung', 'Tecno', 'Accessoires'];

export default function Products() {
  const [activeBrand, setActiveBrand] = useState<Brand>('iPhone');

  const filteredProducts = products.filter(p => p.brand === activeBrand);

  return (
    <section id="produits" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Notre Catalogue</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choisissez votre marque préférée et découvrez nos derniers modèles disponibles immédiatement.
          </p>
        </motion.div>

        {/* Brand Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeBrand === brand
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-full aspect-[3/4] mb-3 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-50 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-500 text-xs sm:text-base mb-3 sm:mb-6">{product.price}</p>
                <motion.a
                  href="tel:+22371883207"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full flex items-center justify-center gap-1 sm:gap-2 py-2 px-2 sm:py-3 sm:px-4 bg-gray-50 border border-gray-200 rounded-full text-xs sm:text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Commander (+223 71 88 32 07)</span>
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
