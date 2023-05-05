const express = require ('express')
const routerAPIv2 = express.Router()

const knex = require('knex')({
   client: 'sqlite3',
   connection: {
     filename: './dev.sqlite3'
   }
})

routerAPIv2.use (express.urlencoded())
routerAPIv2.use (express.json())

// Listar todos os dados contidos em Banco
routerAPIv2.get('/produtos', function (req, res) {
  knex.select('*').from('produtos')
  .then (produtos => res.json(produtos))
  .catch (err => res.json ({ message: `Erro ao recuperar produtos: ${err.message}` }))
})

//pesquisar por id 
routerAPIv2.get('/produtos/:id', function (req, res) {
  let id = req.params.id
  knex.select('*').from('produtos').where({id})
  .then (produtos => res.json(produtos))
  .catch (err => res.json ({ message: `Erro ao recuperar produtos: ${err.message}` }))
})
  
// Cria um novo produto
routerAPIv2.post('/produtos', function (req, res) {
  knex('produtos').insert(req.body, ['id'])//buscando Id como restorno para ver qual ID que foi inserido      
  .then (produtos => {
    let id = produtos[0].id
    res.json({ message: `Produto inserido com sucesso.`, id  })
  })
  .catch (err => res.json ({ message: `Erro ao inserir produto: ${err.message}` }))
})

//deleta um produto por ID 
routerAPIv2.delete('/produtos/:id', (req, res) => {
  let id = req.params.id
  knex.delete('*').from('produtos').where({id})
  .then (produtos => res.json(produtos))
  .catch (err => res.json ({ message: `Erro ao recuperar produtos: ${err.message}` }))
})


module.exports = routerAPIv2