import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';
export const TOKEN = '';




const App = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)

  const fetchPost= async () => {

    //pass url as 1st property in fetch //optional second property. all different options you want to pass to it
     const response = await fetch(BASE_URL + cohortName + '/posts')
     const data = await response.json()
     setPosts(data.data.posts)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return <div>
    Hello World
    {posts.map(post => <div>
      <h1>{post.title}</h1>
      <div>{post.description} </div>
      <div> Price: {post.price} </div>
      <div> seller: {post.author.username} </div>
      <div> location: {post.location} </div>
      
      
      </div>)}
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);