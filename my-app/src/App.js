import './App.css';
import Main from './components/Main';
import Form from './components/Form';
import Login from './components/Login';
// import Front from '../src/components/roadmaps/Front';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Roadmap from './components/Roadmap';
// import Profile from './components/Profile'



function App() {

  return (
    <>
     <Router>

    <Routes>
     <Route  path="/" element={<Main/>} />
     <Route  path="/Form" element={<Form/>} />
     <Route  path="/login" element={<Login/>} />
     <Route  path="/roadmap" element={<Roadmap/>} />
        </Routes>
    
     </Router>
   

    </>
  );
}

export default App;
