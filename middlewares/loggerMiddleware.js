const fs = require('fs');
const path = require('path');

function logMiddleware(req, res, next) {
  const logEntry = `${new Date()} - ${req.method} ${req.originalUrl} - Token: ${req.headers.authorization || 'N/A'}`;
  const logFilePath = path.join(__dirname, '../../logs/access.log'); // Caminho para o arquivo de log

  // Registre o log no arquivo
  fs.appendFile(logFilePath, logEntry + '\n', (err) => {
    if (err) {
      console.error('Erro ao registrar log:', err);
    }
  });

  next();
}

module.exports = logMiddleware;
