'use client';
import { useState } from 'react';

type Answer = 'yes' | 'no' | null;

export default function RsvpBlock() {
    const [answer, setAnswer] = useState<Answer>(null);
    
    const saveRsvp = async (value: string) => {
        setAnswer(value === 'Так' ? 'yes' : 'no');
        try {
            const params = new URLSearchParams(window.location.search);

            await fetch('https://script.google.com/macros/s/AKfycbwrUNDhIKn9Rebvt4YKWJ_ElFc0f7aMkvcy8qIlq8C60b6toSBqQCIZ8FLgs6jbpuUPDQ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ name: params.get('name') || 'Невідомо', answer: value }),
            });
        } catch (err) {
            console.error('Failed to save RSVP', err);
        }
    };
    const baseBtn =
        "relative px-8 py-3 text-[0.85rem] min-w-[120px] tracking-[0.1em] font-normal uppercase border transition-all duration-300 ease-in-out cursor-pointer";

    const unselected =
        "bg-transparent border-[var(--minimal-title)] border-opacity-20 text-[var(--minimal-title)] text-opacity-80 hover:bg-[var(--minimal-title)] hover:text-white hover:border-opacity-60 active:bg-[var(--minimal-title)] active:text-white active:border-opacity-60";

    const selected =
        "bg-[var(--minimal-title)] border-[var(--minimal-title)] text-white";

    return (
        <div className="relative flex flex-col font-arimo mx-12">
            <label className="block text-[1rem] sm:text-[1.1rem] font-normal opacity-90 text-[var(--minimal-title)] mb-6 text-center leading-snug">
                Чи зможете ви розділити з нами цей важливий день?
                <span className="opacity-50 text-xs ml-1">*</span>
            </label>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <button
                    type="button"
                    onClick={() => saveRsvp('Так')}
                    className={`${baseBtn} ${answer === 'yes' ? selected : unselected}`}
                >
                    <span className="relative z-10">Так</span>
                </button>

                <button
                    type="button"
                    onClick={() => saveRsvp('Ні')}
                    className={`${baseBtn} ${answer === 'no' ? selected : unselected}`}
                >
                    <span className="relative z-10">Ні</span>
                </button>
            </div>
            
            {answer && (
                <div className="mt-6 text-center animate-fade-in">
                    {answer === 'yes' ? (
                        <div className="flex flex-row items-center justify-center text-[var(--minimal-title)] text-[0.95rem] leading-relaxed">
                            <span className="text-2xl block mb-2">😊</span>
                            Очікуємо із нетерпінням
                        </div>
                    ) : (
                        <div className="flex flex-row items-center justify-center text-[var(--minimal-title)] text-[0.95rem] leading-relaxed opacity-80">
                            <span className="text-2xl block mb-2">😔</span>
                            Нам шкода, що ви не зможете розділити з нами цей день, але ми будемо раді вашому візиту в будь-який зручний вам момент
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}