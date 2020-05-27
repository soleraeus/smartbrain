import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () =>{
    return (
        <React.Fragment>
        <section className='form'>
            <p>{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
            <section>
            <input type='text' /><br />
            <button>Detect</button>
            </section>
        </section>
        </ React.Fragment>
    )   
}

export default ImageLinkForm;