import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import PostFrom from '../components/dump-components/Post/PostFrom';
import PostCard from '../components/dump-components/PostCard/PostCard';
import {fetchGroupByID} from '../redux/actions/GroupActions';
import '../assets/scss/group-post.scss';
import { getToken } from '../hooks/token';

function GroupView(props) {
    const {fetchGroupsByID,single_group} = props
    const {id} = useParams()
 
    useEffect(()=>{
      fetchGroupsByID(id)
    },[fetchGroupsByID,id])

  

    return(
        <Container>
            <Row>
             <Col>
                <div className="mb-5 text-center"> <h1>{single_group[0] && single_group[0].title}</h1></div>
                  <PostFrom group_id={id}/>
                   <div className="mt-5">
                        <div className="post-area">
                         {single_group[0].posts.length !== 0 && 
                         single_group[0].posts.map((p,index)=><PostCard
                                    Key={index}
                                    post_id={p.id}
                                    group_name={single_group[0].title}
                                    post={p.post} 
                                    posted_time={p.created_at} 
                                    posted_by={p.users.username}
                                    post_title={p.title}
                                />)}
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapSateToProps = state =>{
    return{
        single_group: state.groups.single_group.data
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        fetchGroupsByID:(id)=>dispatch(fetchGroupByID(id))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(GroupView);