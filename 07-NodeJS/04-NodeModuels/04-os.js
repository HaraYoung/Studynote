//1- os모듈 참조
import os from 'os';

//2- 시스템의 기본 정보
console.group('시스템의 기본 정보');
console.debug('홈 디렉토리 :'+ os.homedir());
console.debug('시스템 아키텍쳐 :'+ os.arch());
console.debug('os 플랫폼 :'+ os.platform());
console.debug('시스템의 hostname : %s', os.hostname());
console.debug();
console.groupEnd();

//3- 사용자 계정 정보
const userInfo= os.userInfo();
console.group('사용자 계정 정보');
console.debug('사용자 계정명 :'+ userInfo.username);
console.debug('사용자 홈 디렉토리 :'+ userInfo.homedir);
console.debug('사용자 쉘 환경 :'+ userInfo.shell);
console.debug();
console.groupEnd();

//4- 메모리 용량
console.group('메모리 용량');
console.debug('시스템의 메모리: %d(free)/ %d(total)', os.freemem(), os.totalmem());
console.debug();
console.groupEnd();

//5- CPU 정보 - 쿼드 코어: 4개, 듀얼코어: 5개
//중요한 이유-코어 갯수에 따라 동시에 처리할수 있는 프로그램 갯수가 정해짐
const cpus= os.cpus();
console.group('메모리 용량');
console.debug('CPU 코어 수'+ cpus.length);
cpus.map((v,i)=> {
    console.group('[%d번째 CPU] %s', i+ 1, v.model);
    console.debug('처리 속도: %d', v.speed);
    console.debug('수행시간 정보: %j', v.times);
    console.groupEnd();
});
console.debug();
console.groupEnd();


//6- 네트워크 정보
const nets= os.networkInterfaces();

console.log(nets);

for (const attr in nets) {
    console.group('Network장치 이림 : %s', attr);

    const item= nets[attr];
    item.map((v,i)=>{
        console.debug('주소 형식: %s', v.family);
        console.debug('IP주소 : %s', v.address);
        console.debug('주소 형식: %s', v.family);
        console.debug('맥주소: %s', v.mac);
        console.debug('넷마스크: %s', v.netmask);
        console.debug();
    });
console.groupEnd();
}



