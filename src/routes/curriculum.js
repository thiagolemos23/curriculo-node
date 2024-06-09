const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        endereco: true,
        educacao: true,
        experiencia: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }

});

app.post('/', async (req, res) => {
  const { nome, sobrenome, email, telefone, endereco, educacao, experiencia, tecnologias } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        nome,
        sobrenome,
        email,
        telefone,
        endereco: {
          create: endereco,
        },
        educacao: {
          createMany: {
            data: educacao,
          },
        },
        experiencia: {
          createMany: {
            data: experiencia,
          },
        },
        tecnologias: {
          set: tecnologias,
        },
      },
      include: {
        endereco: true,
        educacao: true,
        experiencia: true,
      },
    });
    res.json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

module.exports = app;