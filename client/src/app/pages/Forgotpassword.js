import React from 'react';
import {Form, Container, Row, Col,Button, Card} from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import '../assets/scss/user.scss';



const Forgotpassword = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    return (
       <Container>
           <Row>
               <Col xs={12}>
                <div className="mt-10">
                <Card className="m-auto" style={{width:"30rem"}}>
                 <Card.Body>
                  <h3 className="text-center">FORGOT PASSWORD</h3>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="email">
                            <Form.Control name="email" type="email" placeholder="Enter email" ref={
                                register({ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, required:true })}/>
                            {errors.email && <span className="errors">This field is required</span>}
                    </Form.Group>

                     <div className="text-center">
                       <Button variant="primary" type="submit">Submit</Button>
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


export default Forgotpassword;