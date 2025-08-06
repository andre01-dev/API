import { conectionViagem } from "../conection.js";

export async function listarViagem() {
    const comando = `
        select *
            from viagem1
    `

    const [registros] = await conectionViagem.query(comando)
    
    return registros
}

export async function adicionarViagem(novaViagem) {
    const comando = `
        insert into viagem1 (pont_turistico, pais, vl_passagem, partida, transporte,nt_avaliacao)
        VALUES (?,?,?,?,?,?)
    `
    const [registros] = await conectionViagem.query(comando, [
        novaViagem.pont_turistico, novaViagem.pais, novaViagem.vl_passagem, 
        novaViagem.partida, novaViagem.transporte, novaViagem.nt_avaliacao
    ])

    return registros.insertId
}

export async function alterarViagem(id, novaViagem) {
    const comando = `
        update viagem1
        set pont_turistico = ?,
            pais = ?,
            vl_passagem = ?,
            partida = ?,
            transporte = ?,
            nt_avaliacao = ?
            where id_viagem = ?
    `
    const [registros] = await conectionViagem.query(comando, [
        novaViagem.pont_turistico,
        novaViagem.pais,
        novaViagem.vl_passagem,
        novaViagem.partida,
        novaViagem.transporte,
        novaViagem.nt_avaliacao,
        id
    ])
}

export async function deletarViagem(id) {
    const comando = `
        delete from viagem1
        where id_viagem = ?
    `
    const [registros] = await conectionViagem.query(comando, [id])
}

export async function filtrarViagemNome(nome) {
    const comando = `
        select*
        from viagem1
        where pont_turistico like ?
    `
    const [registros] = await conectionViagem.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarViagemId(id) {
    const comando = `
        select*
        from viagem1
        where id_viagem = ?
    `
    const [registros] = await conectionViagem.query(comando, [id])
    return registros[0]
}