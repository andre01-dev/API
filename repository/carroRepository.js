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