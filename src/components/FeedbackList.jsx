import React, {useContext} from 'react'
import {motion, AnimatePresence} from "framer-motion"
import FeedbackItem from './FeedbackItem'
import FeedbackStat from "./FeedbackStat" //component for the statistics
import InputFeedback from "./InputFeedback"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({reversColor}) {
    const {Feedback} = useContext(FeedbackContext)
    return (
        <div>
            <InputFeedback/>
            <div className="feedback-list">
                <FeedbackStat/> {
                    (Feedback.length > 0) //empty data showing no feedback
                        ? <div>{Feedback.map((Feedback) => (
                                        <AnimatePresence >
                                            <motion.div
                                                key={Feedback.id}
                                                initial={{opacity: 0.1}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0.1}}>
                                                <FeedbackItem
                                                    key={Feedback.id}
                                                    id={Feedback.id}
                                                    text={Feedback.text}
                                                    rate={Feedback.rate}
                                                    mode={reversColor}/>
                                            </motion.div>
                                        </AnimatePresence>
                                    ))
                                }</div>
                        : <h1>No feedback yet.</h1>
                }
            </div>
        </div>
    )
}

export default FeedbackList
