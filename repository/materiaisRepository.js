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