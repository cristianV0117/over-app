import { MDBContainer } from 'mdbreact';
import { ToastContainer } from 'react-nextjs-toast'
import NavBar from './NavBar';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <NavBar />
      <MDBContainer className="mt-2">{props.children}</MDBContainer>
      <Footer />
      <ToastContainer className="notify" align={"right"} position={"bottom"} />
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #f5f8fa!important;
        }
      `}</style>
    </>
  );
}

export default Layout;
