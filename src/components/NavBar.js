import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      sessionStatus: false
    };
  }

  componentDidMount() {
    if (null !== localStorage.getItem('s')) {
      this.setState({sessionStatus: true})
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar color='indigo' dark expand='md'>
          <MDBNavbarBrand>
            <Link href="/">
              <a><strong className='white-text'>Inicio</strong></a>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>Usuario</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href='/login'>
                        <a>Ingresar</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/register'>
                        <a>Registrarme</a>
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              {
                !this.state.sessionStatus ?
                    <MDBNavItem>
                      <Link href='https://github.com/cristianV0117/over-app'>
                        <a className='nav-link'>Repositorio</a>
                      </Link>
                    </MDBNavItem>
                    :
                    null
              }
              {
                !this.state.sessionStatus ?
                    <MDBNavItem>
                      <Link href='https://back-over-api.herokuapp.com/'>
                        <a className='nav-link'>API</a>
                      </Link>
                    </MDBNavItem>
                    :
                    null
              }
              {
                this.state.sessionStatus ?
                    <MDBNavItem>
                      <Link href='#'>
                        <a className='nav-link'>Cerrar sesion</a>
                      </Link>
                    </MDBNavItem>
                    :
                    null
              }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export default Layout;
