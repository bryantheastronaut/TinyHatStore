'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Database schemas
import User from './models/user';
import Item from './models/item';

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8181;

// connect to the mongo db
mongoose.connect(`mongodb://tinyhatstore:suchlittlehats@ds019836.mlab.com:19836/bryandb`);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({message: 'Hi this works cool right?'});
});

router.route('/items')
  .get((req, res) => {
    Item.find((err, items) => {
      if (err) res.send(err);
      res.json(items);
    });
  })
  .post((req, res) => {
    let item = new Item();
    item.title = req.body.title;
    item.slug = item.slugify(req.body.title);
    item.imgUrl = req.body.imgUrl;
    item.description = req.body.description;
    item.price = req.body.price;

    item.save(err => {
      if (err) throw err;
      res.json({message: 'saved item!'});
    });
  });

  router.route('/items/:slug')
    .get((req, res) => {
      Item.findOne({'slug': req.params.slug}, (err, item) => {
        if (err) res.json({message: 'Error: item not found'});
        res.json(item);
      });
    });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
