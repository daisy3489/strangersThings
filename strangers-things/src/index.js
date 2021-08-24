import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';
export const TOKEN = '';

const App = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

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
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in successfully")
      //actually login
      setUser({
        name: details.name,
        email: details.email
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
    setUser({
      name: '', 
      email: ''
    });
  }





  return <div>
    {/* display posts */}
    {posts.map(post => <div>
      <h2>{post.title}</h2>
      <div >Description: {post.description} </div>
      <div > Price: {post.price} </div>
      <div > Seller: {post.author.username} </div>
      <div >  Location: {post.location} </div>
    </div>)}

    {/* login page */}
    <div>
      {/* if user email is filled, render welcom screen, else if not logged in, display login form */}
      {(user.email !== '') ? (
        <div className="welcome"> 
          <h2>Welcome, <span>{user.name}</span>!</h2>
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