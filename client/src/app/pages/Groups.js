import React, { useEffect } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import GroupCard from '../../components/dump-components/content-card/ContentCard';
import GroupIcon from '../assets/img/group-icon.png'
import groupIcon2 from '../assets/img/groups.jpg'
import { groups } from '../../redux/actions/GroupActions';
const Groups = (props) => {
  const {allGroups,fetchGroup} =props
  useEffect(()=>{
    fetchGroup()
  },[fetchGroup])
    return (
        <Container>
          <div className="text-center"><h2>Available Groups</h2></div>
          <Row>
              <Col xs={4}>
                <GroupCard image={GroupIcon} alt="Group icon" title="group 1"/>
              </Col>
              <Col xs={4}>
                <GroupCard image={groupIcon2} alt="group icon" title='group 2'/>
              </Col>
              <Col xs={4}>
                <GroupCard image={GroupIcon} alt="Group icon" title="group 3"/>
              </Col>
              <Col xs={4}>
                <GroupCard image={GroupIcon} alt="Group icon" title="group 4" />
              </Col>
              <Col xs={4}>
                <GroupCard image={GroupIcon} alt="Group icon" title="group 5" />
              </Col>
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