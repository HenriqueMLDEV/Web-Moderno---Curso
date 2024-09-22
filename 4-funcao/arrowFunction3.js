let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);
console.log("-----------");
let comparacomThisArrow = (param) => console.log(this === param);
comparaComThis(global);
comparacomThisArrow(module.exports);

comparacomThisArrow = comparacomThisArrow.bind(obj);
comparacomThisArrow(obj);
comparacomThisArrow(module.exports);
