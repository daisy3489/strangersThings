import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    console.log('POSTS: ', posts)

    const fetchPost = async () => {
        //pass url as 1st property in fetch //optional secondary property. all different options you want to pass to it 
        const response = await fetch(BASE_URL + cohortName + '/posts')
        const data = await response.json()
        setPosts(data.data.posts)
    }

    //function runs everytime there is a rerender. once initially when component first loads and again whenever a change is made
    useEffect(() =>{
        fetchPost()
    }, [])

    //function to delete posts
    const handleDeletePost = (id) => {
        const newPost = posts.filter(post => post._id !== id);
        setPosts(newPost)
    }

    return (
        <div className="all-posts-container">
            {/*DISPLAY POSTS*/}
            {posts.map(post =>
                <div className="all-posts-container" key={post._id}>
                    <div className="single-post-card">
                        <div className="header-info">
                            <h2>{post.title}</h2>
                        </div>
                        <p className='description'>Description: {post.description}</p>
                        <p className='price'>Price: {post.price}</p>
                        <p className='seller' >Seller: {post.author.username}</p>
                        <p className='location'>Location: {post.location}</p>
                        <div className="postButtons">
                            <button className="btn delete" onClick={() =>handleDeletePost(post._id)}>Delete Post</button>
                            <button className='btn message' ><Link to='/leaveMessage'>Leave a Meassage</Link></button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )




}

export default Posts;