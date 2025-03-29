"use client";

import { useState } from "react";
import { formatSQL } from "../utils/sqlFormatter";

export default function SQLFormatter() {
  const [inputSQL, setInputSQL] = useState<string>("");
  const [formattedSQL, setFormattedSQL] = useState<string>("");
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFormatSQL = () => {
    try {
      const formatted = formatSQL(inputSQL);
      setFormattedSQL(formatted);
    } catch (error) {
      setFormattedSQL("Erro ao formatar SQL. Verifique se a sintaxe está correta.");
    }
  };

  const handleCopySQL = () => {
    navigator.clipboard.writeText(formattedSQL);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  const handleClearSQL = () => {
    setInputSQL("");
    setFormattedSQL("");
  };

  const handleUploadFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  const handleFormatAllFiles = () => {
    const formattedFiles = uploadedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const sqlContent = e.target?.result as string;
        const formatted = formatSQL(sqlContent);
        return new File([formatted], `${file.name}_formatado.sql`, { type: "text/sql" });
      };
      reader.readAsText(file);
    });
    setUploadedFiles(formattedFiles);
  };

  const handleDownloadFiles = () => {
    uploadedFiles.forEach((file) => {
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Entrada SQL</h2>
          <button
            onClick={handleClearSQL}
            className="text-sm text-red-600 hover:text-red-700 transition-colors"
          >
            Limpar
          </button>
        </div>
        <textarea
          className="w-full h-48 p-4 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent font-mono text-slate-900 bg-white"
          placeholder="Cole sua query SQL aqui..."
          value={inputSQL}
          onChange={(e) => setInputSQL(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleFormatSQL}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Formatar SQL
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">SQL Formatado</h2>
          <button
            onClick={handleCopySQL}
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Copiar
          </button>
        </div>
        <pre className="w-full h-48 p-4 bg-slate-50 border border-slate-300 rounded-md overflow-auto font-mono text-sm text-slate-900">
          {formattedSQL}
        </pre>
        {showCopyMessage && (
          <p className="text-sm text-green-600 mt-2 text-right">
            SQL copiado para a área de transferência!
          </p>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Upload de Arquivos SQL</h2>
          <input type="file" multiple onChange={handleUploadFiles} />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleFormatAllFiles}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Formatar Todos os Arquivos
          </button>
          <button
            onClick={handleDownloadFiles}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Baixar Arquivos Formatados
          </button>
        </div>
      </div>
    </div>
  );
} 