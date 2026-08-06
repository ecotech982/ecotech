import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="kontak" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient blurred shapes */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-green/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-3"
          >
            Hubungi Kami
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
          >
            Mari Mulai <span className="gradient-text">Perjalanan AI Anda</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Punya pertanyaan atau ingin berdiskusi tentang otomatisasi AI untuk bisnis Anda? Kami siap membantu.
          </motion.p>
        </div>

        {/* 2-Column Contact Block: Left column for Fast WhatsApp Access, Right column for Email Form */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Direct WhatsApp Callout Column (5 cols on large screens) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-linear-to-b from-[#121b22] to-[#0b141a] rounded-[2.5rem] p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-emerald-950"
            >
              {/* WhatsApp Grid Overlay Grid lines for tech aesthetic */}
              <div className="absolute inset-0 bg-[radial-gradient(#15803d_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Active Support Badge with Pulsing Live Status */}
                <div className="inline-flex items-center gap-2.5 bg-emerald-950/85 border border-emerald-500/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-emerald-400 mb-8 select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  ONLINE & SIAP MEMBANTU
                </div>

                <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Respon Cepat via <span className="text-emerald-400">WhatsApp</span>
                </h4>
                
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Dapatkan jawaban instan seputar solusi otomatisasi kecerdasan buatan (B2B AI Automation), lisensi tools, atau aneka produk digital edukasi kami langsung dari tim konsultan ahli.
                </p>

                {/* Branded list of what they can ask about */}
                <ul className="space-y-4 text-sm text-gray-300 mb-10">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="text-white block">Konsultasi Solusi B2B</strong>
                      Diskusi implementasi AI, otomatisasi alur kerja, & digitalisasi bisnis.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="text-white block">Akses Produk & Tools AI</strong>
                      Panduan & pembelian Ebook Edukasi Premium serta lisensi tool bisnis.
                    </div>
                  </li>
                </ul>
              </div>

              {/* High Quality WhatsApp Anchor Link Button */}
              <div className="relative z-10 pt-6 border-t border-emerald-950">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider">No. WhatsApp Resmi</p>
                    <p className="text-lg font-bold tracking-wide text-white">+62 877-5668-3710</p>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/6287756683710?text=Halo%20ECOTECH%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20solusi%20atau%20produk%20bisnis%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd53] text-white font-bold py-4.5 px-6 rounded-2xl shadow-lg hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center gap-3 text-base duration-300"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.483.953 6.047.953 1.62 5.324 1.616 10.753c-.001 1.659.444 3.279 1.289 4.717l-.982 3.58 3.724-.966zm13.3-6.619c-.3-.146-1.772-.857-2.046-.954-.275-.098-.475-.147-.675.146-.199.293-.772.955-.947 1.15-.175.195-.35.219-.65.073-.302-.146-1.272-.461-2.422-1.467-.896-.786-1.5-1.757-1.677-2.05-.177-.294-.018-.454.13-.6l.443-.509c.152-.178.201-.301.302-.503.101-.199.05-.373-.025-.521-.075-.146-.674-1.589-.924-2.174-.244-.576-.492-.497-.674-.506-.174-.008-.374-.01-.575-.01-.199 0-.524.073-.799.366-.275.293-1.05.999-1.05 2.434 0 1.437 1.074 2.822 1.224 3.017.15.195 2.112 3.165 5.118 4.423.714.3 1.272.479 1.706.614.717.224 1.371.193 1.888.118.577-.081 1.773-.711 2.022-1.399.25-.688.25-1.278.174-1.397-.074-.12-.274-.194-.574-.341z" />
                  </svg>
                  Hubungi Melalui WhatsApp
                </motion.a>
              </div>
            </motion.div>

            {/* Traditional Email Form Column (7 cols on large screens) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-gray-50 rounded-[2.5rem] p-8 lg:p-10 shadow-inner border border-gray-100 flex flex-col justify-center"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Terima Kasih!</h4>
                  <p className="text-gray-600">Pesan Anda telah kami terima. Kami akan segera menghubungi Anda melalui email.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Hubungi via Email</h4>
                  <p className="text-sm text-gray-500 mb-4">Kami akan membalas pesan email Anda dalam waktu 1x24 jam kerja.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">
                        Nama Lengkap
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">
                        Alamat Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all"
                          placeholder="email@perusahaan.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">
                      Pesan Anda
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none text-gray-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all resize-none"
                        placeholder="Bagaimana kami bisa membantu Anda?"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 gradient-bg text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan Email
                  </motion.button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
