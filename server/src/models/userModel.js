const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  favs: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  admin: { type: Boolean },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
})

module.exports = model('User', userSchema)
