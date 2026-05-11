import { useState } from "react";
import { Copy, Check, Instagram, MessageCircle } from "lucide-react";

const WA_NUMBER = "+62 812-3456-7890";
const WA_LINK = "https://wa.me/6281234567890";
const IG_HANDLE = "@guamaria_dp";
const IG_LINK = "https://www.instagram.com/guamaria_dp/";

const REKENING = {
    bank: "Bank BCA",
    nomor: "1234 5678 9012",
    nama: "Panti Asuhan Desa Putera",
};

// Placeholder QRIS
const QR_IMG =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwa.me%2F6281234567890&bgcolor=f5f1ea&color=2d3a31&margin=2";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyRek = async () => {
        try {
            await navigator.clipboard.writeText(REKENING.nomor.replace(/\s/g, ""));
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (e) {
            /* noop */
        }
    };

    return (
        <section
            id="kontak"
            className="relative section-pad bg-bg"
        >
            <div className="container-narrow">
                <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end mb-16">
                    <div className="md:col-span-7">
                        <p className="eyebrow reveal">Kontak</p>
                        <h2
                            className="font-serif reveal text-4xl md:text-6xl leading-[1.05] mt-6 text-ink"
                            style={{ transitionDelay: "100ms" }}
                        >
                            Sapa, kunjungi,
                            <br />
                            <span className="italic text-sage-deep">
                                dan berbagi kasih.
                            </span>
                        </h2>
                    </div>
                    <div
                        className="md:col-span-5 reveal text-[15px] leading-[1.85] text-ink-soft"
                        style={{ transitionDelay: "160ms" }}
                    >
                        Untuk pertanyaan, kunjungan kelompok, atau intensi
                        doa, silakan hubungi kami. Setiap donasi dipakai
                        untuk perawatan goa dan kebutuhan anak panti asuhan desa putera.
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-6">
                    {/* Contact channels */}
                    <div className="md:col-span-7 grid sm:grid-cols-2 gap-6 reveal">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-line p-8 hover:bg-sage-deep hover:text-bg transition-colors duration-700"
                        >
                            <MessageCircle
                                size={22}
                                strokeWidth={1.3}
                                className="text-sage-deep group-hover:text-bg transition-colors duration-700"
                            />
                            <p className="eyebrow mt-8 group-hover:text-bg/70 transition-colors duration-700">
                                WhatsApp
                            </p>
                            <p className="font-serif text-2xl mt-3">
                                {WA_NUMBER}
                            </p>
                            <p className="text-sm mt-2 opacity-70">
                                Hubungi Kami
                            </p>
                        </a>

                        <a
                            href={IG_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-line p-8 hover:bg-sage-deep hover:text-bg transition-colors duration-700"
                        >
                            <Instagram
                                size={22}
                                strokeWidth={1.3}
                                className="text-sage-deep group-hover:text-bg transition-colors duration-700"
                            />
                            <p className="eyebrow mt-8 group-hover:text-bg/70 transition-colors duration-700">
                                Instagram
                            </p>
                            <p className="font-serif text-2xl mt-3">{IG_HANDLE}</p>
                            <p className="text-sm mt-2 opacity-70">
                                Cerita & jadwal kegiatan
                            </p>
                        </a>

                        {/* Bank account spanning full width */}
                        <div className="sm:col-span-2 border border-line p-8 bg-bg-soft">
                            <p className="eyebrow">Donasi · Transfer Bank</p>
                            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <p className="text-sm text-ink-soft">
                                        {REKENING.bank}
                                    </p>
                                    <p className="font-serif text-3xl md:text-4xl text-ink mt-1 tracking-wider">
                                        {REKENING.nomor}
                                    </p>
                                    <p className="text-sm text-ink-soft mt-2 italic">
                                        a/n {REKENING.nama}
                                    </p>
                                </div>
                                <button
                                    onClick={copyRek}
                                    className="btn-pill"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={14} strokeWidth={1.5} />
                                            Tersalin
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={14} strokeWidth={1.5} />
                                            Salin
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* QR code */}
                    <div
                        className="md:col-span-5 reveal border border-line p-8 flex flex-col items-center text-center"
                        style={{ transitionDelay: "120ms" }}
                    >
                        <p className="eyebrow self-start">Donasi · QRIS</p>
                        <div className="mt-6 w-full max-w-[260px] aspect-square bg-bg-soft border border-line p-4 flex items-center justify-center">
                            <img
                                src={QR_IMG}
                                alt="QR code donasi Goa Maria Desa Putera"
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <p className="font-serif text-xl mt-6 text-ink">
                            Pindai untuk berdonasi
                        </p>
                        <p className="text-sm text-ink-soft mt-2 max-w-[260px] leading-relaxed">
                            Mendukung perawatan goa, taman doa, dan berbagi 
                            untuk anak panti asuhan desa putera.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
