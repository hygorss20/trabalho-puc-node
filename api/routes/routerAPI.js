const express = require ('express')
const routerAPI = express.Router()

routerAPI.use (express.urlencoded())
routerAPI.use (express.json())

const lista_produtos = {
  produtos: [
      { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
      { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
      { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
      { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
      { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
  ]
}

// Cria um manipulador da rota padrão 
routerAPI.get('/produtos', function (req, res) {
  res.json(lista_produtos)
})
  
// Cria um manipulador da rota padrão 
routerAPI.post('/produtos', function (req, res) {
  req.body.id = lista_produtos.produtos.length + 1;
  lista_produtos.produtos.push (req.body);
  res.json (`{ message: "Produto inserido com sucesso" }`)
})

routerAPI.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = lista_produtos.produtos.find((produto) => produto.id === id);
    res.json(`{ message: "Buscar produto por ID" }`);
});

routerAPI.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);//pegando o ID do produto
  const index = lista_produtos.produtos.findIndex((produto) => produto.id === id);
    lista_produtos.produtos[index] = { ...lista_produtos.produtos[index], ...req.body };
    res.json(`{ message: "Alterar um produto por ID" }`);
});

routerAPI.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);//pegando o ID do produto
  const produtosAtualizados = lista_produtos.produtos.filter((produto) => produto.id !== id);
    lista_produtos.produtos = produtosAtualizados;
    res.json(`{ message: "Excluir um produto por ID" }`);
});

module.exports = routerAPI