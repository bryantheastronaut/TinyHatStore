'use strict';

import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: String,
  slug: String,
  imgUrl: String,
  description: String,
  price: Number
});

ItemSchema.methods.slugify = text => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

module.exports = mongoose.model('Item', ItemSchema);
