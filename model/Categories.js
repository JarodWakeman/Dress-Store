const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatergoriesSchema = new Schema({
    name: {
        tpye: String
    }
});

module.exports = mongoose.model('Categories', CatergoriesSchema);