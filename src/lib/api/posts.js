import client from './client';

// eslint-disable-next-line import/prefer-default-export
export const writePost = ({ title, body }) =>
  client.post('/api/posts', { title, body });
