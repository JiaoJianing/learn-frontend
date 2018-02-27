var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello ' + this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	this.name = "sub";
}

//实现继承,Sub 只会继承Base在原型定义的函数
//调用objSub.sayHello()会报错
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

console.log(util.inspect(objBase, true, 2, true));