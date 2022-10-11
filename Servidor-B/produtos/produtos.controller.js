const express = require("express");
const router = express.Router();

const produtosHandler = require("./produtos.handler");

router.post("/", async (req, res) => {
    const dadosSalvos = await produtosHandler.adicionarProduto(req.body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await produtosHandler.mostrarProduto();
    res.json(dados);
});




module.exports = router;
