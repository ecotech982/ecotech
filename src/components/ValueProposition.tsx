import { Clock, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function ValueProposition() {
  const values = [
    {
      title: "Hemat Waktu Riset",
      description: "Mengompresi riset berbulan-bulan menjadi panduan praktis 100 halaman yang bisa langsung dipraktikkan.",
      icon: Clock,
      color: "bg-brand-blue/20",
      iconColor: "text-brand-blue"
    },
    {
      title: "Kecepatan Eksekusi",
      description: "Mengubah pekerjaan manual yang memakan waktu berjam-jam menjadi selesai seketika dalam hitungan detik.",
      icon: Zap,
      color: "bg-brand-green/20",
      iconColor: "text-brand-green"
    },
    {
      title: "Optimalisasi Bisnis",
      description: "Mengurangi kesalahan manusia (human error), menurunkan biaya operasional, dan meningkatkan konversi penjualan B2B.",
      icon: TrendingUp,
      color: "bg-brand-blue/20",
      iconColor: "text-brand-blue"
    }
  ];

  return (
    <section id="value" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-green/5 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-brand-blue/5 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4 shadow-sm"
          >
            Nilai Produk
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Mengapa Memilih <span className="gradient-text">ECOTECH?</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Memisahkan kompleksitas industri teknologi menjadi produk edukasi berkualitas tinggi dan solusi kecerdasan buatan siap pakai.
          </motion.p>
        </div>

        {/* 3-Column Card Layout replacing the old 2-column split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_40px_rgba(105,192,236,0.12)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${val.color} ${val.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <val.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h4>
              <p className="text-gray-600 leading-relaxed text-base">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
