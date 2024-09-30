function formatarValorDecimal(valor) {
  valorReais = "R$ " + valor.toFixed(2).toString().replace(".", ",");
  return console.log(valorReais);
}
formatarValorDecimal(0.1 + 0.2);
formatarValorDecimal(0.3 + 0.5);
