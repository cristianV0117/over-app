import { useState } from 'react'
import Request from '../core/request'
import Session from '../core/session'
import loginImage from '../assets/login.jpg'
import { toast } from 'react-nextjs-toast'
import Router from 'next/router'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
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
				setTimeout(() => {
					localStorage.setItem('s', true)
					Router.push('dashboard')
				}, 2000)
			} else {
				toast.notify(response.message, {
					title: "¡OH NO!",
					type: "error"
				})
			}
		})
	}

	return (
	
			<div className="container col-md-12">
				<MDBAnimation  type="fadeInLeft">
					<MDBCard className="shadow-lg">
						<div className="row">
							<div className="col-md-6">
								<MDBCardImage
									className='img-fluid'
									src={loginImage}
									waves
								/>
							</div>
							<div className="col-md-6 mt-5 default">
								<div className="col-md-10 mt-5 mr-4">
									<p className='text-center h5'>Login</p>
									<form className='needs-validation mt-2' onSubmit={submitHandler}>
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
										<div className="text-center mt-2">
											<MDBBtn type="submit" outline color='indigo'>Ingresar</MDBBtn>
										</div>
									</form>
								</div>
							</div>
						</div>
					</MDBCard>
				</MDBAnimation>
			</div>
		
	)
}

export default LoginForm