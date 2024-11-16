// components/ImageButton.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  name: string;
  src?: string; // Image source is optional
  alt?: string;
  onClick?: () => void;
  link?: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  name,
  src,
  alt = 'button image',
  onClick,
  link,
  width,
  height,
  quality,
  className = ''
}) => {
  const buttonContent = (
    <div className={`flex w-full justify-center items-center space-x-2 ${className}`}>
      <p className='flex items-center place-self-center mt-[1px]'>{name}</p>
      {src && <Image src={src} alt={alt} width={width} height={height} quality={quality} className='flex items-center' />}
    </div>
  );

  // Render a link if provided; otherwise, render a button
  return link ? (
    <Link href={link}>
      <a>{buttonContent}</a>
    </Link>
  ) : (
    <button type='button' onClick={onClick} className="">
      {buttonContent}
    </button>
  );
};

export default Button;
