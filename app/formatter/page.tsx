"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SQLFormatter from "../components/SQLFormatter";

export default function FormatterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Formatador SQL</h1>
          <SQLFormatter />
        </div>
      </main>

      <Footer />
    </div>
  );
} 