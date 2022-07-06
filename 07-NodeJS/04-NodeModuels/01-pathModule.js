//1- 모듈 참조
/*ES5 스타일 모듈 참조
const path = require('path');

ES6 스타일 모듈 참조
- path 라는 모듈의 모든 기능을 path 객체에 부여*/
import path from path;

//2- 경로 합치기
/*파라미터의 제한이 없음
조합된 경로의 문자열에 해당하는 path가 실제로 존재하는지 상관 없다 */

//join(조합해 경로를 합침) =>C:/User/hello/world./photo.jpg
const currentPath= path.join('C:/User/hello/world', 'mypthoto', '../photo.jpg');
console.group('path.join');
console.debug(currentPath);
console.groupEnd();

//3- 경로에서 디렉토리, 파일면 확장자 구분하기
const dirname= path.dirname(currentPath);   //폴더의 위치
const basename= path.basename(currentPath); //파일 이름
const extname= path.extname(currentPath);   //확장자
console.group('경로 분할하기');
console.debug('디렉토리 : %s', dirname);
console.debug('파일 이름 : %s', basename);
console.debug('확장자 : %s', extname);
console.groupEnd();

//4- 경로 정보 파싱
//경로의 성분을 json형태로 한번에 분할
const parse= path.parse(currentPath);   //경로를 조각조각내 리턴되는 객체에 json으로 넣어줌
console.group('경로 정보 파싱')
console.debug('%o', parse);
console.debug('root: ' + parse.root);   //윈도우에서는 값이없다,..?
console.debug('dir : ' + parse.dir);    //파일이 들어있는 폴더
console.debug('name : ' + parse.name);  //파일 이름- 확장자 x
console.debug('ext : ' + parse.ext);    //확장자
console.groupEnd();
