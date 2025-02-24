export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>© 2025 School Code</p>
          </div>
          <div>
            <a
              href="#"
              className="hover:underline"
            >
              Política de privacidade
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="hover:underline"
            >
              Termos de serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}