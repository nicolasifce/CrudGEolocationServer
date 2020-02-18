const mongoose = require("mongoose");
const geolib = require("geolib");

const Estabelecimento = mongoose.model("Estabelecimento");

module.exports = {
  async index(req, res) {
    const estabelecimentos = await Estabelecimento.find();
    return res.json(estabelecimentos);
  },
  async show(req, res) {
    const estabelecimentos = await Estabelecimento.find();
    const proximos = [];
    const position = {
      latitude: req.body.latitude,
      longitude: req.body.longitude
    };
    estabelecimentos.map(item => {
      let destino = { latitude: item.latitude, longitude: item.longitude };
      let distancia = geolib.getPreciseDistance(position, destino);
      distancia = distancia / 1000;
      if (distancia < 12) {
        proximos.push({ nome: item.nome, distancia });
      }
    });

    res.json(proximos);
  },
  async store(req, res) {
    const estabelecimentos = await Estabelecimento.create(req.body);

    return res.json(estabelecimentos);
  },

  async update(req, res) {
    const estabelecimentos = await Estabelecimento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(estabelecimentos);
  },
  async destroy(req, res) {
    await Estabelecimento.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
