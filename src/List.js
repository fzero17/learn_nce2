import React, { useState, useEffect } from "react";
import "./App.css";
import { readLocalJson } from "./util";
import { Link } from "react-router-dom";

function List() {
  const [aritcles, setArticles] = useState([]);
  useEffect(() => {
    readLocalJson().then(response => {
      setArticles(response);
    });
  }, []);

  return (
    <div className="App">
      <p>
        本页面用来背诵新概念2英语课程，文章内容为默写，不可作为正确参考。后续会根据课本改正内容。
      </p>
      <p>
        This web page use to remember nce2 English Program.The article's content
        were written by memory, can't used to be genellay. I will correct the
        content according to the book.
      </p>
      {aritcles.map((article, index) => (
        <h3 key={index}>
          <Link to={`/article/${index}`}>
            {index + 1}-{article.title}
          </Link>
        </h3>
      ))}
      <footer>fzero17 © 2019</footer>
    </div>
  );
}

export default List;
