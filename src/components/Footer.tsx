import { Flower2 } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-line bg-bg">
            <div className="container-narrow py-14 grid md:grid-cols-3 gap-10 items-start">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img 
                            src="/logo.avif" 
                            alt="Logo Goa Maria" 
                            className="w-6 h-6 md:w-8 md:h-8 object-contain" 
                        />
                        <p className="font-serif text-2xl text-ink">
                            Goa Maria{" "}
                            <span className="text-muted italic">
                                Desa Putera
                            </span>
                        </p>
                    </div>
                    <p className="text-sm text-ink-soft mt-3 max-w-xs leading-relaxed">
                        Sebuah ruang sunyi bagi siapa saja yang ingin
                        berdoa dan beristirahat sejenak.
                    </p>
                </div>
                <div>
                    <p className="eyebrow">Jam Buka</p>
                    <p className="font-serif text-xl mt-3 text-ink">
                        07.00 — 20.00 WIB
                    </p>
                    <p className="text-sm text-ink-soft mt-1">
                        Setiap hari
                    </p>
                </div>
                <div>
                    <p className="eyebrow">Alamat</p>
                    <p className="text-sm mt-3 leading-[1.7] text-ink">
                        Jl. Desa Putera, Jagakarsa,
                        <br />
                        Jakarta Selatan 12440
                    </p>
                </div>
            </div>
            <div className="container-narrow border-t border-line py-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    © {year} Goa Maria Desa Putera
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    tota christi per mariam · Salam Damai
                </p>
            </div>
        </footer>
    );
}
