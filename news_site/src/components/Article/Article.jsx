export default function Article({id, title, created_date, url, author, object_id}){

  return(
      <div>
      <a href={url}> {url} </a>
      <h5>Author: {author}</h5>
      <p>Object ID: {object_id}</p>
      </div>
  )
}
