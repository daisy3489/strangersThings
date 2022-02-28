import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';

const App = () => {
  const [posts, setPosts] = useState([])
  const [username, setUsername] = useState({username: '', email: '', password: ''});
  const [error, setError] = useState('');
  // const [password, setPassword] = useState('');

  console.log('posts:', posts)

  const fetchPost= async () => {
    //pass url as 1st property in fetch //optional second property. all different options you want to pass to it
     const response = await fetch(BASE_URL + cohortName + '/posts')
     const data = await response.json()
     setPosts(data.data.posts)

     
  }

  

  //function runs every time there is a rerender. once initially when component first loads and again whenever a change is made.
  useEffect(() => {
    fetchPost()
  }, [])







  const adminUser = {
    email: 'admin@example.com',
    password: 'password'
  }

  
  //function to be called when attempting to login 
  const Login = details => {
    console.log('details:', details);

    //if what we typed matches our saved example, then we're logged in
    if (details.email === adminUser.email && details.password === adminUser.password && details.verifyPassword === details.password) {
      console.log("Logged in successfully")
      //actually login
      setUsername({
        username: details.name,
        email: details.email,
        password: details.password
      });
    }
    else {
      console.log('Details do not match!')
      setError('Details do not match!')
    }
  }

  //function to logout
  const Logout = () => {
    console.log('logout')
    setUsername({
      username: '', 
      email: ''
    });
  }





  return <div  className='all-posts-container'>
    {/* DISPLAY POSTS */}
    {posts.map(post => <div className='all-posts-container' key={post._id}>
      <div className='single-post-card'>  
        <div className='header-info'>
          <h2>{post.title}</h2>
        </div>
        <p className="description" >Description: {post.description} </p>
        <p className="price"> Price: {post.price} </p>
        <p className='seller' > Seller: {post.author.username} </p>
        <p className='location'>  Location: {post.location} </p>
      </div>
      
    </div>)}

    {/* LOGIN PAGE */}
    <div>
      {/* if user email is not empty, render welcome screen, else if not logged in, display login form */}
      {(username.email !== '') ? (
        <div className="welcome"> 
          <h2>Welcome, <span>{username.username}</span>!</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error} />
      )}
    </div>


  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);