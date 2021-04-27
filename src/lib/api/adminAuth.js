import adminClient from './adminClient';

// 로그인
export const login = ({ username, password }) =>
  adminClient.post('/api/auth/adminLogin', { username, password });

// 회원가입
export const register = ({ username, password }) =>
  adminClient.post('/api/auth/adminregister', { username, password });

// 로그인 상태 확인
export const check = () => adminClient.get('/api/auth/check');
