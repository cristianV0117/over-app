import { useState } from 'react'
import Request from '../core/request'
import loginImage from '../assets/login.jpg'
import { toast } from 'react-nextjs-toast'
import Router from 'next/router'
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBInput,
  MDBAnimation
} from 'mdbreact';
import Link from "next/link";

const LoginForm = ({props}) => {

	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = event => {
		event.preventDefault()
		event.target.className += " was-validated"
		Request("login", {"user_name": user, "email": user, "password": password}, "POST", [props.API, props.DOMAIN_API]).then(response => {
			if (!response.error && 200 === response.status) {
				toast.notify(`Bienvenido ${response.message.user_name}`, {
					title: "¡OK!",
					type: "success"
				})
				setTimeout(() => {
					localStorage.setItem('s', true)
					localStorage.setItem('token', response.message.jwt)
					localStorage.setItem('id', response.message.id)
					localStorage.setItem('user_name', response.message.user_name)
					localStorage.setItem('email', response.message.email)
					localStorage.setItem('rol_id', response.message.roles.id)
					localStorage.setItem('rol', response.message.roles.name)
					Router.push('dashboard')
					location.reload()
				}, 2000)
			} else {
				toast.notify(response.message, {
					title: "¡ OH NO :( !",
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
									<p className='text-center h5'>Ingresa &#x1F642;</p>
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
											<Link href="/forgot-password">
												<MDBBtn outline color='warning'>Olvidé mi contraseña</MDBBtn>
											</Link>
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