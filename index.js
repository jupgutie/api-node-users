const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// Obtener usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// Crear usuario
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});