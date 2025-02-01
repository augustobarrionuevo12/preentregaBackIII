import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number,
});

export default mongoose.model('Pet', PetSchema);