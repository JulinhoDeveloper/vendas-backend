const { Schema, model } = require('mongoose');

const categoriaSchema = Schema({
    name: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
        
    },
    description: {
        type: String,
        maxlength: 255,
    },
    state: {
        type: Number,
        default: 1  
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});


module.exports = model('Categoria', categoriaSchema );