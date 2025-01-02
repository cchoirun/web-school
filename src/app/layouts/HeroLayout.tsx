import React from 'react';
import Image from 'next/image';
import img1 from "../../../public/img-2.jpg";

function Hero() {
  return (
    <div className="relative bg-blue-500 h-screen">
      <Image
        src={img1}
        alt="Gambar Hero"
        layout="fill"
        objectFit="cover"
        className="opacity-75 transition-opacity duration-500"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4 sm:text-6xl">MTs. Muhyiddin</h1> 
        <p className="text-lg mb-6 sm:text-xl text-white">Sekolah Menengah Pertama yang Unggul dalam Membentuk Generasi Muda yang Berakhlak Mulia dan Berprestasi</p>
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}

export default Hero;