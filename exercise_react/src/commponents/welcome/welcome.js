
import { Footer } from "../footer/footer"
import { NavBaR } from "../navBar/navBar"

export const Welcome = ({handleLogin, isLoggedIn}) => {
    return(
        <div>
            {
                isLoggedIn ?
                <NavBaR/>:
                <p>Please Log in</p>
            }
            
            <p></p>
            <button onClick={handleLogin}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <Footer/>
        </div>
    )
}