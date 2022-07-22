import React,{useState,useContext,useEffect} from 'react'
import Button from './Button'
import Rating from "./Rating"
import FeedbackContext from '../context/FeedbackContext'

function InputFeedback() {
    const [text,SetText] = useState("") //for getting and passing text
    const [butt_disable,SetDisable] = useState(true) //for minimum character rendering
    const [rate , setRating ] =useState(10) //for getting and passing rate
    const {Feedback,Setfeedback,update,Setupdate} = useContext(FeedbackContext)

    useEffect(() => {
      if (update.edit ===true) {
        SetText(update.text)
        SetDisable(false) 
        setRating(update.rate)}
    } , [update]) 
    
    
    function handleText(event) {
        const {value}= event.target
        SetText(value)
        if (text.length<10) {
          SetDisable(true)
        } else if (text.length>=10) {SetDisable(false)}
            }

    const addDatatoServer = async(Newfeedback) => {
      const responde= await fetch('/feedback', {
          method: 'POST', 
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(Newfeedback) })
          const data = await responde.json()
          Setfeedback([data,...Feedback]
            ) 
      }

    const UpdateDataServer = async(Newfeedback,id) => {
          await fetch(`/feedback/${id}`, {
          method: 'PUT', 
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(Newfeedback) }
          )
    }

    function handleSubmit(event){
      event.preventDefault()
      const Newfeedback ={text,rate}
      if (update.edit === true) {
        const Newfeedback ={
        text,rate
        }
        UpdateDataServer(Newfeedback,update.id)
        Setfeedback( Feedback.map( (prevItems) => prevItems.id===update.id ? {...prevItems,...Newfeedback} : {...prevItems} ))
        SetText("")
        SetDisable(true) 
        setRating(0)
        Setupdate({id:"",text:"",rate:0,edit:false})
      }
       else {
        SetText("")
        SetDisable(true)
        setRating(0)
        Setupdate({id:"",text:"",rate:0,edit:false})
        addDatatoServer(Newfeedback)
    } }


    
  
    return ( 
        <div className='container card'>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <Rating rate={(value) => setRating(value)} />
                <div className='input-group'>
                    <input type="text" onChange={handleText} placeholder='Write a review' value={text} />
                    <Button text_button={update.edit? "Save":"Send"} isDisabled={butt_disable}/>
                </div>
                {( butt_disable && text.length!==0) && <div className='message'>Minimum Character at least 10</div>}
            </form>
        </div>
    )
}

export default InputFeedback