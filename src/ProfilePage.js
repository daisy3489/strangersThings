import {Link} from 'react-router-dom';

const ProfilePage = ({Logout, user}) => {
    console.log('PROFILE USER: ', user)
    return (
        <div className="welcome">
            <h2 >Welcome, <span>{user.username}</span>!</h2>
            <button onClick={Logout}><Link to='/home'>Logout</Link></button>

            <ul className=''>
                <li>View posts created by me</li>
                <Link to='/CreatePost'>Create new Post</Link>
                <Link to='/messages'>Message Center</Link>
            </ul>
        </div>
    )
    
}

export default ProfilePage;


