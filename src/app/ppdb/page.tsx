import FeeTable from "../components/Table";
import MainLayout from "../layouts/MainLayout";
import heroImage from "../../../public/hero-2.png";
import Hero from "../layouts/HeroLayout";

export default function Ppdb() {
    const biayaSekolah = [
        { uraian: "Pendaftaran Sekolah & TPG", nominal: 350000 },
        { uraian: "SPP", nominal: 300000 },
        { uraian: "SPP Ngaji", nominal: 50000 },
        { uraian: "Kegiatan Sekolah 1 Tahun", nominal: 550000 },
        { uraian: "Buku 1 Tahun, Raport & Ghoraf", nominal: 875000 },
        { uraian: "Seragam 3 Stel (Batik, Olahraga, Almamater)", nominal: 525000 },
        { uraian: "Atribut (3pcs : Kerudung/peci, dasi, dan sabuk)", nominal: 100000 },
        { uraian: "Infaq Jariyah Gedung", nominal: 1000000 },
        ];
    const biayaPondok = [
        { uraian: "Pendaftaran", nominal: 300000 },
        {uraian: "Uang Gedung", nominal: 1500000},
        {uraian: "Syahriah", nominal: 700000},
        {uraian: "Almari", nominal: 400000},
        {uraian: "Uang Kegiatan Tahunan", nominal: 400000},
        {uraian: "Almamater", nominal: 200000},
    ];
  return (
    <MainLayout>
        <Hero
            backgroundImage={heroImage}
            title="Penerimaan Peserta Didik Baru (PPDB)"
            description="Segera daftarkan diri Anda sebagai peserta didik baru di Madrasah Tsanawiyah Muhyiddin"
            buttonText="Daftar Sekarang"
            buttonLink="https://intip.in/PendaftaranMTsMQ"
            imageAlt="PPDB"
        />

        <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <FeeTable fees={biayaSekolah} title="Biaya Pendaftaran" className="mb-8" />
                <FeeTable fees={biayaPondok} title="Biaya Pondok" />
            </div>
            <div className="mt-2 ml-8 bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Syarat Pendaftaran</h2>
                <ul className="list-disc pl-5 space-y-2">
                <li>Mengisi formulir pendaftaran</li>
                <li>Fotocopy KK 2 lembar</li>
                <li>Rapor SD/MI kelas 4-6 sebanyak 2 lembar</li>
                <li>Fotocopy akte kelahiran 2 lembar</li>
                <li>Pas foto 3x4 2 lembar</li>
                <li>Sertifikat / piagam / bukti prestasi (jika ada)</li>
                </ul>
            </div>
            <div className="mt-2 ml-8 bg-white items-center flex flex-col p-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tunggu Apalagi! Daftar Sekarang</h2>
                <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    <a href="https://intip.in/PendaftaranMTsMQ">Daftar Sekarang</a>
                </button>
            </div>
        </div>
    </MainLayout>
  );
}