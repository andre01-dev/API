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

export async function consultarFunc(id) {
    const comando = `
        select *
            from microsoft
        where id = ?
    `
    const [registros] = await conectionEmpresa.query(comando)
}