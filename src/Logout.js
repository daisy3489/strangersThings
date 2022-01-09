//import {Link} from 'react-router-dom';

const LogOutPage = ({Logout}) => {
    return (
        <div className="logout">
            <h2 >Are you sure you want to Logout?</h2>
            <button onClick={Logout}>Logout</button>

        </div>
    )
    
}

export default LogOutPage;
