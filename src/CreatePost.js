import React, {useState} from 'react';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const cohortName = '2110-FT-PT-WEB-PT';

const CreatePost = ({token}) => {

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

        }

        //CALL function
        fetchToken();
        //SET REDIRECT TO true
        setRedirect(true);

    }

    //IF TRUE, REDIRECT TO POSTS PAGE
    if (redirect) {
        //return {posts.success === true && <Navigate to='/posts' />}
    }

    return (
        <div className="createPost">
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
                    <input type='submit' value='SUBMIT'></input>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;

//todays burger is THE FUH-GOUDA-BOUT-IT BURGER. comes with IM WOK-IN HERE fries ( gouda and wok fried potatoes) 