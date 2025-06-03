import React, {useState, forwardRef, useImperativeHandle } from 'react';
import './Snackbar.css';
import { FaCheck } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";

const Snackbar = forwardRef((props,ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () =>({
        show(){
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false);
            }, 3000); // Ocultar después de 3 segundos
        },
    }));
    return(
        <div className='snackbar'
        id={showSnackbar ? 'show' : 'hide'}
        style={{
            backgroundColor: props.type === 'success' ? '#39A900' : '#FF0033',
            color: props.type === 'fail' ? 'black' : 'white'
            }}
        >
            <div className='symbol'>
                {props.type === 'success' ?  <h1><FaCheck /></h1> : <h1><VscError /></h1>} 
            </div>
            <div className='message'>{props.message}</div>
        </div>
    )

});

export default Snackbar; 