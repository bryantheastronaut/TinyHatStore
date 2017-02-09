'use strict';

import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: String,
  imgUrl: String,
  description: String,
  price: Number
});

module.exports = mongoose.model('Item', ItemSchema);
