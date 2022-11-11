import Profile from '../components/User/Profile'
import auth from '../core/auth'

const profile = () => {
    return (
        <>
           <Profile props={{
               API: process.env.API,
               DOMAIN_API: process.env.DOMAIN_API,
               JWT: localStorage.getItem('token'),
               PROFILE: {
                   USER_ID: localStorage.getItem('id'),
                   USER_NAME: localStorage.getItem('user_name'),
                   USER_EMAIL: localStorage.getItem('email'),
                   USER_ROLE: localStorage.getItem('rol')
               }
           }} />
        </>
    )

}

export default auth(profile)