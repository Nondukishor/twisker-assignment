import React from 'react';
import {Card,Button,Image} from 'react-bootstrap';
import profile from './profile.png'
import {FaHtml5,FaMapMarkerAlt,FaUserFriends} from 'react-icons/fa'
const ProfileCard = (props) => {
    return (
    <Card style={{ width: '20rem' }}>
    <div className="text-center mt-3">
    <Image roundedCircle src={profile} height="100px" width="100px" />
    </div>
    <Card.Body>
    <Card.Title className="text-center">{props.first_name && props.first_name} {' '} {props.last_name}</Card.Title>
        <div>
    <div className="text-center">{props.username && props.username}</div>
    <div className="text-center"><FaHtml5/> {props.post && props.post}</div>
            <div className="text-center"><FaMapMarkerAlt/> San Francisco</div>
            <div className="text-center">
                <Button value={props.id && props.id} variant="outline-info">Follow</Button>
            </div>
        <hr/>
            <div>
                <strong><FaUserFriends/> Organization</strong>
                <li>Twisker</li>
                <li>Freecodecamp</li>
            </div>
        <hr/>
        <strong><FaUserFriends/>Groups</strong>
            <li>Twisker/dev</li>
            <li>Twisker/sales</li>
            <li>Twisker/Org</li>
            <li>Twisker/design</li>
            <a href="#!">More...</a>
      </div>
     </Card.Body>
    </Card>
    );
}

export default ProfileCard;