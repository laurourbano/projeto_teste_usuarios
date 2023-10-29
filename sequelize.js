/* eslint-disable no-undef */
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST
});

const Usuarios = sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuarios.create({
    nome: 'Cleber',
    telefone: '123456789',
    email: '123@email.com'
});


sequelize.authenticate().then(function () {
    console.log('Conectado ao banco de dados com sucesso. ' + process.env.DB_NAME);
}).catch(function (erro) {
    console.log('Erro ao conectar com o banco de dados:', erro);
});