import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Form, Container, Row, Col,Button, Card} from 'react-bootstrap';
import { REGISTRATION } from '../../redux/actions/AuthActions'
import '../assets/scss/user.scss';

const Registration = (props) => {
    
    const { register, handleSubmit,errors } = useForm()
    const {registration,error} = props

    const onSubmit = data =>{
      registration(data)
    }
   
    return (
        <Container>
        <Row>
            <Col xs={12}>
             <div className="mt-10">
             <Card className="m-auto" style={{width:"30rem"}}>
              <Card.Body>
               <h3 className="text-center">REGISTRATION</h3>
               <Form onSubmit={handleSubmit(onSubmit)}>

                 <Form.Group controlId="username">
                         <Form.Control name="username" type="text" placeholder="User Name" ref={
                             register({ required:true })}/>
                         {errors.username && <span className="errors" >You must provide a username</span>}
                 </Form.Group>

                 <Form.Group controlId="email">
                         <Form.Control name="email" type="email" placeholder="Enter email" ref={
                             register({ pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/, required:true })}/>
                         {errors.email && <span className="errors">You must provide a email</span>}
                 </Form.Group>

                 <Form.Group controlId="password">
                        <Form.Control name="password" type="password" placeholder="***********" ref={register({min: 6, max: 12, required:true})}/>
                         {errors.password && <span className="errors">You must Provide a password</span>}
                 </Form.Group>

                         {error && <div className="text-center"><span className="errors">{error.message}</span></div>}

                  <div className="text-center">
                    Already Have a account?<Link to='/login'> Login</Link>
                    <br/>
                    <Button variant="primary" type="submit">Register</Button>
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

const mapStateToProps = (state) =>{
    return{
      success:state.user.registration,
      error: state.user.error
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return {
      registration: (data)=>dispatch(REGISTRATION(data))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) (Registration);