var http = require('http');

http.createServer(function(req, res){
    console.log(req, res);

    var pathName = req.url;

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    if(pathName == '/username'){
        res.write("<h1>");
        res.end("이름 : 홍길동 </h1>");
    }else if(pathName == '/tel'){
        res.end("<h2 style == 'color'> 연락처:010-4597-5555</h2>");
    }else if(pathName == '/adress'){
        res.end("<h3>주소 : 부산시 중구 광복동 꺄아아악 </h3>");
    }else{
        res.end("404 Page Not Found!")
    }

}).listen(10005, function(){
    console.log('server start....  http://127.0.0.1:10005');
    console.log('server start....  http://127.0.0.1:10005/username');
    console.log('server start....  http://127.0.0.1:10005/tel');
    console.log('server start....  http://127.0.0.1:10005/address');
});