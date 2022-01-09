import {Link} from 'react-router-dom';

const HomePage = () => {
    
    return (
        <div className="row home">
            <div className="col1">
                <h2>STRANGER'S THINGS</h2>
                <h3>Where all your old junk become a stranger's new treasure</h3>
                <p>Buy used stuff here</p>
                <button className="btn"><Link to="/posts">See Listings</Link></button>
            </div>
            <div className="col2">

            </div>
            
        </div>
    )
    
}

export default HomePage;
