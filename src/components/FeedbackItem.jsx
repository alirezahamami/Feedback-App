import React, {useContext} from 'react';
import {FaTimesCircle,FaEdit} from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({text, id, rate, mode}) {
    
    const {Setfeedback,Setupdate} = useContext(FeedbackContext)
    
    function handleDelet(){
            if (window.confirm('Are you sure to delet?')) {
                Setfeedback(prevValue => prevValue.filter( (prevValue) => (prevValue.id !== id)))
            }
        }

    function handleupdate(){
        Setupdate({id,text,rate,edit:true}) 
    }
    
    return (  
        <div className='card' style={{ 
            backgroundColor: mode ?'black':'white',
            color: mode ? 'white':'black'
        }}>
            <div className='num-display' >{rate}</div>
            <button onClick={handleupdate} className='edit'> <FaEdit color='purple'/> </button>
            <button onClick={handleDelet} className='close'> <FaTimesCircle color='purple'/> </button>
            <div className='text-display' >{text}</div>
        </div> 
    ) 
}

export default FeedbackItem;