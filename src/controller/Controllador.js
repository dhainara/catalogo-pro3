import { connection } from '../database/connection.js'
import { livros } from '../model/livros.js'

export const getIndex = async (req, res) => {
    try {
        const listLivros = await livros.findAll({
        onder: [("genero", "ASC"), ("total_paginas", "ASC")]
        })
        
        res.render('index.ejs', {listLivros})
    } catch (error) {
        res.send(error.message)
    }
}


export const getDetalhes = async (req, res) => {
    try {
        console.log(req.params.id)
        const livrosDetalhes = await livros.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            livrosDetalhes
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await livros.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs')
}

export const postCriar = async (req, res) => {
    try {
        const { nome_livro, genero, img, ano_lancamento, total_paginas, nome_autor, descricao } = req.body
        let toggle = false
        if (!nome_livro || !genero || !img || !ano_lancamento || !total_paginas || !nome_autor || !descricao) {
            res.send('Todos os campors são obrigatórios!')
        } else {
            await livros.create(req.body)
            res.render('criar.ejs', {
                toggle
            })
        }
        
        
    } catch (error) {
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const livrosAtual = await livros.findByPk(req.params.id)
        res.render('editar.ejs', {
            livrosAtual
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const { nome_livro, genero, img, ano_lancamento, total_paginas, nome_autor, descricao } = req.body
        await livros.update({
            nome_livro: nome_livro,
            genero: genero,
            img: img,
            ano_lancamento: ano_lancamento,
            total_paginas: total_paginas,
            nome_autor: nome_autor,
            descricao: descricao
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}
