const list = [];

async function adicionarUsuario(usuario) {
    if (usuario.login != undefined) {
        if (usuario.cpf != undefined) {
            if (usuario.senha != undefined) {
                if (usuario.telefone != undefined) {
                    list.push(usuario);
                    return usuario;
                } else {
                    return "É necessário informar o telefone!"
                }
            } else {
                return "É necessário informar a senha!"
            }
        } else {
            return "É necessário informar o cpf!"
        }
    } else {
        return "É necessário informar o nome!"
    }
}

async function login(usuario) {
    console.log("chegou", usuario)
    if (usuario.login != undefined) {
        if (usuario.senha != undefined) {
            for(let i = 0; i < list.length; i++) {
                if(list[i].login == usuario.login && list[i].senha == usuario.senha){
                    return 1;
                }
            }
            return -1;
        } else {
            return 2;
        }
    } else {
        console.log("ok", usuario.login)
        return 3;
    }

}

async function mostrarUsuario() {
    return list;
}

module.exports = {
    adicionarUsuario,
    mostrarUsuario,
    login
}