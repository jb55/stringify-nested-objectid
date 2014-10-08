
# stringify-nested-objectid
  
  [![Build Status](https://travis-ci.org/jb55/stringify-nested-objid.svg)](https://travis-ci.org/jb55/stringify-nested-objid)

  toString() aka. toHexString() bson ObjectIDs nested in an object

## Rationale

Seriaizing objects using something other than toJSON (like csvs) will have
weird output if ObjectIds aren't stringified properly first

## Installation

  Install with npm

    $ npm install stringify-nested-objid

## Example

```js
var stringify = require('stringify-nested-objid')

var obj = {
  name: "Bill",
  _id: ObjectID("5435b3affbca420bda59fb4d")
}

// mutate
stringify(obj)

// pure
obj = stringify.pure(obj)

// obj is: { name: 'Bill', _id: '5435b3affbca420bda59fb4d' }
```

## API

### stringify(obj)

takes an object, returns the mutated object

### stringify.pure(obj)

takes an object, makes a clone, and returns the updated cloned object

### stringify.stream()

an object through2 stream that stringifies object ids impurely

### stringify.stream.pure()

an object through2 stream that stringifies object ids purely

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
