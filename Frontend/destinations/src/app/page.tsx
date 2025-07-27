'use client';

import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar buttonLabel="Agregar destino" buttonHref="/create" />
      {/* The rest of the landing layout will go below here (banner, cards, etc.) */}
    </main>
  );
}
