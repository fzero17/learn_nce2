import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readLocalJson } from "./util";

import "./App.css";

function Article() {
  const [aritcles, setArticles] = useState([]);
  useEffect(() => {
    readLocalJson().then(response => {
      setArticles(response);
    });
  }, []);

  let { index } = useParams();
  return (
    <div className="App">
      <Link to="/list">返回</Link>
      <p>
        {aritcles && aritcles.length > 0 ? aritcles[index].content : "tbc..."}
      </p>
      <footer>fzero17 © 2019</footer>
    </div>
  );
}

export default Article;
