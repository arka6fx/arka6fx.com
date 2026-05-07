"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isCat, setIsCat] = useState(false);

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
      className={`cursor-pointer bg-transparent p-0 border-0 ${className}`}
      aria-label="Click to toggle cat"
    >
      <Image
        src={currentSrc}
        alt={alt}
        width={120}
        height={120}
        className="w-[96px] h-[96px] lg:w-[120px] lg:h-[120px] rounded-xl object-cover border border-divider shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
        priority
      />
    </button>
  );
}