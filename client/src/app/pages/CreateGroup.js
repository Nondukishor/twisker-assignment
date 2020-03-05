import React from 'react';
import {Container,Col,Row,Form,Card,Button,Image} from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import {createNewGroup} from '../../redux/actions/GroupActions';
import groupLogo from '../assets/img/group-pic.jpg'
const CreateGroup = (props) => {
    const { register, handleSubmit,errors } = useForm()

    const onSubmit = data =>{
      const groupData = {...data,member_id:props.user.uid,member_type:'ADMIN'}
      props.createGroup(groupData)
    }
  
    return (<Container>
        <Row>
            <Col xs={12}>
             <div className="mt-10">
             <Card className="m-auto" style={{width:"30rem"}}>
              <Card.Body>
                <div className="text-center"><Image src={groupLogo} height="100px" width="100px"/></div>
               <h3 className="text-center">Create Your Group</h3>
               <Form onSubmit={handleSubmit(onSubmit)}>

                 <Form.Group controlId="title">
                    <Form.Control name="title" type="text" placeholder="Enter Group Title" ref={register({ required:true })}/>
                      {errors.title && <span className="errors">Title is required</span>}
                 </Form.Group>

                 <Form.Group controlId="group-type">
                         <Form.Control name="group_type" as='select' placeholder="Select Group Type " ref={register({ required:true })}>
                         {['PUBLIC','PRIVATE'].map((option,index)=>{
                          return <option key={index}>{option}</option>
                         })}
                          
                         </Form.Control>
                         {errors.title && <span className="errors">Group Type is required</span>}
                 </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">Create</Button>
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

const mapStateToProps = state=>{
  return{
    token: state.user.token,
    user: state.user.data
  }
}

const mapDispatchToProps =dispatch=>{
  return{
    createGroup:(data)=>dispatch(createNewGroup(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateGroup);