const express = require('express');
const mongoose = require('mongoose'); // usamos mongoose para conectarnos a MongoDB
const app = express();
const port = 8080;
const hostname = '0.0.0.0';

// Middleware para poder leer JSON
app.use(express.json());

// CONEXION A MONGODB 
mongoose.connect('mongodb://mongodb:27017/bootcamp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error conectando a MongoDB:', err);
});

// MODELO DE USUARIO 
const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number
});

const User = mongoose.model('User', userSchema, 'users'); // 'users' es el nombre exacto de la colección

// RUTA GET: traer todos los usuarios (con filtros)
app.get('/api/get', async (req, res) => {
  try {
    const filtro = {};
    if (req.query.gender) filtro.gender = req.query.gender;
    if (req.query.name) filtro.name = req.query.name;

    const users = await User.find(filtro);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// RUTA PUT: modificar si existe, crear si no existe
app.put('/api/update', async (req, res) => {
  try {
    const { name, gender, age } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Falta el campo "name"' });
    }

    const updateData = { gender, age };

    const existingUser = await User.findOne({ name });

    if (existingUser) {
      await User.updateOne({ name }, updateData);
      return res.status(200).json({ message: 'Usuario actualizado' });
    } else {
      const newUser = new User({ name, gender, age });
      await newUser.save();
      return res.status(201).json({ message: 'Usuario creado' });
    }

  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar o crear el usuario' });
  }
});
// RUTA DELETE: eliminar usuario si existe
app.delete('/api/delete', async (req, res) => {
    try {
      const { name } = req.body;
  
      if (!name) {
        return res.status(400).json({ error: 'Falta el campo "name"' });
      }
  
      const result = await User.deleteOne({ name });
  
      if (result.deletedCount === 0) {
        return res.status(204).send(); // No se encontró el usuario
      } else {
        return res.status(200).json({ message: 'Usuario eliminado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  });
  

// Escuchar en el puerto 8080
app.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}`);
});
