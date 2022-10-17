import { Footer } from "../footer/footer"

export const Welcome = ({handleLogin, isLoggedIn}) => {
    return(
        <div>
            {isLoggedIn ? 'Welcome To React' : <p>Please Log In</p>}
            <p></p>
            <button onClick={handleLogin}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <Footer/>
        </div>
    )
}