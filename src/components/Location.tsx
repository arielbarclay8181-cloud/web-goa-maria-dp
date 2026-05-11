import { Clock, MapPin, Navigation2 } from "lucide-react";

export default function Location() {
    const mapsEmbed =
        "https://www.google.com/maps?q=Goa+Maria+Desa+Putera+Lebak+Bulus+Jakarta&output=embed";
    const mapsDirection =
        "https://www.google.com/maps/dir/?api=1&destination=Goa+Maria+Desa+Putera+Lebak+Bulus+Jakarta";

    return (
        <section
            id="lokasi"
            className="relative section-pad bg-bg-soft"
        >
            <div className="container-narrow">
                <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-14 md:mb-20 items-end">
                    <div className="md:col-span-7">
                        <p className="eyebrow reveal">Lokasi</p>
                        <h2
                            className="font-serif reveal text-4xl md:text-6xl leading-[1.05] mt-6 text-ink"
                            style={{ transitionDelay: "100ms" }}
                        >
                            Jl. Desa Putera,
                            <br />
                            <span className="italic text-sage-deep">
                                Jagakarsa, Jakarta Selatan.
                            </span>
                        </h2>
                    </div>
                    <div className="md:col-span-5 reveal" style={{ transitionDelay: "180ms" }}>
                        <p className="text-[15px] leading-[1.85] text-ink-soft">
                            Berada di kawasan tenang Jakarta Selatan.
                            Mudah dicapai dengan kendaraan pribadi atau
                            transportasi umum. Tersedia area parkir di
                            dalam kompleks.
                        </p>
                    </div>
                </div>

                {/* Map + info grid */}
                <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                    {/* Map */}
                    <div className="md:col-span-8 reveal">
                        <div className="relative w-full aspect-[16/11] md:aspect-[16/10] overflow-hidden border border-line bg-bg">
                            <iframe
                                title="Google Maps Goa Maria Desa Putera"
                                src={mapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <a
                            href={mapsDirection}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-pill mt-6"
                        >
                            <Navigation2 size={14} strokeWidth={1.5} />
                            Buka Petunjuk Arah
                        </a>
                    </div>

                    {/* Side info */}
                    <aside
                        className="md:col-span-4 reveal flex flex-col gap-6"
                        style={{ transitionDelay: "120ms" }}
                    >
                        <div className="border border-line bg-bg p-7">
                            <div className="flex items-center gap-3 text-sage-deep">
                                <Clock size={18} strokeWidth={1.4} />
                                <p className="eyebrow text-sage-deep">
                                    Jam Buka
                                </p>
                            </div>
                            <p className="font-serif text-3xl md:text-4xl mt-5 text-ink">
                                07.00 — 20.00
                            </p>
                            <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                                Setiap hari, sepanjang tahun.
                            </p>
                        </div>

                        <div className="border border-line bg-bg p-7">
                            <div className="flex items-center gap-3 text-sage-deep">
                                <MapPin size={18} strokeWidth={1.4} />
                                <p className="eyebrow text-sage-deep">
                                    Alamat
                                </p>
                            </div>
                            <p className="text-[15px] leading-[1.7] mt-5 text-ink">
                                Panti Asuhan Desa Putera,
                                <br />
                                Jl. Desa Putera, Jagakarsa,
                                <br />
                                Jakarta Selatan 12440
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
