"use client";


import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // --- TARUH LOGIKA ANIMASI DI SINI ---
  const [greeting, setGreeting] = useState("");
  const greetings = ["Marhaban", "Halo", "Hello", "Bonjour", "Konnichiwa", "Sugeng Rawuh", "Hi!", "Γειά σου"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Efek Mengetik
  useEffect(() => {
    if (subIndex === greetings[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000); // Jeda sebelum menghapus
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % greetings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 150); // Kecepatan hapus vs ketik

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  useEffect(() => {
    setGreeting(`${greetings[index].substring(0, subIndex)}`);
  }, [subIndex, index]);

  return (
    <main className="min-h-screen bg-[#050605] text-zinc-100 font-sans scroll-smooth relative overflow-x-hidden">
      
      
    {/* --- LAYER 1: ANIMATED BACKGROUND DECORATION --- */}
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Lingkaran Cahaya 1 (Bergerak) */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1F4E36]/20 blur-[120px] rounded-full animate-pulse"></div>
        
        {/* Lingkaran Cahaya 2 (Bergerak Lambat) */}
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#B2AC88]/10 blur-[150px] rounded-full animate-bounce [animation-duration:10s]"></div>

        {/* Floating Shapes (Elemen Geometris Halus ala Referensi) */}
        <div className="absolute top-[20%] right-[15%] w-12 h-12 border border-white/5 rotate-45 animate-spin [animation-duration:15s]"></div>
        <div className="absolute bottom-[30%] left-[10%] w-8 h-8 rounded-full border border-[#B2AC88]/20 animate-ping [animation-duration:5s]"></div>
        
        {/* Efek Garis Diagonal Halus (Pattern) */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(45deg, #B2AC88 1px, transparent 1px), linear-gradient(-45deg, #B2AC88 1px, transparent 1px)', 
               backgroundSize: '60px 60px' 
             }}>
        </div>
      </div>

     
        
        {/* --- NAVIGATION BAR --- */}
        <nav className="fixed top-0 w-full bg-[#050605]/80 backdrop-blur-md border-b border-[#1F4E36]/10 z-50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="font-bold tracking-tighter text-xl text-[#B2AC88]">FAE.</span>
            <div className="hidden md:flex space-x-10">
              {["ABOUT", "EXPERIENCE", "PROJECTS", "AWARDS", "CONTACT"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[11px] tracking-[0.25em] text-zinc-500 hover:text-[#B2AC88] transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 pt-40 md:pt-56">
          
         {/* --- HERO SECTION (REPLICA STYLE) --- */}
         <header className="mb-48 pt-20">
         <div className="flex items-center gap-4 mb-8">
  <div className="w-10 h-[1px] bg-[#B2AC88]"></div>
  <span className="text-[#B2AC88] font-mono text-sm tracking-widest uppercase">
  {greeting}
  <span className="animate-pulse">|</span> 
</span>
</div>

            <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-tight mb-8 text-white leading-tight">
              Raffa Maulana E
            </h1>

            <p className="text-[#B2AC88] font-bold text-lg mb-6 tracking-wide">
              Student & Aspiring Executive Assistant
            </p>

            <p className="text-zinc-500 max-w-2xl leading-relaxed mb-12 text-sm md:text-base">
              Seorang pelajar berdedikasi di Fajrussalam dan Pengurus aktif organisasi yang fokus pada efisiensi sistem, 
              manajemen data digital SLiMS, dan Photografer yang flexsibel. Saya ahli dalam menggabungkan 
              desain grafis dengan sistem manajemen perpustakaan untuk menciptakan lingkungan akademik yang modern.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-[#1F4E36] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#1F4E36]/80 transition-all"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-white/10 text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </header>

          {/* --- SECTION: BACKGROUND & INTERESTS (SAGE THEME) --- */}
          <section id="about" className="mb-48 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-32">
              <div className="relative group">
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#1F4E36]/40 rounded-xl -z-10"></div>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-zinc-900">
                  <Image 
                    src="/MawMaw.jpg" 
                    alt="Mohammad Azzam" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-serif font-bold text-white mb-4">Background & Interests</h2>
                  <div className="w-16 h-1 bg-[#1F4E36]"></div>
                </div>
                <div className="space-y-6 text-zinc-400 leading-relaxed text-sm md:text-base">
                  <p>
                    Saya adalah santri di Fajrussalam dengan minat mendalam pada integrasi teknologi dan pendidikan. Sebagai praktisi desain grafis dan jurnalisme, saya berfokus pada <span className="text-[#B2AC88]">sistem manajemen dan pengelolaan perpustakaan</span>, desainer, serta sekretriat teknis.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><span className="text-[#B2AC88] font-bold">{">"}</span> Implementasi dan administrasi pengelolaan Perpustakaan</li>
                    <li className="flex items-start gap-3"><span className="text-[#B2AC88] font-bold">{">"}</span> Desain grafis dan komunikasi visual</li>
                    <li className="flex items-start gap-3"><span className="text-[#B2AC88] font-bold">{">"}</span> Photografer dan pembuatan konten</li>
                  </ul>
                  <p>
                    Saya telah berhasil mengimplementasikan sistem perpustakaan SLiMS di Baitul Hikmah, mendigitalisasi database dan mengintegrasikan sistem pelacakan modern.
                  </p>
                </div>
              </div>
            </div>

            {/* --- SUB-SECTION: SKILLS & EXPERTISE --- */}
            <div className="border-t border-[#1F4E36]/10 pt-20">
              <h2 className="text-xs tracking-[0.4em] text-[#B2AC88] uppercase mb-12 font-bold">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Library Systems */}
                <div className="space-y-6">
                  <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-bold">Library Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    {["SLiMS", "Digital Archiving", "Cataloguing", "Database Management"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 border border-white/5 bg-[#0c0d0c] text-[10px] text-zinc-400 hover:border-[#1F4E36]/50 hover:text-[#B2AC88] transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Design & Media */}
                <div className="space-y-6">
                  <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-bold">Design & Media</h3>
                  <div className="flex flex-wrap gap-2">
                    {["CorelDRAW", "Graphic Design", "Layout Design", "Microsoft Excel", "Microsoft Word", "Canva"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 border border-white/5 bg-[#0c0d0c] text-[10px] text-zinc-400 hover:border-[#B2AC88]/50 hover:text-[#B2AC88] transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Communication */}
                <div className="space-y-6">
                  <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-bold">Communication</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Technical Journalism", "Content Writing", "Editorial Work", "Research", "Diplomation"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 border border-white/5 bg-[#0c0d0c] text-[10px] text-zinc-400 hover:border-[#1F4E36]/50 hover:text-[#B2AC88] transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

         

{/* --- EXPERIENCE SECTION --- */}
<section id="experience" className="py-20"> 
  {/* Isinya yang ada SLiMS tadi */}
</section>
  {/* Judul Section (Hanya sekali di atas) */}
  <div className="mb-16">
    <span className="px-3 py-1 border border-[#B2AC88] text-[#B2AC88] text-xs font-mono uppercase tracking-widest">
      Experience
    </span>
    <h2 className="text-5xl font-serif font-bold text-white mt-6 mb-2">Experience & Roles</h2>
    <div className="w-16 h-[2px] bg-[#B2AC88]"></div>
  </div>

  {/* PEMBUNGKUS GARIS (Hanya satu div ini yang punya border-l) */}
  <div className="relative border-l border-zinc-800 ml-3 md:ml-6">
    
    {/* --- PENGALAMAN 1 (SLiMS) --- */}
    <div className="relative pl-10 pb-20">
      {/* Titik Glow */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B2AC88] rounded-full shadow-[0_0_15px_rgba(178,172,136,0.5)]"></div>
      
      <div className="bg-[#111111]/50 border border-zinc-800 p-8 rounded-sm backdrop-blur-sm flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <span className="text-zinc-500 font-mono text-sm uppercase">2026 - PRESENT</span>
          <h3 className="text-3xl font-serif font-bold text-white mt-2">Library Technology Coordinator</h3>
          <p className="text-[#B2AC88] mb-6">Baitul Hikmah Library</p>
          <ul className="space-y-3 text-zinc-400 text-sm">
            <li> Mengelola Perpustakaan Baitul Hikmah Pondok Pesantren Fajrussalam </li>
            <li> Digitalisasi database perpustakaan</li>
          </ul>
        </div>
        <div className="flex-1">
           <Image src="/SlimYeuh.png" alt="SLiMS" width={500} height={300} className="rounded-sm opacity-80" />
        </div>
      </div>
    </div>

    {/* --- PENGALAMAN 2 (Kalau mau nambah lagi nanti, taruh di dalam sini juga) --- */}
    <div className="relative pl-10 pb-20">
      {/* Titik Glow */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B2AC88] rounded-full shadow-[0_0_15px_rgba(178,172,136,0.5)]"></div>
      
      <div className="bg-[#111111]/50 border border-zinc-800 p-8 rounded-sm backdrop-blur-sm flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <span className="text-zinc-500 font-mono text-sm uppercase">2026 - PRESENT</span>
          <h3 className="text-3xl font-serif font-bold text-white mt-2">Language Agency</h3>
          <p className="text-[#B2AC88] mb-6">Organisasi Santri Pondok Pesantren Fajrussalam</p>
          <ul className="space-y-3 text-zinc-400 text-sm">
            <li> Pendataan dan Dokumentasi Sekretariat Bahasa</li>
            <li> Pengembangan ide-ide Kebahasaan</li>
          </ul>
        </div>
        <div className="flex-1">
           <Image src="/Lugoh.png" alt="SLiMS" width={500} height={300} className="rounded-sm opacity-80" />
        </div>
      </div>
    </div>

    
    
  </div> {/* PENUTUP PEMBUNGKUS GARIS */}
{/* --- ACHIEVEMENTS SECTION --- */}
<section id="awards" className="py-20">
  {/* Isinya prestasi lomba-lomba kamu */}
</section>
<section className="py-20">
  <div className="mb-16">
    <h2 className="text-5xl font-serif font-bold text-white mb-2">Achievements & Recognition</h2>
    <div className="w-16 h-[2px] bg-amber-500"></div>
  </div>

  <div className="space-y-4">
    {[
      {
        title: "1st Place - English Public Speaking Competition",
        desc: "Awarded at Pondok Pesantren Fajrussalam for excellence in oratory and English language proficiency",
        icon: "🏆",
        color: "text-amber-500"
      },
      {
        title: "2nd Place - Scientific Writing Competition",
        desc: "Research paper: 'The Impact of Novel Reading on the Daily Lives of Students within the Pesantren Environment'",
        icon: "🥈",
        color: "text-zinc-300"
      },
      {
        title: "Library Digitisation Excellence",
        desc: "Successfully completed full digitisation of the Baitul Hikmah library database using SLiMS",
        icon: "🏅",
        color: "text-amber-600"
      },
      {
        title: "Wall Magazine Best Design Recognition",
        desc: "Acknowledged for outstanding graphic design contribution to campus journalism",
        icon: "🎖️",
        color: "text-orange-500"
      }
    ].map((item, index) => (
      <div 
        key={index} 
        className="group bg-[#0A0A0A] border border-zinc-800 p-8 flex items-start gap-8 hover:border-amber-500/30 transition-all duration-500"
      >
        <div className={`text-4xl ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
          {item.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">{item.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* --- PROJECTS SECTION (4 Kolom Kecil) --- */}
<section id="projects" className="py-20">
  {/* Isinya yang ada Digital Library & Mading */}
</section>
<section id="projects" className="py-20 border-t border-zinc-900 mt-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mb-12">
      <span className="px-3 py-1 border border-[#B2AC88] text-[#B2AC88] text-[10px] font-mono uppercase tracking-[0.3em]">
        Portfolio
      </span>
      <h2 className="text-4xl font-serif font-bold text-white mt-6 mb-2">Projects & Initiatives</h2>
      <div className="w-12 h-[2px] bg-[#1F4E36]"></div>
    </div>

    {/* Grid diubah jadi 4 kolom untuk tampilan desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      
      {[
        {
          title: "Digital Library",
          desc: "Implementasi SLiMS untuk database Baitul Hikmah.",
          tags: ["SLiMS", "Archiving"]
        },
        {
          title: "Wall Magazine",
          desc: "Koordinasi desain dan konten jurnalistik mading.",
          tags: ["Design", "Journalism"]
        },
        {
          title: "Graphic Design",
          desc: "Produksi logo dan poster event organisasi.",
          tags: ["Canva", "Logo"]
        },
        {
          title: "Web Portfolio",
          desc: "Development web minimalis pake Next.js & Tailwind.",
          tags: ["Next.js", "AI"]
        }
      ].map((proj, i) => (
        <div key={i} className="bg-[#0A0A0A] border border-zinc-800 rounded-sm overflow-hidden hover:border-[#B2AC88]/40 transition-all duration-500 group flex flex-col">
          {/* Header Mockup Lebih Pendek */}
          <div className="bg-zinc-900/30 px-3 py-2 border-b border-zinc-800 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-serif font-bold text-[#B2AC88] mb-2 leading-tight">
              {proj.title}
            </h3>
            <p className="text-zinc-500 text-[11px] leading-relaxed mb-4 flex-1">
              {proj.desc}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[9px] px-1.5 py-0.5 border border-zinc-900 text-zinc-600 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>

            <button className="text-[#B2AC88] text-[10px] font-mono flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-widest pt-2 border-t border-zinc-900">
              Details <span>→</span>
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
    {/* Sisi Kiri: Info & Social Icons */}
    <div>
      <span className="px-3 py-1 border border-[#B2AC88] text-[#B2AC88] text-xs font-mono uppercase tracking-widest">
        Contact
      </span>
      <h2 className="text-5xl font-serif font-bold text-white mt-6 mb-8">Get In Touch</h2>
      <div className="w-16 h-[2px] bg-[#1F4E36] mb-10"></div>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md">
        Interested in collaborating or have any questions? Please do not hesitate to get in touch. 
        I am always open to discussions about new projects, creative ideas, or opportunities to contribute.
      </p>

      {/* Social Icons - G, L, M diganti Logo Asli */}
      <div className="flex gap-4">
        {[
          { 
            name: "GitHub", 
            link: "https://github.com/RaffaMaulana", // Ganti link GitHub lo di sini
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> 
          },
          { 
            name: "LinkedIn", 
            link: "https://linkedin.com/in/RaffaMaulana", // Ganti link LinkedIn lo di sini
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
          },
          { 
            name: "Email", 
            link: "mailto:email-kamu@example.com", // Ganti pakai email asli kamu
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099l3.83-3.104 5.612 8.818h-18.895l5.629-8.813zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z"/></svg> 
          }
        ].map((item) => (
          <a 
            key={item.name} 
            href={item.link}
            target={item.name === "Email" ? "_self" : "_blank"} 
            className="w-12 h-12 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-[#B2AC88] hover:text-[#B2AC88] transition-all cursor-pointer bg-[#0A0A0A]"
          >
             {item.icon}
          </a>
        ))}
      </div>
    </div>

    {/* Sisi Kanan: Form (Tombol Berfungsi) */}
    <form action="mailto:email-kamu@example.com" method="post" encType="text/plain" className="space-y-6">
      <div>
        <label className="block text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-mono">Name</label>
        <input name="Name" type="text" placeholder="Your full name" required className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 text-sm text-white focus:outline-none focus:border-[#B2AC88] transition-all" />
      </div>
      <div>
        <label className="block text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-mono">Email</label>
        <input name="Email" type="email" placeholder="email@example.com" required className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 text-sm text-white focus:outline-none focus:border-[#B2AC88] transition-all" />
      </div>
      <div>
        <label className="block text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-mono">Message</label>
        <textarea name="Message" rows={4} placeholder="Write your message here..." required className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 text-sm text-white focus:outline-none focus:border-[#B2AC88] transition-all resize-none"></textarea>
      </div>
      
      {/* Tombol yang akan membuka aplikasi email */}
      <button type="submit" className="bg-[#B2AC88] text-black font-bold py-4 px-10 text-xs uppercase tracking-widest hover:bg-white transition-all w-full md:w-auto">
        Send Message →
      </button>
    </form>
  </div>
</section>

{/* --- SOCIAL GRID DENGAN LOGO --- */}
<div className="mt-32 pt-20 border-t border-zinc-900">
  <span className="text-[#B2AC88] text-[10px] font-mono tracking-[0.3em] uppercase block mb-10">Social Grid</span>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { 
        platform: "Instagram", 
        handle: "@Raffa_kzx", 
        link: "https://instagram.com/Raffa_kzx",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/>
          </svg>
        )
      },
      { 
        platform: "Facebook", 
        handle: "RaffaMaulanaa", 
        link: "https://facebook.com/RaffaMaulanaa",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        )
      },
      { 
        platform: "Tiktok", 
        handle: "FAe", 
        link: "https://tiktok.com/@FAe",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.417 6.417 0 01-1.87-1.54v6.86c-.01 2.06-.61 4.11-1.9 5.71-1.3 1.61-3.26 2.64-5.3 2.78-2.04.14-4.14-.37-5.78-1.59-1.64-1.22-2.73-3.13-2.88-5.18-.15-2.05.5-4.17 1.94-5.65 1.45-1.48 3.52-2.3 5.56-2.19.11 1.66.1 3.32.08 4.98-1.16-.14-2.42.14-3.23.99-.81.85-1.04 2.14-.65 3.25.39 1.1 1.42 1.9 2.58 2.01 1.16.11 2.37-.36 2.94-1.38.58-1.02.59-2.28.58-3.42V0c.01.01.01.01.01.02z"/>
          </svg>
        )
      },
      { 
        platform: "Twitter / X", 
        handle: "@Raffa_kzx", 
        link: "https://twitter.com/Raffa_kzx",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
          </svg>
        )
      }
    ].map((item) => (
      <a 
        key={item.platform} 
        href={item.link}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#070707] border border-zinc-900 p-8 flex flex-col items-center justify-center group hover:border-[#B2AC88]/30 transition-all cursor-pointer"
      >
        <div className="text-zinc-600 group-hover:text-[#B2AC88] mb-4 transition-colors">
          {item.icon}
        </div>
        <span className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1 transition-colors group-hover:text-zinc-400">
          {item.platform}
        </span>
        <span className="text-white font-bold text-sm group-hover:text-[#B2AC88] transition-colors">
          {item.handle}
        </span>
      </a>
    ))}
  </div>
</div>

<section>

</section>
</div> {/* Ini div pembungkus konten kalau ada */}
    </main>
  );
}