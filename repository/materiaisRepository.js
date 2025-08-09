import { conectionMateriais } from "../conection.js";

export async function listarMateriais() {
    const comando = `
        select *
            from materiais
    `
    const [registros] = await conectionMateriais.query(comando)

    return registros
}

export async function adicionarMaterial(novoMaterial) {
    const comando = `
        insert into materiais (produto, valor, qtd_estoque, bt_ativo, vendas)
        VALUES (?,?,?,?,?)
    `
    const [registros] = await conectionMateriais.query(comando, [
        novoMaterial.produto, novoMaterial.valor, novoMaterial.qtd_estoque, 
        novoMaterial.bt_ativo, novoMaterial.vendas
    ])

    return registros
}

export async function alterarMaterial(id, novoMaterial) {
    const comando = `
        update materiais
        set produto = ?,
            valor = ?,
            qtd_estoque = ?,
            bt_ativo = ?,
            vendas = ?
        where id_produto = ?
    `
    const [registros] = await conectionMateriais.query(comando, [
        novoMaterial.produto,
        novoMaterial.valor,
        novoMaterial.qtd_estoque,
        novoMaterial.bt_ativo,
        novoMaterial.vendas,
        id
    ])
}

export async function deletarMaterial(id) {
    const comando = `
        delete from materiais
        where id_produto = ?
    `
    const [registros] = await conectionMateriais.query(comando, [id])
}

export async function filtrarMaterialNome(nome) {
    const comando = `
        select*
        from materiais
        where produto like ?
    `
    const [registros] = await conectionMateriais.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarMaterialId(id) {
    const comando = `
        select*
        from materiais
        where id_produto = ?
    `
    const [registros] = await conectionMateriais.query(comando, [id])
    return registros[0]
}