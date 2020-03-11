import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Container,Row,Col,Card} from 'react-bootstrap';
import MemberCard from '../components/dump-components/content-card/ContentCard';
import member2 from '../assets/img/member2.jpg';
import {MemberActions} from '../redux/actions/MemberActions'

const Member = (props) => {
   const {members,member}= props;
   
    useEffect(()=>{
     return members()
    },[members])

    return (
      <Container>
          <div className="text-center"><h2>Twisker Member</h2></div>
          <Row>
              {member && member.map((member,index)=><Col key={index} xs={4}><MemberCard  image={member2} alt="member icon" title={member.username} id={member.id}/></Col>)}
          </Row>
      </Container>
    );
}
const mapStateToProps= state =>{
    return{
      member:state.member.data
    }
}

const mapDispatchToProps = dispatch =>{
    return{
     members:()=>dispatch(MemberActions())   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Member);