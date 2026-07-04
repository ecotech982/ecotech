import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const points = [
    "Inklusivitas Teknologi",
    "Solusi End-to-End",
    "Fokus pada Hasil & Efisiensi"
  ];

  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tim bekerja dengan teknologi"
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-bg rounded-2xl -z-10 blur-2xl opacity-30 animate-pulse"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-3">Latar Belakang</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Inovasi Digital untuk Semua Orang</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              ECOTECH adalah pusat inovasi digital yang berfokus pada demokratisasi teknologi masa depan yaitu Kecerdasan Buatan (AI). Kami percaya bahwa AI dan pemrograman bukan hanya milik segelintir ahli, melainkan alat yang bisa dikuasai siapa saja untuk menciptakan efisiensi dan peluang baru.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Tujuan jangka panjang kami adalah menjembatani kompleksitas teknologi menjadi solusi praktis guna meningkatkan produktivitas pelajar dan karyawan, menaikkan daya saing mahasiswa, dan menciptakan efisiensi operasional bagi UMKM.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center text-gray-800 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-brand-green mr-4 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
