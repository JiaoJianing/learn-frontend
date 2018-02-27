//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log('连接成功。');
	
	//触发 data_received事件
	eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);

//匿名函数绑定data_received事件
eventEmitter.on('data_received', function(){
	var i = 0;
	while(i<10){
		console.log('数据接收成功。');
		i++;
	}
})

eventEmitter.on('error', function(err){
	console.log(err);
});

//触发connection事件
eventEmitter.emit('connection');

//console.log(eventEmitter.listeners('connection'));

eventEmitter.emit('error', "test error");

console.log('程序执行完毕。');