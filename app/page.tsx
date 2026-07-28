"use client";

import { useEffect, useRef, useState } from "react";
import RsvpBlock from "./rsvp";
import DaysTogether from "./days-together";
import SeeYouSoon from "./see-you-soon";
import SaveInvitation from "./save-invitation";
import { motion } from "motion/react";
import ScrollHint from "./scroll-hint";
import Image from "next/image";
import heroImg from './assets/1.jpg';
import c1 from './assets/c-1.jpg';
import c2 from './assets/c-2.jpg';
import c3 from './assets/c-3.jpg';
import c4 from './assets/c-4.jpg';
import c5 from './assets/c-5.jpg';

const carouselPhotos = [
  {
    src: c1,
    alt: "",
  },
  {
    src: c2,
    alt: "",
  },
  {
    src: c3,
    alt: "",
  },
  {
    src: c4,
    alt: "",
  },
  {
    src: c5,
    alt: "",
  },
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = 0.45;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error("Error playing audio:", e);
          setIsPlaying(false);
        });
    }
  }, []);

  const handleToggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };
  const basePath = process.env.NODE_ENV === "production" ? "/wedding-invitation" : "";

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-rose-50 via-white to-amber-50 text-slate-950">
      <ScrollHint />

      <audio
        ref={audioRef}
        src={`${basePath}/music/idea.mp3`}
        autoPlay
        loop
      />

      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between bg-transparent px-6 py-4 sm:px-10">
        <div className="ml-0.5 h-5 w-11 "></div>
        <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
          06.09.26
        </div>
        <button
          type="button"
          onClick={handleToggleMusic}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
        >
          {isPlaying ? (
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
            </svg>
          ) : (
            <svg className="ml-0.5 h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      <main className="w-full pb-5">
        <section
          ref={heroRef}
          className="relative left-1/2 flex min-h-[100svh] w-screen -translate-x-1/2 flex-col justify-between overflow-hidden text-white lg:max-w-[1155px]"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              alt="Wedding Hero Background"
              className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
              sizes="100vw"
              fill
              src={heroImg}
              priority
              quality={85}
            />
          </div>
          <div className="absolute inset-0 z-10 bg-black/25" />
          <div className="relative z-20 flex flex-1 flex-col justify-between w-full p-6">
            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
              <div className="text-xs font-normal tracking-[0.4em] uppercase mb-12 text-white/90 text-center absolute top-[15%] left-0 right-0 flex flex-col items-center gap-1.5">
                <div className="flex justify-center undefined" style={{ opacity: 1, transform: "none" }}>
                  THE WEDDING DAY
                </div>
                <div className="flex justify-center undefined" style={{ opacity: 1, transform: "none" }}>
                  OF
                </div>
              </div>
              <div className="relative flex flex-col items-start justify-center mt-40 transform -rotate-[15deg] scale-100 origin-center">
                <div className="relative z-10 text-[3.6rem] leading-tight text-white whitespace-nowrap py-4" style={{ fontFamily: "var(--font-slight)", opacity: 1, transform: "none" }}>
                  Dmytro
                </div>
                <div className="relative z-10 text-[2.5rem] leading-tight text-white whitespace-nowrap " style={{ fontFamily: "var(--font-slight)", opacity: 1, transform: "none" }}>
                  and
                </div>
                <div className="relative z-10 text-[3.6rem] leading-tight text-white whitespace-nowrap ml-24 -mt-16 py-2" style={{ fontFamily: "var(--font-slight)", opacity: 1, transform: "none" }}>
                  Iryna
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-md tracking-widest uppercase z-30" style={{ opacity: 1, transform: "none" }}>
              VARASH
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] bg-white/65 p-8 shadow-xl shadow-slate-200/60 sm:p-14"
          >
            <div className="relative z-10 flex flex-col items-center pb-16 text-center">
              <div className="mx-auto flex max-w-md flex-col items-center space-y-4" style={{ opacity: 1 }}>
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="relative z-10 whitespace-nowrap py-4 text-center text-[6rem] leading-[1.3] text-[var(--minimal-title)] md:text-[5rem]"
                    style={{ fontFamily: "var(--font-qwitcher)" }}>
                    Our big day
                  </div>
                </div>
                <div className="space-y-2" style={{ opacity: 1, transform: "none" }}>
                  <h3 className="text-lg font-semibold uppercase tracking-widest text-[var(--minimal-title)]">
                    Дорогі рідні та друзі!
                  </h3>
                  <p className="mx-auto max-w-[320px] text-sm font-normal text-[var(--minimal-text-secondary)] md:text-base">
                    Запрошуємо вас розділити з нами наш особливий день - день нашого весілля.
                    Для нас дуже важливо, щоб поруч були люди, які займають особливе місце в нашому серці.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-16 rounded-[2rem] bg-white/95 p-6 shadow-xl shadow-slate-200/60 sm:p-10"
          >
            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-2 pb-6 sm:scroll-px-4 sm:pb-8"
            >
              {carouselPhotos.map((photo) => (
                <div
                  key={photo.src.src}
                  className="min-w-[86%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-inner shadow-slate-200/40 sm:min-w-[72%] lg:min-w-[56%]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    className="h-[420px] w-full object-cover"
                    width={1538}
                    height={2048}
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 72vw, 56vw"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          <div className="relative w-full overflow-hidden pt-15 pb-8">
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-flower-scroll gap-6 w-max">
                {Array.from({ length: 10 }).map((_, dup) => (
                  <span key={dup} className='text-3xl text-[var(--minimal-title)] opacity-20 pr-10' style={{ fontFamily: "var(--font-slight)" }}>
                    love you
                  </span>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--minimal-bg,transparent)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--minimal-bg,transparent)] to-transparent" />
          </div>
          <section className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-10 px-6 flex flex-col items-center text-center space-y-6 pt-6">
              <div className="flex items-center gap-3 w-full max-w-[160px] my-4">
                <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
                </div>
                <div className="w-1 h-1 rotate-45 bg-[var(--minimal-title)] opacity-25 flex-shrink-0">
                </div>
                <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
                </div>
              </div>
              <div className="flex flex-col items-center space-y-6 pb-6" style={{ opacity: 1 }}>
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="relative z-10 leading-[1.3] py-4 md:py-4 whitespace-nowrap origin-center text-[4rem] md:text-[5rem] text-[var(--minimal-title)] "
                    style={{ fontFamily: "var(--font-qwitcher)" }}>
                    Details
                  </div>
                </div>
                <div className="space-y-2" style={{ opacity: 1, transform: "none" }}>
                  <h3 className="text-lg uppercase tracking-widest font-semibold text-[var(--minimal-title)]">
                    Таїнство Вінчання
                  </h3>
                  <p className="text-lg underline font-normal underline-offset-4 text-[var(--minimal-title)] decoration-gray-400 pt-4">
                    06 вересня, 11:30
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1" style={{ opacity: 1, transform: "none" }}>
                  <p className="text-sm font-semibold tracking-[0.06em] text-[var(--minimal-title)] max-w-[280px] leading-[1.5]">
                    Свято-Софіївська парафія ПЦУ
                  </p>
                  <p className="text-[11px] font-normal tracking-[0.08em] max-w-[260px] leading-[1.6] mt-2">
                    м. Вараш, вул. Перемоги, 51
                  </p>
                </div>
                <div className="w-full mt-6 mb-6" style={{ opacity: 1, transform: "none" }}>
                  <a target="_blank"
                    className="group relative block max-w-[300px] mx-auto overflow-hidden border border-[var(--minimal-title)]/40 hover:border-[var(--minimal-title)] transition-colors duration-500" href="https://maps.app.goo.gl/PJmaKpT7rkgSHmbY9">
                    <span className="relative z-10 font-bold block max-w-[300px] mx-auto text-[var(--minimal-title)] px-10 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-white text-center">
                      ПРОКЛАСТИ МАРШРУТ
                    </span>
                    <span className="absolute inset-0 bg-[var(--minimal-title)] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0">
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative left-1/2 flex min-h-[40svh] w-screen -translate-x-1/2 flex-col justify-between overflow-hidden text-white">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  alt="Wedding Background"
                  className="absolute inset-0 h-full w-full object-cover object-center brightness-60"
                  sizes="30vw"
                  src="./assets/restaurant.jpg"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-black/25" />
              <div className="relative z-20 flex flex-1 flex-col justify-between w-full p-6">
                <div className="flex items-center gap-3 w-full max-w-[160px] my-4">
                  <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
                  </div>
                  <div className="w-1 h-1 rotate-45 bg-[var(--minimal-title)] opacity-25 flex-shrink-0">
                  </div>
                  <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-6 pb-15" style={{ opacity: 1 }}>
                  <div className="space-y-2" style={{ opacity: 1, transform: "none" }}>
                    <h3 className="text-lg uppercase tracking-widest font-semibold text-white">
                      Святкування
                    </h3>
                    <p className="text-lg underline font-normal underline-offset-4 text-white decoration-white/40 pt-4">
                      06 вересня, 14:00
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1" style={{ opacity: 1, transform: "none" }}>
                    <p className="text-sm font-semibold tracking-[0.06em] text-white text-[var(--minimal-title)] max-w-[280px] leading-[1.5]">
                      Ресторан "Корчма"
                    </p>
                    <p className="text-[11px] font-normal tracking-[0.08em] text-white max-w-[260px] leading-[1.6] mt-2">
                      м. Вараш
                    </p>
                  </div>
                  <div className="w-full mt-6 mb-6" style={{ opacity: 1, transform: "none" }}>
                    <a target="_blank"
                      className="group relative block max-w-[300px] mx-auto overflow-hidden border border-white/50 hover:border-white transition-colors duration-500" href="https://maps.app.goo.gl/eACGvAP4JrBcassD7">
                      <span className="relative z-10 font-bold block max-w-[300px] text-white mx-auto text-white px-10 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-white text-center">
                        ПРОКЛАСТИ МАРШРУТ
                      </span>
                      <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0  text-white">
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          </section>
          <div className="relative w-full overflow-hidden pt-10">
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-flower-scroll gap-8 w-max">
                {[...Array(8)].map((_, dup) => (
                  <div key={dup} className="flex items-center gap-8 flex-shrink-0">
                    {[
                      `${basePath}/assets/flowers-1.webp`,
                      `${basePath}/assets/flowers-2.png`,
                      `${basePath}/assets/flowers-3.png`,
                      `${basePath}/assets/flowers-4.webp`,
                    ].map((src, i) => (
                      <img
                        key={`${dup}-${i}`}
                        src={src}
                        alt=""
                        className="w-10 h-10 object-contain opacity-60 flex-shrink-0"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--minimal-bg,transparent)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--minimal-bg,transparent)] to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 px-6 flex flex-col items-center text-center space-y-6 pt-6">
            <div className="flex flex-col items-center space-y-6 pb-6" style={{ opacity: 1 }}>
              <div className="space-y-2" style={{ opacity: 1, transform: "none" }}>
                <h3 className="text-md tracking-widest text-[var(--minimal-title)]">
                  Краса квітів швидкоплинна і ми не встигнемо ними насолодитися, тому замість них - задонатьте на ЗСУ
                </h3>
              </div>
            </div>
          </motion.div>
          <div className="relative z-10 px-6 flex flex-col items-center text-center space-y-6 pt-6">
            <div className="flex items-center gap-3 w-full max-w-[160px] my-4">
              <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
              </div>
              <div className="w-1 h-1 rotate-45 bg-[var(--minimal-title)] opacity-25 flex-shrink-0">
              </div>
              <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl mx-auto" style={{ opacity: 1 }}>
            <div className="text-center" style={{ opacity: 1, transform: "none" }}>
              <div className="relative z-10 leading-[1.3] py-4 md:py-4 whitespace-nowrap origin-center text-[4rem] md:text-[5rem] text-[var(--minimal-title)] " style={{ fontFamily: "var(--font-qwitcher)" }}>
                Timeline
              </div>
            </div>
            <div className="w-full relative mt-8">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2 origin-top" style={{ willChange: "transform", transform: "none" }} />
              <div className="space-y-6" style={{ opacity: 1 }}>
                <div className="relative flex items-center" style={{ opacity: 1, transform: "none" }}>
                  <div className="flex-1 text-right pr-10">
                    <div className="text-lg md:text-xl font-semibold text-[var(--minimal-title)] tracking-wide">
                      11:00
                    </div>
                    <div className="text-md md:text-base font-medium text-[var(--minimal-text-secondary)] mt-1">
                      Збір гостей
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-[6.5px] h-[6.5px] bg-[var(--minimal-title)] opacity-70" style={{ opacity: 1, transform: "none" }}>
                  </div>
                  <div className="flex-1">
                  </div>
                </div>
                <div className="relative flex items-center" style={{ opacity: 1, transform: "none" }}>
                  <div className="flex-1" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-[6.5px] h-[6.5px] bg-[var(--minimal-title)] opacity-70" style={{ opacity: 1, transform: "none" }} />
                  <div className="flex-1 text-left pl-10">
                    <div className="text-lg md:text-xl font-semibold text-[var(--minimal-title)] tracking-wide">
                      11:30
                    </div>
                    <div className="text-md md:text-base font-medium text-[var(--minimal-text-secondary)] mt-1">
                      Вінчання
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center" style={{ opacity: 1, transform: "none" }}>
                  <div className="flex-1 text-right pr-10">
                    <div className="text-lg md:text-xl font-semibold text-[var(--minimal-title)] tracking-wide">
                      14:00
                    </div>
                    <div className="text-md md:text-base font-medium text-[var(--minimal-text-secondary)] mt-1">
                      Початок бенкету
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-[6.5px] h-[6.5px] bg-[var(--minimal-title)] opacity-70" style={{ opacity: 1, transform: "none" }} />
                  <div className="flex-1" />
                </div>
                <div className="relative flex items-center" style={{ opacity: 1, transform: "none" }}>
                  <div className="flex-1" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-[6.5px] h-[6.5px] bg-[var(--minimal-title)] opacity-70" style={{ opacity: 1, transform: "none" }} />
                  <div className="flex-1 text-left pl-10">
                    <div className="text-lg md:text-xl font-semibold text-[var(--minimal-title)] tracking-wide">
                      22:00
                    </div>
                    <div className="text-md md:text-base font-medium text-[var(--minimal-text-secondary)] mt-1">
                      Завершення свята
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative flex flex-col items-center space-y-6 pb-5 pt-16" style={{ opacity: 1 }}>
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="relative z-10 leading-[1.3] py-4 md:py-4 whitespace-nowrap origin-center text-[4rem] md:text-[5rem] text-[var(--minimal-title)] "
                style={{ fontFamily: "var(--font-qwitcher)" }}>
                Attendance
              </div>
            </div>
            <div className="text-sm font-arimo font-normal leading-relaxed max-w-[280px] text-center text-[var(--minimal-text-secondary)]">
              Будь ласка, дайте нам знати про вашу присутність
            </div>
          </div>
          <div className="relative z-10 px-6 flex flex-col items-center text-center space-y-6 pt-6">
            <div className="flex items-center gap-3 w-full max-w-[160px] my-4">
              <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
              </div>
              <div className="w-1 h-1 rotate-45 bg-[var(--minimal-title)] opacity-25 flex-shrink-0">
              </div>
              <div className="flex-1 h-[0.5px] bg-[var(--minimal-title)] opacity-20">
              </div>
            </div>
          </div>
          <RsvpBlock />
          <DaysTogether />
          <SeeYouSoon />
          <SaveInvitation />
        </div>
      </main >
      <footer className="text-center text-sm text-gray-500 mt-10 bg-[var(--minimal-title)] py-4 text-white/80">
        Developed by husband and wife. &copy; 2026
      </footer>
    </div >
  );
}
