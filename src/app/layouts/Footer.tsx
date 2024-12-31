import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">MTs Muhyiddin</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span>Jl. Contoh No. 123, Kecamatan, Kota</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary-500" />
                <span>+62 123 4567 8890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>info@mtsmuhyiddin.sch.id</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Program Unggulan</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pendaftaran</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Berita</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Operating Hours & Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Jam Operasional</h3>
            <div className="mb-6 space-y-2">
              <p className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-500" />
                <span>Senin - Jumat: 07:00 - 15:00</span>
              </p>
              <p className="ml-7">Sabtu: 07:00 - 12:00</p>
              <p className="ml-7">Minggu: Tutup</p>
            </div>
            
            <h3 className="text-white text-lg font-semibold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} MTs Muhyiddin. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;