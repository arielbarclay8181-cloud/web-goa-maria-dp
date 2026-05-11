import { Church, Cross } from "lucide-react";

export default function SacredSpaces() {
    return (
        <section
            id="ruang-suci"
            className="relative section-pad bg-bg-soft/30"
        >
            <div className="container-narrow">
                <div className="text-center mb-16 md:mb-24">
                    <p className="eyebrow reveal">Fasilitas</p>
                    <h2 className="font-serif reveal text-4xl md:text-6xl mt-6 text-ink">
                        Ruang untuk <span className="italic text-sage-deep">Keheningan</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    {/* Kapel Adorasi */}
                    <div className="reveal">
                        <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft group">
                            <img
                                src="/kapel.png"
                                alt="Suasana Kapel Adorasi yang tenang"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-ink/5" />
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center gap-3 text-sage-deep mb-4">
                                <Church size={18} strokeWidth={1.5} />
                                <h3 className="font-serif text-2xl md:text-3xl text-ink">Kapel Adorasi</h3>
                            </div>
                            <p className="text-[15px] leading-[1.8] text-ink-soft">
                                Sebuah ruang khusus untuk meditasi dan adorasi Sakramen Mahakudus. 
                                Kapel ini dirancang dengan suasana yang sangat tenang dan intim, 
                                memungkinkan setiap peziarah untuk masuk dalam percakapan pribadi yang mendalam dengan Tuhan.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
                                <span>Buka 08.00 - 19.00 WIB</span>
                                <div className="w-1 h-1 rounded-full bg-muted" />
                                <span>Hening Total</span>
                            </div>
                        </div>
                    </div>

                    {/* Taman Jalan Salib */}
                    <div className="reveal" style={{ transitionDelay: "150ms" }}>
                        <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft group">
                            <img
                                src="/jalansalib.png"
                                alt="Jalan Salib di tengah taman rindang"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-ink/5" />
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center gap-3 text-sage-deep mb-4">
                                <Cross size={18} strokeWidth={1.5} />
                                <h3 className="font-serif text-2xl md:text-3xl text-ink">Taman Jalan Salib</h3>
                            </div>
                            <p className="text-[15px] leading-[1.8] text-ink-soft">
                                Susuri 14 stasi peristiwa sengsara Yesus Kristus di tengah taman hijau yang asri. 
                                Setiap perhentian mengundang kita untuk merenungkan kasih dan pengorbanan-Nya, 
                                ditemani semilir angin dan kicauan burung yang menambah kesyahduan doa Anda.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
                                <span>Area Terbuka</span>
                                <div className="w-1 h-1 rounded-full bg-muted" />
                                <span>Refleksi Iman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
