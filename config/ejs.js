/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com>
 * @date           2017-11-03
 *
 */
var ejs = require('ejs');

// set delimiter for ejs
ejs.delimiter    = '?';
ejs.rmWhitespace = true;
ejs.root         = '/views';

module.exports = ejs;