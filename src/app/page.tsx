'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Droplets, Truck, Shield, Users, CheckCircle } from 'lucide-react'

export default function Home() {
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
              <Link href="#layanan" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Layanan</Link>
              <Link href="#tentang" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Tentang</Link>
              <Link href="#kontak" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Kontak</Link>
              <Link href="/privacy" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Privacy</Link>
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
              <Link href="#layanan" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Layanan</Link>
              <Link href="#tentang" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Tentang</Link>
              <Link href="#kontak" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Kontak</Link>
              <Link href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md font-medium">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Solusi Terpercaya <span className="text-teal-600">Pembuatan Sumur Air Tanah</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                CV KREASI INTI NIAGA GRIYATAMA adalah ahli dalam pembuatan dan pengeboran sumur air tanah 
                dengan teknologi modern dan tim berpengalaman. Memberikan solusi air bersih untuk kebutuhan 
                rumah tangga, industri, dan pertanian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center justify-center">
                    <Phone size={20} className="mr-2" />
                    Hubungi Kami
                  </div>
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                  <div className="flex items-center justify-center">
                    Lihat Portfolio
                    <ChevronRight size={20} className="ml-2" />
                  </div>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-100 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="text-teal-600" size={32} />
                    </div>
                    <h3 className="font-bold text-slate-900">1000+</h3>
                    <p className="text-sm text-slate-600">Sumur Selesai</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-blue-600" size={32} />
                    </div>
                    <h3 className="font-bold text-slate-900">500+</h3>
                    <p className="text-sm text-slate-600">Pelanggan Puas</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-cyan-600" size={32} />
                    </div>
                    <h3 className="font-bold text-slate-900">10+</h3>
                    <p className="text-sm text-slate-600">Tahun Pengalaman</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="text-teal-600" size={32} />
                    </div>
                    <h3 className="font-bold text-slate-900">24/7</h3>
                    <p className="text-sm text-slate-600">Layanan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Layanan <span className="text-teal-600">Unggulan Kami</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan pembuatan sumur air tanah yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Droplets className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sumur Bor Dalam</h3>
              <p className="text-slate-600 mb-4">
                Pengeboran sumur dalam untuk mendapatkan air tanah berkualitas tinggi dengan kedalaman 50-200 meter.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-teal-600 mr-2" size={16} />
                  Kapasitas air besar
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-teal-600 mr-2" size={16} />
                  Kualitas air terjamin
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-teal-600 mr-2" size={16} />
                  Tahan lama
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sumur Bor Pantek</h3>
              <p className="text-slate-600 mb-4">
                Solusi sumur bor pantek untuk area terbatas dengan kedalaman 20-100 meter.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-blue-600 mr-2" size={16} />
                  Cepat selesai
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-blue-600 mr-2" size={16} />
                  Hemat biaya
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-blue-600 mr-2" size={16} />
                  Cocok untuk rumah
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Service & Maintenance</h3>
              <p className="text-slate-600 mb-4">
                Perawatan dan perbaikan sumur existing untuk menjaga kualitas dan kuantitas air.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-cyan-600 mr-2" size={16} />
                  Pembersihan sumur
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-cyan-600 mr-2" size={16} />
                  Ganti pompa
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-cyan-600 mr-2" size={16} />
                  Garansi service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Mengapa Memilih <span className="text-teal-600">CV KREASI INTI NIAGA GRIYATAMA</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun, kami telah menjadi mitra terpercaya untuk ribuan 
                pelanggan dalam menyediakan solusi air tanah yang berkualitas dan berkelanjutan.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Shield className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Bergaransi Resmi</h3>
                    <p className="text-slate-600">Semua pekerjaan kami dilengkapi garansi resmi untuk memberikan ketenangan pikiran bagi pelanggan.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Tim Profesional</h3>
                    <p className="text-slate-600">Didukung oleh tenaga ahli berpengalaman dan bersertifikat di bidang geologi dan pengeboran.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <Truck className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Peralatan Modern</h3>
                    <p className="text-slate-600">Menggunakan peralatan pengeboran terkini untuk hasil yang presisi dan efisien.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Perusahaan</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Nama Perusahaan</h4>
                  <p className="text-slate-600 font-medium">CV KREASI INTI NIAGA GRIYATAMA</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Alamat</h4>
                  <p className="text-slate-600">
                    JL. BAPA HUSEN DALAM NO. 7B, Desa/Kelurahan Cipaganti, 
                    Kec.Coblong, Kota Bandung, Provinsi Jawa Barat
                  </p>
                </div>
                
                <div className="border-l-4 border-cyan-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Telepon</h4>
                  <p className="text-slate-600 font-medium">085285703497</p>
                </div>
                
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Spesialisasi</h4>
                  <p className="text-slate-600">Pembuatan/Pengeboran Sumur Air Tanah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Butuh Solusi Air Tanah Profesional?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:085285703497" 
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                085285703497
              </div>
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              <div className="flex items-center justify-center">
                <Mail size={20} className="mr-2" />
                Kirim Pesan
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Hubungi <span className="text-teal-600">Kami</span>
            </h2>
            <p className="text-lg text-slate-600">
              Tim kami siap membantu kebutuhan sumur air tanah Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-teal-600 p-3 rounded-lg mr-4">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Alamat</h4>
                      <p className="text-slate-600">
                        JL. BAPA HUSEN DALAM NO. 7B, Desa/Kelurahan Cipaganti, 
                        Kec.Coblong, Kota Bandung, Provinsi Jawa Barat
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Telepon</h4>
                      <p className="text-slate-600 font-medium">085285703497</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-cyan-600 p-3 rounded-lg mr-4">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-600">info@kreasintiniagagriyatama.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Jelaskan kebutuhan Anda"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
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
              <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}