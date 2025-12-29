'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="CV KREASI INTI NIAGA GRIYATAMA" className="h-10 w-auto" />
              <div className="ml-3">
                <h1 className="text-lg font-bold text-slate-900">CV KREASI INTI NIAGA GRIYATAMA</h1>
                <p className="text-xs text-teal-600 font-medium">Pembuatan & Pengeboran Sumur Air Tanah</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Beranda</Link>
              <Link href="/privacy" className="text-teal-600 font-medium">Privacy</Link>
              <Link href="/terms" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Terms</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-teal-600 hover:bg-slate-50 rounded-md font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <section className="pt-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-slate-600 mb-4">
            <Link href="/" className="hover:text-teal-600 transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <span className="text-teal-600 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Kebijakan Privasi <span className="text-teal-600">CV KREASI INTI NIAGA GRIYATAMA</span>
          </h1>
          <p className="text-lg text-slate-600 mt-4">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl mb-8">
              <p className="text-slate-700 leading-relaxed">
                Di <strong>CV KREASI INTI NIAGA GRIYATAMA</strong>, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan 
                saat menggunakan layanan pembuatan dan pengeboran sumur air tanah kami.
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Database className="text-teal-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Data yang Kami Kumpulkan</h2>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Informasi Pribadi</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Nama lengkap dan identitas diri</li>
                  <li>• Nomor telepon dan alamat email</li>
                  <li>• Alamat lengkap lokasi proyek</li>
                  <li>• Informasi kepemilikan properti</li>
                  <li>• Data pembayaran dan faktur</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Informasi Teknis</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Data geologi dan hidrologi lokasi</li>
                  <li>• Spesifikasi sumur yang dibutuhkan</li>
                  <li>• Riwayat pekerjaan dan maintenance</li>
                  <li>• Dokumentasi foto dan video proyek</li>
                </ul>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Penggunaan Data</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Untuk Layanan</h3>
                  <p className="text-slate-600">
                    Data Anda digunakan untuk menyediakan layanan pembuatan sumur air tanah yang berkualitas, 
                    termasuk analisis lokasi, perencanaan proyek, dan eksekusi pekerjaan.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Untuk Komunikasi</h3>
                  <p className="text-slate-600">
                    Menghubungi Anda terkait progress proyek, penjadwalan, dan informasi penting lainnya 
                    seputar layanan yang Anda gunakan.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Untuk Penagihan</h3>
                  <p className="text-slate-600">
                    Membuat faktur, mengelola pembayaran, dan menyediakan dokumentasi keuangan 
                    untuk keperluan administrasi dan pajak.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                  <Lock className="text-cyan-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Keamanan Data</h2>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl">
                <p className="text-slate-700 mb-6">
                  Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-3">Keamanan Digital</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>✓ Enkripsi data sensitif</li>
                      <li>✓ Firewall dan antivirus</li>
                      <li>✓ Backup data teratur</li>
                      <li>✓ Akses terbatas untuk otorisasi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-3">Keamanan Fisik</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>✓ Penyimpanan dokumen aman</li>
                      <li>✓ Ruang server terkunci</li>
                      <li>✓ Protokol dokumen rahasia</li>
                      <li>✓ Penghancuran dokumen rutin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <UserCheck className="text-teal-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Hak Anda sebagai Pengguna</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-6 py-2">
                  <h4 className="font-semibold text-slate-900 mb-2">Hak Akses</h4>
                  <p className="text-slate-600">Anda berhak mengakses data pribadi yang kami simpan tentang Anda.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-semibold text-slate-900 mb-2">Hak Koreksi</h4>
                  <p className="text-slate-600">Anda dapat memperbarui atau mengoreksi data yang tidak akurat.</p>
                </div>
                
                <div className="border-l-4 border-cyan-600 pl-6 py-2">
                  <h4 className="font-semibold text-slate-900 mb-2">Hak Penghapusan</h4>
                  <p className="text-slate-600">Anda dapat meminta penghapusan data pribadi yang tidak lagi diperlukan.</p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Berbagi Data dengan Pihak Ketiga</h2>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                <p className="text-slate-700 mb-4">
                  Kami tidak menjual data pribadi Anda kepada pihak ketiga. Data hanya akan dibagikan dalam kondisi berikut:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Dengan persetujuan eksplisit dari Anda</li>
                  <li>• Untuk keperluan hukum dan regulasi yang berlaku</li>
                  <li>• Dengan mitra kerja yang terikat kontrak kerahasiaan</li>
                  <li>• Untuk melindungi keselamatan dan keamanan</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Pertanyaan tentang Privasi?</h2>
                <p className="text-teal-50 mb-6">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan hak Anda, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2 text-white">
                  <p><strong>Email:</strong> privacy@kreasintiniagagriyatama.com</p>
                  <p><strong>Telepon:</strong> 085285703497</p>
                  <p><strong>Alamat:</strong> JL. BAPA HUSEN DALAM NO. 7B, Cipaganti, Coblong, Bandung</p>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-slate-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Pembaruan Kebijakan</h3>
              <p className="text-slate-600">
                Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan 
                dalam praktik bisnis kami atau perubahan regulasi. Kami akan memberitahukan Anda 
                tentang perubahan signifikan melalui website atau kontak langsung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="CV KREASI INTI NIAGA GRIYATAMA" className="h-8 w-auto" />
                <div className="ml-3">
                  <h3 className="text-lg font-bold">CV KREASI INTI NIAGA GRIYATAMA</h3>
                  <p className="text-sm text-teal-400">Pembuatan & Pengeboran Sumur Air Tanah</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Ahli dalam pembuatan dan pengeboran sumur air tanah dengan teknologi modern 
                dan tim berpengalaman untuk memberikan solusi air bersih terbaik.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Sumur Bor Dalam</li>
                <li>Sumur Bor Pantek</li>
                <li>Service & Maintenance</li>
                <li>Konsultasi Geologi</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li>085285703497</li>
                <li>Bandung, Jawa Barat</li>
                <li>info@kreasintiniagagriyatama.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 CV KREASI INTI NIAGA GRIYATAMA. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link href="/privacy" className="text-teal-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}