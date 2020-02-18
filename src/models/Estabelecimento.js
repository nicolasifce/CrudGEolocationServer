const mongoose = require("mongoose");

const EstabelecimentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  nomeLongradouro: {
    type: String,
    required: true
  },
  longradouro: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  numeroCasa: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

mongoose.model("Estabelecimento", EstabelecimentoSchema);
