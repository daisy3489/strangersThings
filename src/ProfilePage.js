import {Link} from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProfilePage = ({Logout, user}) => {
    console.log('PROFILE USER: ', user)
    console.log('PROFILE user.posts: ', user.posts)
    return (
        <div className="welcome">

            <div className="profile-container">
                <div className="profile-menu">
                    <div className="image-container">
                        <img src='https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png' alt=''></img>
                    </div>
                    <ul>
                        <li className=''>Posts created by me</li>
                        {/* <li><Link to='/myPosts'>Posts created by me</Link></li> */}
                        <li><Link to='/CreatePost'>Create new Post</Link></li>
                        <li><Link to='/messages'>Message Center </Link></li>
                        
                    </ul>
                    <div className="btnDiv">
                        <button onClick={Logout}><Link to='/home'>Logout</Link></button>
                    </div>
                    
                </div>
                <div className="profile-content">
                    <div className="actions">
                        {/* <i className="fa fa-cog"></i>
                        <FontAwesomeIcon icon="cog" />
                        <i className='fa fa-bell'></i>
                        <FontAwesomeIcon icon="bell" /> */}
                    </div>
                    <div className="pic">
                    <img src='https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png' alt=''></img>
                        <h2 >Welcome, <span>{user.username}</span>!</h2>
                        <span>This is your profile</span>
                    </div>
                        
                    <div className="summary">
                        <div className="content">
                            <span>232</span>
                            <span>items bought</span>
                        </div>
                        <div className="content">
                            <span>12</span>
                            <span>items listed</span>
                        </div>
                    </div>
                    <div className="profile details">

                    </div>
                    
                </div>
            </div>


        </div>
    )
    
    
}


export default ProfilePage;


