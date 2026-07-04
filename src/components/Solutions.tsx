import { BookOpen, Cpu, Cog, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Solutions() {
  const solutions = [
    {
      title: "Edukasi Digital",
      description: "Panduan praktis berupa Ebook AI yang dirancang untuk pembelajaran mandiri, menghemat waktu riset berbulan-bulan menjadi materi yang mudah dipahami.",
      icon: BookOpen,
      color: "border-brand-blue",
      bgColor: "bg-brand-blue/10",
      textColor: "text-brand-blue",
      ctaText: "Miliki Ebook AI"
    },
    {
      title: "Aplikasi & Tools AI",
      description: "Penyediaan alat bantu (tools) bertenaga kecerdasan buatan untuk menyelesaikan tugas rutin dengan cepat dan efektif bagi individu maupun profesional.",
      icon: Cpu,
      color: "border-brand-green",
      bgColor: "bg-brand-green/10",
      textColor: "text-brand-green",
      ctaText: "Akses Tools AI"
    },
    {
      title: "AI Automation",
      description: "Otomatisasi sistem bisnis untuk UMKM yang mengubah pekerjaan manual berjam-jam menjadi selesai dalam hitungan detik.",
      icon: Cog,
      color: "border-brand-blue",
      bgColor: "bg-brand-blue/10",
      textColor: "text-brand-blue",
      ctaText: "Dapatkan Sistem Otomatisasi"
    }
  ];

  return (
    <section id="solusi" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-3"
          >
            Kategori Solusi
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Layanan Unggulan ECOTECH
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Kami membagi solusi kami ke dalam tiga pilar utama yang saling mendukung untuk transformasi digital yang menyeluruh.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-3xl shadow-xl p-10 border-t-8 ${item.color} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-8 ${item.textColor}`}>
                  <item.icon className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {item.description}
                </p>
              </div>

              <div>
                <a
                  href="https://lynk.id/ecotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:gradient-bg hover:text-white transition-all duration-300 font-bold flex items-center justify-center gap-2 group ${item.textColor}`}
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic call out section banner inside solutions to shop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 gradient-bg rounded-[2.5rem] p-10 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl relative z-10">
            <h4 className="text-2xl lg:text-3xl font-extrabold">Ingin Mendapatkan Produk Digital Kami?</h4>
            <p className="text-white/90 text-lg">
              Semua Ebook Panduan AI, Tools Otomatisasi Bisnis, dan Solusi Automasi UMKM sudah tersedia secara resmi di platform storefront Lynk.id kami.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://lynk.id/ecotech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4.5 rounded-full font-extrabold shadow-md hover:shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center gap-3 text-lg"
            >
              <ShoppingBag className="w-5 h-5 text-brand-green" />
              Beli Sekarang di Lynk.id
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
