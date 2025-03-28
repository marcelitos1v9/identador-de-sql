"use client";

import { useState } from "react";

const tips = [
  {
    title: "Indentação Consistente",
    content: "Use indentação consistente para melhorar a legibilidade do seu código SQL. Recomendamos 2 ou 4 espaços."
  },
  {
    title: "Palavras-chave em Maiúsculas",
    content: "Use palavras-chave SQL em maiúsculas para destacá-las e melhorar a legibilidade."
  },
  {
    title: "Aliases de Tabela",
    content: "Use aliases curtos e significativos para suas tabelas, especialmente em queries com JOINs."
  },
  {
    title: "Condições WHERE",
    content: "Organize condições WHERE em linhas separadas para melhor legibilidade e manutenção."
  },
  {
    title: "Comentários",
    content: "Use comentários (--) para documentar queries complexas ou explicar a lógica de negócio."
  }
];

export default function SQLTips() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Dicas e Boas Práticas</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          {isOpen ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      
      {isOpen && (
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="p-4 bg-slate-50 rounded-md border border-slate-200"
            >
              <h3 className="font-medium text-slate-900 mb-2">{tip.title}</h3>
              <p className="text-slate-600 text-sm">{tip.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 