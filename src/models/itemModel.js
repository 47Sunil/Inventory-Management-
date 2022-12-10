const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema(
    {

        id: {
            type: Number,
            required: true,
            trim: true
        },

        deleted: {
            type: Boolean,
            default: false
        },

        productName: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        quantity: {
            type: Number,
            required: true,
            trim: true
        },
        sellPrice: {
            type: Number,
            required: true,
            trim: true
        }
    },
    { timestamps: true }

)

module.exports = mongoose.model("items", itemSchema);