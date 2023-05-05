const express = require ('express')
const morgan = require ('morgan')
const helmet = require ('helmet')
// const routerClient = require ('./routes/routerClient')
const routerAPI = require ('./routes/routerAPI')
const routerAPIv2 = require ('./routes/routerAPI-v2')
const app = express ()

const port = process.env.port || 3000

app.use (morgan("tiny"))
app.use (helmet())

// app.use ('/public', routerClient)
app.use ('/api/v1', routerAPI)
app.use ('/api/v2', routerAPIv2)

app.use (function (req, res) {
  res.status(404).send ('Recurso não encontrado.')
})

// Inicializa o servidor HTTP na porta 3000
app.listen (port, function () {
  console.log ('O servidor esta rodando')
})
