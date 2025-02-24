import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-indigo-950 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold color-blue-500">School Code</div>

        <div className="flex space-x-6">
          <Link href="/sobre" className="hover:text-indigo-500">Sobre</Link>
          <Link href="/como-funciona" className="hover:text-indigo-500">Como funciona</Link>
          <Link href="/suporte" className="hover:text-indigo-500">Suporte</Link>
        </div>

        <div className="flex space-x-4">
          <Link href="/signin" className=" hover:underline py-2">Login</Link>
          <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800">Cadastro</Link>
        </div>
      </nav>
    </header>
  );
}