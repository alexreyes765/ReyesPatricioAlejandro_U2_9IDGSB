import express from 'express';
import {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea
} from '../controllers/tareasControlador.js';

const router = express.Router();

router.get('/', obtenerTareas);
router.post('/', crearTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

export default router;