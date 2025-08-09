import { conectionProduto } from "../conection.js";

export async function listarProdutos() {
    const comando = `
        select *
            from produtos
    `

    const [registros] = await conectionProduto.query(comando)

    return registros
}

export async function adicionarProdutos(novoProduto) {
    const comando = `
        INSERT INTO produtos (nome_produto, preco) 
        VALUES (?,?)
    `

    const [registros] = await conectionProduto.query(comando, [
        novoProduto.nome_produto, novoProduto.preco
    ])

    return registros.insertId
}

export async function alterarProduto(id, novoProduto) {
    const comando = `
        update produtos
        set nome_produto = ?,
            preco = ?
        where id_produto = ?
    `
    const [registros] = await conectionProduto.query(comando, [
        novoProduto.nome_produto,
        novoProduto.preco,
        id
    ])
}

export async function deletarProduto(id) {
    const comando = `
        delete from produtos
        where id_produto = ?
    `
    const [registros] = await conectionProduto.query(comando, [id])
}

export async function filtrarProdutoNome(nome) {
    const comando = `
        select*
        from produtos
        where nome_produto like ?
    `
    const [registros] = await conectionProduto.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarProdutoId(id) {
    const comando = `
        select*
        from produtos
        where id_produto = ?
    `
    const [registros] = await conectionProduto.query(comando, [id])
    return registros[0]
}