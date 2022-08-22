import {
    MDBCard,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import Request from '../../core/request';
import DangerAlert from '../Helpers/Alerts/DangerAlert';

const User = ({props}) => {
    class User extends React.Component
    {
        state = {
            status: false,
            errorMessage: '',
            data: []
        }

        componentDidMount() {
            Request("users", null, "GET", [props.API, props.DOMAIN_API, props.JWT]).then(response => {
                if (!response.error) {
                    this.setState({data: response.message})
                } else {
                    this.setState({status: true})
                    this.setState({errorMessage: response.message})
                }
            })
        }

        render() {
            if (!this.state.status) {
                return (
                    <div className="container col-md-12">
                        <MDBCard>
                            <div className='container col-md-11'>
                                <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                            <th scope='col'>#</th>
                                            <th scope='col'>Nombre usuario</th>
                                            <th scope='col'>Email</th>
                                            <th scope='col'>Telefono</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            this.state.data.map((item,idx) => (
                                                <tr key={idx}>
                                                    <td>{item.id}</td>
                                                    <td>{item.user_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.cellphone}</td>
                                                </tr>
                                            ))
                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                        </MDBCard>
                    </div>
                )
            } else {
                return (
                    <DangerAlert props={this.state.errorMessage} />
                )
            }
        }
    }
    return <User />
}

export default User