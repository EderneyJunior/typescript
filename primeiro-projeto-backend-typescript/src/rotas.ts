import { Router } from 'express'
import { atualizarCarros, cadastrarCarros, detalharCarros, excluirCarros, listarCarros } from './controladores/carros'

const rotas = Router()

// Listar carros
// Detalhar carro
// Cadastrar carro
// Atualização de um carro
// Exclusão de um carro

rotas.get('/carros', listarCarros)
rotas.get('/carros/:id', detalharCarros)
rotas.post('/carros', cadastrarCarros)
rotas.put('/carros/:id', atualizarCarros)
rotas.delete('/carros/:id', excluirCarros)

export default rotas