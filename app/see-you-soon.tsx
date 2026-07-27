'use client';

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
const SeeYouSoon = () => {
    const weddingDate = new Date('2026-09-06T11:30:00+03:00');
    function getTimeLeft(target: Date): TimeLeft {
        const diff = Math.max(target.getTime() - Date.now(), 0);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return { days, hours, minutes, seconds };
    }

    const target = new Date(weddingDate);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(target));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full overflow-hidden pb-16 pt-6 bg-minimal-paper">
            <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto py-6 px-6" style={{ opacity: 1 }}>
                <div className="flex items-center gap-3 my-4" style={{ opacity: 1, transform: 'none' }}>
                    <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--minimal-title), transparent)', opacity: 0.7 }}>
                    </div>
                </div>
                <div className="py-2 overflow-hidden" style={{ opacity: 1, clipPath: 'inset(0px 0% 0px 0px)' }}
                ><div className="relative z-10 leading-[1.3] py-4 md:py-4 whitespace-nowrap origin-center text-[3.5rem] text-[var(--minimal-title)] " style={{ fontFamily: 'var(--font-qwitcher)' }}>
                        See you soon
                    </div>
                </div>
                <div className="flex items-center justify-center gap-0 w-full pt-6" style={{ opacity: 1 }}>
                    <div className="flex items-center" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <div className="relative h-[48px] w-full flex items-center justify-center overflow-hidden">
                                <span className="absolute text-[2rem] font-extralight tabular-nums tracking-tight leading-none text-[var(--minimal-title)]" style={{ fontFamily: 'var(--font-laluxes)', opacity: 1 }}>
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </span>
                                <span className="invisible text-[2rem] font-extralight tabular-nums">
                                    88
                                </span>
                            </div>
                            <span className="text-[7px] uppercase tracking-[0.4em] font-medium mt-2 text-[var(--minimal-text-muted)]">
                                DAYS
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mx-2 -mt-4">
                            <div className="w-[2px] h-[2px] rounded-full bg-[var(--minimal-title)]/25">
                            </div>
                            <div className="w-[2px] h-[2px] rounded-full bg-[var(--minimal-title)]/25">
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <div className="relative h-[48px] w-full flex items-center justify-center overflow-hidden">
                                <AnimatePresence initial={false} mode="sync">
                                    <motion.span
                                        className="absolute text-[2rem] font-extralight tabular-nums tracking-tight leading-none text-[var(--minimal-title)]"
                                        style={{ fontFamily: 'var(--font-laluxes)', opacity: 1, transformPerspective: 500 }}>
                                        {timeLeft.hours.toString().padStart(2, '0')}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="invisible text-[2rem] font-extralight tabular-nums">
                                    88
                                </span>
                            </div>
                            <span className="text-[7px] uppercase tracking-[0.4em] font-medium mt-2 text-[var(--minimal-text-muted)]">
                                HOURS
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mx-2 -mt-4">
                            <div className="w-[2px] h-[2px] rounded-full bg-[var(--minimal-title)]/25">
                            </div>
                            <div className="w-[2px] h-[2px] rounded-full bg-[var(--minimal-title)]/25">
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <div className="relative h-[48px] w-full flex items-center justify-center overflow-hidden">
                                <AnimatePresence initial={false} mode="sync">
                                    <motion.span
                                        key={timeLeft.minutes}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute text-[2rem] font-extralight tabular-nums tracking-tight leading-none text-[var(--minimal-title)]"
                                        style={{ fontFamily: 'var(--font-laluxes)', opacity: 1, transformPerspective: 500 }}>
                                        {timeLeft.minutes.toString().padStart(2, '0')}
                                    </motion.span>
                                </AnimatePresence>

                                <span className="invisible text-[2rem] font-extralight tabular-nums">
                                    88
                                </span>
                            </div>
                            <span className="text-[7px] uppercase tracking-[0.4em] font-medium mt-2 text-[var(--minimal-text-muted)]">
                                MINUTES
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mx-2 -mt-4">
                            <div className="w-[2px] h-[2px] rounded-full bg-[var(--minimal-title)]/25">
                            </div>
                            <div className="w-[2px] h-[2px] rounded-full bg-[var(--minimal-title)]/25">
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <div className="relative h-[48px] w-full flex items-center justify-center overflow-hidden">
                                <AnimatePresence initial={false} mode="sync">
                                    <motion.span
                                        key={timeLeft.seconds}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute text-[2rem] font-extralight tabular-nums tracking-tight leading-none text-[var(--minimal-title)]"
                                        style={{ fontFamily: 'var(--font-laluxes)', opacity: 1, transformPerspective: 500 }}>
                                        {timeLeft.seconds.toString().padStart(2, '0')}
                                    </motion.span>
                                </AnimatePresence>

                                <span className="invisible text-[2rem] font-extralight tabular-nums">
                                    88
                                </span>
                            </div>
                            <span
                                className="text-[7px] uppercase tracking-[0.4em] font-medium mt-2 text-[var(--minimal-text-muted)]">
                                SECONDS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SeeYouSoon;