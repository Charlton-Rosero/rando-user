import './App.css';
import fetchData from './services/rando_user';
import { useState, useEffect } from 'react';
import UserSummary from './components/UserSummary';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  
  const refreshUser = async (event) =>{
    // console.log('It works!!')
    const data = await fetchData()
    console.log(data[0])
    setCurrentUser(data[0])
    
    
  }
  
  return (
    <div className="App">
    <button onClick={refreshUser}>Button</button>
    <UserSummary currentUser={currentUser} />
    </div>
  );
}

export default App;
