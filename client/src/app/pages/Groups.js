import React, { useEffect } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import GroupCard from '../../components/dump-components/content-card/ContentCard';
import GroupIcon from '../assets/img/group-icon.png';
import { groups } from '../../redux/actions/GroupActions';


const Groups = (props) => {
  const {allGroups,fetchGroup} =props
  const fetchAllGroups = async ()=> await fetchGroup()
  useEffect(()=>{
    fetchAllGroups()
  },[fetchAllGroups])
  console.log('groups',allGroups)

    return (
        <Container>
          <div className="text-center">
            <h2>Available Groups</h2>
            <Link to="/create-group" >Create a your own group</Link>
          </div>
          <Row>
              {allGroups && allGroups.data.map((group,index)=><Col key={index} xs={4}>
                <GroupCard image={GroupIcon} alt="Group icon" title={group.title} id={group.id}/>
              </Col>)}
          </Row>
      </Container>
    );
}
const mapStateToProps = state =>{
  return{
   allGroups: state.groups
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    fetchGroup:()=>dispatch(groups())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Groups);