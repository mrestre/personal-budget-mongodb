const mongoose = require("mongoose")


const budgetSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    budget: {
        type: Number,
        required: true,
    },

    color: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^#([A-FA-f0-9]{6})$/.test(value);
            },
            message: "Color is not valid hexadecimal",
        },
        
    },
}, { collection: 'budgetCollection'});

module.exports = mongoose.model('budgetCollection', budgetSchema);