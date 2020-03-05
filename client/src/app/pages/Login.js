import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {Form, Container, Row, Col,Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {LOGIN} from '../../redux/actions/AuthActions';
import '../assets/scss/user.scss';
import {isLoggedIn} from '../hooks/token'
const Login = (props) => {

    const { register, handleSubmit,errors } = useForm()
    useEffect(()=> isLoggedIn()? props.history.goBack() : '',[])
    const {login,error} = props;
    const onSubmit = data =>login(data)

    return (
        <Container>
        <Row>
            <Col xs={12}>
             <div className="mt-10">
             <Card className="m-auto" style={{width:"30rem"}}>
              <Card.Body>
               <h3 className="text-center">LOG IN</h3>
               <Form onSubmit={handleSubmit(onSubmit)}>
                 <Form.Group controlId="email">
                         <Form.Control name="email" type="email" placeholder="Enter email" ref={
                             register({ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, required:true })}/>
                         {errors.email && <span className="errors">This field is required</span>}
                 </Form.Group>

                 <Form.Group controlId="password">
                         <Form.Control name="password" type="password" placeholder="***********" ref={
                             register({min: 6, max: 12, required:true })}/>
                         {errors.password && <span className="errors">This field is required</span>}
                 </Form.Group>
                         {error && <div className="text-center"><span className="errors">{error.message}</span></div>}
                 
                  <div className="text-center">
                  Don't Have a account?<Link to='/registration'> Register</Link>
                  <br/>
                  Don't Worry?<Link to='/forgot-password'> Forgot password? </Link>
                  <br/>
                    <Button variant="primary" type="submit">Login</Button>
                  </div>
                 </Form>
               </Card.Body>
             </Card>
             </div>
         </Col>
        </Row>
    </Container>
    );
}

const mapStateToProps=state=>{
  return{
    token:state.user.token,
    error:state.user.error
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    login:(data)=>dispatch(LOGIN(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);