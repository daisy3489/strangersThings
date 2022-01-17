import {Link} from 'react-router-dom';

const Navbar = ({token}) => {
    return (
        <nav className="navbar">
            <h1><Link to="/home">Stranger's Things</Link></h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                {/* if token, show profile page, else if NO token, show login link */}
                {token && <Link to='/profile'>Profile</Link> }
                {!token && <Link to='/users/login'>Login</Link>}
            </div>
        </nav>
    )
}

export default Navbar;