import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login';


function App() {
  document.body.style.backgroundColor = "#f2e7d7"
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
