var os = require('os');

//- Defaults
exports.jobs = os.cpus().length;
exports.maxArgs = 1;
exports.lineSep = '\n';
exports.quote = false;
exports.trim = false;
exports.pipeMode = false;
exports.src = process.stdin;
exports.eol = '\n';/*os.EOL*/
exports.verbose = false;
exports.shell = false;
// Remaining arguments (the command)
exports._ = null;