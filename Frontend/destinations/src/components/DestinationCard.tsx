'use client';

import Image from 'next/image';
import { useState } from 'react';
import RedButton from './Button';

interface DestinationCardProps {
  name: string;
  description: string;
  address: string;
  imageUrl?: string;
  onView?: () => void;
  onDelete?: () => void;
}

export default function DestinationCard({
  name,
  description,
  address,
  imageUrl,
  onView,
  onDelete,
}: DestinationCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl || '/placeholder.jpg');

  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm min-h-[550px]">
      <div>
        <div className="w-full h-48 relative">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImgSrc('/placeholder.png')}
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold text-center leading-tight">{name}</h2>
          <p className="text-sm mt-2 text-gray-700">{description}</p>
          <p className="text-xs mt-4 text-gray-500">{address}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <button
          className="text-xs italic text-gray-600 hover:text-gray-800"
          onClick={onView}
        >
          Ver más
        </button>
        <RedButton label="Eliminar" onClick={onDelete} color="blue" />
      </div>
    </div>
  );
}
