const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const router = require("./router");
const route = express.Router();

app.use(express.json());

app.use("/api", router);
 
app.listen(port, () => console.log("Porta", port));
 
route.get("/", (req, res) => {
    res.send("Servidor B");
});

app.get("/", (req, res) => {
    res.send("Servidor B");
});