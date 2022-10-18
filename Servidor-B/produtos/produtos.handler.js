const crud = require("../Crud");
const nomeTabela = "Products";

async function adicionarProduto(produto = { userCPF: "", password: "", name: "", description: "", price: "" }) {
    if (!produto.userCPF) {
        return {
            error: "0001",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["userCPF"]
        }
    }
    if (!produto.password) {
        return {
            error: "0002",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["password"]
        }
    }
    if (!produto.name) {
        return {
            error: "0003",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["name"]
        }
    }
    if (!produto.description) {
        return {
            error: "0004",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["description"]
        }
    }
    if (!produto.price) {
        return {
            error: "0005",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["price"]
        }
    }

    const body = { userCPF: produto.userCPF, password: produto.password };
    const fetch = require('node-fetch');
    const response = await fetch('http://destino:3000/api/usuario/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
    })

    const resposta = await response.json();
    console.log("Aqu 4", resposta);
    delete produto.password
    if (resposta == 1) {
        const dado = await crud.save(nomeTabela, undefined, produto);
        return dado;
    } else if (resposta == -1) {
        return "Usuário e/ou Senha Incorretos!"
    } else {
        return "É necessário preencher os parâmetros da requisição"
    }
}

async function mostrarProduto() {
    const mostrar = await crud.get(nomeTabela);
    return mostrar;
}

module.exports = {
    adicionarProduto,
    mostrarProduto
}