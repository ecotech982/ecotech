import Logo from './Logo';
import { ShoppingBag, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Logo size={48} />
            <p className="text-gray-400 text-base leading-relaxed">
              Pusat inovasi digital dan demokratisasi Kecerdasan Buatan (AI) di Indonesia, menjembatani kompleksitas teknologi menjadi solusi praktis harian.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span>Jakarta Selatan, Indonesia</span>
              </div>
              <a 
                href="https://wa.me/6287756683710?text=Halo%20ECOTECH%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20solusi%20atau%20produk%20bisnis%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#25D366] transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold">+62 877-5668-3710</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-gray-900 pb-3">Navigasi</h4>
            <ul className="space-y-3.5 text-gray-400">
              <li>
                <a href="#tentang" className="hover:text-brand-blue transition duration-200">Tentang Kami</a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-brand-blue transition duration-200">Solusi Layanan</a>
              </li>
              <li>
                <a href="#value" className="hover:text-brand-blue transition duration-200">Value ECOTECH</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-brand-blue transition duration-200">Testimoni</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-brand-blue transition duration-200">Hubungi Kami</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Products (Lynk.id Link) */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-gray-900 pb-3">Produk Digital</h4>
            <ul className="space-y-3.5 text-gray-400">
              <li>
                <a 
                  href="https://lynk.id/ecotech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-green transition duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>Ebook AI (Edukasi)</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-brand-green" />
                </a>
              </li>
              <li>
                <a 
                  href="https://lynk.id/ecotech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-green transition duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>Aplikasi & Tools AI</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-brand-green" />
                </a>
              </li>
              <li>
                <a 
                  href="https://lynk.id/ecotech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-green transition duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>AI Automation B2B</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-brand-green" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Shop CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-gray-900 pb-3">Toko Resmi</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dukung akselerasi digital Anda. Belanja produk digital berkualitas tinggi langsung di toko resmi kami.
            </p>
            <a
              href="https://lynk.id/ecotech"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white py-3 px-5 rounded-2xl font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 w-full text-center"
            >
              <ShoppingBag className="w-5 h-5" />
              Kunjungi Toko Lynk.id
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div>
            &copy; {currentYear} ECOTECH - Education Content Technology. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#kontak" className="hover:text-white transition duration-200">Kontak Kami</a>
            <span>•</span>
            <span className="text-gray-600">Jakarta Selatan, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
