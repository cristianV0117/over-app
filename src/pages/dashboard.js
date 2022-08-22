import auth from '../core/auth'
import DashboardInfo from '../components/DashboardInfo'
import {MDBBtn, MDBLink} from "mdbreact";
import SideBar from '../components/SideBar'


const dashboard = () => {
	return (
		<>
			<DashboardInfo />
			<MDBBtn outline href='/users'>
				Usuarios
			</MDBBtn>
			<h1>HOLA MUNDO AUTH</h1>
		</>
	)
}

export default auth(dashboard)