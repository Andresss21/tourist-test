'use client';

import Link from 'next/link';

interface RedButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  color?: 'blue' | 'primary';
}

export default function RedButton({ label, href, onClick, color = 'primary' }: RedButtonProps) {
  const colorClassMap: Record<string, string> = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    primary: 'bg-primaryRed hover:bg-primaryRedHover',
  };

  const colorClass = colorClassMap[color] || colorClassMap.primary;

  const baseStyle = `px-12 py-2 md:px-16 ${colorClass} text-white text-sm md:text-base italic rounded-md shadow-md text-center flex items-center justify-center transition duration-200`;

  if (href) {
    return (
      <Link href={href}>
        <span className={baseStyle}>{label}</span>
      </Link>
    );
  }

  return (
    <button className={baseStyle} onClick={onClick}>
      {label}
    </button>
  );
}
