import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function Logo({ className = '', showText = true, size = 48 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Fidelity Minimalist Robot Head Vector SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-110 select-none"
      >
        {/* Antennas */}
        {/* Left Antenna */}
        <circle cx="32" cy="20" r="3.5" fill="#6fb44a" />
        <path d="M32 20V32" stroke="#6fb44a" strokeWidth="3" strokeLinecap="round" />
        
        {/* Right Antenna */}
        <circle cx="68" cy="20" r="3.5" fill="#69c0ec" />
        <path d="M68 20V32" stroke="#69c0ec" strokeWidth="3" strokeLinecap="round" />

        {/* Left Side Head Plate (Green Team) */}
        <path 
          d="M50 28H36C27.1634 28 20 35.1634 20 44V60C20 68.8366 27.1634 76 36 76H50V28Z" 
          fill="#f7fbf3" 
          stroke="#6fb44a" 
          strokeWidth="3.5" 
          strokeLinejoin="round"
        />

        {/* Right Side Head Plate (Blue Team) */}
        <path 
          d="M50 28H64C72.8366 28 80 35.1634 80 44V60C80 68.8366 72.8366 76 64 76H50V28Z" 
          fill="#f4faff" 
          stroke="#69c0ec" 
          strokeWidth="3.5" 
          strokeLinejoin="round"
        />

        {/* Ear caps */}
        <rect x="15" y="46" width="5" height="12" rx="2.5" fill="#6fb44a" />
        <rect x="80" y="46" width="5" height="12" rx="2.5" fill="#69c0ec" />

        {/* Minimalist Tech Visor (Sleek dark panel in the middle) */}
        <rect x="28" y="43" width="44" height="16" rx="8" fill="#1e293b" />

        {/* Minimalist Glowing Eyes inside Visor */}
        <circle cx="40" cy="51" r="3.5" fill="#86efac" />
        <circle cx="60" cy="51" r="3.5" fill="#7dd3fc" />

        {/* Minimalist Chin / Mouth Accent */}
        <path d="M44 76H56V80C56 81.1046 55.1046 82 54 82H46C44.8954 82 44 81.1046 44 80V76Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      </svg>

      {/* Styled matching horizontal wordmark from the official logo font pairing */}
      {showText && (
        <span 
          className="font-semibold text-2xl uppercase tracking-widest font-serif flex items-center select-none"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          <span className="text-[#69c0ec] hover:text-[#5ab0dc] transition-colors">ECO</span>
          <span className="text-[#6fb44a] hover:text-[#5ea339] transition-colors ml-1">TECH</span>
        </span>
      )}
    </div>
  );
}


