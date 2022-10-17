import './App.css';
import { Route , Routes} from 'react-router-dom';
import { useState } from 'react'
import { Welcome } from './commponents/welcome/welcome';
import { Home } from './commponents/home/home';
import { User } from './commponents/user/user';
import { SkillComponent } from './commponents/skill/skill';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className='App'>
      <Routes>
        <Route 
         path='/' 
         element={<Welcome isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>}/>
        <Route 
         path='home' 
         element={<Home/>}/>
         <Route path='user/:username' element={<User/>}/>
         <Route path='skills/:skill' element={<SkillComponent/>}/>
      </Routes>  
    </div>
  )
}

export default App;
