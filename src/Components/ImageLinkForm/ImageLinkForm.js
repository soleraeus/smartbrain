import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onBtnSubmit}) =>{
    return (
        <React.Fragment>
        <section className='form'>
            <p>{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
            <section>
            <input type='text' onChange={onInputChange} /><br />
            <button onClick={onBtnSubmit}>Detect</button>
            </section>
        </section>
        </ React.Fragment>
    )   
}

export default ImageLinkForm;