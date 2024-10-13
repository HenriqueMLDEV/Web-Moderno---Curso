function Aula(nome, videoID) {
  this.nome = nome;
  this.videoId = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Bem vindo", 456);
console.log(aula1, aula2);

// SIMULANDO O NEW

function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Bem vindo", 456);
console.log(aula3, aula4);
