import auth from '../core/auth'
import DashboardInfo from '../components/DashboardInfo'
import {MDBBtn} from "mdbreact";
import Link from "next/link";
import session from "../core/session";

const dashboard = () => {

	session();

	return (
		<>
			<DashboardInfo />
			<Link href='/users'>
				<MDBBtn outline>
					Usuarios
				</MDBBtn>
			</Link>
			<h1>HOLA MUNDO AUTH</h1>
		</>
	)
}

export default auth(dashboard)