const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
  name: { type: String },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  tables: [{ type: Schema.Types.ObjectId, ref: 'Table' }],
  img: { type: String }
})

module.exports = model('Restaurant', restaurantSchema)
