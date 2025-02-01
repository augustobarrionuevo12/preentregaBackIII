// backend-project/src/routes/mocks.router.js
import express from 'express';
import User from '../models/User.js';
import Pet from '../models/Pet.js';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js';

const router = express.Router();

// Endpoint para generar 50 usuarios mockeados
router.get('/mockingusers', async (req, res) => {
  const users = generateMockUsers(50);
  res.json(users);
});

// Endpoint para generar 50 mascotas mockeadas
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(50); // Genera 50 mascotas de ejemplo
  res.json(pets);
});

// Endpoint para generar e insertar datos en la base de datos
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;
  if (!users || !pets) return res.status(400).json({ message: 'Faltan parámetros' });

  try {
    const newUsers = generateMockUsers(users);
    await User.insertMany(newUsers);
    
    const newPets = generateMockPets(pets); // Generar mascotas según el número indicado
    await Pet.insertMany(newPets);

    res.json({ message: 'Datos generados correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los usuarios desde la base de datos
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las mascotas desde la base de datos
router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
