# hanpixel restapi
### koreaisacademy.com 강의 커리큘럼 사이트

# 환경세팅
### Node.js + MongoDB

테스트 웹 URL : http://52.198.201.69

## Node.js 설치

1. AWS web service
2. Ubuntu Server 16.04 LTS (HVM), SSD Volume Type
3. Node.js v6.9.1 LTS
4. Express Use

패키지 저장소 업데이트
```
apt-get update
```

v6.9.1 LTS 설치
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs
```

웹 폴더 생성
```
mkdir -p /var/www/restapi
```

기본 빌드툴 설치
```
apt-get install -y build-essential
```

서버 생성 테스트
```javascript
var http = require("http");

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World\n");
}).listen(80);

console.log("Server running");
```

package.json 파일 생성
```
npm init
```

Express & Ejs 설치 ( npm )
```
npm install express --save
npm install ejs --save
```

## MongoDB 설치

1. AWS web service
2. Ubuntu Server 16.04 LTS (HVM), SSD Volume Type
3. MongoDB
4. Mongoose & Body-parser

MongoDB 설치
```
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
apt-get update -y
apt-get install -y mongodb-org
```

```
npm install mongoose body-parser --save
```