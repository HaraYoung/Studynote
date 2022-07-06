console.group('First');
/*개발 단계에서 부수적인 데이터를 출력하고자 할때 사용함
-> 제품을 배포할때 로그는 웬만하면 삭제 후 배포하는것이 좋다
    무언가 출력한다는 것은 성능에 영향을 줄수 있다.
    정말 필요한 로그가 아니면 다 지우고 배포하는것이 중요함*/
console.log('Hello world');

/*개발자가 변수의 값을 확인하기 위한 용도로 사용되는 출력
-> 통상적으로 console.log와 크게 구분하지 않음*/
console.debug('Hello world');

//시스템의 정보를 출력할때 사용. 개발 단계에서는 지우고 배포하는것이 좋음
console.info('Hello world');

//정보 단계(에러는 아니지만 정상적이지 않다고 판단되는 경우)
console.warn('Hello world');

//에러 심각할 경우, 예상하지 못한 에러, 시스템 에러
console.error('Hello world');

console.groupEnd();

//파일 위치에서 명령프롬프트 실행 후 'node 파일이름.js' 입력