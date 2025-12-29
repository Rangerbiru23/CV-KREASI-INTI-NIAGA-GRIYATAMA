'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, FileText, AlertCircle, CheckCircle, Clock, Users, Hammer, Shield } from 'lucide-react'

export default function Terms() {
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
              <Link href="/privacy" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Privacy</Link>
              <Link href="/terms" className="text-teal-600 font-medium">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-teal-600 hover:bg-slate-50 rounded-md font-medium">Terms</Link>
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
            <span className="text-teal-600 font-medium">Terms & Conditions</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Syarat & Ketentuan <span className="text-teal-600">CV KREASI INTI NIAGA GRIYATAMA</span>
          </h1>
          <p className="text-lg text-slate-600 mt-4">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl mb-8">
              <p className="text-slate-700 leading-relaxed">
                Selamat datang di <strong>CV KREASI INTI NIAGA GRIYATAMA</strong>. Syarat & Ketentuan ini mengatur 
                penggunaan layanan pembuatan dan pengeboran sumur air tanah yang kami sediakan. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
            </div>

            {/* General Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <FileText className="text-teal-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Ketentuan Umum</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">1. Definisi</h3>
                  <div className="space-y-3 text-slate-600">
                    <p><strong>"Perusahaan"</strong> merujuk pada CV KREASI INTI NIAGA GRIYATAMA</p>
                    <p><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</p>
                    <p><strong>"Layanan"</strong> mencakup pembuatan, pengeboran, dan maintenance sumur air tanah</p>
                    <p><strong>"Proyek"</strong> merujuk pada pekerjaan pembuatan sumur yang disepakati</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">2. Ruang Lingkup Layanan</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Pembuatan sumur bor dalam (kedalaman 50-200 meter)</li>
                    <li>• Pembuatan sumur bor pantek (kedalaman 20-100 meter)</li>
                    <li>• Service dan maintenance sumur existing</li>
                    <li>• Konsultasi teknis dan survei lokasi</li>
                    <li>• Pemasangan pompa dan sistem distribusi air</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Kewajiban Klien</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Persyaratan Dokumen</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>✓ Identitas diri yang valid</li>
                    <li>✓ Bukti kepemilikan tanah</li>
                    <li>✓ Izin mendirikan bangunan (jika diperlukan)</li>
                    <li>✓ Surat izin pengeboran dari instansi terkait</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Persyaratan Lokasi</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>✓ Akses jalan untuk peralatan berat</li>
                    <li>✓ Area kerja yang aman dan memadai</li>
                    <li>✓ Sumber listrik untuk peralatan</li>
                    <li>✓ Ketersediaan air untuk proses pengeboran</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Syarat Pembayaran</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Struktur Pembayaran</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-slate-700">Uang Muka (DP)</span>
                      <span className="text-teal-600 font-bold">30% dari total nilai kontrak</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-slate-700">Progres Pekerjaan</span>
                      <span className="text-teal-600 font-bold">40% setelah pencapaian kedalaman target</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-slate-700">Pelunasan</span>
                      <span className="text-teal-600 font-bold">30% setelah serah terima proyek</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-2">Metode Pembayaran</h4>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Transfer bank ke rekening perusahaan</li>
                    <li>• Tunai dengan kwitansi resmi</li>
                    <li>• Pembayaran harus dilunasi sesuai jatuh tempo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                  <Clock className="text-cyan-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Waktu Pelaksanaan</h2>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Estimasi Waktu</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="bg-teal-600 w-3 h-3 rounded-full mr-3"></div>
                        <span className="text-slate-700">Sumur Bor Dalam: 7-14 hari kerja</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-600 w-3 h-3 rounded-full mr-3"></div>
                        <span className="text-slate-700">Sumur Bor Pantek: 3-7 hari kerja</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-cyan-600 w-3 h-3 rounded-full mr-3"></div>
                        <span className="text-slate-700">Service Maintenance: 1-3 hari kerja</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Faktor yang Mempengaruhi</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Kondisi geologi lokasi</li>
                      <li>• Kedalaman target sumur</li>
                      <li>• Cuaca dan kondisi alam</li>
                      <li>• Ketersediaan material</li>
                      <li>• Izin dari pihak berwenang</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Garansi dan Jaminan</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Garansi Konstruksi</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>✓ Garansi kebocoran struktur sumur: 1 tahun</li>
                    <li>✓ Garansi pompa air: 1 tahun (sesuai merk)</li>
                    <li>✓ Garansi instalasi pipa: 6 bulan</li>
                    <li>✓ Garansi debit air minimal: sesuai kontrak</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Layanan Purnajual</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Free maintenance check-up: 3 bulan pertama</li>
                    <li>• Diskon 20% untuk service selama periode garansi</li>
                    <li>• Response time 24 jam untuk keluhan garansi</li>
                    <li>• Suku cadang dengan harga khusus pelanggan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitations */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <AlertCircle className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Batasan Tanggung Jawab</h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Di Luar Tanggung Jawab Kami</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Kerusakan akibat bencana alam (gempa, banjir, longsor)</li>
                  <li>• Perubahan kondisi air tanah akibat aktivitas sekitar</li>
                  <li>• Kerusakan akibat penggunaan yang tidak sesuai prosedur</li>
                  <li>• Biaya operasional listrik dan maintenance rutin</li>
                  <li>• Perizinan dari instansi pemerintah (kewajiban klien)</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Hammer className="text-orange-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Pemutusan Kontrak</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Oleh Klien</h3>
                  <p className="text-slate-600 mb-3">Klien dapat memutuskan kontrak dengan ketentuan:</p>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Pembayaran biaya pekerjaan yang telah dilakukan</li>
                    <li>• Pengembalian DP 50% jika pembatalan sebelum pekerjaan dimulai</li>
                    <li>• Tidak ada pengembalian jika pekerjaan sudah berlangsung</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Oleh Perusahaan</h3>
                  <p className="text-slate-600 mb-3">Perusahaan dapat memutuskan kontrak jika:</p>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Klien tidak memenuhi kewajiban pembayaran</li>
                    <li>• Terjadi hal yang melanggar hukum</li>
                    <li>• Kondisi force majeure yang tidak dapat dihindari</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Users className="text-indigo-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Penyelesaian Sengketa</h2>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-xl">
                <p className="text-slate-700 mb-4">
                  Semua sengketa yang timbul dari syarat dan ketentuan ini akan diselesaikan melalui:
                </p>
                <ol className="space-y-3 text-slate-600">
                  <li><strong>1. Musyawarah</strong> - Upaya damai antara kedua belah pihak</li>
                  <li><strong>2. Mediasi</strong> - Melalui pihak ketiga yang netral</li>
                  <li><strong>3. Litigasi</strong> - Melalui pengadilan negeri Bandung</li>
                </ol>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Pertanyaan tentang Syarat & Ketentuan?</h2>
                <p className="text-teal-50 mb-6">
                  Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi tentang syarat dan ketentuan kami, 
                  silakan hubungi tim kami:
                </p>
                <div className="space-y-2 text-white">
                  <p><strong>Email:</strong> legal@kreasintiniagagriyatama.com</p>
                  <p><strong>Telepon:</strong> 085285703497</p>
                  <p><strong>Alamat:</strong> JL. BAPA HUSEN DALAM NO. 7B, Cipaganti, Coblong, Bandung</p>
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="bg-slate-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Persetujuan</h3>
              <p className="text-slate-600">
                Dengan menggunakan layanan CV KREASI INTI NIAGA GRIYATAMA, Anda menyatakan telah membaca, 
                memahami, dan menyetujui syarat dan ketentuan ini tanpa paksaan dari pihak mana pun.
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
              <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-teal-400">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}