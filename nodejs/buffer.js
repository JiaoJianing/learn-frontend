
var buf = Buffer.alloc(26);
for(var i=0; i<26;i++){
	buf[i] = i + 97;
}

// console.log(buf.toString('ascii'));

// console.log(buf.toJSON());
// console.log(JSON.stringify(buf));

var buffer1 = Buffer.from(('buffer1'));
var buffer2 = Buffer.from(('buffer2'));
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log(buffer3.toString());