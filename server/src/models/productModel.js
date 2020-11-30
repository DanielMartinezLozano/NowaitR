
const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  name: { type: String },
  category: { type: String },
  price: { type: Number },
  img: { type: String }
})

module.exports = model('Product', productSchema)
