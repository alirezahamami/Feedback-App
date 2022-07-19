import React,{useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStat() {
    const {Feedback} = useContext(FeedbackContext)
    const lenght_feedback= Feedback.length
    const average= ((Feedback.reduce( (sum, {rate}) => sum + rate, 0)) / (lenght_feedback)).toFixed(1).replace(".0","") //baraye hazf 0
    return (
        <div className='feedback-stats'>
            <h4>{lenght_feedback} Comments</h4>
            <h4>Average Rating:  {average>0? average :"0"}</h4>
        </div>
    )
}

export default FeedbackStat