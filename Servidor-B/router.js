const express = require("express");
const router = express.Router();

const produtos = require("./produtos/produtos.controller");
router.use("/produtos", produtos);

module.exports = router;
