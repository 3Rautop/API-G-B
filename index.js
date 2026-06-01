const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('API G&B Online')
})

app.get('/redirect', (req, res) => {
  console.log('Mercado Livre:', req.query)

  const { code } = req.query

  if (!code) {
    return res.send('Code não recebido')
  }

  res.send(`
    <h3>Authorization Code recebido</h3>
    <p>${code}</p>
  `)
})

app.get('/shopee', (req, res) => {
  console.log('Shopee:', req.query)

  const { code, shop_id } = req.query

  res.send(`
    <h2>Autorização Shopee recebida</h2>
    <p>Code: ${code || 'não recebido'}</p>
    <p>Shop ID: ${shop_id || 'não recebido'}</p>
  `)
})

app.listen(PORT, () => {
  console.log(`Servidor online na porta ${PORT}`)
})