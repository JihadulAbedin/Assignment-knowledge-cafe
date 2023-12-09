import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blog from './components/Blog/Blog'
import Bookmark from './components/bookmark/Bookmark'

function App() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch('/public/vlog.json')
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [])

  // Time State
  const [time, setTime] = useState(0)
  const timeCount = (val) => {
    setTime(time + val)
  }

  // Bookmark State
  const [newBookArray, setNewBookArray] = useState([])
  const markBookEvent = (val) => {
    const newArray =[...newBookArray,val]
    setNewBookArray(newArray)
  }
  console.log(newBookArray)
  return (
    <div className="body_wrapper container">
      <div className="header">
        <Header></Header>
      </div>
      <main>
        <div className="blog_section">
          {
            blog.map((val) => <Blog key={val.id} blogData={val} timeFunction={timeCount} markBook={markBookEvent}></Blog>)
          }
        </div>
        <div className="bookmark_section">
          <h1 className="timeShow">Spent time on read: {time} min</h1>
          <div className="bokkmarkTitles">
          <h2>Bookmarked Blogs: {newBookArray.length}</h2>
            {
              newBookArray.map((val)=>{
                return <Bookmark key={val.id} props={val}></Bookmark>
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
