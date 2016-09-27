'use strict';

var db = require('../db');

exports.auctionsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (Double)
  **/

  var collection = db.get().collection('auctions');

  var filters = [];

  if(args.size.value !== undefined)
    filters.push({ $limit: parseInt(args.size.value) });

  collection.aggregate(filters).toArray(function(err, auctions) {
    if(err) throw err;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(auctions));
  });
}
