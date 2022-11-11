import {MDBBadge, MDBCard, MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow} from "mdbreact";

const Profile = ({props}) => {
    class Profile extends React.Component
    {
        state = {
            profile: props.PROFILE
        }

        componentDidMount() {
            console.log(this.state.profile)
        }

        render() {
            return (
                <div className="container col-md-12 default">
                    <MDBCard>
                        <MDBRow>
                            <MDBContainer className="col-md-4">
                                <MDBCol lg='12' md='12' className='mt-2 mb-2'>
                                    <img
                                        src='https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg'
                                        className='img-fluid rounded-circle'
                                        alt=''
                                    />
                                </MDBCol>
                            </MDBContainer>
                            <MDBContainer className="col-md-8 text-center mt-2">
                                <h1><strong>Perfil</strong></h1>
                                <MDBListGroup className="col-md-12 mb-2" style={{ minWidth: '22rem' }} light>
                                    <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                                        <h5><strong>Nombre</strong></h5>
                                        <div>
                                            <h5>{ this.state.profile.USER_NAME }</h5>
                                        </div>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                                        <h5><strong>Email</strong></h5>
                                        <div>
                                            <h5>{ this.state.profile.USER_EMAIL }</h5>
                                        </div>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                                        <h5><strong>Rol</strong></h5>
                                        <div>
                                            <MDBBadge pill light color='success'>
                                                { this.state.profile.USER_ROLE }
                                            </MDBBadge>
                                        </div>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBRow>
                    </MDBCard>
                </div>
            );
        }
    }

    return <Profile />
}

export default Profile