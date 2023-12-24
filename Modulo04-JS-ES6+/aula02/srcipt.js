function novoUsuario(info) {
    let dados = {
        ...info,
        inicio: '10/02/2023',
        codigo: 123123,
        status: "ativo",
    }

    console.log(dados)
}

novoUsuario({nome: "luiz", cargo:'estudante', sobrenome:'giehl'})