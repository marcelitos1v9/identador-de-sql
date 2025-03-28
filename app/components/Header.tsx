"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600" : "text-slate-600 hover:text-slate-900";
  };

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-slate-900">
              SQL Formatter
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/formatter" 
                className={`transition-colors ${isActive("/formatter")}`}
              >
                Formatador
              </Link>
              <Link 
                href="/examples" 
                className={`transition-colors ${isActive("/examples")}`}
              >
                Exemplos
              </Link>
              <Link 
                href="/tips" 
                className={`transition-colors ${isActive("/tips")}`}
              >
                Dicas
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/seu-usuario/identador-de-sql" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
} 