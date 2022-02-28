import React, {useState} from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: '', email: '', password: ''});

    //handle submit
    const submitHandler = e => {
        e.preventDefault();

        //call Login function through props
        Login(details);

        
    }

    return (
        <form onSubmit={submitHandler}>

            
            <div className="form-inner">
                <h2>Login</h2>
                {/* check for error */}
                {(error !== '') ? ( <div className="error">{error}</div>) : ''}
                <div className="form-group">
                    <label htmlFor="name">Username: </label>
                                                                        {/* any time we change it, we're calling a function and we're passing through the event. The event holds the tartget value. we're updating the set details and we're passing through the new value for name. and that should now update name  */}
                    <input type="text" name="name" placeholder='john123' id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder='john123@email.com' id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password"  id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="verifyPassword">Re-enter password: </label>
                    <input type="password" name="verifyPassword" id="verifyPassword" onChange={e => setDetails({...details, verifyPassword: e.target.value})} value={details.verifyPassword}></input>
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    )
}

export default LoginForm
