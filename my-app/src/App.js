import './App.css';
import Roadmap from './components/Roadmap';
import Main from './components/Main';
import Form from './components/Form';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {

  return (
    <>
     <Router>

    <Routes>
     <Route  path="/" element={<Main/>} />
     <Route  path="/form" element={<Form/>} />
     <Route  path="/login" element={<Login/>} />
        </Routes>
    
     </Router>

   

    </>
  );
}

export default App;
