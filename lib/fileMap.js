var path = require('path');
const homedir = require('os').homedir();


var DATA_ROOT = C.data.root;

exports.filePath = function (relPath, decodeURI) {
  if (decodeURI) relPath = decodeURIComponent(relPath);
  if (relPath.indexOf('..') >= 0){
    var e = new Error('Do Not Contain .. in relPath!');
    e.status = 400;
    throw e;
  }
  else {
    // Override default home directory.
    DATA_ROOT = homedir;
    C.logger.info('dir: ' + DATA_ROOT);

    return path.join(DATA_ROOT, relPath);
  }
};
