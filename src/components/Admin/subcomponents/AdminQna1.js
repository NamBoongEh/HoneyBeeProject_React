import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminQnaItem from './AdminQnaItem';

// AdminQna2과 똑으나 const query만 다르다.
// ** 개선점 : 나중에(AdminQna2)페이지 합칠 수 있을 것 같다.(query만 다른 값 내려받게해서)
// 문의게시판 문의 파트
const AdminQna1 = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 받아온 api에서 특정 카테고리(business)만 보이도록 하드코딩했다.
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
