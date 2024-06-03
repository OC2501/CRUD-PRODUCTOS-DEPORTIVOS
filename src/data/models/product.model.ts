import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        price:{
            type: Number,
            required: [true, 'price is required'],
        },
        description:{
            type: String,
        },
        img:{
            type: String,
        },
        category:{
            type: mongoose.Types.ObjectId,
            ref: 'Category',
            required: [true, 'category is required'],
        },
    });

export const ProductModel = mongoose.model('Product', productSchema);