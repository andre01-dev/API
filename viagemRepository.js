import { conectionViagem } from "./conection.js";

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