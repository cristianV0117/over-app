import auth from '../core/auth'
import DashboardInfo from '../components/DashboardInfo'
import SideBar from '../components/SideBar'


const dashboard = () => {
	return (
		<>
			<DashboardInfo />
			<h1>HOLA MUNDO AUTH</h1>
			
		</>
	)
}

export default auth(dashboard)