"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Formatador SQL</h1>
            <p className="text-xl text-slate-600 mb-8">
              Uma ferramenta gratuita para formatar e organizar suas queries SQL
            </p>
            <Link 
              href="/formatter"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Começar a Formatar
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Formatação Automática</h3>
              <p className="text-slate-600">
                Formate suas queries SQL automaticamente com indentação consistente e organização clara.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Exemplos Práticos</h3>
              <p className="text-slate-600">
                Acesse exemplos de queries comuns e aprenda as melhores práticas de formatação SQL.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Dicas e Boas Práticas</h3>
              <p className="text-slate-600">
                Aprenda dicas valiosas para melhorar a qualidade e legibilidade do seu código SQL.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sobre o Formatador SQL</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                O Formatador SQL é uma ferramenta gratuita desenvolvida para ajudar desenvolvedores a manterem 
                suas queries SQL organizadas e legíveis. Com nossa ferramenta, você pode:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Formatar automaticamente queries SQL complexas</li>
                <li>Manter um padrão consistente de indentação</li>
                <li>Aprender com exemplos práticos de queries comuns</li>
                <li>Seguir as melhores práticas de formatação SQL</li>
                <li>Copiar facilmente o código formatado</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Nossa ferramenta é perfeita para desenvolvedores, DBA's e qualquer pessoa que trabalhe com SQL 
                e queira manter seu código organizado e profissional.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
