import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, LogIn, LogOut, User, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, userData, logoutUser, openLoginModal } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-blue transition font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://lynk.id/ecotech"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-xs transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-4 h-4" />
              Toko Digital
            </a>

            {/* Auth Button or User Avatar Badge */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 py-1.5 px-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-full transition-all focus:outline-none"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Profil'}
                      className="w-7 h-7 rounded-full object-cover border border-white"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                  <span className="text-xs font-bold text-gray-800 max-w-[100px] truncate">
                    {userData?.displayName || user.displayName || user.email?.split('@')[0]}
                  </span>
                </button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {userDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 text-left"
                    >
                      <div className="pb-3 border-b border-gray-100 mb-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mb-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Tersimpan di Database</span>
                        </div>
                        <p className="font-bold text-gray-900 text-sm truncate">
                          {userData?.displayName || user.displayName || 'Pengguna'}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>

                      <div className="text-[11px] text-gray-400 bg-gray-50 p-2.5 rounded-xl mb-3">
                        Sesi aktif & profil tersimpan aman di Firestore. Anda tidak perlu login lagi saat kembali.
                      </div>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logoutUser();
                        }}
                        className="w-full flex items-center gap-2 py-2 px-3 text-red-600 hover:bg-red-50 rounded-xl text-xs font-bold transition-all"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Keluar / Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={openLoginModal}
                className="flex items-center gap-2 py-2 px-4 border-2 border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white rounded-full font-bold text-xs transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk / Google</span>
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-3">
            {user ? (
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-full"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profil"
                    className="w-8 h-8 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </button>
            ) : (
              <button
                onClick={openLoginModal}
                className="flex items-center gap-1 py-1.5 px-3 bg-brand-blue/10 text-brand-blue rounded-full font-bold text-xs"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Masuk</span>
              </button>
            )}
            
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

              <div className="pt-4 px-3 space-y-3">
                {user ? (
                  <div className="p-3 bg-gray-50 rounded-xl space-y-2">
                    <div className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Akun Tersimpan (Database)
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{user.displayName || user.email}</p>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        logoutUser();
                      }}
                      className="w-full py-2 bg-red-50 text-red-600 font-bold rounded-lg text-xs flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Keluar
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openLoginModal();
                    }}
                    className="w-full py-3 bg-brand-blue text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <LogIn className="w-4 h-4" /> Masuk / Google
                  </button>
                )}

                <a
                  href="https://lynk.id/ecotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gradient-bg text-white py-3 px-4 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 text-center text-sm"
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
