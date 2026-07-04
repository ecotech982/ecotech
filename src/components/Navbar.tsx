import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Solusi', href: '#solusi' },
    { name: 'Value', href: '#value' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex-shrink-0">
            <Logo size={48} />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-blue transition font-medium"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://lynk.id/ecotech"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-4 h-4" />
              Toko Digital
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://lynk.id/ecotech"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white p-2.5 rounded-full shadow-md flex items-center justify-center"
              aria-label="Toko Digital ECOTECH"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="https://lynk.id/ecotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gradient-bg text-white py-3 px-4 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Kunjungi Toko Digital
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
