// coleção dinâmica de pares chave/valor

const produto = new Object();
produto.nome = "Cadeira";
produto["Marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["Marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Henrique",
    idade: 56,
    endereco: {
      rua: "Rua ABC",
      numero: 123,
    },
  },

  condutores: [
    {
      nome: "Marcos",
      idade: 42,
    },
    {
      nome: "Patricia",
      idade: 48,
    },
  ],
  calcularValorSeguro: function () {
    // ...
  },
};

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante";
console.log(carro);

// delete carro.condutores
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);
