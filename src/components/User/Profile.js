import React, { Component } from 'react';
import {
    MDBBadge,
    MDBBtn,
    MDBCard,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from "mdbreact";
import {toast} from "react-nextjs-toast";
import Request from '../../core/request'

const Profile = ({props}) => {
    class Profile extends Component
    {
        state = {
            profile: props.PROFILE,
            buttonSave: false,
            editProfile: false,
            userName: null
        }

        editProfile = () => {
            this.setState({editProfile: true})
            this.setState({buttonSave: true})
        }

        submitHandler = event => {
            event.preventDefault()
            Request(`users/${props.PROFILE.USER_ID}`, {
                "user_name": this.state.userName
            }, "PUT", [props.API, props.DOMAIN_API, props.JWT]).then(response => {
                toast.notify(`Editado correctamente`, {
                    title: "¡OK!",
                    type: "success"
                })
                setTimeout(() => {
                    localStorage.setItem('user_name', response.message.user_name)
                    location.reload()
                }, 1500)
            })
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
                                <form onSubmit={this.submitHandler}>
                                    <h1><strong>Perfil</strong></h1>
                                    <MDBListGroup className="col-md-12 mb-2" style={{ minWidth: '22rem' }} light>
                                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                                            <h5><strong>Nombre</strong></h5>
                                            {
                                                !this.state.editProfile ?
                                                    <div>
                                                        <h5>{ this.state.profile.USER_NAME }</h5>
                                                    </div> :
                                                    <MDBInput
                                                        type='text'
                                                        onChange={e => this.setState({userName: e.target.value})}
                                                        required
                                                        name="user_name"
                                                        label={this.state.profile.USER_NAME}
                                                    />
                                            }
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
                                    <div className="mt-2 mb-2" >
                                        {
                                            this.state.buttonSave ?
                                                <MDBBtn outline color='danger'>Cancelar</MDBBtn> :
                                                <MDBBtn onClick={this.editProfile} outline color='info'>Editar perfil</MDBBtn>
                                        }
                                        {
                                            this.state.buttonSave ?
                                                <MDBBtn type="submit" outline color='success'>Guardar</MDBBtn> :
                                                null
                                        }
                                    </div>
                                </form>
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