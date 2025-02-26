import React, { useState, useEffect, useRef } from 'react';
import { Star, Share, Moon, Sun, Music, Heart, Coffee } from 'lucide-react';

const CosmicConnection = () => {
  const [activeSign, setActiveSign] = useState(null);
  const [cosmicVibe, setCosmicVibe] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [secondSign, setSecondSign] = useState(null);
  const [compatibility, setCompatibility] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const starfieldRef = useRef(null);

  // Indonesian-inspired zodiac descriptions
  const zodiacSigns = [
    { name: 'Aries', element: 'Fire', dates: 'Mar 21 - Apr 19', indo: 'Si Pantang Kalah' },
    { name: 'Taurus', element: 'Earth', dates: 'Apr 20 - May 20', indo: 'Si Keras Kepala' },
    { name: 'Gemini', element: 'Air', dates: 'May 21 - Jun 20', indo: 'Si Rame Sendiri' },
    { name: 'Cancer', element: 'Water', dates: 'Jun 21 - Jul 22', indo: 'Si Baper' },
    { name: 'Leo', element: 'Fire', dates: 'Jul 23 - Aug 22', indo: 'Si Raja Minder' },
    { name: 'Virgo', element: 'Earth', dates: 'Aug 23 - Sep 22', indo: 'Si Perfeksionis' },
    { name: 'Libra', element: 'Air', dates: 'Sep 23 - Oct 22', indo: 'Si Ga Tegaan' },
    { name: 'Scorpio', element: 'Water', dates: 'Oct 23 - Nov 21', indo: 'Si Misterius' },
    { name: 'Sagittarius', element: 'Fire', dates: 'Nov 22 - Dec 21', indo: 'Si Jujur Brutal' },
    { name: 'Capricorn', element: 'Earth', dates: 'Dec 22 - Jan 19', indo: 'Si Workaholic' },
    { name: 'Aquarius', element: 'Air', dates: 'Jan 20 - Feb 18', indo: 'Si Nyeleneh' },
    { name: 'Pisces', element: 'Water', dates: 'Feb 19 - Mar 20', indo: 'Si Tukang Mimpi' }
  ];

  // Indonesian-flavored cosmic identities
  const cosmicIdentities = [
    'Naga Langit: Kayak influencer tapi bintangnya lebih banyak',
    'Malaikat Kopi: Energinya selalu on, tidurnya jarang',
    'Burung Garuda Galaksi: Terbang tinggi, takut cicilan',
    'Kucing Astral: Suka ghosting tapi selalu kembali',
    'Elang Pelangi: Tajam matanya, tajam juga mulutnya',
    'Harimau Bintang: Garang di luar, manja di dalam',
    'Kancil Kosmik: Pintar cari alasan, pintar juga cari jalan',
    'Macan Meteor: Sabar... tapi kalau ngamuk, awas!',
    'Gajah Galaksi: Setia dan ingatan kuat, terutama sama yang nyakitin',
    'Monyet Bulan: Usil tapi menggemaskan'
  ];

  // Indonesian-style humor for compatibility
  const generateCompatibility = () => {
    if (!activeSign || !secondSign) return;

    setIsGenerating(true);
    setShowConfetti(false);

    const haikus = [
      `Api bertemu tanah\nKayak indomie ketemu nasi\nMantap jiwa!`,
      `Air bertemu api\nTersisa uap dan drama\nCinta yang meletup`,
      `Udara dan tanah\nSatu terbang, satu diam\nSaling melengkapi`,
      `Bagai gado-gado\nBanyak rasa jadi satu\nEnak dimakan berdua`,
      `Seperti kopi susu\nBerbeda warna jadi satu\nManis tak tertahankan`
    ];

    setTimeout(() => {
      setCompatibility(haikus[Math.floor(Math.random() * haikus.length)]);
      setIsGenerating(false);
      setShowConfetti(true);

      // Hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  const generateCosmicVibe = () => {
    if (!activeSign) return;

    setIsGenerating(true);
    setCosmicVibe('');
    setShowConfetti(false);

    setTimeout(() => {
      const identity = cosmicIdentities[Math.floor(Math.random() * cosmicIdentities.length)];
      setCosmicVibe(identity);
      setIsGenerating(false);
      setShowConfetti(true);

      // Hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  const getElementColor = (element) => {
    switch (element) {
      case 'Fire': return 'bg-gradient-to-r from-red-500 to-yellow-500 text-white';
      case 'Earth': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Air': return 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white';
      case 'Water': return 'bg-gradient-to-r from-purple-500 to-blue-500 text-white';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const handleShare = () => {
    alert('Nanti share ke Instagram ya! Tunggu bentar...');
  };

  const startApp = () => {
    setShowIntro(false);
  };

  // Render confetti
  const renderConfetti = () => {
    if (!showConfetti) return null;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 10 + 5;
          const colors = ['bg-yellow-500', 'bg-pink-500', 'bg-purple-500', 'bg-blue-500', 'bg-red-500', 'bg-green-500'];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <div
              key={i}
              className={`absolute rounded-full ${color} animate-confetti`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 20 - 10}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          );
        })}
      </div>
    );
  };

  // Intro screen
  const renderIntro = () => {
    if (!showIntro) return null;

    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="animate-float">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-200">
            Cosmic Connection
          </h1>
          <p className="text-xl mb-6 text-white/80">Ramalan Zodiak Ala Kekinian</p>
        </div>

        <div className="max-w-md text-center mb-8 text-white/70">
          <p className="mb-2">Mau tau kenapa kamu jomblo? Atau kenapa boros terus?</p>
          <p>Mungkin jawabannya ada di bintang-bintang! ⭐</p>
        </div>

        <button
          onClick={startApp}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse"
        >
          Cari Tahu Sekarang!
        </button>
      </div>
    );
  };

  // Custom animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes twinkle {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
      }
      
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
        50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
        100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
      }
      
      @keyframes confetti {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-confetti {
        animation: confetti 3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-4 relative overflow-hidden">
      {renderIntro()}
      {renderConfetti()}

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() < 0.1 ? '3px' : '1px',
              height: Math.random() < 0.1 ? '3px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 8 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Animated shooting star */}
      <div className="absolute w-px h-px rounded-full bg-white animate-ping"
        style={{
          top: '20%',
          left: '70%',
          boxShadow: '0 0 4px 2px white',
          animationDuration: '10s',
          animationIterationCount: 'infinite'
        }}
      />

      {/* Indonesian-inspired decorative elements */}
      <div className="absolute top-4 left-4 opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>
        <Coffee className="h-8 w-8 text-yellow-300" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
        <Music className="h-8 w-8 text-pink-300" />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <header className="text-center mb-8 mt-4">
          <div className="animate-float inline-block">
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-200">
              Cosmic Connection
            </h1>
          </div>
          <p className="text-lg opacity-80">Ramalan Zodiak Ala Kekinian</p>
        </header>

        <div className="bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-6 border border-white/10 transition-all duration-300 hover:shadow-pink-500/20">
          <h2 className="text-xl font-medium mb-4 flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-300" />
            Pilih Zodiak Kamu
          </h2>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => setActiveSign(sign)}
                className={`p-2 rounded-lg transition-all duration-300 text-sm flex flex-col items-center transform hover:scale-105 ${activeSign?.name === sign.name
                    ? 'ring-2 ring-pink-400 shadow-lg'
                    : 'hover:bg-white/10'
                  }`}
                style={{
                  animation: activeSign?.name === sign.name ? 'pulse-glow 2s infinite' : 'none'
                }}
              >
                <span className="font-medium">{sign.name}</span>
                <span className={`text-xs mt-1 px-2 py-0.5 rounded-full ${getElementColor(sign.element)}`}>
                  {sign.element}
                </span>
                {activeSign?.name === sign.name && (
                  <span className="mt-1 text-xs font-bold text-yellow-300">{sign.indo}</span>
                )}
              </button>
            ))}
          </div>

          {activeSign && (
            <div className="text-center animate-float" style={{ animationDuration: '4s' }}>
              <p className="text-lg mb-1">
                {activeSign.name}: {activeSign.dates}
              </p>
              <p className="mb-4 text-yellow-300 font-bold">{activeSign.indo}</p>
              <button
                onClick={generateCosmicVibe}
                disabled={isGenerating}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
              >
                {isGenerating && !cosmicVibe ? (
                  <span className="animate-pulse flex items-center">
                    <Moon className="h-4 w-4 mr-2 animate-spin" />
                    Menghubungi dukun digital...
                  </span>
                ) : cosmicVibe ? (
                  <span>Coba Lagi Dong!</span>
                ) : (
                  <span>Lihat Ramalan Kamu!</span>
                )}
              </button>
            </div>
          )}

          {cosmicVibe && (
            <div className="mt-6 p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg text-center relative border border-white/10 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <p className="text-xl font-bold mt-2 mb-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400">
                {cosmicVibe.split(':')[0]}
              </p>
              <p className="text-lg opacity-90 italic">
                {cosmicVibe.split(':')[1]}
              </p>
              <button
                onClick={handleShare}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full text-sm flex items-center mx-auto hover:from-pink-700 hover:to-orange-700 hover:scale-105 transition-all shadow-lg"
              >
                <Share className="h-4 w-4 mr-1" /> Share ke Story!
              </button>
            </div>
          )}
        </div>

        {activeSign && cosmicVibe && (
          <div className="bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-6 border border-white/10 hover:shadow-pink-500/20 transition-all duration-300">
            <h2 className="text-xl font-medium mb-2 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-400" />
              Matching Zodiak
            </h2>
            <p className="text-sm opacity-80 mb-4">
              Cek kecocokan kamu dengan orang tersayang... atau gebetan! 💘
            </p>

            <div className="flex items-center justify-between space-x-4 mb-4">
              <div className="flex-1">
                <p className="text-center mb-2">Zodiak Kamu</p>
                <div className={`p-2 rounded-lg text-center ${getElementColor(activeSign.element)}`}>
                  <p className="font-medium">{activeSign.name}</p>
                  <p className="text-xs">{activeSign.indo}</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative mb-1">
                  {activeSign && secondSign ? (
                    <button
                      onClick={generateCompatibility}
                      disabled={isGenerating}
                      className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg animate-pulse"
                    >
                      ❤️
                    </button>
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center opacity-50">
                      ❤️
                    </div>
                  )}
                </div>
                <p className="text-xs opacity-70">Cek Kecocokan</p>
              </div>

              <div className="flex-1">
                <p className="text-center mb-2">Zodiak Dia</p>
                <select
                  value={secondSign?.name || ''}
                  onChange={(e) => {
                    const selected = zodiacSigns.find(sign => sign.name === e.target.value);
                    setSecondSign(selected || null);
                    setCompatibility('');
                  }}
                  className="w-full bg-gray-800/80 p-2 rounded-lg text-center border border-white/20 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                >
                  <option value="">Pilih zodiak...</option>
                  {zodiacSigns.map(sign => (
                    <option key={sign.name} value={sign.name}>{sign.name} - {sign.indo}</option>
                  ))}
                </select>
              </div>
            </div>

            {compatibility && (
              <div className="mt-4 p-4 bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-lg text-center border border-pink-500/30 shadow-lg animate-float" style={{ animationDuration: '5s' }}>
                <p className="italic text-lg leading-relaxed whitespace-pre-line">
                  {compatibility}
                </p>
                <div className="mt-2 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-pink-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>❤️</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <footer className="text-center text-sm opacity-60 mt-8 mb-4">
          <p>✨ Cosmic Connection ✨</p>
          <p>Bukan dukun beneran, tapi lebih keren!</p>
          <p className="mt-2 text-xs">Made with ❤️ in Indonesia</p>
        </footer>
      </div>
    </div>
  );
};

export default CosmicConnection;