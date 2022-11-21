import { useState } from 'react'
import Article from '../Article/Article.jsx'

function ArticleTeaser({article,handleTitleClick}) {

  const [showArt, setShowArt] = useState(false)

  return (
    <div className="articleTeaser">
      <div onClick={() => setShowArt(!showArt)}>
        <a onClick={() => handleTitleClick(article.object_id)}><h1> {article.title} </h1></a>
        <p> {article.created_date}</p>
      </div>
      {showArt ? <Article {...article} /> : '' }
    </div>

  )
}

export default ArticleTeaser;
