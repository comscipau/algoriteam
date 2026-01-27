import Image from 'next/image';

const projects = {
  websites: [
    { id: 1, title: "Cryptok", src: "/images/web_1.png", link: "https://cryptok-lodgings.vercel.app/" },
    { id: 2, title: "ClubMonteCarlo", src: "/images/web_2.png", link: "https://cmc-new.vercel.app/" },
    { id: 3, title: "Grypto", src: "/images/web_3.png", link: "https://test-grypto.vercel.app/" },
  ],
  mobile: [
    { id: 1, title: "Cheershub", src: "/images/cheershub.png", link: "https://play.google.com/store/apps/details?id=com.algoriteam.cheershub&pcampaignid=web_share" },
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src="/images/algoriteam.png"
            alt="Algoriteam Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <h1 className="text-2xl font-bold tracking-tighter text-white">
            Algoriteam
          </h1>
        </div>
        <p className="text-sm text-gray-400 italic hidden sm:block">
          Founded by Paulo Buenavente
        </p>
      </nav>

      <header className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
          Crafting cool stuff for the web and your phone.
        </h2>
        <p className="text-xl text-gray-400">
          Whether it's a bold new idea or a passion project, we’re here to help you build it.
        </p>
      </header>

      {/* Websites Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-light uppercase tracking-[0.3em] mb-12 border-l-2 border-white pl-4">Websites</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.websites.map((item) => (
            <div key={item.id} className="group">
              {/* Wrapped in an anchor tag for linking */}
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 aspect-video flex items-center justify-center border border-white/5 transition-colors hover:border-white/20">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </a>
              <h4 className="mt-4 text-gray-400 font-medium tracking-wide">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-light uppercase tracking-[0.3em] mb-12 border-l-2 border-white pl-4">Mobile Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.mobile.map((item) => (
            <div key={item.id} className="group">
              {/* Wrapped in an anchor tag for linking */}
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 aspect-video flex items-center justify-center border border-white/5 transition-colors hover:border-white/20">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </a>
              <h4 className="mt-4 text-gray-400 font-medium tracking-wide">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 border-t border-white/5 text-center">
        <h3 className="text-2xl font-light uppercase tracking-[0.2em] mb-6">Games</h3>
        <div className="inline-block px-8 py-1 border border-white text-white text-xs uppercase tracking-widest animate-pulse">
          Coming Soon
        </div>
        <p className="mt-6 text-gray-500 max-w-md mx-auto">
          We are currently developing our first title. Stay tuned for the reveal.
        </p>
      </section>

      <footer className="p-12 text-center text-gray-600 border-t border-white/5">
        {/* Email Contact Link */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] mb-2 text-gray-500">Get in touch</p>
          <a 
            href="mailto:algoriteam.ph@gmail.com" 
            className="text-lg text-white hover:text-gray-400 transition-colors duration-300 font-medium"
          >
            algoriteam.ph@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Algoriteam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}