export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://drive.google.com/thumbnail?id=1YocY4_43-DWuhQ1zjU95Xyui2k3-GPtZ&sz=w1000" 
                alt="Horon Phone Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight">Horon Phone</span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#produits" className="hover:text-white transition-colors">Produits</a>
            <a href="#equipe" className="hover:text-white transition-colors">Notre Équipe</a>
            <a href="https://wa.me/22371883207" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Horon Phone. Tous droits réservés.</p>
          <p>Bamako, Mali</p>
        </div>
      </div>
    </footer>
  );
}
