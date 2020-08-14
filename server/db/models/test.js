const mongoose = require('mongoose')
const Schema = mongoose.Schema

const test = new Schema({
  "img_url":String
})
console.log(111111111, 'test')
module.exports = mongoose.model('Test', test)