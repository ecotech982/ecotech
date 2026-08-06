import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, UserCheck, LogIn } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

export default function Hero() {
  const { user, userData, openLoginModal } = useAuth();

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-green/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Logo size={80} showText={false} />
        </motion.div>

        {/* User Auth Greeting Badge */}
        {user ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold mb-8 shadow-xs"
          >
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Selamat Datang Kembali, {userData?.displayName || user.displayName || 'Mitra ECOTECH'}!</span>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-brand-blue/30 text-brand-blue text-sm font-semibold mb-8 shadow-sm cursor-pointer hover:bg-brand-blue/5 transition-all"
            onClick={openLoginModal}
          >
            <LogIn className="w-4 h-4" />
            <span>Masuk Akun / Google Sign-In</span>
          </motion.div>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 max-w-5xl leading-tight"
        >
          Mendemokratisasi <br />
          <span className="gradient-text">Kecerdasan Buatan</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
        >
          Kami adalah jembatan antara kompleksitas teknologi masa depan dengan kebutuhan praktis Anda. <br />
          <span className="font-semibold text-gray-800 italic">"Adaptability AI or Getout"</span>
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="flex justify-center gap-4 flex-col sm:flex-row w-full sm:w-auto"
        >
          <a
            href="https://lynk.id/ecotech"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center gap-3 text-lg"
          >
            <ShoppingBag className="w-5 h-5 animate-pulse" />
            Kunjungi Toko Digital
          </a>
          
          {!user ? (
            <button
              onClick={openLoginModal}
              className="bg-white text-gray-800 border-2 border-brand-blue/40 px-8 py-5 rounded-full font-bold shadow-sm hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <LogIn className="w-5 h-5 text-brand-blue" />
              Masuk dengan Google
            </button>
          ) : (
            <a
              href="#solusi"
              className="bg-white text-gray-700 border-2 border-gray-200 px-10 py-5 rounded-full font-bold shadow-sm hover:border-brand-blue hover:text-brand-blue transition duration-300 flex items-center justify-center gap-2 text-lg"
            >
              Jelajahi Solusi AI
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
