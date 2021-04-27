import axios from 'axios';

const adminClient = axios.create();

// 글로벌 설정 방법
// 1. api주소를 다른 곳으로 상요함
// 2. 헤더 설정
// 3. 인터셉터 설정
// - 요청 성공 시 특정 작업 수행
// - 요청 실패 시 특정 작업 수행

export default adminClient;
