import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ImageUrl}) =>{
    return (
        <>
            <section className='FaceRecognition'>
                <img src={ImageUrl} alt='Face Recognition box'/>
            </section>
        </>
    )   
}

export default FaceRecognition;