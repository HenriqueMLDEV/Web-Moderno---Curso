const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 2.40}',
  '{ "nome": "Kit de Lapis", "preco": 41.22}',
  '{ "nome": "Caneta", "preco": 7.50}',
];

// retornar arraus apenas com preços

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);
