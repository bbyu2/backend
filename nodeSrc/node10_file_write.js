var fs = require('fs');

// 1. 비동기식으로 파일쓰기
var writeData = "비동기식으로 파일로 쓰기 연습중 \r\n 줄바꿈 확인하기...";

fs.writeFile(__dirname+'/file_write.txt', writeData, 'utf-8', function(){
    if(error){
        console.log("비동기식으로 쓰기 실패"+error);
        console.log("비동기식으로 파일쓰기 성공~")
    }
});
