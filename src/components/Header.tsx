'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-indigo-950 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-300">School Code</div>

        {/* Menu de Hambúrguer para Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/sobre" className="hover:text-indigo-500">Sobre</Link>
          <Link href="/como-funciona" className="hover:text-indigo-500">Como funciona</Link>
          <Link href="/suporte" className="hover:text-indigo-500">Suporte</Link>
        </div>

        {/* Botões de Login e Cadastro (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/signin" className="hover:underline py-2">Login</Link>
          <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800">Cadastro</Link>
        </div>
      </nav>

      {/* Menu Mobile (Abre/Fecha com o Hambúrguer) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-indigo-950`}>
        <div className="flex flex-col space-y-4 px-4 py-6">
          <Link href="/sobre" className="hover:text-indigo-500">Sobre</Link>
          <Link href="/como-funciona" className="hover:text-indigo-500">Como funciona</Link>
          <Link href="/suporte" className="hover:text-indigo-500">Suporte</Link>
          <Link href="/signin" className="hover:underline py-2">Login</Link>
          <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800">Cadastro</Link>
        </div>
      </div>
    </header>
  );
}