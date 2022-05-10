import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const livros = connection.define('livros', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome_livro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
    },
    ano_lancamento: {
        type: Sequelize.STRING,
    },
    total_paginas: {
        type: Sequelize.STRING,
    },
    nome_autor: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
})


const initTable = async () => {
    try {
        await livros.sync()
    } catch (error) {
        return error.message
    }
}

initTable()