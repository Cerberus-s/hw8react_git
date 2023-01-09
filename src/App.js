import React, { useEffect, useState } from "react";
import PostItem from "./components/post/index.jsx";
import {Link} from "react-router-dom";
import "./App.css";
// import { style } from "@mui/system";


const App = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect( () => {
    (async () => {
        try {
          setIsLoading(true)
          const data = await getPosts()
          setPosts(data)
        } catch (e) {
          console.log (e, "error")
        } finally {
          setIsLoading(false)
        }
    })()
  }, [])

  const getPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    return data
  }

  if (isLoading) {
    return (
      <div className="load">
        <div className="loader">
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
          <span className="loaderBlock"></span>
        </div>
      </div>
    )
  }

  if (!posts.length) {
    return (
      <div>
        No data
      </div>
    )
  }

  return (
    <div>
      {posts.map((item, idx) => {
        return (
          <Link key={idx} to={`/post/${item.id}`} className="link">
            <PostItem title={item.title} />
          </Link>
        )}
      )}
    </div>
  )
}

export default App
 