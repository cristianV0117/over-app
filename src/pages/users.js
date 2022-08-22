import auth from '../core/auth'
import User from "../components/User/User";

const users = () => {
    return (
        <User props={{
            API: process.env.API,
            DOMAIN_API: process.env.DOMAIN_API,
            JWT: localStorage.getItem('token')
        }} />
    )
}

export default auth(users)