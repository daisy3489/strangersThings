import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT';

const SendMessage = ({token}) => {
    const [message, setmessage] = useState('');
    const {postId} = useParams();

    //HANDLE SUBMIT 
    const submitHandler = async e => {
        e.preventDefault();

        //WHAT WE SEND TO THE SERVER
        const leaveMessagePost = async (id) => {
            
            const postInfo = await fetch( BASE_URL + cohortName + '/posts/'+ id +'/messages', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  message: {
                    content: message
                  }
                })
              }).then(response => response.json())
                .then(result => {
                  console.log('CreateMessage resut: ', result);
                })
                .catch(console.error);
            }
            //CALL function
            leaveMessagePost(postId);
            //SET REDIRECT TO true
            //setRedirect(true);
    }    

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner ">
                <h2>Leave a Message</h2>

                <div className="form-group">
                    <label htmlFor="comment">Leave a Comment: </label>
                    <textarea name="message" type="text" placeholder="cool item bro..." id="message" onChange={e => setmessage(e.target.value)}></textarea>
                </div>

                <input type="submit" value="SUBMIT"></input>
            </div>
        </form>
    )
}

export default SendMessage;