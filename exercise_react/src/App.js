import './App.css';
import { Route , Routes, useNavigate} from 'react-router-dom';
import { useState } from 'react'
import { Welcome } from './commponents/welcome/welcome';
import { Home } from './commponents/home/home';
import { User } from './commponents/user/user';
import { SkillComponent } from './commponents/skill/skill';
import { BaseButton } from './commponents/styledButton/baseButton';
import { styledButton } from './commponents/styledButton/styledButton';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 
  
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  const handleGoBack = () =>{
    navigate(-1);
  }
  const handleGoForward = () =>{
    navigate(1);
  }
  const ForwardButton = styledButton(BaseButton,'info')
  const BackButton = styledButton(BaseButton,'react')


  return (
    <div className='App'>
      <div>
        <BackButton onClick={handleGoBack}></BackButton>
        <ForwardButton onClick={handleGoForward}></ForwardButton>
      </div>
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
