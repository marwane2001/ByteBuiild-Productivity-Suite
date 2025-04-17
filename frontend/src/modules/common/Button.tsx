// Corrected version
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}