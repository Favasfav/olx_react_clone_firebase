import React ,{useEffect,useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {AuthContext, FirebaseContext} from './store/Contexts'
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Post from "./store/PostContext";
import View from "./Pages/ViewPost";


function App() {
  
  const {setUser}=useContext(AuthContext)
  const {app} = useContext(FirebaseContext)
  useEffect(()=>{
    const auth=getAuth(app)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    
  })


  return (
    <div>
      <Post>
      <Router>
      
        <Routes>
          <Route exact path="/"
          element={Home()}/>
          
          <Route path="/signup"
          element={<Signup />}/>
          <Route path="/login"
          element={<Login/>}/>
          <Route path="/create"
          element={<Create/>}/>
        
        <Route path="/view"
          element={<View/>}/>
        </Routes>
        
      </Router>
      </Post>
      
    </div>
  );
}

export default App;
