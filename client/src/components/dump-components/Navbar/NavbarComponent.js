import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Nav,Navbar,Form,Image,Badge} from 'react-bootstrap'
import './navbar.scss';
import logo from './icon.png';
import { FaSearch,FaBell,FaRegEnvelope,FaUserAlt } from 'react-icons/fa';

const NavbarComponent = (props) => {
    const { token } = props
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
         <NavLink className="nav-link" to={token ? "/profile" : '/login'}>{ token ? <FaUserAlt/> : 'Login'}</NavLink>
         {token && <NavLink className="nav-link" to="/logout">Logout</NavLink>}
        </Navbar>
        );
}

const mapStateToProps = state =>{
  return{
    token: state.user.token
  }
}
export default connect(mapStateToProps,null)(NavbarComponent);