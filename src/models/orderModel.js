

const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema(
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

        status: {
            type: String,
            require: true,
            default: "GENERATED",
            enum: ['GENERATED', 'COMPLETED', 'COMPLETED']
        },
        invoiceNumber: {
            type: String,
            required: true,
            trim: true
        },
        customerName: {
            type: String,
            required: true,
            trim: true
        },
        customerFullAddress: {
            type: String,
            required: true,
            trim: true
        },

       
    },

    { timestamps: true }

)

module.exports = mongoose.model("order", orderSchema);
