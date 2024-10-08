const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas Funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa();
