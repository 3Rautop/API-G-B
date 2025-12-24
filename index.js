const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const code = req.query.code;
  if (code) {
    res.send(`<h1>Código Recebido!</h1><p>Seu CODE é: <strong>${code}</strong></p>`);
  } else {
    res.send('<h1>Servidor API-GB Online</h1><p>Aguardando redirecionamento do Mercado Livre...</p>');
  }
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
              
