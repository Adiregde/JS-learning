import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import { UserContext } from './UserContext';
import Chat from './components/chat/Chat';
import Home from './components/home/Home';

function App() {
  const [user,setuser] = useState(null)
  return (
    <Router>
    <div className="App">
    <UserContext.Provider value={{user,setuser}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </UserContext.Provider>
    </div>
    </Router>
  );
}

export default App;
