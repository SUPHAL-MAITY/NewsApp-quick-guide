
import './App.css'

import React, { useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';

import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";



const App=()=>  {

    const [progress, setProgress]=useState(0) 
    const  pageSize=24;

 

 
  
    return (
      <>
      <Router>
      <div>
      <Navbar/>
      <LoadingBar
      color='#f11946'
      height={5}
          
      progress={progress}
            
      />
        <Routes>
        <Route exact path="/Business" element={<News setProgress={setProgress}   key="business" pageSize={pageSize} category="business"/>} >
        </Route> 
        <Route exact path="/Entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} category="entertainment"/>} >
        </Route> 
        <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} category="general"/>} >
        </Route> 
        <Route exact path="/Health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} category="health"/>} >
        </Route> 
        <Route exact path="/Science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} category="science"/>} >
        </Route> 
        <Route exact path="/Sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} category="sports"/>} >
        </Route> 
        <Route exact path="/Technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category="technology"/>} >
        </Route>


        </Routes>
      </div>


      </Router>
      </>
    )
  }

  export default App;