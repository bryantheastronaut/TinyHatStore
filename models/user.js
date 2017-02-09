'use strict';

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  zipCode: Number
});

module.exports = mongoose.model('User', UserSchema);
