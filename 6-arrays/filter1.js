const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "IpadPro", preco: 5499, fragil: true },
  { nome: "Copo de Plastico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return;
  })
);

const caro = (produto) => produto.preco >= 500;

const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
