import { useState } from 'react'
import registerImage from '../assets/register.jpg'
import Request from '../core/request'
import { toast } from 'react-nextjs-toast'
import Router from 'next/router'
import {
    MDBBtn,
    MDBCard,
    MDBInput,
    MDBAnimation
} from 'mdbreact';

const RegisterForm = ({props}) => {

    const [user_name, setUserName] = useState('')
    const [first_name, setFirstName] = useState('')
    const [second_name, setSecondName] = useState('')
    const [first_last_name, setFirstLastName] = useState('')
    const [second_last_name, setSecondLastName] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
	const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const submitHandler = event => {
        event.preventDefault()
        event.target.className += " was-validated"

        if (password != confirm) {
            toast.notify("Las contraseñas no coinciden", {
                title: "¡UPS :(!",
                type: "warn"
            })
            return
        }

        Request("users", {
            user_name,
            first_name,
            second_name,
            first_last_name,
            second_last_name,
            email,
            cellphone,
            password,
            "state_id": 2
        }, "POST", [props.API, props.DOMAIN_API]).then(response => {
            if (!response.error) {
				toast.notify(`Te doy una calida bienvenida ${response.message.email}`, {
					title: "¡OK!",
					type: "success"
				})
				setTimeout(() => {
					Router.push('login')
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
        <>
            <div className="container col-md-12">
                <MDBAnimation  type="fadeInLeft">
                    <MDBCard className="shadow-lg">
                        <div className="row">
                            <div className="col-md-6">
                                <img 
                                    className='img-fluid h-100'
									src={registerImage}
                                    alt="Responsive image"
                                />
                            </div>
                            <div className="col-md-6 mt-5 default">
                                <div className="col-md-10 mr-4">
                                    <p className='text-center h5'>¡ Registrate ! &#x1F600;</p>
                                    <form className='needs-validation mt-2' onSubmit={submitHandler}>
                                        <MDBInput
                                            label="¡ Nombre de usuario !"
                                            icon='user'
											type='text'
                                            required
                                            name="user_name"
                                            onChange={e => setUserName(e.target.value)}
                                        />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Primer nombre"
                                                    icon='user'
                                                    type='text'
                                                    required
                                                    name="first_name"
                                                    onChange={e => setFirstName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Segundo nombre"
                                                    icon='user'
                                                    type='text'
                                                    required
                                                    name="second_name"
                                                    onChange={e => setSecondName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Primer apellido"
                                                    icon='user'
                                                    type='text'
                                                    name="first_last_name"
                                                    onChange={e => setFirstLastName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Segundo apellido"
                                                    icon='user'
                                                    type='text'
                                                    name="second_last_name"
                                                    onChange={e => setSecondLastName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Email"
                                                    icon='envelope'
                                                    type='email'
                                                    required
                                                    name="email"
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Telefono"
                                                    icon='mobile'
                                                    type='number'
                                                    required
                                                    name="cellphone"
                                                    onChange={e => setCellphone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Contraseña"
                                                    icon='lock'
                                                    type='password'
                                                    required
                                                    name="password"
                                                    onChange={e => setPassword(e.target.value)}
                                                />

                                            </div>
                                            <div className="col-md-6">
                                                <MDBInput
                                                    label="Confirma la Contraseña"
                                                    icon='exclamation-triangle'
                                                    type='password'
                                                    required
                                                    name="confirm"
                                                    onChange={e => setConfirm(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center">
											<MDBBtn type="submit" outline color='indigo'>Registrar</MDBBtn>
										</div>
                                        <br />                                                                      
                                    </form>
                                </div>
                            </div>
                        </div>
                    </MDBCard>
                </MDBAnimation>
            </div>
        </>
    )
}

export default RegisterForm