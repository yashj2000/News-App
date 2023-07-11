import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './newsList.css'; // Import NewsList.css in NewsList.js

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=9002a7731bac4058a38e66b1cbd9bf18`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, [category]);

  return (
    <div>
      {articles.map((article) => (
        <NewsItem
          key={article.url}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;
