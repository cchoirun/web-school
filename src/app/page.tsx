import MainLayout from "./layouts/MainLayout";
import Hero from "./layouts/HeroLayout";
import About from "./layouts/AboutLayout";
import heroImage from "../../public/img-2.jpg";

export default function Home() {
  return (
    <MainLayout>
      <Hero 
        backgroundImage={heroImage}
        title="MTs. Muhyiddin"
        description="Sekolah Menengah Pertama yang Unggul dalam Membentuk Generasi Muda yang Berakhlak Mulia dan Berprestasi"
        buttonText="Daftar sekarang"
        buttonLink="/ppdb"
        imageAlt="MTs Muhyiddin"
      />
      <About />
    </MainLayout>
  );
}