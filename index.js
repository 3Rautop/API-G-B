const express = require('express')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3000

// 🔹 Redirect do Mercado Livre
app.get('/redirect', async (req, res) => {
  const code = req.query.code

  if (!code) {
    return res.send('Code não recebido')
  }

  // 👉 Apenas devolve o CODE
  res.send(`
    <h3>Authorization Code recebido</h3>
    <p>${code}</p>
    <p>Copie este código e use no seu sistema para gerar o TG.</p>
  `)
})

app.listen(PORT, () => {
  console.log('Servidor online')
})
