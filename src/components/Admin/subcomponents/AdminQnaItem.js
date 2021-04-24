import React from 'react';
import styled from 'styled-components';

const Line2 = styled.hr`
  margin: 1% 0;
  background: black;
`;

const AdminQnaItem = ({ article }) => {
  const { title, url, publishedAt } = article;

  return (
    <div className={'contents'}>
      <p>{publishedAt}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <Line2 />
    </div>
  );
};

export default AdminQnaItem;
