export function formatSQL(sql: string): string {
  // Remove espaços extras e quebras de linha
  sql = sql.replace(/\s+/g, ' ').trim();
  
  // Palavras-chave SQL para identificar
  const keywords = [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 'HAVING',
    'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN', 'ON',
    'INSERT INTO', 'UPDATE', 'DELETE FROM', 'VALUES', 'SET',
    'CREATE TABLE', 'ALTER TABLE', 'DROP TABLE', 'ADD', 'MODIFY', 'COLUMN'
  ];

  // Preserva comentários de linha única (--)
  const lines = sql.split('\n');
  const processedLines = lines.map(line => {
    // Preserva comentários existentes
    if (line.trim().startsWith('--')) {
      return line.trim();
    }
    
    // Remove espaços extras mantendo a estrutura
    return line.replace(/\s+/g, ' ').trim();
  });

  // Junta as linhas novamente
  sql = processedLines.join('\n');

  // Adiciona quebras de linha antes das palavras-chave
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    sql = sql.replace(regex, `\n${keyword}`);
  });

  // Adiciona quebra de linha após vírgulas
  sql = sql.replace(/,\s*/g, ',\n');

  // Adiciona indentação
  let indentLevel = 0;
  const formattedLines = sql.split('\n').map(line => {
    line = line.trim();
    
    // Preserva comentários existentes
    if (line.startsWith('--')) {
      return '  '.repeat(indentLevel) + line;
    }
    
    // Aumenta indentação após palavras-chave que abrem blocos
    if (line.match(/\b(WHERE|AND|OR|JOIN|ON|VALUES|SET)\b/i)) {
      indentLevel++;
    }
    
    // Diminui indentação antes de palavras-chave que fecham blocos
    if (line.match(/\b(ORDER BY|GROUP BY|HAVING)\b/i)) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    return '  '.repeat(indentLevel) + line;
  });

  return formattedLines.join('\n');
}