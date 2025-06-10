import React from 'react';
import Image from 'next/image';

export default function WelcomeMolecule() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block bg-[var(--text-bg)] text-[var(--text-color2)]  text-sm px-2 py-1 rounded-md">
          BETA
        </div>
        <div className="flex justify-center mb-10">
          <Image 
            src="/K-Navigator-Animated-Stars.gif" 
            alt="Animated Logo" 
            width={260}  
            height={260}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-[var(--bold-text)] mb-4">
          Hello, Adrien
        </h1>
        <p className="text-md mb-4 text-[var(--text-color1)]">
          How can I help your research today?
        </p>
        <div className="inline-block bg-black text-gray-150 text-sm px-3 py-1.5 rounded-full">
          Discover K's full potential
        </div>
      </div>
    </div>
  );
}
