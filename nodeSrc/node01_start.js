// nodejs : 이벤트기반 서버 프레임워크이다.
// 모듈을 객체로 생성하여 사용할 수 있다.

//1. 서버 생성하기 : http 모듈을 이용하여 server생성
//http 모듈을 객체로 생성하기
var http = require('http');

//2. http 객체를 이용하여 서버 만들기
 var server = http.createServer(function(request, response){
    // 접속자에게 응답하기

    // 헤더 정보 보내기
    response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    // 컨텐츠 보내기
    response.write("<h1>노드서버에서 보낸 컨텐츠</h1>");
    response.write("http모듈을 이용하여 객체를 생성후 server를 생성함");
    // 종료 정보보내기
    response.end(("End...."))
});

//3. 접속대기  port  콜백함수
server.listen(10000, function(){
    console.log("server start.......... http://127.0.0.1:10000");
});


