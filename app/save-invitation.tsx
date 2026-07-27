'use client';

const SaveInvitation = () => {
    return (
        <a target="_blank"
            download="invitation.png"
            href="/assets/invitation.png"
            className="group relative block max-w-[300px] mx-auto overflow-hidden border border-[var(--minimal-title)]/40 hover:border-[var(--minimal-title)] transition-colors duration-500">
            <span className="relative z-10 font-bold block max-w-[300px] mx-auto text-[var(--minimal-title)] px-10 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-white text-center">
                Збережіть запрошення
            </span>
            <span className="absolute inset-0 bg-[var(--minimal-title)] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0">
            </span>
        </a>
    );
}

export default SaveInvitation;