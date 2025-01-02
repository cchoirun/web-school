import Hero from "../layouts/HeroLayout";
import MainLayout from "../layouts/MainLayout";
import heroImage from "../../../public/img-5.jpg";

export default function Profil() {
  return (
    <MainLayout>
    <Hero 
        backgroundImage={heroImage}
        title="Profil Madrasah Tsanawiyah (MTs) Muhyiddin"
        description="Sekolah Menengah Pertama yang Unggul dalam Membentuk Generasi Muda yang Berakhlak Mulia dan Berprestasi"
        showButton={false}
        imageAlt="MTs Muhyiddin"
    />
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Profil Madrasah Tsanawiyah (MTs) Muhyiddin
          </h1>
        </div>

        <div className="mt-12 prose max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <p className="text-gray-700 mb-6">
              Madrasah Tsanawiyah (MTs) Muhyiddin adalah sebuah lembaga pendidikan tingkat SMP di bawah naungan Yayasan Pondok Pesantren Anda Lirboyo yang didirikan oleh Alm. Romo K.H. Achmad Thobib. Yayasan ini memfokuskan pada pengajaran Al-Qur'an baik dengan metode Simudaris maupun Tahfidz Al-Qur'an. MTs Muhyiddin telah memadukan antara kurikulum pendidikan agama dan kurikulum pendidikan nasional dengan berbasis pondok pesantren dengan ciri khas Islam Ahlussunnah Wal Jamaah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Program Harian</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Metode Qira'ati dengan guru bersyahadah</li>
                <li>Tahfidz dan Tartil Al-Qur'an</li>
                <li>Bahasa Inggris</li>
                <li>Bahasa Arab</li>
                <li>Amaliyah Yaumiyah (Tadarus, sholat dhuha berjamaah)</li>
                <li>Konsep Madrasah berbasis Sains Pesantren</li>
                <li>Character Building berbasis daily activities</li>
                <li>Munajat/do'a</li>
                <li>Pengajaran diniyah</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Program Pengajaran</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Kurikulum Pengajaran Al-Qur'an</li>
                <li>Kurikulum Pesantren</li>
                <li>Kurikulum Pendidikan Nasional</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ekstrakurikuler</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pramuka</li>
                <li>Futsal</li>
                <li>Qiro'ah</li>
                <li>Al-Banjari</li>
                <li>Kaligrafi</li>
                <li>Bulu Tangkis</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Prestasi Siswa</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Juara III Musabaqoh Tilawatil Qur'an (MTQ) Se-kota Surabaya Cabang Tahfidz Qur'an (2022)</li>
              <li>Harapan I Musabaqoh Tilawatil Qur'an (MTQ) Se-kota Surabaya Cabang Mujawad</li>
              <li>Juara I Karya Tulis Dongeng Khatuliswa (2022)</li>
              <li>Juara II Video Dongeng Khatuliswa (2022)</li>
              <li>Juara II Kompetisi Menggambar Online Nasional Gundamani Creativity (2022)</li>
              <li>Juara II SMP Event National Competition Arka Creativity (2022)</li>
              <li>Harapan I Tahfidz JQH Event National Competition Arka Creativity (2022)</li>
              <li>Harapan II Menggambar Event National Competition Arka Creativity (2022)</li>
              <li>Juara III Lomba Vlog Porseni (Putra) MTs Se-Kota Surabaya (2022)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}



    
