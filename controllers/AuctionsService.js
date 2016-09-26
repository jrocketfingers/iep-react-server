'use strict';

exports.auctionsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (Double)
  **/

  var examples = {};
  examples['application/json'] = [{
    "bidder" : "aeiou",
    "currentPrice" : "aeiou",
    "id" : "aeiou",
    "title" : "aeiou"
  }];

  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
}
