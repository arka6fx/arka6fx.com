"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  const [currentSrc, setCurrentSrc] = useState("/meow.jpg");
  const [isCat, setIsCat] = useState(true);

  const handleToggle = () => {
    if (isCat) {
      setCurrentSrc(src);
      setIsCat(false);
    } else {
      setCurrentSrc("/meow.jpg");
      setIsCat(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`cursor-pointer border-0 bg-transparent p-0 ${className}`}
      aria-label="Click to toggle cat"
    >
      <Image
        src={currentSrc}
        alt={alt}
        width={120}
        height={120}
        className="border-divider h-[96px] w-[96px] rounded-none border object-cover shadow-[0_8px_20px_rgba(0,0,0,0.4)] lg:h-[120px] lg:w-[120px]"
        priority
      />
    </button>
  );
}
