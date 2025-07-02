const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",      // 👈 यह User Model को reference करेगा
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  mood: {
      type: String,
      
    required: true ,
  },
  symptoms: {
    type: [String],   
    default: [],
  },
  energy: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    default: "",
  },
  normal: {
    type: Boolean,
    default: false, // 👈 अगर user ने बोला "I'm feeling good", तो true होगा
  }
}, {
  timestamps: true  // 👈 createdAt, updatedAt मिलेंगे
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
