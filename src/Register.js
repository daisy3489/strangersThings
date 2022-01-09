import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT';

function RegisterForm({setToken}) {
    const [details, setDetails] = useState({name: '', email: '', password: ''});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    //HANDLE SUBMIT 
    const submitHandler = e => {
        e.preventDefault();

        //console.log('register details: ', details);
        console.log('PASSWORD, EMAIL, NAME: ', password, email, name);

        //WHAT WE SEND TO THE SERVER 
        const fetchToken = async () => {
            const registerUserInfo = await fetch(BASE_URL + cohortName + '/users/register', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: name,
                        password: password
                    }
                })
            })

            //WHAT WE GET BACK FROM THE SERVER
            const content = await registerUserInfo.json();

            console.log("REGISTER CONTENT: ", content)

            const token = content.data.token

            console.log('TOKEN: ', token)

            setToken(token);
        }

        //CALL function
        fetchToken()
        //SET REDIRECT TO TRUE
        setRedirect(true)

    }

    //IF TRUE, REDIRECT TO LOGIN PAGE
    if (redirect) {
        return <Navigate to="/users/login" />;
    }

    return (
        <form onSubmit={submitHandler}>

            <div className="form-inner">
                <h2>Register</h2>

                <div className="form-group">
                    <label htmlFor='name'>Username: </label>
                    <input required type='text' name='name' placeholder='john123' id='name' onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' placeholder='john123@email.com' id='email' onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password: </label>
                    <input required type='password' name='password' id='password' onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='verifyPassword'>Re-enter password: </label>
                                                                                     {/* any time we change it, we're calling a function and we're passing through the event. the event holds the target value. we're updating the set details and we're passing through the new value for name, and that should now update the name */}
                    <input required type='password' name='verifyPassword' id='verifyPassword' onChange={e => setDetails({...details, verifyPassword: e.target.value})} value={details.verifyPassword}></input>
                </div>
                <input type='submit' value='REGISTER'></input>
                <p className='form-group member'>Already a member? <Link to='/users/login'>Click here to Login</Link></p>


            </div>
        </form>
    )
}

export default RegisterForm


