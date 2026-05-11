import { ArrowDown, Flower2 } from "lucide-react";

export default function Hero() {
    const goto = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section
            id="beranda"
            className="relative min-h-screen w-full overflow-hidden flex items-center"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/home.jpg"
                    alt="Cahaya pagi menembus pepohonan rindang"
                    className="kenburns w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 md:via-bg/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
            </div>

            <div className="container-narrow relative z-10 w-full pt-32 pb-24">
                <div className="max-w-3xl">
                    <div className="reveal mb-8">
                        <div className="reveal mb-8">
                        <img 
                            src="/logo.png" 
                            alt="Logo Goa Maria" 
                            className="w-80 h-12 md:w-20 md:h-20 object-contain" 
                        />
                    </div>
                    </div>
                    <p className="eyebrow reveal text-ink-soft">
                        Tempat Ziarah · Doa · Refleksi
                    </p>
                    <h1
                        className="font-serif reveal text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] mt-8 text-ink"
                        style={{ transitionDelay: "120ms" }}
                    >
                        Hening yang menuntun
                        <br />
                        <span className="italic text-sage-deep">
                            kembali pada doa.
                        </span>
                    </h1>
                    <p
                        className="reveal mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink-soft"
                        style={{ transitionDelay: "240ms" }}
                    >
                        Goa Maria Desa Putera adalah ruang sunyi untuk berdoa,
                        merenung, dan menerima rahmat — dirawat oleh keluarga
                        besar Panti Asuhan Desa Putera.
                    </p>

                    <div
                        className="reveal mt-12 flex flex-wrap items-center gap-4"
                        style={{ transitionDelay: "360ms" }}
                    >
                        <button
                            onClick={() => goto("tentang")}
                            className="btn-pill btn-solid"
                        >
                            Mulai Ziarah
                            <ArrowDown size={14} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => goto("lokasi")}
                            className="btn-pill"
                        >
                            Lihat Lokasi
                        </button>
                    </div>
                </div>

                {/* Bottom meta */}
                <div className="absolute bottom-10 left-0 right-0 container-narrow flex items-end justify-between text-ink-soft">
                    <div className="hidden md:flex items-center gap-4 text-[11px] uppercase tracking-[0.28em]">
                        <span>07.00 — 20.00 WIB</span>
                        <div className="w-1 h-1 rounded-full bg-ink-soft" />
                        <span>Terbuka untuk umum</span>
                    </div>
                    <button
                        onClick={() => goto("tentang")}
                        className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] group cursor-pointer"
                    >
                        <span>swipe</span>
                        <span className="block w-px h-10 bg-ink-soft group-hover:h-14 transition-all" />
                    </button>
                </div>
            </div>
        </section>
    );
}
