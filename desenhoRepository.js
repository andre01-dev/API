import { conectionDesenho } from "./conection.js";

export async function listarDesenhos() {
    let comando = `
        select *
            from desenhos
    `

    const [registros] = await conectionDesenho.query(comando);

    return registros
}

export async function adicionarDesenho(novoDesenho) {
    let comando = `
        insert into desenhos ( nome,classificacao, genero,ano)
        VALUES (?,?,?,?)
    `

    const [registros] = await conectionDesenho.query(comando, 
        [novoDesenho.nome, novoDesenho.classificacao,novoDesenho.genero,novoDesenho.ano]
    )

    return registros.insertId
}