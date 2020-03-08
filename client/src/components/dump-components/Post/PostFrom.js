import React,{useState} from 'react';
import DatePicker from 'react-datepicker'
import {Form, Button, FormGroup} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import {createPost} from '../../../redux/actions/PostActions';
import { connect } from 'react-redux';

const PostFrom = (props) => {
    const { create,user }=props
    const [state,setState] = useState({
      author_id:user.id,
      group_id: (props.group_id ? props.group_id : null),
      title:'',
      due_date:new Date(),
      post:'',
      post_type:'PUBLIC'});

    const handleChange = (e)=>setState({...state,[e.target.name]:e.target.value})

    const handleSubmit=(e)=>{
        e.preventDefault();
        return create(state);
      }

    return (
        <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group controlId="post" className="mt-2 mb-0">
              <Form.Label>Give a title for your post</Form.Label>
             <Form.Control type="text" name="title" onChange={handleChange} value={state.title}/>
         </Form.Group>

         <Form.Group controlId="post">
             <Form.Label>Write your Post</Form.Label>
             <Form.Control name="post" as="textarea" rows="3" onChange={handleChange} value={state.post}/>
         </Form.Group>

         <FormGroup>
           <DatePicker className={'form-control'} selected={state.due_date} onChange={date => setState({...state,due_date:date})}  />
         </FormGroup>

         <select  name="post_type" onChange={handleChange} value={state.post_type}>
           <option value="PUBLIC">Public</option>
           <option value="PRIVATE">Private</option>
         </select>
          
         <div className="text-right">
           <Button type='submit' variant="primary">POST</Button>
         </div>
        </Form>
    );
}
const mapStateToProps = state =>{
  return{
    user: state.user.data
  }
}

const mapDispatchToProps = dispatch =>{
    return{
      create:(data)=>dispatch(createPost(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(PostFrom);