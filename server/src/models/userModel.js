const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  favs: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  admin: { type: Boolean },
  table: { type: Number },
  saved: [{
    quantity: { type: Number },
    product: { type: Schema.Types.ObjectId, ref: 'Product' }
  }],
  sent: [{
    quantity: { type: Number },
    product: { type: Schema.Types.ObjectId, ref: 'Product' }
  }]
})

module.exports = model('User', userSchema)
