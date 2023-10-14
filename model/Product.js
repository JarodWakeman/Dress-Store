const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        tpye: Number
    },
    quantity: {
        type: Number
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Product', ProductSchema);