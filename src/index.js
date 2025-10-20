import express from 'express';
import connectDB from './config/db.js';
import tareasRoutes from './routes/tareas.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api/tareas', tareasRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Lista de Tareas funcionando');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
