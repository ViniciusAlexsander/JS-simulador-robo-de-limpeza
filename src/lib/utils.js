module.exports = {
  percorreuTd(piso, i, j) {
    let tamPiso = i * j;
    let andou;
    for (let I = 0; I < i; I++) {
      for (let J = 0; J < i; J++) {
        if (piso[(I, J)] != 0) andou++;
      }
    }
    if (andou == tamPiso) return true;

    return false;
  },
  numAleatorio(max) {
    return Math.floor(Math.random() * max);
  },
  continuar(IROBO, JROBO, andarI, andarJ, i, j) {
    if (
      IROBO + andarI >= 0 &&
      IROBO + andarI <= i - 1 &&
      JROBO + andarJ >= 0 &&
      JROBO + andarJ <= j - 1
    )
      return true;
    else return false;
  },
};
