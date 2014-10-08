
var expect = require('expect.js');
var stringify = require('./');
var ObjectID = require('bson').ObjectID;

describe('objectId stringify', function(){
  it('works impurely', function(){
    var obj = { name: 'Bill', _id: ObjectID("5435b3affbca420bda59fb4d") };
    stringify(obj);

    expect(obj._id).to.be.a('string');
  });

  it('works purely', function(){
    var obj = { name: 'Bill', _id: ObjectID("5435b3affbca420bda59fb4d") };
    var newObj = stringify.pure(obj);

    expect(obj._id).to.not.be.a('string');
    expect(newObj._id).to.be.a('string');
  });
});
