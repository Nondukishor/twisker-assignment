import React from 'react';
import {Form, Container, Row, Col,Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../assets/scss/user.scss';

const ResetPassword = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    return (
        <Container>
        <Row>
            <Col xs={12}>
             <div className="mt-10">
             <Card className="m-auto" style={{width:"30rem"}}>
              <Card.Body>
               <h3 className="text-center">LOG IN</h3>
               <Form onSubmit={handleSubmit(onSubmit)}>
                

                 <Form.Group controlId="password">
                         <Form.Control name="password" type="password" placeholder="***********" ref={
                             register({min: 6, max: 12, required:true })}/>
                         {errors.password && <span className="errors">This field is required</span>}
                 </Form.Group>
                 
                 
                  <div className="text-center">
                  Don't Have a account?<Link to='/register'> Register</Link>
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

export default ResetPassword;