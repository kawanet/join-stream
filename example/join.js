var joinStream = require('../');
var split = require('es').split;

process.stdin
    .pipe(split())
    .pipe(joinStream(','))
    .pipe(process.stdout)
;
