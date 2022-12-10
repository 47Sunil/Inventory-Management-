const mongoose = require('mongoose');

const grnSchema = new mongoose.Schema(
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
            default:"GENERATED",
            enum: ['GENERATED', 'COMPLETED', 'COMPLETED']
        },
        invoiceNumber: {
            type: String,
            required: true,
            trim: true
        },
        vendorName: {
            type: String,
            required: true,
            trim: true
        },
        vendorFullAddress: {
            street: {
                type: String
            },
            city: {
                type: String
            },
            pincode: {
                type: String
            }
        },

    },
    { timestamps: true }

)



module.exports = mongoose.model('grns', grnSchema);