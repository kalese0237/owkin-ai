import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full p-4 pr-8 flex justify-end">
      <div className="w-30 h-10 relative">
        <Image
          src="/owkin-logo-black.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
};

export default Header;