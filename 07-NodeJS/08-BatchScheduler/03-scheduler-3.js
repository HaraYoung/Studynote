//crontab 스타일의 스케쥴 지정

//1- 필요한 패키지 참조
import logger from './helper/LogHelper.js';
import schedule from 'node-schedule';

//2- 매 분 마다 수행
schedule.scheduleJob('* * * * *', ()=> logger.debug('1분에 한번씩 수행'));

//3- 매 시 15,45분 마다 수행
schedule.scheduleJob('15,45 * * * *', ()=> logger.debug('매 시 15,45분 마다 수행'));

//4- 2분마다
schedule.scheduleJob('*/2 * * * *', ()=> logger.debug('2분마다 수행'));

logger.debug('예약 작업이 설정되었습니다.');