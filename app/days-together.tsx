'use client';

const DaysTogether = () => {
    function getDaysSince(meetingDate: Date | string): number {
        const meeting = typeof meetingDate === 'string' ? new Date(meetingDate) : meetingDate;
        const now = new Date();

        const meetingMidnight = new Date(meeting.getFullYear(), meeting.getMonth(), meeting.getDate());
        const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const diffMs = nowMidnight.getTime() - meetingMidnight.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    function getDaysWord(count: number): string {
        const absCount = Math.abs(count);
        const lastDigit = absCount % 10;
        const lastTwoDigits = absCount % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'днів';
        }

        if (lastDigit === 1) {
            return 'день';
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'дні';
        }

        return 'днів';
    }

    return <section className="relative text-white py-32 md:py-32 px-6 overflow-hidden mt-18">
        <div className="absolute inset-0 z-0">
            <img
                src="./assets/days.jpg"
                alt="Love Story Background"
                className="object-cover object-center brightness-75"
                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                sizes="(max-width: 460px) 100vw, 460px"
            />
            <div className="absolute inset-0 bg-black/20">
            </div>
        </div>
        <div className="relative z-10 flex flex-col items-center space-y-8 md:space-y-10 max-w-md mx-auto" style={{ opacity: 1 }}>
            <div className="text-center space-y-2" style={{ opacity: 1, transform: 'none' }}>
                <div className="text-5xl md:text-6xl font-light text-white tabular-nums" style={{ fontFamily: 'var(--font-laluxes)' }}>
                    {getDaysSince('2019-07-01')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-normal text-white/80">
                    {getDaysWord(getDaysSince('2019-07-01'))} разом
                </div>
            </div>
            <div className="text-center space-y-2" style={{ opacity: 1, transform: 'none' }}>
                <div className="text-5xl md:text-6xl font-light text-white tabular-nums" style={{ fontFamily: 'var(--font-laluxes)' }}>
                    ２
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-normal text-white/80">
                    серця
                </div>
            </div>
            <div className="text-center space-y-2" style={{ opacity: 1, transform: 'none' }}>
                <div className="text-5xl md:text-6xl font-light text-white tabular-nums" style={{ fontFamily: 'var(--font-laluxes)' }}>
                    ∞
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-normal text-white/80">
                    планів на майбутнє
                </div>
            </div>
        </div>
    </section>;
};

export default DaysTogether;