import { conectionCarro } from "../conection.js";

export async function listarVeiculos() {
    const comando = `
        select *
            from carros2
    `

    const [registros] = await conectionCarro.query(comando)
    
    return registros
}

export async function adicionarVeiculo(novoVeiculo) {
    const comando = `
        INSERT INTO carros2 (Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado) 
        VALUES (?,?,?,?,?,?)
    `

    const [registros] = await conectionCarro.query(comando, [
        novoVeiculo.Valor, novoVeiculo.Placa, novoVeiculo.modelo, 
        novoVeiculo.ano_fabricacao, novoVeiculo.cor, novoVeiculo.ar_condicionado
    ])

    return registros.insertId
}

export async function alterarCarro(id, novoCarro) {
    const comando = `
        update carros2
        set Valor = ?,
            Placa = ?,
            modelo = ?,
            ano_fabricacao = ?,
            cor = ?,
            ar_condicionado = ?
        where id = ?
    `
    const [registros] = await conectionCarro.query(comando, [
        novoCarro.Valor,
        novoCarro.Placa,
        novoCarro.modelo,
        novoCarro.ano_fabricacao,
        novoCarro.cor,
        novoCarro.ar_condicionado,
        id
    ])
}

export async function deletarCarro(id) {
    const comando = `
        delete from carros2
        where id = ?
    `
    const [registros] = await conectionCarro.query(comando, [id])
}

export async function filtrarCarroNome(nome) {
    const comando = `
        select*
        from carros2
        where modelo like ?
    `
    const [registros] = await conectionCarro.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarCarroId(id) {
    const comando = `
        select*
        from carros2
        where id = ?
    `
    const [registros] = await conectionCarro.query(comando, [id])
    return registros[0]
}