import express from 'express';
import mysql2 from 'mysql2';
import mongoose from 'mongoose';

const app = express();




// Endpoint de verificación de conexión a MariaDB
app.get('/check-mysql-connection', async (req, res) => {
  try {
    const connection = await mysql2.createConnection({
        host: 'database',
        user: 'root',
        password: 'password',
        database: 'ramiroXD',
      });

    await connection.end();
    console.log('Conexion exitosa a Mysql')
    res.send('Conexión exitosa a Mysql');
  } catch (error) {
    console.error('Error de conexión a Mysql:', error);
    res.status(500).send('Error de conexión a Mysql');
  }
});

// Endpoint de verificación de conexión a MongoDB
app.get('/check-mongodb-connection', (req, res) => {
  mongoose
    .connect('mongodb+srv://Ramiro:ramiropro12@cluster0.cdwqxrf.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conexión exitosa a MongoDB');
      res.send('Conexión exitosa a MongoDB');
    })
    .catch((error) => {
      console.error('Error de conexión a MongoDB:', error);
      res.status(500).send('Error de conexión a MongoDB');
    });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});