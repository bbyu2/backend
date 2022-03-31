var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    //                                 콜백함수
    fs.readFile(__dirname+'/img/7.jpg',function(e, imgSrc){
        if(!e){     // 에러가 아닐 경우
            res.writeHead(200, {'Content-Type':'image/jpeg'});
            res.write(imgSrc);
            res.end();
        }
    });
});

server.listen(10006, function(){
    console.log('server start...        http://127.0.0.1:10006');
});