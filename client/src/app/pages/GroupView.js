import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import PostFrom from '../../components/dump-components/Post/PostFrom';
import PostCard from '../../components/dump-components/PostCard/PostCard';
import {groupPost} from '../../redux/actions/GroupActions';
import '../assets/scss/group-post.scss';

function GroupView(props) {
    const {posts,single_group} = props
    const {id} = useParams()
    
    useEffect(()=>{
        return posts(id)
    },[posts,id])

  console.log(single_group)

    return(
        <Container>
            <Row>
             <Col>
                <div className="mb-5 text-center"> <h1>{single_group[0] && single_group[0].title}</h1></div>
                  <PostFrom group_id={id}/>
                   <div className="mt-5">
                        <div className="post-area">
                         {single_group[0].posts.length !== 0? 
                         single_group[0].posts.map((p,index)=>{
                             return(
                                <PostCard
                                    Key={index}
                                    post={p.post} 
                                    posted_time={p.created_at} 
                                    posted_by={''}
                                    post_title={p.title}
                                />
                             )
                         }
                         ): ''}
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapSateToProps = state=>{
    return{
        single_group: state.groups.group_post.data
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        posts:(id)=>dispatch(groupPost(id))
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(GroupView);