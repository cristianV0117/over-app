import { useState } from 'react'
import Request from '../core/request'
import loginImage from '../assets/login.jpg'
import { toast, ToastContainer } from 'react-nextjs-toast'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBAnimation
} from 'mdbreact';

const LoginForm = ({props}) => {

	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = event => {
		event.preventDefault()
		event.target.className += " was-validated"
		Request("login", {"user_name": user, "password": password}, "POST", [props.API, props.DOMAIN_API]).then(response => {
			if (!response.error) {
				toast.notify(`Bienvenido ${response.message.email}`, {
					title: "¡OK!",
					type: "success"
				})
			} else {
				toast.notify(response.message, {
					title: "¡OH NO!",
					type: "error"
				})
			}
		})
	}

	return (
		<>
			<ToastContainer align={"right"} position={"bottom"} />
			<MDBAnimation  type="fadeInLeft">
				<div className="container col-md-6">
					<MDBCard>
						<div className="container col-md-7 mt-2">
							<MDBCardImage
								className='img-fluid'
					            src={loginImage}
					            waves
							/>
							<hr />
						</div>
						<MDBCardBody className="default">
							<p className='text-center h5'>Login</p>
							<form className='needs-validation' onSubmit={submitHandler}>
								<MDBInput
				                  label='Tu email o nombre de usuario'
				                  icon='user'
				                  type='text'
				                  onChange={e => setUser(e.target.value)}
				                  required
				                  name="user_name"
				                />
				                <MDBInput
				                  label='Contraseña'
				                  icon='lock'
				                  type='password'
				                  onChange={e => setPassword(e.target.value)}
				                  required
				                  name="password"
				                />
				                <div className="text-center">
									<MDBBtn type="submit" outline color='indigo'>Ingresar</MDBBtn>
								</div>
							</form>
						</MDBCardBody>
					</MDBCard>
				</div>
			</MDBAnimation>
		</>
	)
}

export default LoginForm