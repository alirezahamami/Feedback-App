import React,{useState} from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import About from "./components/About"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackContext from './context/FeedbackContext'
import data from "./components/data"

function App() {
    const [Feedback,Setfeedback] = useState(data)
    const [update,Setupdate] = useState({id:"",text:"",rate:0,edit:false})

    return (
        <FeedbackContext.Provider value={{Feedback,Setfeedback,update,Setupdate}}>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<> < div className = "container" > <Header/>
                    <FeedbackList reversColor={false}/>
                </div>
                <AboutIconLink/>
            </>
                    }
                />
                <Route path="/about/*" element={<About />}/>
            </Routes>
        </Router>
        </FeedbackContext.Provider>
    )
}
export default App;

