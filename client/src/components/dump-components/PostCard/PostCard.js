import React from 'react';
import {Card, Row,Col, Badge} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Like } from '../../../redux/actions/PostActions';

const PostCard = (props) => {
  const {post,post_id,posted_time,posted_by,post_title,group_name,like,likes,auth} = props

  const handleLike=(e)=>{
    e.preventDefault()
    const data = {liker_id:e.target.id,post_id,liked:1}
    return like(data)
  }
    return (
        <Card style={{marginBottom:"20px"}}>
        <Card.Header>{group_name && group_name+'> '}<strong>Posted by: {posted_by}</strong></Card.Header>
        <Card.Body>
         <Card.Title>{post_title}</Card.Title>
          <Card.Text>
            {post}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <Row>
            <Col xs={4} >
              <span><Badge variant="dark">1.5k</Badge> comments</span>
            </Col>
            <Col xs={4} >
             <p className="text-mutated">{posted_time.split(' ')[1]}</p>
            </Col>
         <Col xs={4}><Badge variant="dark">{likes && likes || 0}</Badge> <span onClick={handleLike} id={auth.uid}><i className="fas fa-thumbs-up"></i><strong>Like</strong></span></Col>
          </Row>
        </Card.Footer>
      </Card>
    );
}

const mapStateToProps =state=>{
  return{
    auth:state.user.data
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    like:(data)=>dispatch(Like(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCard);