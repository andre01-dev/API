import { conectionDesenho } from "../conection.js";

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

export async function alterarDesenho(id,novoDesenho) {
    const comando = `
        update desenhos
        set nome = ?,
            classificacao =?,
            genero =?,
            ano = ?
        where id_desenho = ?
    `
    const [registros] = await conectionDesenho.query(comando, [
        novoDesenho.nome,
        novoDesenho.classificacao,
        novoDesenho.genero,
        novoDesenho.ano,
        id
    ])
}

export async function deletarDesenho(id) {
    const comando = `
        delete from desenhos
        where id_desenho = ?
    `
    const [registros] = await conectionDesenho.query(comando, [id])
}

export async function filtrarDesenhoNome(nome) {
    const comando = `
        select*
        from desenhos
        where nome like ?
    `
    const [registros] = await conectionDesenho.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarDesenhoId(id) {
    const comando = `
        select*
        from desenhos
        where id_desenho = ?
    `   
    const [registros] = await conectionDesenho.query(comando, [id])
    return registros[0]
}