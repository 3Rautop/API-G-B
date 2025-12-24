const express = require('express');
const app = express();
app.use(express.json()); // Necessário para ler notificações do ML
const port = process.env.PORT || 3000;

// Rota para capturar o CODE (a que você já usa)
app.get('/', (req, res) => {
  const code = req.query.code;
  if (code) {
    res.send(`<h1>Código Recebido!</h1><p>Seu CODE é: <strong>${code}</strong></p>`);
  } else {
    res.send('<h1>Servidor Online</h1>');
  }
});

// NOVA ROTA: Rota para Notificações (Webhooks)
app.post('/notifications', (req, res) => {
  console.log('Notificação recebida:', req.body);
  // O Mercado Livre exige que você responda com status 200 rápido
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
