import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  realizado: { type: Boolean, default: false }
}, { timestamps: true });

const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;