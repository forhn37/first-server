const http = require('http');
// 프로토콜하나 가져옴

http.createServer(function(request, response){
    let writeHeadObject = {
        'Content-Type': 'text/html'
    }
    response.writeHead(200, writeHeadObject);
    // 200 : ok사인
    response.end("hello");
    // 끊어버림, 응답을 종료한다. 
}).listen(8080);
// localhost의 이름이 8080이므로, 브라우저에 들어갈때 localhost:8080 요렇게 들어가는 거임
// 첫번째 매개변수 요청, 두번째 매개변수 응답

