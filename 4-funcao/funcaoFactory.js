// Factory simples
function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarPessoa());

function criarPessoa2(a, b) {
  return {
    nome: a,
    sobrenome: b,
  };
}

console.log(criarPessoa2("Henrique", "Leal"));
