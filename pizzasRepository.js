import { conectionPizzas } from "./conection.js";

export async function mostrarCardapio() {
    const comando = `
        select *
            from cardapio
    `

    const [registros] = await conectionPizzas.query(comando)

    return registros
}

export async function adicionarPizza(novaPizza) {
    const comando = `
        insert into cardapio (nome,sabor,valor,qtd_ped,borda)
        VALUES (?,?,?,?,?)
    `

    const [registros] = await conectionPizzas.query(comando, [
        novaPizza.nome, novaPizza.sabor, novaPizza.valor, novaPizza.qtd_ped, novaPizza.borda
    ])

    return registros.insertId
}