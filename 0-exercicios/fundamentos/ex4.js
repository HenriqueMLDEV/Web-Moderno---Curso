function resultaDivisao(dividendo, divisor) {
  let resultado = Math.floor(dividendo / divisor);
  let restoResultado = dividendo % divisor;

  console.log(
    "O resultado da divisão é " +
      resultado +
      " E o resto dessa divisão é " +
      restoResultado
  );
}

resultaDivisao(2, 2);
resultaDivisao(4, 2);
resultaDivisao(9, 2);
resultaDivisao(11, 4);
