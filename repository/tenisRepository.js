import { conectionTenis } from "../conection.js";

export async function listarTenis() {
    const comando = `
        SELECT *
            FROM tenis
    `

    const [registros] = await conectionTenis.query(comando)
    return registros;
}

export async function inserirTenis(novoTenis) {
    const comando = `
        INSERT INTO tenis (nome, marca, cor, tamanho, preco, categoria, estoque) 
        VALUES (?,?,?,?,?,?,?)
    `

    const [AirMaxTn] = await conectionTenis.query(comando, 
    [
        novoTenis.nome,novoTenis.marca,novoTenis.cor,novoTenis.tamanho,
        novoTenis.preco,novoTenis.categoria,novoTenis.estoque
    ])

    return AirMaxTn.insertId;
}

export async function alterarTenis(id, novoTenis) {
    const comando = `
        update tenis
        set nome = ?,
            marca = ?,
            cor = ?,
            tamanho = ?,
            preco = ?,
            categoria = ?,
            estoque = ?
        where id = ?
    `
    const [registros] = await conectionTenis.query(comando, [
        novoTenis.nome,
        novoTenis.marca,
        novoTenis.cor,
        novoTenis.tamanho,
        novoTenis.preco,
        novoTenis.categoria,
        novoTenis.estoque,
        id
    ])
}

export async function deletarTenis(id) {
    const comando = `
        delete from tenis
        where id = ?
    `   
    const [registros] = await conectionTenis.query(comando, [id])
}

export async function filtrarTenisNome(nome) {
    const comando = `
        select *
        from tenis
        where nome like ?
    `
    const [registros] = await conectionTenis.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarTenisId(id) {
    const comando = `
        select *
        from tenis
        where id = ?
    `
    const [registros] = await conectionTenis.query(comando, [id])
    return registros[0]
}