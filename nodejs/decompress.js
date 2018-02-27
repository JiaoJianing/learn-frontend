var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz 文件为input.txt
fs.createReadStream('compress.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('decompres.txt'));
	
console.log('文件解压完成。');