module.exports = {
  async init(req, res) {
    const { N, M, initN, initM } = req.body;
    let IVAI = [0, 1, 2, 3, 4, 5, 6, 7],
      JVAI = [0, 1, 2, 3, 4, 5, 6, 7];
    let IROBO = initN,
      JROBO = initM;

    if (2 <= N || N <= 40) res.json({ error: "O piso esta fora do padrão" });
    if (2 <= M || M <= 20) res.json({ error: "O piso esta fora do padrão" });
    if (initN > N || initM > M)
      res.json({ error: "O robô não pode iniciar fora da area do piso" });
    if (initN < 0 || initM < 0)
      res.json({ error: "O robô não pode iniciar fora da area do piso" });

    
    let piso;
    let passos;
    piso[(initN, initM)] = 1;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {}
    }
  },
};
