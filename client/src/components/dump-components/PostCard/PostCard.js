import React from 'react';
import {Card, Row,Col, Badge} from 'react-bootstrap';
const PostCard = (props) => {
  const {post,posted_time,posted_by,post_title} = props
  console.log(posted_time.split(':')[2])
    return (
        <Card style={{marginBottom:"20px"}}>
        <Card.Header><strong>Posted by: {posted_by}</strong></Card.Header>
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
            <Col xs={4}><Badge variant="dark">1.5k</Badge> <i class="fas fa-thumbs-up"></i><strong>Like</strong></Col>
          </Row>
        </Card.Footer>
      </Card>
    );
}

export default PostCard;