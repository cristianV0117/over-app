import {useState} from 'react'
import loginImage from '../assets/login.jpg'
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

const login = () => {

	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = event => {
		event.preventDefault()
		event.target.className += " was-validated"
		fetch('https://back-over-api.herokuapp.com/api/v1/login', {
			method: "POST",
			body: JSON.stringify({
				user,
				password
			})
		})
	}

	return (
		<>
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
				                  name="user"
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

export default login