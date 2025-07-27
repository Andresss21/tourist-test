'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import DestinationCard from '@/components/DestinationCard';
import Image from 'next/image';

interface Destination {
  id: string;
  name: string;
  description: string;
  address: string;
  imageUrl?: string;
}

export default function HomePage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch('/api/destination?records=6');
        const data = await res.json();
        setDestinations(data.destinations || []);
      } catch (err) {
        console.error('Error fetching destinations', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar buttonLabel="Agregar destino" buttonHref="/create" />

      {/* Banner */}
      <div className="relative w-full h-[calc(100vh-64px)]">
        <Image
          src="/banner.jpg"
          alt="El Salvador Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Divider */}
      <div className="w-full">
        <Image
          src="/divider.png"
          alt="Cinta de colores"
          layout="responsive"
          width={1600}
          height={100}
        />
      </div>

      {/* Destination Cards */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {loading ? (
          <p className="text-center text-gray-500">Cargando destinos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
