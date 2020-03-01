import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import PostCard from '../../components/dump-components/PostCard/PostCard';
import PostFrom from '../../components/dump-components/Post/PostFrom';
import {Posts} from '../../redux/actions/PostActions'
const Feeds = ({posts,post}) => {
    useEffect(()=>{
      return post()
    },[post])

    return (<>
    <PostFrom/>
    <div className="time-line">           
        {posts? posts.map((p,index)=><PostCard key={index} 
        post={p.post} 
        posted_time={p.created_at} 
        posted_by={p.users.username}
        post_title={p.title}
         />) :''}
      </div></>
    );
}
const mapStateToProps=state=>{
    return{
      posts:state.post.data
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        post:()=>dispatch(Posts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Feeds);