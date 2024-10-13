const pessoa = { nome: "Joao" };
pessoa.nome = "Pedro";

console.log(pessoa);

Object.freeze(pessoa);

const pessoaConstante = Object.freeze({ nome: "Maria" });
