require('dotenv').config()
const express = require('express')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3000

// 1️⃣ Rota para autorizar
app.get('/login', (req, res) => {
  const url =
    `https://auth.mercadolivre.com.br/authorization` +
    `?response_type=code` +
    `&client_id=${process.env.CLIENT_ID}` +
    `&redirect_uri=${process.env.REDIRECT_URI}`

  res.redirect(url)
})

// 2️⃣ Rota de redirect
app.get('/redirect', async (req, res) => {
  const code = req.query.code

  try {
    const response = await axios.post(
      'https://api.mercadolibre.com/oauth/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: code,
        redirect_uri: process.env.REDIRECT_URI
      })
    )

    res.json(response.data)

  } catch (error) {
    res.status(500).json(error.response.data)
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
