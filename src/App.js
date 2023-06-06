import React, { useState, useEffect } from "react"; 
import { style } from "./style.css";
 
import GameField from "./GameField";
 
 
function App() { 
  const [page, setPage] = useState(""); 
  const [content, setContent] = useState(""); 
   
   
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
   
   
  useEffect(() => { 
    fetch('https://dummyjson.com/posts/5') 
      .then(response => response.json()) 
      .then(data => { 
        setTitle(data.title); 
        setBody(data.body); 
      }); 
  }, []); 
 
  const handlePageClick = (page) => { 
    setPage(page); 
  }; 
 
  const handleContentClick = (text) => { 
    setContent(text); 
  }; 
 
  const handleGoBack = () => { 
    setPage(""); 
    setContent(""); 
  }; 
 
  return ( 
    <> 
      <div className="logo"> 
        <div className="logotip"> 
          <p>LOGO</p> 
        </div> 
      </div> 
      <div className="body"> 
        {page ? ( 
          <> 
            <button className="button" onClick={handleGoBack}> 
              Назад 
            </button> 
            {page === "Статьи" || page === "Тесты" || page === "Игры" ? ( 
              <> 
                <h2 className="article-title">{title}</h2> 
                <p className="article-body">{body}</p> 
                 
                <p className="button-link" onClick={() => handleContentClick("Текст " + page.toLowerCase() + " 1")}> 
                  {page} 1 
                </p> 
                <p className="button-link" onClick={() => handleContentClick("Текст " + page.toLowerCase() + " 2")}> 
                  {page} 2 
                </p> 
                <p className="button-link" onClick={() => handleContentClick("Текст " + page.toLowerCase() + " 3")}> 
                  {page} 3 
                </p> 
              </> 
            ) : ( 
              "" 
            )} 
            
            {page === "Статьи" || page === "Тесты" || page === "Игры" ? (
              <>
                <div className="game-title">

                <h2 className="game-title">Игровое поле</h2>
                <GameField />
                </div>
              </>
            ) : (
              ""
            )}
             
          </> 
        ) : ( 
          <> 
            <p className="linkWrap" onClick={() => handlePageClick("Статьи")}> 
              <a href="#" className="link"> 
                Статьи 
              </a> 
            </p> 
            <p className="linkWrap" onClick={() => handlePageClick("Тесты")}> 
              <a href="#" className="link"> 
                Тесты 
              </a> 
            </p> 
            <p className="linkWrap" onClick={() => handlePageClick("Игры")}> 
              <a href="#" className="link"> 
                Игры 
              </a> 
            </p> 
          </> 
        )} 
      </div> 
      <div className="footer"> 
        <p className="footer-text">BANNER</p> 
      </div> 
    </> 
      ); 
    } 
export default App;
