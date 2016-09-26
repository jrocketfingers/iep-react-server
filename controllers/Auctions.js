'use strict';

var url = require('url');


var Auctions = require('./AuctionsService');


module.exports.auctionsGET = function auctionsGET (req, res, next) {
  Auctions.auctionsGET(req.swagger.params, res, next);
};
