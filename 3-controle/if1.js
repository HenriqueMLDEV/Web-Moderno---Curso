function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Você passou com " + nota);
  }
}

soBoaNoticia(8);

seForVerdadeEuFalo = (valor) => {
  if (valor) {
    console.log("É Verdade... " + valor);
  }
};

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
