import { conectionEmpresa } from "../conection.js";

export async function listarFuncionarios() {
    const comando = `
        SELECT *
            FROM func
    `

    const [registros] = await conectionEmpresa.query(comando)

    return registros
}

export async function inserirFuncionario(novoFunc) {
    const comando = `
        INSERT INTO func (nome,setor,idade,salario,contratacao) 
        VALUES (?,?,?,?,?)
    `

    const [registros] = await conectionEmpresa.query(comando, [
        novoFunc.nome, novoFunc.setor, novoFunc.idade, novoFunc.salario, novoFunc.contratacao
    ])

    return registros.insertId
}

export async function alterarFuncionario(id, novoFunc) {
    const comando = `
        update func
        set nome = ?,
            setor = ?,
            idade = ?,
            salario = ?,
            contratacao = ?
        where id = ?
    `
    const [registros] = await conectionEmpresa.query(comando, [
        novoFunc.nome,
        novoFunc.setor,
        novoFunc.idade,
        novoFunc.salario,
        novoFunc.contratacao,
        id
    ])

}

export async function deletarFunc(id) {
    const comando = `
        delete from func
        where id = ?
    `
    const [registros] = await conectionEmpresa.query(comando, [id])
}

export async function filtrarFuncNome(nome) {
    const comando = `
        select*
        from func
        where nome like ?
    `
    const [registros] = await conectionEmpresa.query(comando, ['%'+nome+'%'])
    return registros
}

export async function filtrarFuncId(id) {
    const comando = `
        select*
        from func
        where id = ?
    `
    const [registros] = await conectionEmpresa.query(comando, [id])
    return registros[0]
}