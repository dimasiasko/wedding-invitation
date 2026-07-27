'use client';
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollHint = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.scrollY === 0) {
                setVisible(true);
            }
        }, 3000);

        const onScroll = () => {
            setVisible(false);
        };

        window.addEventListener("scroll", onScroll, { once: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, 8, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.4 },
                        y: {
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <ChevronDown className="w-12 h-12 text-white/90" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ScrollHint;