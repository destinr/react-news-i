//functions
import { useState } from 'react'

//styles
import './App.css'

//data
import newsData from "./data/news.json"


//components
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.jsx'
import AppNav from './components/AppNav/AppNav.jsx'


function App() { 

  const [allArticles, setAllArticles] = useState(newsData.map((article, index) => {
    return {
      id: index+1,
      title: article.title,
      created_date: article.created_at,
      url: article.url,
      author: article.author,
      object_id: article.objectID,
    }
}))

  const handleTitleClick = (articleID) => { console.log(articleID) }

  
  return (
    <div className="App">
      <div className="nav">
      <AppNav/>
      </div>
      
      {allArticles.map(article => {
        return <ArticleTeaser key={article.id} article={article} handleTitleClick={handleTitleClick} />
        })
      }

    </div>
  )
}

export default App
