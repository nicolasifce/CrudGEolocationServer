const express = require("express");
const routes = express.Router();
const authMiddleare = require("./middlewares/auth");

const EstabelecimentosController = require("./controllers/estabelecimentoController");

routes.use(authMiddleare);
routes.get("/estabelecimentos", EstabelecimentosController.index);
routes.post("/estabelecimentos", EstabelecimentosController.store);
routes.put("/estabelecimentos/:id", EstabelecimentosController.update);
routes.delete("/estabelecimentos/:id", EstabelecimentosController.destroy);
routes.post("/estabelecimentos/proximos", EstabelecimentosController.show);

module.exports = routes;
