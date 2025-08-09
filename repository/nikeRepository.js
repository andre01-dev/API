import { conectionNike } from "../conection.js";

export async function listarRoupas() {
    const comando = `
        select *
            from rp
    `

    const [registros] = await conectionNike.query(comando)

    return  registros
}

export async function adicionarRoupa(novaRoupa) {
    const comando = ` 
        insert into rp (nm_roupa, tm, vl_roupa, qtd_estoque,genero, promo)
        VALUES  (?,?,?,?,?,?)
    `

    const [registros] = await conectionNike.query(comando, [
        novaRoupa.nm_roupa, novaRoupa.tm, novaRoupa.vl_roupa, novaRoupa.qtd_estoque,
        novaRoupa.genero, novaRoupa.promo
    ])

    return registros.insertId
}

export async function alterarRoupa(id, novaRoupa) {
    const comando = `
        update rp
        set nm_roupa = ?,
            tm = ?,
            vl_roupa = ?,
            qtd_estoque = ?,
            genero = ?,
            promo = ?
        where id_lj = ?
    `
    const [registros] = await conectionNike.query(comando, [
        novaRoupa.nm_roupa,
        novaRoupa.tm,
        novaRoupa.vl_roupa,
        novaRoupa.qtd_estoque,
        novaRoupa.genero,
        novaRoupa.promo,
        id
    ])
}

export async function deletarRoupa(id) {
    const comando = `
        delete from rp
        where id_lj = ?
    `
    const [registros] = await conectionNike.query(comando, [id])
}

export async function filtrarRoupaNome(nome) {
    const comando = `
        select *
        from rp
        where nm_roupa like ?
    `
    const [registros] = await conectionNike.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarRoupaId(id) {
    const comando = `
        select*
        from rp
        where id_lj = ?
    `
    const [registros] = await conectionNike.query(comando, [id])
    return registros[0]
}