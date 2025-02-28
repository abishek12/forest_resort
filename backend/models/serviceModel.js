// models/Service.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: true, // Default to true, meaning the service is open
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
