import React, { Component } from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
        	<p className="f3 white">
        		{'This is where you can recognize the face! Try!'}
        	</p>
        	<div className='center'>
        		<div className='form center pa3 shadow-5' style={{width: '30em'}}>
	        		<input 
                        className='f4 pa2 w-70 center' 
                        type="text" 
                        onChange={onInputChange}
                    />
	        		<button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-dark-pink'
                        onClick={onButtonSubmit}
                    >
                        Detect
                    </button>
        		</div>
        	</div>
        </div>
    );
};

export default ImageLinkForm;
