import React , { useState, useEffect } from 'react';
import '../CSS/ReviewComponent.css';


function ReviewComponent(){
    const fetchData = async () => {
        const response = await fetch('');
        const data = await response.json();
        return data;
        };

        const [userName, setInputUserName] = useState("");
        const [text, setInputText] = useState("");
        // const [proPic, setInputProPic] = useState("");

        useEffect(() => {
            
            fetchData().then(data => {
                setInputUserName(data.userName);
                setInputText(data.text);
                // setInputProPic(data.proPic); 
            });
        }, []);

    return(
        <div className='reviewComponent'>
            <div className='reviewHeader'>
                <div><img src={require('../Pages/Assets/profile_user.jpg')}
                id='proPic'
                height={70}
                width={70}
                alt='proPic'/>
                </div>
                <input id='userName' value={userName}/>
            </div>
            <div className='reviewBody'>
                <hr id='ruler'></hr>
                <input id='reviewText' value={text}/>
            </div>
        </div>
    )
}

export default ReviewComponent