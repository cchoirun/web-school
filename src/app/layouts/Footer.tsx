import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">MTs Muhyiddin</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-white ">
                <MapPin className="h-5 w-5 " />
                <span>Jl. Gebang Kidul No.66, Gebang Putih, Sukolilo, Surabaya
                </span>
              </p>
              <p className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5 " />
                <span>+62 818 0500 3572</span>
              </p>
              <p className="flex items-center gap-2 text-white">
                <Mail className="h-5 w-5 " />
                <span>mts.muhyiddin.quraniy@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Beranda</Link></li>
              <li><Link href="/profil" className="hover:text-primary-400 transition-colors">Profil</Link></li>
              <li><Link href="/ppdb" className="hover:text-primary-400 transition-colors">PPDB</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Operating Hours & Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Jam Operasional</h3>
            <div className="mb-6 space-y-2">
              <p className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5 " />
                <span>Senin - Sabtu: 07:00 - 12:00</span>
              </p>
              <p className="ml-7 text-white">Minggu: Tutup</p>
            </div>
            
            <h3 className="text-white text-lg font-semibold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/MTs-Muhyiddin-Quraniy/pfbid0tmg2K9yAe5LXysgdU4Ut8TQPWQBVVj193dRqeJpcxFies49HNp9szvBp9YzTh6STl/" target='_blank' className="hover:text-primary-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/mts_muhyiddin?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=PAZXh0bgNhZW0CMTEAAaadQJAMyvLg5w9Kb1eYQBhETTVY8IIRVvRCZOudka158CIsdk4Clkda4ak_aem_obx7BZvpaSjtFl1DrSKGlg" target='_blank' className="hover:text-primary-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@mtsmuhyiddinquraniy3203" className="hover:text-primary-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-emerald-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white">
            © {new Date().getFullYear()} MTs Muhyiddin. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;