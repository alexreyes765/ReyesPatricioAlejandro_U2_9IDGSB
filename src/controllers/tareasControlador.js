import Tarea from '../models/tarea.js';

export const obtenerTareas = async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
};

export const crearTarea = async (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo) return res.status(400).json({ error: 'El título es obligatorio' });

  const nuevaTarea = new Tarea({ titulo, descripcion });
  await nuevaTarea.save();
  res.status(201).json({
    mensaje: 'Tarea creada correctamente',
    Tarea: nuevaTarea});
};

export const actualizarTarea = async (req, res) => {
  const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!tareaActualizada) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json({
    mensaje: 'Tarea actualizada correctamente',
    Tarea: tareaActualizada});
};

export const eliminarTarea = async (req, res) => {
  const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
  if (!tareaEliminada) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(200).json({
    mensaje: 'Tarea eliminada correctamente',
  });
};
