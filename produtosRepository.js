import { conectionProduto } from "./conection.js";

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