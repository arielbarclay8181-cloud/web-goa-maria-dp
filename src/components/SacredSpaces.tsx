import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Church, Cross, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const KAPEL_IMAGES = [
    "/kapel1.avif",
    "/kapel2.avif",
    "/kapel3.avif",
    "/kapel4.avif",
];

const JALAN_SALIB_IMAGES = [
    "/jalansalib.avif",
    "/jalansalib2.avif",
    "/jalansalib3.avif",
    "/jalansalib4.avif",
    "/jalansalib5.avif",
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

        // Prevent body scroll when lightbox is opened
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % images.length);
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            if (e.key === "Escape") setIsLightboxOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
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

            {/* Lightbox rendered via React Portal to prevent element stacking traps */}
            {typeof document !== "undefined" && createPortal(
                <AnimatePresence>
                    {isLightboxOpen && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[10000] flex flex-col justify-between bg-black/95 backdrop-blur-md select-none"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            {/* Top Bar */}
                            <div className="w-full flex items-center justify-between p-6 md:px-12 md:py-8 z-[10010]" onClick={(e) => e.stopPropagation()}>
                                {/* Top Left: Index info */}
                                <div className="text-white/70 font-mono text-sm tracking-widest">
                                    {currentIndex + 1} / {images.length}
                                </div>
                                
                                {/* Top Right: Actions */}
                                <div className="flex items-center gap-6 text-white/50">
                                    <button className="hover:text-white transition-colors" aria-label="Toggle Fullscreen">
                                        
                                    </button>
                                    <button 
                                        className="hover:text-white transition-colors" 
                                        onClick={() => setIsLightboxOpen(false)}
                                        aria-label="Close Lightbox"
                                    >
                                        <X size={24} strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>

                            {/* Mid Section: Image and viewport navigation */}
                            <div className="relative flex-grow w-full flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
                                <div className="relative w-full h-full max-h-[82vh] max-w-[95vw] md:max-h-[85vh] flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.img 
                                            key={currentIndex}
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.97 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            src={images[currentIndex]}
                                            alt={alt}
                                            className="max-h-[75vh] md:max-h-[82vh] max-w-full object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-sm border border-white/5"
                                        />
                                    </AnimatePresence>
                                </div>

                                {/* Fixed Navigation Arrows on global sides */}
                                <button 
                                    onClick={handlePrev}
                                    className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all z-[10020]"
                                    aria-label="Sebelumnya"
                                >
                                    <ChevronLeft size={44} strokeWidth={1} />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all z-[10020]"
                                    aria-label="Berikutnya"
                                >
                                    <ChevronRight size={44} strokeWidth={1} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
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
                                Susuri 14 perhentian peristiwa sengsara Yesus Kristus di tengah taman hijau yang asri. 
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
