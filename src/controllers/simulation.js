const utils = require("../lib/utils");

module.exports = {
  async init(req, res) {
    const { i, j, initI, initJ } = req.body;
    let IVAI = [0, 1, 2, 3, 4, 5, 6, 7],
      JVAI = [0, 1, 2, 3, 4, 5, 6, 7];
    let IROBO = initI,
      JROBO = initJ;

    if (2 <= i || i <= 40) res.json({ error: "O piso esta fora do padrão" });
    if (2 <= j || j <= 20) res.json({ error: "O piso esta fora do padrão" });
    if (initI > i || initJ > j)
      res.json({ error: "O robô não pode iniciar fora da area do piso" });
    if (initI < 0 || initJ < 0)
      res.json({ error: "O robô não pode iniciar fora da area do piso" });

    let piso;
    let passos;
    piso[initI, initJ] = 1;

    do {
      let numAleatorioI = utils.numAleatorio(8);
      let numAleatorioJ = utils.numAleatorio(8);
      let andarI = IVAI[numAleatorioI];
      let andarJ = JVAI[numAleatorioJ];
      let continuar = false

      if (utils.continuar == true) {
        IROBO += andarI;
        JROBO += andarJ;
        piso[IROBO, JROBO] = 1;
        passos++;
        continuar = true
      }
      
    } while (condition);
  },
};
