import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "ruang-suci", label: "Ruang Suci" },
    { id: "fasilitas", label: "Fasilitas" },
    { id: "lokasi", label: "Lokasi" },
    { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("beranda");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);
            // active section detection
            const sections = links
                .map((l) => document.getElementById(l.id))
                .filter(Boolean) as HTMLElement[];
            const y = window.scrollY + window.innerHeight * 0.35;
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].offsetTop <= y) {
                    setActive(sections[i].id);
                    break;
                }
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goto = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                scrolled
                    ? "backdrop-blur-md bg-bg/70 border-b border-line"
                    : "bg-transparent"
            }`}
        >
            <div className="container-narrow flex items-center justify-between py-5">
                <button
                    onClick={() => goto("beranda")}
                    className="font-serif text-xl md:text-2xl tracking-tight text-ink cursor-pointer flex items-center gap-3"
                >
                    <img 
                        src="/logo.avif" 
                        alt="Logo Goa Maria Desa Putera" 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <span className="hidden sm:inline">
                        Goa Maria{" "}
                        <span className="text-muted italic">
                            Desa Putera
                        </span>
                    </span>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => goto(l.id)}
                            className="relative text-[11px] uppercase tracking-[0.28em] text-ink-soft hover:text-ink transition-colors cursor-pointer"
                        >
                            {l.label}
                            <span
                                className={`absolute -bottom-2 left-0 h-px bg-sage-deep transition-all duration-500 ${
                                    active === l.id ? "w-full" : "w-0"
                                }`}
                            />
                        </button>
                    ))}
                </nav>

                <button
                    onClick={() => goto("kontak")}
                    className="hidden md:inline-flex btn-pill btn-solid"
                >
                    Donasi
                </button>

                {/* Mobile burger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-ink"
                    aria-label="menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile panel */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 bg-bg/95 backdrop-blur-md ${
                    open ? "max-h-96 border-b border-line" : "max-h-0"
                }`}
            >
                <nav className="container-narrow flex flex-col py-6 gap-5">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => goto(l.id)}
                            className="text-left text-sm uppercase tracking-[0.28em] text-ink-soft"
                        >
                            {l.label}
                        </button>
                    ))}
                    <button
                        onClick={() => goto("kontak")}
                        className="btn-pill btn-solid self-start mt-2"
                    >
                        Donasi
                    </button>
                </nav>
            </div>
        </header>
    );
}