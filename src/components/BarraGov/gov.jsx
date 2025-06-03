import react from 'react';
import './gov.css';
import gov from  '../../assets/img/gov.png';

const Gov = () => {
    return(
        <div className='container-gov'>
            <img src={gov} alt="banner gov"  className='imagen-gov'/>
        </div>
    )
}

export default Gov;