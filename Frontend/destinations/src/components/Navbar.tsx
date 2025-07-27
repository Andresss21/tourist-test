'use client';

import RedButton from './Button';
import Image from 'next/image';

interface NavbarProps {
  buttonLabel?: string;
  buttonHref?: string;
}

export default function Navbar({ buttonLabel, buttonHref }: NavbarProps) {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 px-8">
      <div className="flex items-left mt-4">
        <Image
          src="/el-salvador-logo.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-60 md:w-80 lg:w-[500px] h-auto"
        />
        </div>
        <div className="flex items-right mt-4">
            {buttonLabel && buttonHref && (
                <RedButton label={buttonLabel} href={buttonHref} />
            )}
        </div>
    </nav>
  );
}
