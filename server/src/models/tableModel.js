export {}
const { Schema, model } = require('mongoose')

const tableSchema = new Schema({
  number: { type: Number },
  pending: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  served: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  occupied: { type: Boolean }
})

module.exports = model('Table', tableSchema)
