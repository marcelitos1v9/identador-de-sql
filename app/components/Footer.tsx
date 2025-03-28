"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-4xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} SQL Formatter. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#" 
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Privacidade
            </a>
            <a 
              href="#" 
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 