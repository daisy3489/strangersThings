import React, {useState} from 'react';
//import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faYelp } from '@fortawesome/free-brands-svg-icons';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT';

const CreatePost = ({token}) => {
    //let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [useLocation, setUseLocation] = useState(false)
    const [location, setLocation] = useState('');
    const [redirect, setRedirect] = useState(false);
    //const [willDeliver, setWillDeliver] = useState(false);

    //HANDLE SUBMIT 
    const submitHandler = async e => {
        e.preventDefault();

        //WHAT WE SEND TO THE SERVER
        const fetchToken = async () => {
            const postInfo = await fetch(BASE_URL + cohortName + '/posts', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        willDeliver: true
                    }
                })
            })

            //WHAT WE GET BACK FROM THE SERVER
            const content = await postInfo.json();

            console.log('CREATE POST CONTENT:', content)
            console.log('CREATE POST CONTENT.success:', content.success)

            //if post was successfully created, ...
            if (content.success === true) {
                //SET REDIRECT TO true
                setRedirect(true);
            }
            else {
                setRedirect(false)
            }
        }

        //CALL function
        fetchToken();

    }
    //add active class to get notification when post successfully entered
    // function showHide(){
    //     let element = document.getElementById('success');
    //     element.addClass('active');
    //     element.addClass('alert');
    //     element.removeClass('hide');
    // }
    //add/remove classes to hide the notification
    // function hideCross(){
    //     let element = document.getElementById('success');
    //     element.removeClass('show');
    //     element.addClass('hide');
    // }

    //IF TRUE, REDIRECT TO POSTS PAGE
    if (redirect) {
        //return navigate("/posts" )
    }

    return (
        <div className="createPost">
            {/* success banner */}
            {/* <div className="success hide" id='success'>
                <span className="check"><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></span>
                <span className="msg">Success: Your Post was successfully created </span>
                <span className="cross" ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></span>
            </div> */}

            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Add new Post</h2>
                    <div className="form-group">
                        <label htmlFor='title'>Title: </label>
                        <input type='text' name='title' placeholder='post title' id='title' onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>Description: </label>
                        <textarea type='text' name='description' placeholder='describe item...' id='description' onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor='price'>Price: </label>
                        <input type='number' name='price' id='price' onChange={e => setPrice(e.target.value)}></input>
                    </div>
                    <div >
                        <label htmlFor='useLocation'>Use location? </label>
                        <input type="checkbox" name='useLocation' id='useLocation' ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='location'>Location: </label>
                        <input type='text' name='location' id='location' onChange={e => setLocation(e.target.value)}></input>
                    </div>
                    <input className="alert-btn" type='submit' value='SUBMIT' ></input>
                </div>
            </form>
            
        </div>
    )
}

export default CreatePost;

