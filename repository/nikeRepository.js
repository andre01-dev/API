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