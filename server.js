'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Database schemas
import User from './models/user';
import Item from './models/item';

const app = express();
const PORT = process.env.PORT || 8181;

// connect to the mongo db
mongoose.connect(`mongodb://tinyhatstore:suchlittlehats@ds019836.mlab.com:19836/bryandb`);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'Hi this works cool right?'});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
