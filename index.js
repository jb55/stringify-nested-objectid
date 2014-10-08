
var traverse = require('traverse');
var through = require('through2').obj;

var exports = module.exports = function(obj) {
  traverse(obj).forEach(function(x){
    if (x && x._bsontype === 'ObjectID') {
      this.update(x.toString());
    }
  });

  return obj;
};

// convenience

exports.pure = function(obj){
  return exports(traverse(obj).clone());
};

exports.stream = function() {
  return through(function(obj, enc, done){
    this.push(exports(obj));
    done();
  });
};

exports.stream.pure = function() {
  return through(function(obj, enc, done){
    this.push(exports.pure(obj));
    done();
  });
};
