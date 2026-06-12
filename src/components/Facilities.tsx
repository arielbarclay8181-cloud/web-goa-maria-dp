import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
    ChevronLeft, 
    ChevronRight, 
    Home, 
    Droplets, 
    Users, 
    Sparkles, 
    Heart, 
    Trees, 
    Milestone, 
    Footprints, 
    Flame 
} from "lucide-react";

interface FacilityItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tag: string;
    image: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
}

const FACILITIES_DATA: FacilityItem[] = [
    {
        id: "pendopo",
        title: "Pendopo Pertemuan",
        subtitle: "Ruang Doa Bersama",
        description: "Bangunan pendopo semi-terbuka berstruktur kayu tradisional Javanese yang luas, dikhususkan untuk kelompok rombongan peziarah. Fasilitas ini sangat memadai untuk kumpul, doa rosario bersama, atau ibadat singkat.",
        tag: "Persaudaraan Kasih",
        image: "pendopo.avif",
        icon: Users
    },
    {
        id: "toilet",
        title: "Toilet",
        subtitle: "Fasilitas Bersih",
        description: "Ruang sanitasi yang bersih, harum, dan higienis dirancang selaras dengan keasrian lingkungan sekitar. Hadir untuk menjamin kenyamanan jasmani seluruh peziarah selama berziarah di sini.",
        tag: "Kenyamanan Peziarah",
        image: "/toilet.avif",
        icon: Droplets
    },
    {
        id: "gazebo",
        title: "Gazebo",
        subtitle: "Pondok Teduh",
        description: "Tempat istirahat yang tenang di kelilingi pepohonan rindang. Sangat ideal untuk merenung dan menikmati keasrian alam sekitar.",
        tag: "Keheningan Alam",
        image: "/gazebo.avif",
        icon: Home
    },
    {
        id: "mysteria-gaudiosa",
        title: "Mysteria Gaudiosa",
        subtitle: "Misteri Gembira",
        description: "Sudut ziarah yang indah untuk berkontemplasi mendalam pada peristiwa-peristiwa gembira Bunda Maria dan sejarah keselamatan Tuhan.",
        tag: "Refleksi Doa",
        image: "taman.avif",
        icon: Sparkles
    },
    {
        id: "bunda-maria-asmoro-adi",
        title: "Bunda Maria Asmoro Adi",
        subtitle: "Ibu Kasih yang Utama",
        description: "Patung inkulturasi Jawa yang menggambarkan Bunda Maria dengan busana adat keraton sedang memangku Gusti Yesus Cilik di dalam keteduhan goa. Menjadi simbol perlindungan ibu, ketenangan, serta pengingat bagi para peziarah akan kehangatan kasih yang utama.",
        tag: "Kasih Ibu & Kedamaian",
        image: "/arca.avif",
        icon: Heart
    },
    {
        id: "gua-pieta",
        title: "Gua Pieta",
        subtitle: "Penghiburan Bunda Suci",
        description: "Replika arca kedukaan Pieta nan anggun di dalam ceruk gua yang khidmat, mengajak peziarah merenungkan duka Bunda Maria saat memeluk jasad suci Puteranya. Ruang doa sunyi yang mendekatkan hati dalam kepasrahan.",
        tag: "Dekat Di Hati Ibu",
        image: "/maria.avif",
        icon: Flame
    },
    {
        id: "taman-gembala-baik",
        title: "Taman Gembala",
        subtitle: "Taman Gembala Yang Baik",
        description: "Zona taman asri nan rimbun yang menggambarkan Yesus Kristus sebagai Sang Gembala yang sejati dan penuh pelindung.",
        tag: "Bimbingan Semesta",
        image: "/gembala.avif",
        icon: Trees
    },
    {
        id: "dua-belas-rasul",
        title: "12 Para Rasul",
        subtitle: "Monumen Pilar Rasul",
        description: "Sederetan pilar suci pengingat keduabelas utusan setia Yesus Kristus. Memberikan pengajaran teologis dan inspirasi teladan bagi umat kiranya terus setia memelihara amanat agung perutusan injili di dunia.",
        tag: "Teladan Rasul",
        image: "/12.avif",
        icon: Milestone
    },
    {
        id: "teman-hewan-rias",
        title: "Teman Hewan Rias",
        subtitle: "Taman Santo Fransiskus",
        description: "Didedikasikan bagi keluhuran cinta lingkungan, kedamaian semesta makhluk hidup, dan harmoni segenap ciptaan Allah.",
        tag: "Puji Syukur Semesta",
        image: "/satwa.avif",
        icon: Footprints
    }
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.98
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: { type: "spring", stiffness: 220, damping: 26 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.98,
        transition: {
            x: { type: "spring", stiffness: 220, damping: 26 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
        }
    })
};

export default function Facilities() {
    const [[page, direction], setPage] = useState([0, 0]);
    const currentIndex = Math.abs(page % FACILITIES_DATA.length);

    const handleNext = () => {
        setPage([page + 1, 1]);
    };

    const handlePrev = () => {
        setPage([page - 1, -1]);
    };

    const handleDotClick = (index: number) => {
        const dir = index > currentIndex ? 1 : -1;
        setPage([index, dir]);
    };

    const currentItem = FACILITIES_DATA[currentIndex];
    const IconComponent = currentItem.icon;

    return (
        <section
            id="fasilitas"
            className="relative section-pad bg-bg overflow-hidden border-t border-line/50"
        >
            <div className="container-narrow relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="eyebrow reveal">Fasilitas Peziarahan</p>
                    <h2 className="font-serif reveal text-4xl md:text-6xl mt-6 text-ink">
                        Kenyamanan dalam <span className="italic text-sage-deep">Keasrian</span>
                    </h2>
                    <p className="text-[15px] text-ink-soft/80 mt-4 max-w-xl mx-auto leading-[1.7]">
                        Berbagai sarana prasarana yang kami sediakan untuk menyokong kegiatan devosi Anda kian lancar, asri, tenteram, dan mendalam.
                    </p>
                </div>

                {/* Slider Block */}
                <div className="relative w-full min-h-[580px] md:min-h-[640px] xl:min-h-[680px] bg-bg-soft/40 border border-line rounded-3xl overflow-hidden shadow-sm grid md:grid-cols-12 flex flex-col items-stretch">
                    
                    {/* Left Screen Part - Slide details & descriptive text */}
                    <div className="md:col-span-5 p-8 md:p-14 lg:p-16 flex flex-col justify-between relative bg-bg-soft/75 backdrop-blur-sm z-20">
                        {/* Interactive transition on descriptive text items */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                                className="flex-grow flex flex-col justify-center py-6"
                            >
                                <div className="flex items-center gap-2 text-sage-deep mb-5">
                                    <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                                        <IconComponent size={16} strokeWidth={2} />
                                    </div>
                                    <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                                        {currentItem.tag}
                                    </span>
                                </div>

                                <span className="text-muted text-xs tracking-[0.2em] uppercase block mb-1">
                                    {currentItem.subtitle}
                                </span>
                                
                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mt-1">
                                    {currentItem.title}
                                </h3>

                                <div className="h-px bg-line/60 w-16 my-6 md:my-8" />

                                <p className="text-[15px] md:text-base leading-[1.8] text-ink-soft">
                                    {currentItem.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination & Indicators */}
                        <div className="flex items-center justify-between pt-6 border-t border-line/40">
                            {/* Slide Counter Info */}
                            <span className="font-mono text-xs text-muted tracking-widest">
                                {(currentIndex + 1).toString().padStart(2, "0")} / {FACILITIES_DATA.length.toString().padStart(2, "0")}
                            </span>

                            {/* Chevron Next / Prev Controls */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handlePrev}
                                    className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink hover:bg-sage-deep hover:text-bg transition-all active:translate-y-px"
                                    aria-label="Fasilitas Sebelumnya"
                                >
                                    <ChevronLeft size={18} strokeWidth={1.5} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink hover:bg-sage-deep hover:text-bg transition-all active:translate-y-px"
                                    aria-label="Fasilitas Berikutnya"
                                >
                                    <ChevronRight size={18} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Screen Part - Immersive visual photo viewer with sliding transitions */}
                    <div className="md:col-span-7 relative overflow-hidden bg-bg-soft z-10 min-h-[300px] md:min-h-full">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 w-full h-full"
                            >
                                <img
                                    src={currentItem.image}
                                    alt={currentItem.title}
                                    className="w-full h-full object-cover transition-transform duration-1000"
                                />
                                {/* Bottom soft shadows on photo edge */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent hidden md:block" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Soft overlay on touch devices */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-soft to-transparent md:hidden pointer-events-none" />
                    </div>

                </div>

                {/* Dots Indicator beneath the slider block */}
                <div className="flex justify-center gap-2.5 mt-8 z-20">
                    {FACILITIES_DATA.map((item, idx) => (
                        <button
                            key={item.id}
                            onClick={() => handleDotClick(idx)}
                            className={`group relative h-2.5 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                ? "bg-sage-deep w-10" 
                                : "bg-muted/30 hover:bg-muted/60 w-2.5"
                            }`}
                            aria-label={`Go to facility ${item.title}`}
                        >
                            {/* Hover tooltip with facility title */}
                            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-ink/90 text-bg text-[10px] tracking-widest uppercase font-mono px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-[100]">
                                {item.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
