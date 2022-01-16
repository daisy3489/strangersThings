import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Navigate } from 'react-router';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT'

function LoginForm ({setToken, setUser}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    //HANDLE SUBMIT 
    const submitHandler = async e => {
        e.preventDefault();

        console.log('LOGIN PASSWORD: ', password, 'LOGIN NAME: ', name);

        //WHAT WE SEND TO THE SERVER
        const fetchToken = async () => {
            const loginUserInfo = await fetch(BASE_URL + cohortName + '/users/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user:{
                        username: name,
                        password
                    }
                })
            })

            //WHAT WE GET BACK FROM THE SERVER
            const content = await loginUserInfo.json();

            console.log('LOGIN CONTENT: ', content)

            const newToken = content.data.token
            // console.log('TOKEN: ', newToken)
            
            //token will need to be stored on state 
            setToken(newToken);
            //save data to local storage
            localStorage.setItem('token', newToken);
            
            // const userInfo =  await fetch(BASE_URL + cohortName + '/users/me', {
            //     headers:{
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${newToken}`
            //     }
            // })
            // const userContent = await userInfo.json();

            // console.log('USERCONTENT: ', userContent)

            // setUser(userContent.data)
            

            if(content.success === false) {
                document.write(content.console.message)
            }
            else{
                setRedirect(true)
            }
        }

        //CALL function
        fetchToken()
        
        //SET REDIRECT TO TRUE 
        //setRedirect(true);

    }

    //IF TRUE, REDIRECT TO PROFILE PAGE
    if(redirect) {
        return <Navigate to='/profile' />;
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>

                <p className="errorMessage"></p>

                <div className="form-group">
                    <label htmlFor='name' >Username: </label>
                                                                         {/* any time we change it, we're calling a function and we're passing it through the event. the event holds the target value. We're updating thr srt details amd we're passing through the new value for name. And that should update the name */}
                    <input required type='text' name='name' placeholder='john123' id='name' onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='password' >Password: </label>
                    <input required type='password' name='password' id='password' onChange={e => setPassword(e.target.value)}></input>
                </div>

                <input type='submit' value='LOGIN' ></input>
                <p className='form-group notMember'>Not a member? <Link to='/users/register'>Click here to register</Link></p>
            </div>
        </form>
    )

}

export default LoginForm;


