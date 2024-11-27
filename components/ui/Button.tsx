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
  reverse?: boolean; // New prop to reverse text and image order
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
  className = '',
  reverse = false
}) => {
  const buttonContent = (
    <div className={`flex w-full justify-center items-center gap-2 text-color 
      ${reverse ? 'flex-row-reverse' : ''}`
    }>
      <p className="flex items-center">{name}</p>
      {src && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          className="flex items-center"
        />
      )}
    </div>
  );

  return link ? (
    <Link href={link} className={`w-full ${className}`}>
      {buttonContent}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={`w-full ${className}`}>
      {buttonContent}
    </button>
  );
};

export default Button;
