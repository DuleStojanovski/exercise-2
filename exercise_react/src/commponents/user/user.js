import avatar from '../../images/images/images/avatar.png'
import { useParams } from 'react-router-dom'

export const User = () => {
    const params = useParams()
    return (
        <div className="user-card">
            <img src={avatar} alt="Avatar" width={120}/>
            <h2>{params.username}</h2>
            </div>
    )
}