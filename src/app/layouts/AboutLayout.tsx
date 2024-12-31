import React from 'react';
import Image from 'next/image';
import { BookOpen, Target, Award, Users, Building2 } from 'lucide-react';
import kbm from "../../../public/kbm-1.png"

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Selamat Datang di MTs Muhyiddin
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MTs Muhyiddin adalah lembaga pendidikan Islam yang berkomitmen untuk mengembangkan 
              generasi Muslim yang berakhlak mulia, cerdas, dan berwawasan global. Dengan 
              pengalaman lebih dari 15 tahun dalam dunia pendidikan, kami telah berhasil 
              mencetak ribuan alumni yang berkualitas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-primary-600">
                <Users className="h-5 w-5" />
                <span className="font-semibold">500+ Siswa</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold">20+ Guru</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <Building2 className="h-5 w-5" />
                <span className="font-semibold">Fasilitas Lengkap</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Terakreditasi A</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl relative h-[400px]">
              <Image
                src={kbm} // Pastikan path gambar sesuai dengan struktur proyek Anda
                alt="Suasana Sekolah"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission bagian tetap sama ... */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
              <Target className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              "Menjadi lembaga pendidikan Islam terkemuka yang menghasilkan generasi 
              Muslim berakhlak mulia, berprestasi unggul, dan berwawasan global 
              berlandaskan Al-Qur'an dan As-Sunnah."
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0">1</span>
                <span className="text-gray-600">Keunggulan dalam pendidikan Islam</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0">2</span>
                <span className="text-gray-600">Prestasi akademik dan non-akademik</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0">3</span>
                <span className="text-gray-600">Pengembangan karakter Islami</span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
              <Award className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">1</span>
                </div>
                <p className="text-gray-600">Menyelenggarakan pendidikan Islam berkualitas dengan kurikulum terintegrasi</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">2</span>
                </div>
                <p className="text-gray-600">Mengembangkan program tahfidz dan pemahaman Al-Qur'an</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">3</span>
                </div>
                <p className="text-gray-600">Membangun karakter kepemimpinan dan kewirausahaan Islami</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">4</span>
                </div>
                <p className="text-gray-600">Mengoptimalkan penggunaan teknologi dalam pembelajaran</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">5</span>
                </div>
                <p className="text-gray-600">Menjalin kerjasama dengan berbagai institusi pendidikan</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;