import {Link} from 'react-router-dom';

const Navbar = ({token}) => {
    return (
        <nav className="navbar">
            <h1><Link to="/home">Stranger's Things</Link></h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                {/* if token is true and returns a string, show logout link, show logout link, else if token is false and is empty, show login link */}
                {/* {token && <Link to='/users/logout'>Logout</Link> } */}
                <Link to='/users/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;