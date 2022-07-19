import React,{useState,useContext,useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Rating({rate}){
    const {update} = useContext(FeedbackContext)
    const [select,setSelect] = useState(10)
    function changeSelect(event){ 
        const {value} = event.target
        setSelect(parseInt(value))
        rate(parseInt(value))
    }

    useEffect( () => {
        setSelect(update.rate)
        rate(update.rate)
    } , [update]) 


    

  return (
    <div> <ul className='rating'>
        <li>
            <input type="radio" id="num1" name="rating" onChange={changeSelect} value="1" checked={select===1}/> 
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" id="num2" name="rating" onChange={changeSelect} value="2" checked={select===2}/> 
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" id="num3" name="rating" onChange={changeSelect} value="3" checked={select===3}/> 
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" id="num4" name="rating" onChange={changeSelect} value="4" checked={select===4}/> 
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" id="num5" name="rating" onChange={changeSelect} value="5" checked={select===5}/> 
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" id="num6" name="rating" onChange={changeSelect} value="6" checked={select===6}/> 
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" id="num7" name="rating" onChange={changeSelect} value="7" checked={select===7}/> 
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" id="num8" name="rating" onChange={changeSelect} value="8" checked={select===8}/> 
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" id="num9" name="rating" onChange={changeSelect} value="9" checked={select===9}/> 
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" id="num10" name="rating" onChange={changeSelect} value="10" checked={select===10}/> 
            <label htmlFor="num10">10</label>
        </li>
    </ul>
    </div>
  )
}
export default Rating