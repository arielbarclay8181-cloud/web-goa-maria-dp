export default function About() {
    return (
        <section
            id="tentang"
            className="relative section-pad bg-bg"
        >
            <div className="container-narrow grid md:grid-cols-12 gap-12 md:gap-20 items-start">
                {/* Left text column */}
                <div className="md:col-span-6">
                    <p className="eyebrow reveal">
                        Tentang Goa Maria Desa Putera
                    </p>
                    <h2
                        className="font-serif reveal text-4xl md:text-6xl leading-[1.05] mt-6 text-ink"
                        style={{ transitionDelay: "100ms" }}
                    >
                        Ruang sunyi di
                        <br />
                        tengah keramaian
                        <span className="italic text-sage-deep">
                            .
                        </span>
                    </h2>

                    <div
                        className="reveal mt-10 space-y-6 text-[15px] md:text-base leading-[1.85] text-ink-soft max-w-xl"
                        style={{ transitionDelay: "180ms" }}
                    >
                        <p>
                            Goa Maria Desa Putera berdiri di kompleks  
                            Panti Asuhan Desa Putera, Jagakarsa — 
                            diberkati pada tanggal 5 Mei 2019 oleh Bapa Uskup Agung Jakarta, Mgr Ignatius Suharyo.
                            sebuah tempat bagi siapa saja yang ingin singgah,
                            berdoa, atau hanya mencari sejenak ketenangan.
                            Patung Bunda Maria berdiri damai di antara
                            pepohonan tua, dilengkapi taman jalan salib dan
                            Kapel Adorasi.
                        </p>
                        <p>
                            Setiap sudutnya dipelihara oleh keluaraga besar panti.
                            Tempat yang asri dan sunyi untuk berdoa dan berziarah
                            dengan kesederhanaan bangunan dan tata letak adalah wujud
                            bahwa doa yang sungguh-sungguh tidak butuh
                            megah — ia butuh ruang yang mengundang hati
                            untuk diam.
                        </p>
                    </div>

                    <div
                        className="reveal mt-12 grid grid-cols-2 gap-8 max-w-md"
                        style={{ transitionDelay: "260ms" }}
                    >
                        <div>
                            <p className="font-serif text-4xl md:text-5xl text-sage-deep">
                                14
                            </p>
                            <p className="eyebrow mt-2">perhentian jalan salib</p>
                        </div>
                        <div>
                            <p className="font-serif text-4xl md:text-5xl text-sage-deep">
                                7
                            </p>
                            <p className="eyebrow mt-2">Hari terbuka </p>
                        </div>
                    </div>
                </div>

                {/* Right image column */}
                <div className="md:col-span-6 reveal" style={{ transitionDelay: "200ms" }}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-bg-soft">
                        <img
                            src="about.jpeg"
                            alt="Cahaya pagi menembus dedaunan di taman doa"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="mt-6 flex items-start gap-4">
                        <div className="w-12 h-px bg-ink-soft mt-3" />
                        <p className="text-sm text-ink-soft leading-relaxed max-w-xs italic font-serif">
                            “Datanglah kepada-Ku, semua yang letih lesu dan
                            berbeban berat, Aku akan memberi kelegaan
                            kepadamu.” — Mat. 11:28
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
