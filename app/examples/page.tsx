"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SQLExamples from "../components/SQLExamples";
import Link from "next/link";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Exemplos de Queries SQL</h1>
            <Link 
              href="/formatter"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Ir para o Formatador
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Sobre os Exemplos</h2>
            <p className="text-slate-600 mb-4">
              Aqui você encontrará exemplos práticos de queries SQL comuns, organizados por categoria. 
              Cada exemplo demonstra boas práticas de formatação e estruturação de queries SQL.
            </p>
            <p className="text-slate-600">
              Clique em qualquer exemplo para carregá-lo no formatador e ver como ele fica quando formatado corretamente.
            </p>
          </div>

          <SQLExamples onSelectExample={() => {}} />
        </div>
      </main>

      <Footer />
    </div>
  );
} 