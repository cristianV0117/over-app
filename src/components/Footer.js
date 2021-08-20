import React from 'react';
import { MDBIcon, MDBContainer, MDBFooter } from 'mdbreact';

const FooterPage = () => {
  return (
    <MDBFooter
      color='indigo'
      className='font-small py-3 mt-4 footer-copyright text-center'
    >
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:
        <a href='https://github.com/cristianV0117'> Cristian Vasquez </a>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
