function classificaTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado1 === lado3) {
    return console.log("É um triângulo Equilatero");
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    return console.log("É um triângulo Isosceles");
  } else {
    return console.log("É um triângulo Escaleno");
  }
}

classificaTriangulo(3, 3, 3);
classificaTriangulo(1, 1, 2);
classificaTriangulo(1, 2, 2);
classificaTriangulo(1, 2, 3);
