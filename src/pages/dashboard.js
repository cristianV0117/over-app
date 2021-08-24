import auth from '../core/auth'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'


const dashboard = () => {
	return (
		<>
			<UserInfo />
			<h1>HOLA MUNDO AUTH</h1>
			
		</>
	)
}

export default auth(dashboard)