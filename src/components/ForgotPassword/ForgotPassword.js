import {MDBBtn, MDBCard, MDBInput} from "mdbreact";
import Request from "../../core/request";
import {toast} from "react-nextjs-toast";

const ForgotPassword = ({props}) => {
    class ForgotPassword extends React.Component {

        state = {
            email: ''
        }

        componentDidMount() {
            console.log("loaded")
        }

        submitHandler = event => {
            event.preventDefault()
            event.target.className += " was-validated"
            Request("forgot", {"email": this.state.email}, "POST", [props.API, props.DOMAIN_API]).then(response => {
                if (!response.error) {
                    toast.notify(`Hemos enviado un mail tu bandeja, revisa por favor ${String.fromCodePoint(0x1F600)}`, {
                        title: "¡OK!",
                        type: "success"
                    })
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
                                <p className='text-center h5'>Escribe tu correo electronico &#x1F642;</p>
                                <form className='needs-validation container col-md-8 mt-2' onSubmit={this.submitHandler}>
                                    <MDBInput
                                        label='Correo electronico'
                                        icon='user'
                                        type='email'
                                        onChange={e => this.setState({
                                            email: e.target.value
                                        })}
                                        required
                                        name="email"
                                    />
                                    <div className="text-center mt-2">
                                        <MDBBtn type="submit" outline color='indigo'>Guardar</MDBBtn>
                                    </div>
                                </form>
                            </div>
                        </MDBCard>
                    </div>
                </>
            )
        }
    }
    return <ForgotPassword />
}

export default ForgotPassword