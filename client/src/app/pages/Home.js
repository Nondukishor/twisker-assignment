import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileCard from '../../components/dump-components/ProfileCard/ProfileCard';
import ProfileNav from '../../components/dump-components/nav/ProfileNav';
import { Container, Row,Col,  } from 'react-bootstrap';
import '../assets/scss/home.scss';
import Feeds from './Feeds';
import NavbarComponent from '../../components/dump-components/Navbar/NavbarComponent';

const Home = (props) => {
    return (
        <>
        <NavbarComponent/>
        <Container>
            <Row>
                <Col sm={12}>
                  <div className="mt-5">
                    <Row>
                      <Col xs={4}>
                      <ProfileCard 
                         id={props.user.data && props.user.data.id}
                         first_name={props.user.data && props.user.data.first_name}
                         last_name={props.user.data && props.user.data.last_name}
                         username={props.user.data && props.user.data.username}
                         email={props.user.data && props.user.data.email}
                         post={props.user.data && props.user.data.present_post}
                      />
                      </Col>
                      <Col xs={8}>
                       <ProfileNav feed={<Feeds/>}/>
                      </Col>
                    </Row>
                  </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

const mapStateToProps=state=>{
  return{
    success:state.post.success,
    user: state.user.data
  }
}



export default connect(mapStateToProps,null)(Home);