import React,{useRef} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Form, Container, Row, Col,Button, Card} from 'react-bootstrap';
import { REGISTRATION } from '../../redux/actions/AuthActions'
import '../assets/scss/user.scss';

const Registration = (props) => {
    
    const { register,watch, handleSubmit,errors } = useForm()
    const {registration,error} = props
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = data =>{
      console.log(data)
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

                 <Form.Group controlId="first_name">
                         <Form.Control name="first_name" type="text" placeholder="First Name" ref={
                             register({ required:true })}/>
                         {errors.first_name && <span className="errors" >You must provide a first name</span>}
                 </Form.Group>


                 <Form.Group controlId="last_name">
                         <Form.Control name="last_name" type="text" placeholder="Last Name" ref={
                             register({ required:true })}/>
                         {errors.last_name && <span className="errors" >You must provide a last name</span>}
                 </Form.Group>


                 <Form.Group controlId="username">
                         <Form.Control name="username" type="text" placeholder="User Name" ref={
                             register({ required:true })}/>
                         {errors.username && <span className="errors" >You must provide a username</span>}
                 </Form.Group>

                 <Form.Group controlId="email">
                         <Form.Control name="email" type="email" placeholder="Enter email" ref={
                           register({required:true })}/>
                         {errors.email && <span className="errors">You must provide a email</span>}
                 </Form.Group>

                 
                <Form.Group controlId="password">
                  <Form.Control 
                     name="password" 
                     type="password" 
                     placeholder="***********" 
                     ref={register({
                        required: "You must specify a password",
                        minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                       }
                    })}/>
                  {errors.password && <span className="errors">{errors.password.message}</span>}
                </Form.Group>
                    
                 
              <Form.Group controlId="password_repeat">
                <Form.Control 
                placeholder="***********"
                name="password_repeat"
                type="password"
               ref={register({validate: value =>value === password.current || "The passwords do not match"
              })}
                />
              {errors.password_repeat && <span className="errors">{errors.password_repeat.message}</span>}
            </Form.Group>
                {error && <div className="text-center">
                     <span>{error.message}</span>
                </div>}
                
                 

            <Form.Group controlId="present_post">
                  <Form.Control name="present_post" placeholder="Software Developer" ref={register({ required:true })}/>
                  {errors.present_post && <span className="errors" >You must provide a present post</span>}
            </Form.Group>

            <div className="text-center">
              Already Have a account?<Link to='/login'> Login </Link>
              <br/>
              <Button variant="primary" type="submit"> Register </Button>
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