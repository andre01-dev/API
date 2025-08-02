import express from 'express'

import { AdicionarFilme, listarFilmes } from './cinemaRepository.js';
import { adicionarDesenho, listarDesenhos } from './desenhoRepository.js';
import { inserirFuncionario, listarFuncionarios } from './empresaRepository.js';
import { adicionarPizza, mostrarCardapio } from './pizzasRepository.js';
import { listarTenis, inserirTenis } from './tenisRepository.js';
import { adicionarViagem, listarViagem } from './viagemRepository.js';
import { adicionarRoupa, listarRoupas } from './nikeRepository.js';
import { adicionarVeiculo, listarVeiculos } from './carroRepository.js';
import { adicionarMaterial, listarMateriais } from './materiaisRepository.js';
import { adicionarProdutos, listarProdutos } from './produtosRepository.js';

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