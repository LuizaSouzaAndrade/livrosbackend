const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: [true, "O título é obrigatório"], trim: true },
    autor: { type: String, required: [true, "O autor é obrigatório"], trim: true },
    ano: { type: Number, min: [0, "O ano não pode ser negativo"] },
    lido: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Livro", livroSchema);
