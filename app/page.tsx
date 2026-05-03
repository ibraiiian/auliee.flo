import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff6f8] text-gray-800">
      {/* NAVBAR */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-pink-500">auliee.flo</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#produk" className="hover:text-pink-400">Produk</a>
          <a href="#tentang" className="hover:text-pink-400">Tentang</a>
          <a href="#kontak" className="hover:text-pink-400">Kontak</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
          Buket Cantik Untuk Momen Spesial 💐
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Toko buket auliee.flo menyediakan buket wisuda, bunga artificial, snack bouquet, dan gift box dengan desain soft, aesthetic, dan elegan.
        </p>
        <a
          href="#produk"
          className="bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition"
        >
          Lihat Produk
        </a>
      </section>

      {/* PRODUK */}
      <section id="produk" className="px-6 py-16">
        <h3 className="text-3xl font-semibold text-center text-pink-500 mb-12">Produk Kami</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Buket Wisuda", price: "Rp45.000", image: "/images/wisuda.jpg" },
            { name: "Buket Snack", price: "Rp55.000", image: null },
            { name: "Buket Bunga Artificial", price: "Rp65.000", image: null },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <div className="h-40 bg-pink-100 rounded-xl mb-4 flex items-center justify-center text-pink-400 overflow-hidden">
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span>Foto Produk</span>
                )}
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
              <p className="text-pink-500 font-medium mb-4">{item.price}</p>
              <button className="bg-pink-400 text-white px-5 py-2 rounded-full hover:bg-pink-500">
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold text-pink-500 mb-6">Tentang auliee.flo</h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          auliee.flo adalah toko buket handmade yang dibuat dengan penuh cinta. Cocok untuk wisuda, ulang tahun, anniversary, dan hadiah spesial untuk orang tersayang.
        </p>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold text-pink-500 mb-6">Pesan Sekarang</h3>
        <p className="mb-6 text-gray-600">Hubungi kami melalui WhatsApp untuk pemesanan cepat.</p>
        <a
  href="https://wa.me/6283871533319?text=Halo%20kak,%20saya%20ingin%20memesan%20buket%20di%20auliee.flo"
  target="_blank"
  className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
>
  Chat WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-pink-400 text-white text-center py-6">
        © {new Date().getFullYear()} auliee.flo — Handmade Bouquet Shop
      </footer>
    </main>
  );
}
