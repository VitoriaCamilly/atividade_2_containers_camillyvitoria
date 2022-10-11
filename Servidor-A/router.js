const express = require("express");
const router = express.Router();

const usuario = require("./usuario/usuario.controller");
router.use("/usuario", usuario);

module.exports = router;
