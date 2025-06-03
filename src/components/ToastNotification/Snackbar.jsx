import react, {useState, forwardRef, useImperativeHandle} from 'react';
import './Snackbar.css';

const Snackbar = forwardRef((props,ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () =>({
        show(){
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false);
            }, 3000);
        },
    }));
    return(
        <div className='snackbar'
        id={showSnackbar ? 'show' : 'hide'}
        style={{
            backgroundColor: props.type === 'sucess' ? '#00F593' : '#FF0033',
            color: props.type === 'fail' ? 'black' : 'white'
            }}
        >
            <div className='symbol'>
                {props.type === 'sucess' ?  <h1>{/* Icono del Alert */}</h1> : <h1> </h1>} 
            </div>
            <div className='message'>{props.message}</div>
        </div>
    )

});

export default Snackbar;