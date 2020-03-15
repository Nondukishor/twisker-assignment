import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Nav,Navbar,Form,Image,Badge, Button} from 'react-bootstrap'
import { FaSearch,FaBell,FaRegEnvelope,FaUserAlt } from 'react-icons/fa';
import {Logout} from '../../../redux/actions/AuthActions';
import logo from './icon.png';
import './navbar.scss';

const NavbarComponent = (props) => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="white" variant="white">
         <Navbar.Brand href="#home"><Image src={logo} height='20rem'/>twisker</Navbar.Brand>
           <Nav className="mr-auto">
             <NavLink activeClassName="active" className="nav-link" to="/member">Member</NavLink>
             <NavLink activeClassName="active" className="nav-link" to="/groups">Groups</NavLink>
           </Nav>
            <Form inline>
            <div className="form-group has-search">
                <FaSearch className="form-control-feedback"/>
                <input type="text" className="form-control" placeholder="Search"/>
           </div>
        </Form>
         <NavLink className="nav-link" to="/faq"><FaBell/><sup><Badge variant="warning">2</Badge></sup></NavLink>
         <NavLink className="nav-link" to="/faq"><FaRegEnvelope/><sup><Badge variant="success">2</Badge></sup></NavLink>
         <NavLink className="nav-link" to={'/login'}> <FaUserAlt/></NavLink>
         {/* {isLoggedIn() && <Button size='sm' onClick={()=>props.userLogout()}>Logout</Button>} */}
        </Navbar>
        );
}

const mapStateToProps = state =>{
  return{
    token: state.user.token
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    userLogout: ()=>dispatch(Logout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent);