const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = " Falaaa"; // contexto léxico 2s
  return saudacao;
}

// Objetos são grupos anihados de pares nome/valor

const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
