var fs = require('fs');

// 1. 비동기식으로 파일 쓰기
var writeData = "비동기식으로 파일 쓰기 연습중 \r\n 줄바꿈 확인하기...";
//          파일명                      ,  쓰기할 내용 , 인코딩 , 콜백함수
fs.writeFile(__dirname+'/file_write.txt', writeData , 'utf-8', function(error){
    if(error){
        console.log("비동기식으로 쓰기 실패..."+error);
    }else{
        console.log("비동기식으로 파일 쓰기 성공!!!");
    }
});

// 2. 동기식으로 파일 쓰기
var writeDataSync = "동기식으로 파일 쓰기 연습중 \r\n줄바꿈 한 번 더 확인!!";
try{    //                경로+파일명               쓸 내용         인코딩
    fs.writeFileSync(__dirname+"/file_write2.txt", writeDataSync, 'utf-8');
    console.log('동기식 쓰기 성공입니다용~~!');
}catch(error){  // 에외(에러)처리
    console.log('동기식 쓰기 에러 발생...'+error);
}