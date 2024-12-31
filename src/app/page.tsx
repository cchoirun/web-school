import MainLayout from "./layouts/MainLayout";
import Hero from "./layouts/HeroLayout";
import About from "./layouts/AboutLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
}