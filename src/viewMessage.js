import React from 'react';

const ViewMessage = ({token, user}) => {
    console.log('user.messages', user.messages)
    console.log('user.messages.post: ', user.messages.post)

    return (
        <div className="viewMsg">
            <h2>Someone left a message!</h2>
            <div className="all-posts-container" key={user.posts._id}>
                    <div className="single-post-card">
                        <div className="header-info">
                            <h2>Section not done</h2>
                        </div>
                        <p className='postMessage'>Message: {user.messages.content}</p>
                        {/* <p className='whichPostTitle'>Regarding Post: {user.messages.post.title}</p> */}
                        {/* <p className='fromUser'>From user: {user.messages.fromUser.username}</p> */}

                    </div>
                </div>
        </div>
    )
}

export default ViewMessage;