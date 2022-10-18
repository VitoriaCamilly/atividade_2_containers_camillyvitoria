const crud = require("../Crud");
const nomeTabela = "Users";

async function adicionarUsuario(dados = {CPF: "", Name: "", Password:""}) {
    if (!dados.CPF){
        return {error: "0001", 
        message: "É necessário preencher os parametros da requisição!", 
        camposNecessarios: ["CPF"]}
    }
    if(!dados.Name){
        return {error: "0002", 
        message: "É necessário preencher os parametros da requisição!", 
        camposNecessarios: ["name"]}
    }   
    if (!dados.Password){
        return {error: "0003", 
        message: "É necessário preencher os parametros da requisição!", 
        camposNecessarios: ["password"]}
    }
    const user = await crud.save(nomeTabela, undefined, dados);
    return user;
}

async function login(usuario) {
    console.log("chegou", usuario)
    if (usuario.userCPF != undefined && usuario.password != undefined) {
        console.log("Usu", usuario);
        const resultado = await crud.getWithFilter("Users", "CPF", "==", usuario.userCPF);
        console.log(resultado);
        console.log("usuariopas", usuario.password);
        console.log("resultpas", resultado.Password);
        if(resultado[0].Password == usuario.password){
            console.log("Entrou")
            return 1;
        } else {
            return -1;
        }
    } else {
        console.log("ok", usuario.login)
        return 2;
    }
}

async function mostrarUsuario() {
    const mostrar = await crud.get(nomeTabela);
    return mostrar;
}

module.exports = {
    adicionarUsuario,
    mostrarUsuario,
    login
}