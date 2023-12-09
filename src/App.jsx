import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blog from './components/Blog/Blog'

function App() {
  const [blog,setBlog] = useState([])
  useEffect(()=>{
    fetch('/public/vlog.json')
    .then(res => res.json())
    .then(data => setBlog(data))
  },[])
  console.log(blog)
  return(
    <div className="body_wrapper container">
      <div className="header">
        <Header></Header>
      </div>
      <main>
        <div className="blog_section">
          {
            blog.map((val)=> <Blog key={val.id} blogData = {val}></Blog>)
          }
        </div>
        <div className="bookmark_section">

        </div>
      </main>
    </div>
  )
}

export default App
