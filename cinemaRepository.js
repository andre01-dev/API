import { conectionCinema } from "./conection.js";

export async function listarFilmes() {
    const comando = `
        select *
            from netflix
    `

    const [registros] = await conectionCinema.query(comando)

    return registros
}

export async function AdicionarFilme(novoFilme) {
    const comando = `
        insert into netflix (nm_filmeserie, gen_filmeserie,dt_lancamento,qtd_horas,
        av_filmeserie)
        VALUES (?,?,?,?,?)
    ` 

    const [registros]= await conectionCinema.query(comando, [
        novoFilme.nm_filmeserie, novoFilme.gen_filmeserie, novoFilme.dt_lancamento,
        novoFilme.qtd_horas,novoFilme.av_filmeserie
    ])

    return registros.insertId
}