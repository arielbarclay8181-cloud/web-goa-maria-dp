import React, { useState } from "react";
import { Church, Cross, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const KAPEL_IMAGES = [
    "/kapel1.jpeg",
    "/kapel2.jpeg",
    "/kapel3.jpeg",
    "/kapel4.jpeg",
];

const JALAN_SALIB_IMAGES = [
    "/jalansalib.png",
    "/jalansalib2.jpeg",
    "/jalansalib3.jpeg",
    "/jalansalib4.jpeg",
];

interface ImageSliderProps {
    images: string[];
    alt: string;
}

function ImageSlider({ images, alt }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    React.useEffect(() => {
        if (!isLightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % images.length);
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            if (e.key === "Escape") setIsLightboxOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isLightboxOpen, images.length]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`${alt} - ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-ink/10 transition-colors" />

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button 
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                        <Maximize2 size={14} />
                    </div>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-ink/20 backdrop-blur-sm border border-white/10 z-10">
                    {images.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-3' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 md:p-12 lg:p-16"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <motion.button 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[120]"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X size={36} strokeWidth={1.5} />
                        </motion.button>

                        <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    src={images[currentIndex]}
                                    alt={alt}
                                    className="max-w-full max-h-full object-contain shadow-2xl rounded-sm selection:bg-transparent"
                                />
                            </AnimatePresence>
                            
                            {/* Lightbox Nav */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-0 md:px-0 pointer-events-none">
                                <button 
                                    onClick={handlePrev}
                                    className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all pointer-events-auto -translate-x-4 md:-translate-x-10"
                                >
                                    <ChevronLeft size={48} strokeWidth={1} />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all pointer-events-auto translate-x-4 md:translate-x-10"
                                >
                                    <ChevronRight size={48} strokeWidth={1} />
                                </button>
                            </div>

                            {/* Lightbox Indicators */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 p-6">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentIndex(idx);
                                        }}
                                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/20 w-4'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function SacredBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] mix-blend-multiply">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Thin flowing lines */}
                {[...Array(12)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M -200 ${200 + i * 40} Q 250 ${100 + i * 20}, 500 ${400 + i * 10} T 1200 ${300 + i * 30}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-sage-deep"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                            pathLength: 1, 
                            opacity: 1,
                            d: [
                                `M -200 ${200 + i * 40} Q 250 ${100 + i * 20}, 500 ${400 + i * 10} T 1200 ${300 + i * 30}`,
                                `M -200 ${220 + i * 40} Q 300 ${150 + i * 20}, 500 ${380 + i * 10} T 1200 ${320 + i * 30}`,
                                `M -200 ${200 + i * 40} Q 250 ${100 + i * 20}, 500 ${400 + i * 10} T 1200 ${300 + i * 30}`
                            ]
                        }}
                        transition={{ 
                            pathLength: { duration: 3, delay: i * 0.1 },
                            opacity: { duration: 2, delay: i * 0.1 },
                            d: { duration: 15, repeat: Infinity, ease: "linear" }
                        }}
                    />
                ))}

                {/* Counter waves for more depth */}
                {[...Array(8)].map((_, i) => (
                    <motion.path
                        key={`c-${i}`}
                        d={`M 1200 ${600 + i * 30} Q 750 ${800 + i * 10}, 500 ${600 - i * 20} T -200 ${700 + i * 40}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-sage"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                            pathLength: 1, 
                            opacity: 1,
                            d: [
                                `M 1200 ${600 + i * 30} Q 750 ${800 + i * 10}, 500 ${600 - i * 20} T -200 ${700 + i * 40}`,
                                `M 1200 ${620 + i * 30} Q 700 ${750 + i * 10}, 500 ${620 - i * 20} T -200 ${680 + i * 40}`,
                                `M 1200 ${600 + i * 30} Q 750 ${800 + i * 10}, 500 ${600 - i * 20} T -200 ${700 + i * 40}`
                            ]
                        }}
                        transition={{ 
                            pathLength: { duration: 4, delay: i * 0.2 },
                            opacity: { duration: 2, delay: i * 0.2 },
                            d: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export default function SacredSpaces() {
    return (
        <section
            id="ruang-suci"
            className="relative section-pad bg-bg-soft/30 overflow-hidden"
        >
            <SacredBackground />
            <div className="container-narrow relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <p className="eyebrow reveal">Fasilitas</p>
                    <h2 className="font-serif reveal text-4xl md:text-6xl mt-6 text-ink">
                        Ruang untuk <span className="italic text-sage-deep">Keheningan</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    {/* Kapel Adorasi */}
                    <div className="reveal">
                        <ImageSlider 
                            images={KAPEL_IMAGES} 
                            alt="Kapel Adorasi Goa Maria Desa Putera" 
                        />
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
                        <ImageSlider 
                            images={JALAN_SALIB_IMAGES} 
                            alt="Taman Jalan Salib Goa Maria Desa Putera" 
                        />
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
