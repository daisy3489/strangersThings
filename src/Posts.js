import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT';

const Posts = ({user, token}) => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()

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

    //function to handle delete 
    const handleDeletePost = async (id) => {
            const deletePostInfo = await fetch(BASE_URL + cohortName + '/posts/' + id, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                return response.json();
            })
            .then(result => {
                console.log('deletePostinfo result: ', result);
            })
            .catch(console.error);

            const newPost = posts.filter(post => post._id !== id);
            setPosts(newPost);
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
                            { post.author._id === user._id && <button className="btn delete" onClick={() =>handleDeletePost(post._id)}>Delete Post</button>}
                            { post.author._id !== user._id && <button className='btn message' onClick={() => navigate(`/leaveMessage/${post._id}`)}>Leave a Message</button>}
                        </div>

                    </div>
                </div>
            )}
        </div>
    )




}

export default Posts;