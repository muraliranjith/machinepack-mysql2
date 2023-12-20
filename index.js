// This is a boilerplate file which should not need to be changed.
module.exports = require('machine').pack({
  pkg: require('./package.json'),
  dir: __dirname
});



//... well except for this.
// Also give the driver a `mysql2` property, so that it provides access
// to the `mysql2` library for Node.js. (See http://npmjs.com/package/mysql2)
module.exports.mysql2 = require('mysql2');
