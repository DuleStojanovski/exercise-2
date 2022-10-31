import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavBaR = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    
    const onChangeHandler = (event) => {
        setFirstName(event.target.value);
    }
    const onKeyUpHandler = (event) =>{
        const key = event.key;
        if(key==='Enter'){
            navigate('/user/'+ firstName)
        }
    }


return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
             <nav style={{width:'100'}}>
                <ul style={{listStyle:'none'}}>
                    <li>
                        <Link style={{textDecoration:'none', color:'#fff'}} to={'/home'}>Home</Link>
                    </li> 
                    <li>
                        <Link style={{textDecoration:'none', color:'#fff'}} to={`/user/${firstName}`}>User{firstName}</Link>
                    </li>
                </ul>  
             </nav>
            <div>
                <label htmlFor="">FirstName</label>
                <input name="firstName" type='text' value={firstName} onChange={(event) => onChangeHandler(event)} onKeyUp={(event) => onKeyUpHandler(event)}/>    
            </div> 
            </div>
)
}