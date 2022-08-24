import {MDBBtn, MDBCard, MDBInput} from "mdbreact";
import Request from "../../core/request";
import {toast} from "react-nextjs-toast";
import Router from "next/router";

const ResetPassword = ({props}) => {
    class ResetPassword extends React.Component {

        state = {
            password: ''
        }

        componentDidMount() {
            console.log("loaded")
        }

        submitHandler = event => {
            event.preventDefault()
            event.target.className += " was-validated"
            Request("forgot/reset-password", {"email": props.EMAIL, "password": this.state.password}, "PUT", [props.API, props.DOMAIN_API]).then(response => {
                if (!response.error) {
                    toast.notify(`Tu contraseña ha sido actualizada ${String.fromCodePoint(0x1F600)}`, {
                        title: "¡OK!",
                        type: "success"
                    })
                    setTimeout(() => {
                        Router.push('/login')
                    }, 1000)
                } else {
                    toast.notify(response.message, {
                        title: "¡ OH NO :( !",
                        type: "error"
                    })
                }
            })
        }

        render() {
            return (
                <>
                    <div className="container col-md-12">
                        <MDBCard>
                            <div className="col-md-10 container mt-5">
                                <p className='text-center h5'>Escribe tu nueva contraseña &#x1F642;</p>
                                <form className='needs-validation container col-md-8 mt-2' onSubmit={this.submitHandler}>
                                    <MDBInput
                                        label='Nueva contraseña'
                                        icon='lock'
                                        type='password'
                                        onChange={e => this.setState({
                                            password: e.target.value
                                        })}
                                        required
                                        name="user_name"
                                    />
                                    <div className="text-center mt-2">
                                        <MDBBtn type="submit" outline color='indigo'>Actualizar</MDBBtn>
                                    </div>
                                </form>
                            </div>
                        </MDBCard>
                    </div>
                </>
            )
        }
    }
    return <ResetPassword />
}

export default ResetPassword