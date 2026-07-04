import { Star, User, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const emptyTestimonials = [
    {
      id: 1,
      placeholderName: "Nama Pelanggan #1",
      placeholderRole: "CEO / Pemilik Bisnis",
      placeholderText: "Ruang ini disiapkan untuk ulasan dan feedback positif pelanggan pertama Anda setelah berkolaborasi menggunakan solusi ECOTECH.",
    },
    {
      id: 2,
      placeholderName: "Nama Pelanggan #2",
      placeholderRole: "Manajer Operasional UMKM",
      placeholderText: "Bagikan kisah sukses transformasi digital bisnis Anda di sini. Ceritakan bagaimana produk/tools AI memudahkan kepuasan operasional Anda.",
    },
    {
      id: 3,
      placeholderName: "Nama Pelanggan #3",
      placeholderRole: "Profesional / Pengembang Bisnis",
      placeholderText: "Kolom kosong ini siap diisi oleh kata-kata rekomendasi terbaik Anda tentang produk edukasi, ebook, atau automasi berkualitas kami.",
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-green/5 rounded-full filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-white border border-brand-green/20 text-brand-green text-sm font-semibold mb-4 shadow-sm"
          >
            Testimoni & Kepercayaan
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Apa Kata <span className="gradient-text">Pelanggan Kami</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Ulasan asli dari mitra dan pembeli produk digital ECOTECH yang telah berhasil meningkatkan efektivitas bisnisnya.
          </motion.p>
        </div>

        {/* 3 Empty Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {emptyTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-[2px] rounded-3xl bg-transparent transition-all duration-500 select-none hover:shadow-[0_20px_40px_rgba(105,192,236,0.18)] flex flex-col justify-between"
            >
              {/* Outer Ambient Glow Area */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 -z-10" />

              {/* Solid Gradient Border Line */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Default Dashed Border (visible when not hovered, fades out on hover) */}
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-gray-200 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

              {/* Card Inner Content Container */}
              <div className="relative bg-white rounded-[22px] p-8 h-full flex flex-col justify-between z-10">
                {/* Quote Icon Overlay */}
                <div className="absolute top-6 right-8 text-gray-100 group-hover:text-brand-blue/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Quote className="w-12 h-12 stroke-[1.5]" />
                </div>

                <div>
                  {/* 5-Star Placement (Dotted/Empty Style for placeholder) */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>

                  {/* Testimonial Placeholder Text */}
                  <p className="text-gray-400 text-base leading-relaxed mb-8 italic transition-colors duration-300 group-hover:text-gray-600">
                    "{item.placeholderText}"
                  </p>
                </div>

                {/* Author Info Area (Minimalist Draft Style) */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 group-hover:text-brand-blue flex items-center justify-center text-gray-400 transition-all duration-300">
                    <User className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm tracking-wide transition-colors duration-300 group-hover:text-brand-blue/90">
                      {item.placeholderName}
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 transition-colors duration-300 group-hover:text-brand-green/90">
                      {item.placeholderRole}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
