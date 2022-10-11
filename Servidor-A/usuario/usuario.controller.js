const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuario.handler");

router.post("/", async (req, res) => {
    const dadosSalvos = await usuarioHandler.adicionarUsuario(req.body);
    res.json(dadosSalvos);
});

router.post("/login", async (req, res) => {
    const dadosSalvos = await usuarioHandler.login(req.body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await usuarioHandler.mostrarUsuario();
    res.json(dados);
});


module.exports = router;
