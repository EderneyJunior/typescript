import { Request, Response } from 'express'
import { knex } from '../bancodedados/conexao'
import { Carro } from '../tipos'

export const listarCarros = async (req: Request, res: Response) => {
    try {
        const carros: Carro[] = await knex('carros')
        return res.json(carros)
    } catch (error) {
        return res.status(500).json({ menssagem: 'Erro interno no servidor' })
    }
}

export const detalharCarros = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const carro: Carro = await knex('carros').where({ id: Number(id) }).first()

        if (!carro) {
            return res.status(404).json({ menssagem: 'Carro não encotrado'})
        }

        return res.json(carro)
    } catch (error) {
        return res.status(500).json({ menssagem: 'Erro interno no servidor' })
    }
}

export const cadastrarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, valor } = req.body

    try {
        const carro = await knex<Omit<Carro, 'id'>>('carros')
            .insert({ marca, modelo, cor, ano, valor }).returning('*')
        
        return res.status(201).json(carro[0])
    } catch (error) {
        return res.status(500).json({ menssagem: 'Erro interno no servidor' })
    }
}

export const atualizarCarros = async (req: Request, res: Response) => {
    const { id } = req.params
    const { marca, modelo, cor, ano, valor } = req.body

    try {
        const carro: Carro = await knex('carros').where({ id: Number(id) }).first()

        if (!carro) {
            return res.status(404).json({ menssagem: 'Carro não encotrado'})
        }

        await knex<Carro>('carros')
            .update({ marca, modelo, cor, ano, valor })
            .where({ id: Number(id) })

        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ menssagem: 'Erro interno no servidor' })
    }
}

export const excluirCarros = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const carro: Carro = await knex('carros').where({ id: Number(id) }).first()

        if (!carro) {
            return res.status(404).json({ menssagem: 'Carro não encotrado'})
        }

        await knex('carros').del().where({ id: Number(id) })

        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ menssagem: 'Erro interno no servidor' })
    }
}