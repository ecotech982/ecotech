import React, { useState } from 'react';
import { X, Mail, Lock, User, LogIn, AlertCircle, CheckCircle2, ShieldCheck, Database, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

export default function LoginModal() {
  const { 
    isLoginModalOpen, 
    closeLoginModal, 
    loginWithGoogle, 
    loginWithEmail, 
    signUpWithEmail, 
    loading 
  } = useAuth();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleGoogleLogin = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Proses login Google dibatalkan.');
      } else if (err.code === 'auth/cancelled-popup-request') {
        setError('Permintaan login dibatalkan.');
      } else {
        setError('Gagal masuk dengan Google. Silakan coba lagi.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (mode === 'signin') {
        await loginWithEmail(email, password);
      } else {
        if (!name.trim()) {
          setError('Nama lengkap wajib diisi.');
          setIsSubmitting(false);
          return;
        }
        await signUpWithEmail(email, password, name);
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Email atau kata sandi tidak cocok.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email ini sudah terdaftar. Silakan lakukan Login.');
      } else if (err.code === 'auth/weak-password') {
        setError('Kata sandi terlalu lemah. Gunakan minimal 6 karakter.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Opsi Login Email belum aktif. Gunakan tombol "Masuk dengan Akun Google" di atas.');
      } else {
        setError('Terjadi kesalahan saat memproses akun Anda.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8"
        >
          {/* Top Header Background Accent */}
          <div className="bg-linear-to-r from-brand-blue/10 via-white to-brand-green/10 p-6 pb-5 relative border-b border-gray-100">
            <button
              onClick={closeLoginModal}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 bg-white/80 hover:bg-white rounded-full transition-all shadow-xs"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <Logo size={42} showText={true} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                {mode === 'signin' ? 'Masuk ke Akun ECOTECH' : 'Daftar Akun Baru'}
              </h3>
              <p className="text-xs text-gray-500 mt-1 max-w-xs">
                Satu akun untuk mengakses seluruh layanan solusi & produk bisnis ECOTECH
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Direct Google Sign In Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isSubmitting || loading}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white hover:bg-gray-50 text-gray-800 font-bold border-2 border-gray-200 hover:border-brand-blue/50 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              {/* Google Colored Icon */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.1 0-5.74-2.09-6.68-4.91H1.32v3.13C3.31 21.3 7.37 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.6H1.32C.48 8.27 0 10.08 0 12s.48 3.73 1.32 5.4l4 3.13c.24-.72.38-1.49.38-2.26z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.31 2.7 1.32 6.6l4 3.13c.94-2.82 3.58-4.98 6.68-4.98z"
                />
              </svg>
              <span className="text-sm font-semibold">Masuk dengan Akun Google</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-3 text-xs text-gray-400 font-medium uppercase tracking-wider absolute">
                atau via email
              </span>
            </div>

            {/* Error Alert */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl"
              >
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Email / Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 ml-1">Nama Lengkap</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue rounded-xl text-sm transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">Alamat Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue rounded-xl text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">Kata Sandi</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimal 6 karakter"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue rounded-xl text-sm transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full py-3.5 px-4 gradient-bg text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>{mode === 'signin' ? 'Masuk Sekarang' : 'Daftar Akun Baru'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Toggle Mode Signin / Signup */}
            <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
              {mode === 'signin' ? (
                <span>
                  Belum memiliki akun?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError(null);
                    }}
                    className="font-bold text-brand-blue hover:underline ml-1"
                  >
                    Daftar di sini
                  </button>
                </span>
              ) : (
                <span>
                  Sudah punya akun?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signin');
                      setError(null);
                    }}
                    className="font-bold text-brand-blue hover:underline ml-1"
                  >
                    Masuk di sini
                  </button>
                </span>
              )}
            </div>

            {/* Database Persistence Guarantee Banner */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3 flex items-start gap-2.5 text-[11px] text-emerald-800">
              <Database className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Otomatis Tersimpan di Database</strong>
                Profil akun Anda disimpan secara permanen. Setelah masuk, Anda tidak perlu lagi melakukan login ulang pada sesi berikutnya.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
