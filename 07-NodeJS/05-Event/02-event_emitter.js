//EventEmitter를 사용하여 직접 정의한 객체가 이벤트를 갖도록 구현

//1-모듈 가져오기
import {EventEmitter} from 'events';

//2-클래스 정의
class Radio extends EventEmitter {
    /*클래스의 상속이 이루어 졌으므로
    생서자에서 상위 클래스의 생성자를 호출하도록 지정-> 상속 구현
    new키워드에 의해서 호출되기 전까지 생성자는 실행되지 않음 */
    constructor(){
        super();
    }
}

//3- 직접 정의한 클래스에 대한 객체
const radio= new Radio();

//4- 이벤트 수 설정
radio.setMaxListeners(5);

//5- 이벤트 리스너에 이벤트 핸들러 연결-> 이벤트 이름은 사용자가 직접 정의
const onTurnOn= (channel)=> console.debug('라디오가 켜졌습니다. 채널 번호= ' + channel);
radio.on('turnon', onTurnOn);
radio.on('turnon', (channel)=> console.log('Hello Radio'+ channel));
radio.addListener('changechnnel', (channel)=> console.log('채널이 %d 번으로 변경되었습니다', channel));

//6- 1회용 이벤트
radio.once('turnoff', (channel)=> console.log('라디오가 꺼졌습니다. 채널 번호= '+ channel));

//7- 이벤트 발생시키기
for (var i=0; i<2; i++) {
    console.group('%d번째 실행중....', i+ 1);
    radio.emit('turnon',i);
    radio.emit('changechnnel', i);
    //once로 이벤트가 정의되었으므로 한번만 실행됨
    radio.emit('turnoff', i);
    console.debug();
    console.groupEnd();
}

//8- 이벤트 제거
radio.removeListener('turnon', onTurnOn);
radio.emit('turnon', 1000);