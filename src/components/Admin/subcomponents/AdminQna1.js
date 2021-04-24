import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminQnaItem from './AdminQnaItem';

const AdminQna1 = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `&category=business`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f1c5c7133fad4cf6b5d33ec8557ee4a8`
        );

        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          overflow: 'auto',
          height: '299px',
          marginBottom: '4%',
          backgroundColor: 'white',
        }}
      >
        페이지 로딩중...
      </div>
    );
  }
  if (!articles) {
    return null;
  }

  return (
    <div
      style={{
        overflow: 'auto',
        height: '299px',
        marginBottom: '4%',
        backgroundColor: 'white',
      }}
    >
      {articles.map((article) => (
        <AdminQnaItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default AdminQna1;
