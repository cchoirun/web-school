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
            Madrasah Tsanawiyah (MTS) Muhyiddin adalah sebuah lembaga pendidikan tingkat SMP di bawah naungan Yayasan Pondok Pesantren Anak-anak Muhyiddin yang didirikan oleh Alm. Romo K.H. Achmad Thobib. Yayasan ini lebih menitikberatkan pada pengajaran Al-Qur'an, baik dengan metode Binnadhor maupun Tahfidz Al-Qur'an. MTs Muhyiddin Qur'aniy memadukan antara kurikulum kementrian agama dan kurikulum pendidikan nasional dengan berbasis pondok pesantren dengan ciri khas Islam Ahlussunnah Wal Jama'ah
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-primary-600">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Madrasah berbasis IPTEK</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold">Guru profesional</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <Building2 className="h-5 w-5" />
                <span className="font-semibold">Fasilitas Lengkap</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Terakreditasi B</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl relative h-[400px]">
              <Image
                src={kbm} 
                alt="Suasana Sekolah"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
              <Target className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              "Terbentuknya generasi islam yang beriman, beramal shaleh, berakhlaqul karimah, menguasai IPTEK, dan unggul dalam prestasi."
            </p>
            
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
              <Award className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">1</span>
                </div>
                <p className="text-gray-600">Meningkatkan keimanan dan ketaqwaan terhadap Allah SWT</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">2</span>
                </div>
                <p className="text-gray-600">Menanamkan nilai dasar keislaman melalui pembelajaran dan lingkungan</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">3</span>
                </div>
                <p className="text-gray-600">Melaksanakan pengembangan kurikulum sesuai dengan standar nasional</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">4</span>
                </div>
                <p className="text-gray-600">Melaksanakan pembelajaran yang aktif, kreatif, efektif, inovatif dan menyenangkan di bidang akademik dan non akademik berbasis ITS</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">5</span>
                </div>
                <p className="text-gray-600">Menghasilkan lulusan yang dapat bersaing pada jenjang pendidikan yang lebih tinggi</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <span className="font-semibold">6</span>
                </div>
                <p className="text-gray-600">Melaksanakan bimbingan secara efektif sehingga siswa dapat berprestasi secara maksimal</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;