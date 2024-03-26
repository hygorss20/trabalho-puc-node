# API de produtos feita em node - liberar uma api rest completa com armazenamento em Banco de dado

banco: Knex - armazenamento local -
liguagem - Node.js 

                                              - API para fluxo de produtos com hospedagem na Azure -


endpoints locais = 

metodo: GET
URL: http://localhost:3000/api/v2/produtos
função: Listar produtos cadastrados


metodo: GET
URL: http://localhost:3000/api/v2/produtos/2
função: Listar produtos por ID 

metodo: POST
URL: http://localhost:3000/api/v2/produtos
função: Acrescentar novos produtos
Body: JSON
{
"descricao": "teste",
"valor": 10.00,
"marca": "teste"
}

metodo: DELETE
URL: http://localhost:3000/api/v2/produtos/2
função: Deletar produtos passando o ID 


*********************************************************************

endpoints publicados na rede " Azure " - fiz na Azure pois nao consegui de maneira nenhuma subir a aplicação no webdock


metodo: GET
URL: http://produtos-puc-hygo.azurewebsites.net:3000/api/v2/produtos
função: Listar produtos cadastrados


metodo: GET
URL: http://produtos-puc-hygo.azurewebsites.net:3000/api/v2/produtos/2
função: Listar produtos por ID 

metodo: POST
URL: http://produtos-puc-hygo.azurewebsites.net:3000/api/v2/produtos
função: Acrescentar novos produtos
Body: JSON
{
"descricao": "teste",
"valor": 10.00,
"marca": "teste"
}

metodo: DELETE
URL: http://produtos-puc-hygo.azurewebsites.net:3000/api/v2/produtos/2
função: Deletar produtos passando o ID 


executor =  Hygor Silva Souza
