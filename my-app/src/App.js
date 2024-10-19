import './App.css';
import Main from './components/Main';
import Form from './components/Form';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Roadmap from './components/Roadmap';
import { useState } from 'react';




function App() {
 const[image,setImage] = useState(true)

 const toggleImage = () => {
  setImage(prevImage => !prevImage);
};


  return (
    <>
     <Router>

    <Routes>
     <Route  path="/" element={<Main image={image} toggleImage={toggleImage} />} />
     <Route  path="/Form" element={<Form/>} />
     <Route  path="/login" element={<Login/>} />
     <Route  path="/roadmap" element={<Roadmap/>} />
        </Routes>
    
     </Router>
   

    </>
  );
}

export default App;
