import mysql from 'mysql2/promise'

const conectionTenis = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tenis'
})

const conectionEmpresa = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'business'
})

const conectionDesenho = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cartoon'
})

const conectionCinema = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'netflix'
})

const conectionPizzas = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pizzas'
})

const conectionViagem = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Viagem'
})

const conectionNike = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nike'
})

const conectionCarro = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'auto'
})

const conectionMateriais = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'materiais'
})

const conectionProduto = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'loja'
})

export {
    conectionTenis, conectionEmpresa, conectionDesenho, conectionCinema, 
    conectionPizzas, conectionViagem, conectionNike, conectionCarro, conectionMateriais, conectionProduto
    }
