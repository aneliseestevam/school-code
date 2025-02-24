import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center py-4 px-4">
        <Header />
      </nav>

      {/* Hero Section */}
      <main className="flex items-center justify-between pt-20 pb-6 px-20">
        <div className="flex-1 pr-10">
          <h1 className="text-4xl font-bold mb-4">A educação com mais controle e transparência para você!</h1>
          <p className="mb-8">Simples. Rápido. Seguro. O futuro da presença escolar.</p>
          <div className="space-x-4">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded">Baixe agora</button>
            <button className="bg-transparent border border-indigo-500 text-indigo-500 px-6 py-2 rounded">Assista a demonstração</button>
          </div>
        </div>
        <div className="flex-1 pt-10">
          <Image
            src="/hero-light.webp"
            alt="App"
            width={325}
            height={546}
            className="rounded-lg mx-auto max-w-full"
          />
        </div>
      </main>

      {/* Features Section */}
      <section className="px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Tecnologia que transforma a presença escolar!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Check-in Rápido e Seguro com QR Code</h3>
            <p className="text-gray-600 text-center">
              Facilite o controle de entrada e saída dos alunos com um simples escaneamento de QR Code. Mais agilidade e menos burocracia para a escola.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Pais Conectados em Tempo Real</h3>
            <p className="text-gray-600 text-center">
              Os responsáveis podem acompanhar a assiduidade dos alunos diretamente pelo aplicativo, garantindo mais transparência e segurança na rotina escolar.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Relatórios e Histórico de Presença</h3>
            <p className="text-gray-600 text-center">
              Acesso fácil a dados completos sobre a frequência dos alunos, permitindo análises e relatórios para tomada de decisão eficiente.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Notificações Instantâneas</h3>
            <p className="text-gray-600 text-center">
              Receba alertas automáticos sempre que o aluno realizar check-in ou check-out, mantendo os responsáveis informados em tempo real.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Segurança e Controle Escolar</h3>
            <p className="text-gray-600 text-center">
              Garanta que apenas alunos autorizados entrem e saiam da escola, reduzindo riscos e proporcionando mais tranquilidade para pais e gestores.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Integração Simples e Eficiente</h3>
            <p className="text-gray-600 text-center">
              Sistema fácil de integrar à infraestrutura da escola, compatível com diversos dispositivos e plataformas para uma implementação rápida.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Price Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center mb-4">Plano Básico</h3>
            <p className="text-3xl font-bold text-center text-indigo-500 mb-4">R$ 3,90</p>
            <p className="text-gray-600 text-center mb-8">por aluno/mês</p>
            <ul className="text-gray-600 text-center">
              <li>Check-in e Check-out</li>
              <li>Notificações por E-mail</li>
              <li>Suporte Básico</li>
            </ul>
            <div className="text-center">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded mt-8">Contratar Agora</button>
            </div>
          </div>
          
          {/* Price Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center mb-4">Plano Intermediário</h3>
            <p className="text-3xl font-bold text-center text-indigo-500 mb-4">R$ 5,90</p>
            <p className="text-gray-600 text-center mb-8">por aluno/mês</p>
            <ul className="text-gray-600 text-center">
              <li>Check-in e Check-out</li>
              <li>Notificações por E-mail e SMS</li>
              <li>Suporte Prioritário</li>
            </ul>
            <div className="text-center">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded mt-8">Contratar Agora</button>
            </div>
          </div>

          {/* Price Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center mb-4">Plano Avançado</h3>
            <p className="text-3xl font-bold text-center text-indigo-500 mb-4">R$ 10,90</p>
            <p className="text-gray-600 text-center mb-8">por aluno/mês</p>
            <ul className="text-gray-600 text-center">
              <li>Check-in e Check-out</li>
              <li>Notificações por E-mail, SMS e Push</li>
              <li>Suporte Premium</li>
            </ul>
            <div className="text-center">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded mt-8">Contratar Agora</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-500 py-20 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para começar?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato conosco para mais detalhes. Faça parte da revolução digital na educação!
          </p>

          {/* Formulário de Contato */}
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-gray-700 font-bold mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Como podemos ajudar?"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}