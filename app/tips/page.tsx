"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SQLTips from "../components/SQLTips";
import Link from "next/link";

export default function TipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Dicas e Boas Práticas SQL</h1>
            <Link 
              href="/formatter"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Ir para o Formatador
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Sobre as Dicas</h2>
            <p className="text-slate-600 mb-4">
              Aqui você encontrará dicas valiosas e boas práticas para melhorar a qualidade e legibilidade 
              do seu código SQL. Estas dicas foram compiladas com base em anos de experiência e padrões 
              da indústria.
            </p>
            <p className="text-slate-600">
              Aplique estas dicas em suas queries para torná-las mais profissionais e fáceis de manter.
            </p>
          </div>

          <SQLTips />
        </div>
      </main>

      <Footer />
    </div>
  );
} 