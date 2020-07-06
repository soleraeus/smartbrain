import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ImageUrl, box}) =>{
    return (
            <section className='FaceRecognition'>
                <img id='inputImage' src={ImageUrl} alt='Face Recognition box'/>
                <div className='bounding-box' style={{top: box.topRow + '%', right: box.rightCol + '%', bottom: box.bottomRow + '%', left: box.leftCol + '%'}}></div>
            </section>
    )   
}

export default FaceRecognition;

