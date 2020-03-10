const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        brand: { type: String, required: true },
        model: { type: String, required: false },
        size: { type: String, required: true },
        prize: { type: Number, required: true },
        rating: { type: Number, required: false },
        description: { type: String, required: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model('products', Product);
