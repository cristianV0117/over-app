import React, { Component } from 'react';
import { 
    MDBContainer, 
    MDBModal, 
    MDBModalBody, 
    MDBIcon, 
    MDBCol, 
    MDBRow, 
    MDBModalHeader 
}
from 'mdbreact';

class UserInfo extends Component {
state = {
  modal3: true
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

componentDidMount() {
    setTimeout(() => {
        this.setState({modal3: false})
    }, 5000)
}

render() {
  return (
      <MDBContainer>
        <MDBModal size="lg" className="modal-notify modal-info text-white" side position="bottom-right" backdrop={false}
          isOpen={this.state.modal3} toggle={this.toggle(3)}>
          <MDBModalHeader tag="p" toggle={this.toggle(3)}>
            <strong>OVER APP te saluda!</strong>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol size="3" className="d-flex justify-content-center align-items-center">
                <MDBIcon size="4x" icon="smile" className="ml-1" />
              </MDBCol>
              <MDBCol size="9">
                <p>
                    <strong>
                        Pronto habra informacion relevante en esta sección
                    </strong>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default UserInfo;