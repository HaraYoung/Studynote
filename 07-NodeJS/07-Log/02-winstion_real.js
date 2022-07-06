/**모든 노드 프로젝트 마다 다음을 우선 수행해아함
 * 1- /helper/_config.js 파일을 통해 로그의 수준과 저장 경로를 지정
 * 2- 필요하다면 /helper/log_helper.js에서 로그의 출력 형식이나 저장 파일 이름 형식을 수정
 * 3- 모든 node.js파일에서 LogHelper.js를 import
 * 4- 브라우저용 js에서 console.log를 사용하듯 node에서 logger.debug를 사용
 *      ->웹 브라우저의 콘솔 대신 지정된 파일에 출력 내용들이 기록됨
 *      ->이 내용을 확인하여 백엔드의 실행 과정을 가늠 할수 있음
 */
import logger from './helper/LogHelper.js';

logger.error('error 메세지 입니다');
logger.warn('warn 메세지 입니다');
logger.info('info 메세지 입니다');
logger.verbose('verbose 메세지 입니다');
console.log('hello world');