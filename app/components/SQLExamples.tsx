"use client";

import { useState } from "react";

const examples = [
  {
    name: "SELECT Básico",
    sql: `SELECT id, nome, email FROM usuarios WHERE status = 'ativo' ORDER BY nome;`
  },
  {
    name: "JOIN com Condições",
    sql: `SELECT u.nome, p.titulo FROM usuarios u INNER JOIN posts p ON u.id = p.usuario_id WHERE p.status = 'publicado' AND u.ativo = true;`
  },
  {
    name: "INSERT com Múltiplos Valores",
    sql: `INSERT INTO produtos (nome, preco, categoria) VALUES ('Produto 1', 99.99, 'Eletrônicos'), ('Produto 2', 149.99, 'Acessórios');`
  },
  {
    name: "UPDATE com Subconsulta",
    sql: `UPDATE pedidos SET status = 'cancelado' WHERE id IN (SELECT pedido_id FROM itens_pedido WHERE quantidade > 10);`
  }
];

export default function SQLExamples({ onSelectExample }: { onSelectExample: (sql: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Exemplos de Queries</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          {isOpen ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      
      {isOpen && (
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="p-4 bg-slate-50 rounded-md border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors"
              onClick={() => onSelectExample(example.sql)}
            >
              <h3 className="font-medium text-slate-900 mb-2">{example.name}</h3>
              <pre className="text-sm text-slate-600 font-mono overflow-x-auto">
                {example.sql}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 