import { conectionCinema } from "../conection.js";

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

export async function alterarFilme(id, novosDados) {
    const comando = `
        update netflix
            set nm_filmeserie = ?,
                gen_filmeserie = ?,
                dt_lancamento = ?,
                qtd_horas = ?,
                av_filmeserie = ?
            where id_filmeserie = ?
    `
    const [registros] = await conectionCinema.query(comando, [
        novosDados.nm_filmeserie,
        novosDados.gen_filmeserie,
        novosDados.dt_lancamento,
        novosDados.qtd_horas,
        novosDados.av_filmeserie,
        id
    ])
}

export async function deletarFilme(id) {
    const comando = `
        delete from netflix
            where id_filmeserie = ?
    `
    const [registros] = await conectionCinema.query(comando, [id])
}

export async function listarNomeFilme(nome) {
    const comando = `
        select*
        from netflix
        where nm_filmeserie like ?
    `
    const [registros] = await conectionCinema.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarId(id) {
    const comando = `
        select *
        from netflix
        where id_filmeserie = ?
    `
    const [registros] = await conectionCinema.query(comando, [id])
    return registros[0]
}