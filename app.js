import express from 'express'

import { AdicionarFilme, alterarFilme, deletarFilme, filtrarId, listarFilmes, listarNomeFilme } from './repository/cinemaRepository.js';
import { adicionarDesenho, listarDesenhos } from './repository/desenhoRepository.js';
import { inserirFuncionario, listarFuncionarios } from './repository/empresaRepository.js';
import { adicionarPizza, alterarPizza, deletarPizza, filtrarPizzaId, filtrarPizzaNome, mostrarCardapio } from './repository/pizzasRepository.js';
import { listarTenis, inserirTenis } from './repository/tenisRepository.js';
import { adicionarViagem, alterarViagem, deletarViagem, filtrarViagemId, filtrarViagemNome, listarViagem } from './repository/viagemRepository.js';
import { adicionarRoupa, listarRoupas } from './repository/nikeRepository.js';
import { adicionarVeiculo, listarVeiculos } from './repository/carroRepository.js';
import { adicionarMaterial, listarMateriais } from './repository/materiaisRepository.js';
import { adicionarProdutos, listarProdutos } from './repository/produtosRepository.js';

const api = express();
api.use(express.json());

// ---------------------------------------------- \\

api.get('/tenis', async (req,resp) => {
    let registros = await listarTenis();

    resp.send(registros)
})

api.post('/tenis', async (req,resp) => {
    let novoTenis = req.body;

    let id = await inserirTenis(novoTenis);

    resp.send({novoID: id});
})

// ---------------------------------------------- \\

api.get('/funcionario', async (req,resp) => {
    let registros = await listarFuncionarios()

    resp.send(registros)
})

api.post('/funcionario', async (req,resp) => {
    let registros = req.body

    let id = await inserirFuncionario(registros)

    resp.send({novoID: id})
})

// ---------------------------------------------- \\

api.get('/desenhos', async (req,resp) => {
    let registros = await listarDesenhos()

    resp.send(registros)
})

api.post('/desenhos', async (req,resp) => {
    let registros = req.body;

    let id = await adicionarDesenho(registros)

    resp.send({novoID: id})
})

// ---------------------------------------------- \\

api.get('/cinema', async (req,resp) => {
    let registros = await listarFilmes()

    resp.send(registros)
})

api.post('/cinema', async (req,resp) => {
    let registros = req.body;

    let id = await AdicionarFilme(registros)

    resp.send({novoID: id})
})

api.put('/cinema/:id', async (req,resp) => {
    let id = req.params.id;
    let novosDados = req.body;

    await alterarFilme(id, novosDados);
    resp.send()
})

api.delete('/cinema/:id', async (req,resp) => {
    let id = req.params.id;

    await deletarFilme(id);

    resp.send()
})

api.get('/cinema/filtro/nome', async (req,resp) => {
    let nome = req.query.nome;
    let registros = await listarNomeFilme(nome);
    resp.send(registros)
})

api.get('/cinema/filtrar/:id', async (req,resp) => {
    let id = Number(req.params.id);
    let registros = await filtrarId(id);
    resp.send(registros)
})

// ---------------------------------------------- \\

api.get('/pizzaria', async (req,resp) => {
    let registros = await mostrarCardapio()

    resp.send(registros)
})

api.post('/pizzaria', async (req,resp) => {
    let registros = req.body;

    let id = await adicionarPizza(registros)

    resp.send({novoID: id})
})

api.put('/pizzaria/:id', async (req, resp) => {
    let id = req.params.id;
    let novaPizza = req.body;

    await alterarPizza(id, novaPizza)
    resp.send()

})

api.delete('/pizzaria/:id', async (req, resp) => {
    let id = req.params.id

    await deletarPizza(id)
    resp.send()
})

api.get('/pizzaria/filtrar', async (req,resp) => {
    let nome = req.query.nome;
    let registros = await filtrarPizzaNome(nome)
    resp.send(registros)
})

api.get('/pizzaria/filtrar/:id', async (req,resp) => {
    let id = req.params.id;
    let registros = await filtrarPizzaId(id)
    resp.send(registros)
})

// ---------------------------------------------- \\

api.get('/viagem', async (req,resp) => {
    const registros = await listarViagem()

    resp.send(registros)

})

api.post('/viagem', async (req,resp) => {
    let registros = req.body;

    let id = await adicionarViagem(registros)

    resp.send({novoID: id})
})

api.put('/viagem/:id', async (req,resp) => {
    let id = req.params.id;
    let novaViagem = req.body;
    await alterarViagem(id, novaViagem)
    resp.send()
})

api.delete('/viagem/:id', async (req,resp) => {
    let id = req.params.id;
    await deletarViagem(id)
    resp.send()
})

api.get('/viagem/filtrar', async (req,resp) => {
    let nome = req.query.nome;
    let registros = await filtrarViagemNome(nome);
    resp.send(registros)
})

api.get('/viagem/filtrar/:id', async (req,resp) => {
    let id = req.params.id;
    let registros = await filtrarViagemId(id);
    resp.send(registros)
})
// ---------------------------------------------- \\

api.get('/roupas', async (req,resp) => {
    let registros = await listarRoupas()

    resp.send(registros)
})

api.post('/roupas', async (req, resp) => {
    let registros = req.body

    let id = await adicionarRoupa(registros)

    resp.send({novoID: id})
})

// ---------------------------------------------- \\

api.get('/carro', async (req, resp) => {
    let registros = await listarVeiculos()

    resp.send(registros)
})

api.post('/carro', async (req,resp) => {
    let registros = req.body;

    let id = await adicionarVeiculo(registros)

    resp.send({novoID: id})
})

// ---------------------------------------------- \\

api.get('/materiais', async (req,resp) => {
    let registros = await listarMateriais()

    resp.send(registros)
})

api.post('/materiais', async (req,resp) => {
    let registros = req.body

    let id = await adicionarMaterial(registros)

    resp.send({novoID: id})
})

// ---------------------------------------------- \\

api.get('/produtos', async (req,resp) => {
    let registros = await listarProdutos()

    resp.send(registros)
})

api.post('/produtos', async (req,resp) => {
    let registros = req.body

    let id = await adicionarProdutos(registros)

    resp.send({novoID: id})
})

// ---------------------------------------------- \\

api.listen(5010, () => console.log("API subiu com sucesso"));