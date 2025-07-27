'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
 

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar buttonLabel="Agregar destino" buttonHref="/create" />

      {/* Banner Wrapper: Fill remaining height */}
      <div className="relative w-full h-[calc(100vh-64px)]"> {/* Adjust 64px to match Navbar height */}
        <Image
          src="/banner.jpg"
          alt="El Salvador Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Divider Image */}
      <div className="w-full">
        <Image
          src="/divider.png"
          alt="Cinta de colores"
          layout="responsive"
          width={1600}
          height={100}
        />
      </div>
    </main>

  );
}
