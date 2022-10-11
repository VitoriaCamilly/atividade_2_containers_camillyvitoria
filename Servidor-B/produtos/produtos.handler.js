const list = [];

async function adicionarProduto(produto = {login: "", senha: "", nome: "", descricao: "", preco: ""}) {
    if (produto.login != undefined) {
        if (produto.senha != undefined) {
            if (produto.nome != undefined) {
                if (produto.descricao != undefined) {
                    if (produto.preco != undefined) {
                    
                        const body = {login: produto.login, senha: produto.senha};
                        
                        const fetch = require('node-fetch');
                        const response = await fetch('http://localhost:3000/api/usuario/login', { 
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                            method: 'POST', 
                            body: JSON.stringify(body) 
                        })

                        const resposta = await response.json();
                        console.log("Aqu 4", resposta);

                        if(resposta == -1){
                            delete produto.login;
                            delete produto.senha;
                            list.push(produto);
                            return produto;
                        } else {
                            return "Usuário inexistente, produto não cadastrado!"
                        }
                    } else {
                        return "É necessário informar o preco!"
                    }
                } else {
                    return "É necessário informar a descricao!"
                }
            } else {
                return "É necessário informar o nome!"
            }
        } else {
            return "É necessário informar a senha!"
        }
    } else {
        return "É necessário informar o login!"
    }
}


async function mostrarProduto() {
    return list;
}

module.exports = {
    adicionarProduto,
    mostrarProduto
}