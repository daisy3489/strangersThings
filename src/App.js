import Posts from './Posts'
import LoginForm from './Login'
import Navbar from './Navbar'
import HomePage from './Home'
import ProfilePage from './ProfilePage'
import RegisterForm from './Register'
import CreatePost from './CreatePost'
import ViewMessage from './viewMessage'
import SendMessage from './CreateMessage'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT'

function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({username: '', password: ''});

  //function runs everytime there is a rerender. once initially when component first loads and again whenever a change is made
  //by making the useEffect() function an async function, it automatically returns a Promise 
  useEffect(() => {
    if(localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));

      fetch(BASE_URL + cohortName + '/users/me', {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      //The then() method returns a Promise
      .then((response) => {
        return response.json();
      })
      .then((userInfo) => {
        setUser(userInfo.data)
      })
      .then(result => {
        console.log('APP useEffect result: ', result);
      })
      .catch ((error) => {
        console.error(error);
      }) 
      
    }
  },[])

  //FUNCTION TO Logout
  const Logout = () => {
    setUser({
      username: '', 
      //email: '',
      password: ''
    });
    //clear localStorage
    localStorage.removeItem('token');
    console.log('LOGOUT')
  }

  return (
    <Router>
      <div className="App">
        <Navbar token={token} />

        <div className="content">
          <Routes>
            <Route exact path="/home" element={<HomePage />}></Route>
            <Route exact path="/createPost" element={<CreatePost token={token} />}></Route>
            <Route exact path="/viewMessages" element={<ViewMessage token={token} user={user}/>}></Route>
            <Route exact path="/posts" element={<Posts user={user} token={token}/>}></Route>
            <Route exact path="/users/register" element={<RegisterForm setToken={setToken}/>}></Route>
            <Route exact path="/profile" element={<ProfilePage Logout={Logout} user={user}></ProfilePage>}></Route>
            <Route exact path="/users/login" element={<LoginForm setToken={setToken} />}></Route>
            <Route exact path="/leaveMessage/:postId" element={<SendMessage token={token} />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
