import { conectionPizzas } from "../conection.js";

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

export async function alterarPizza(id, novaPizza) {
    const comando = `
        update cardapio
            set nome = ?,
                sabor = ?,
                valor = ?,
                qtd_ped = ?,
                borda = ?
            where id_pizza = ?
    `
    const [registros] = await conectionPizzas.query(comando, [
        novaPizza.nome,
        novaPizza.sabor,
        novaPizza.valor,
        novaPizza.qtd_ped,
        novaPizza.borda,
        id
    ])
}

export async function deletarPizza(id) {
    const comando = `
        delete from cardapio
        where id_pizza = ?
    `
    const [registros] = await conectionPizzas.query(comando, [id])
}

export async function filtrarPizzaNome(nome) {
    const comando = `
        select *
        from cardapio
        where nome like ?
    `
    const [registros] = await conectionPizzas.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarPizzaId(id) {
    const comando = `
        select *
        from cardapio
        where id_pizza = ?
    `
    const [registros] = await conectionPizzas.query(comando, [id])
    return registros[0]
}