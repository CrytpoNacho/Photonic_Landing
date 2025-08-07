"use client";

import Image from "next/image";
import "/styles/astronaut.css"; // ← Asegúrate de importar tu CSS personalizado

export default function AstronautImage() {
  return (
    <div className="relative z-0 w-fit mx-auto astronaut-wrapper">
      {/* Glow pulsante detrás */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 blur-3xl scale-110 z-[2]" />

      {/* Imagen del astronauta */}
      <Image
        src="/images/astronaut.png"
        alt="Astronaut"
        width={400}
        height={600}
        className="relative z-0 max-w-full h-auto object-bottom"
        priority
      />
    </div>
  );
}
