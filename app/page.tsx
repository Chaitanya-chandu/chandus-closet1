"use client";

import { useState } from "react";

export default function Home() {
  const photos = [
    "/images/chandu/photo1.jpg",
    "/images/chandu/photo2.jpg",
    "/images/chandu/photo3.jpg",
    "/images/chandu/photo4.jpg",
    "/images/chandu/photo5.jpg",
    "/images/chandu/photo6.jpg",
    "/images/chandu/photo7.jpg",
    "/images/chandu/photo8.jpg",
  ];

  const fitIdeas = [
    "☕ Coffee Date Core",
    "🎨 Museum Girl Energy",
    "🌸 Soft Pinterest Minimalism",
    "🍂 Earth Tone Outfit",
    "✨ Main Character Energy",
    "💚 Casual Green Day",
    "📸 Pinterest Girl Era",
    "🤎 Cozy Weekend Fit",
  ];

  const [todayFit, setTodayFit] = useState(fitIdeas[0]);

  return (
    <main className="min-h-screen bg-[#f8f2ec] text-[#3f312b] overflow-x-hidden">
      {/* Floating Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6">
        <h1 className="text-3xl md:text-4xl font-black">
          Chandu's Closet 🎀
        </h1>

        <button className="bg-white px-5 py-2 rounded-full shadow-lg">
          🤍 Pinterest Mode
        </button>
      </nav>

      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Chandu's Closet 🎀
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[#6d5a53]">
          A little corner of the internet for the prettiest girl.
          Curated with love, memories, cute fits and Pinterest energy ♡
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="#gallery"
            className="bg-[#3f312b] text-white px-6 py-3 rounded-full"
          >
            ✨ Explore Fits
          </a>

          <a
            href="#memories"
            className="bg-white px-6 py-3 rounded-full shadow-md"
          >
            🤍 Our Memories
          </a>
        </div>
      </section>

      {/* Today's Fit */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-black mb-6">
          Today's Fit 💫
        </h2>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
          <p className="text-2xl mb-6">{todayFit}</p>

          <button
            onClick={() =>
              setTodayFit(
                fitIdeas[
                  Math.floor(Math.random() * fitIdeas.length)
                ]
              )
            }
            className="bg-[#3f312b] text-white px-6 py-3 rounded-full"
          >
            Pick My Fit
          </button>
        </div>
      </section>

      {/* Pinterest Gallery */}
      <section
        id="gallery"
        className="px-4 md:px-12 py-20"
      >
        <h2 className="text-4xl font-black text-center mb-12">
          Chandu's Fits 📸
        </h2>

        <div className="columns-2 md:columns-4 gap-4">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Chandu ${index + 1}`}
              className="mb-4 rounded-3xl shadow-xl hover:scale-[1.02] transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Moodboard */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-black text-center mb-12">
          Outfit Moodboard ✨
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            ☕ Coffee Shop Core
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            🎨 Museum Core
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            🌸 Soft Girl Core
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            ✨ Main Character Energy
          </div>
        </div>
      </section>

      {/* Memories */}
      <section
        id="memories"
        className="py-20 px-6"
      >
        <h2 className="text-4xl font-black text-center mb-12">
          Us ♡
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-pink-50 rounded-3xl p-6 shadow-lg">
            ☕ Coffee Runs
          </div>

          <div className="bg-pink-50 rounded-3xl p-6 shadow-lg">
            🎨 Museum Dates
          </div>

          <div className="bg-pink-50 rounded-3xl p-6 shadow-lg">
            🌸 Casual Days
          </div>

          <div className="bg-pink-50 rounded-3xl p-6 shadow-lg">
            🎀 Favorite Memories
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-20 px-6">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6">
                Main Character Energy ✨
              </h2>

              <p className="text-lg text-[#6d5a53]">
                Every picture tells a story.
                Every outfit has a vibe.
                Every memory becomes part of the aesthetic.
              </p>

              <p className="mt-6 text-[#8d756d]">
                Built with love for Chandu ♡
              </p>
            </div>

            <img
              src="/images/chandu/photo1.jpg"
              alt="Chandu"
              className="rounded-[30px] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Weather Card */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            🌤 Today's Suggestion
          </h3>

          <p className="text-lg text-[#6d5a53]">
            Light layers • comfy bottoms • minimal accessories •
            Pinterest girl energy ✨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-[#7f6b63]">
        <p className="text-xl mb-2">
          Made with love for Chandu ♡
        </p>

        <p>
          Every outfit tells a story.
        </p>
      </footer>
    </main>
  );
}