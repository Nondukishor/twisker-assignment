import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Container,Row,Col, Card, Form, Button} from 'react-bootstrap';
import '../assets/scss/group-post.scss'
import PostFrom from '../../components/dump-components/Post/PostFrom';
import { connect } from 'react-redux';
import {groupPost} from '../../redux/actions/GroupActions'
function GroupView(props) {

    const {posts,allPost} = props
    const {id} = useParams()
    const fetchPost = async()=>await posts(id)
    useEffect(()=>{
        fetchPost()
    },[fetchPost])

  

    return(
        <Container>
            <Row>
                <Col>
                <div className="mb-5 text-center"><h1>Group Name</h1></div>
                  <PostFrom group_id={id}/>
                   <div className="mt-5">
                        <div className="post-area">
                           
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
    )
}
const mapSateToProps = state=>{
    return{
        allPost: state.groups
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        posts:(id)=>dispatch(groupPost(id))
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(GroupView);