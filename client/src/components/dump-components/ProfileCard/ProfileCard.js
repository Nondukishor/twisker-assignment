import React from 'react';
import {Card,Button,Image} from 'react-bootstrap';
import profile from './profile.png'
import {FaHtml5,FaMapMarkerAlt,FaUserFriends} from 'react-icons/fa'
const ProfileCard = () => {
    return (
    <Card style={{ width: '20rem' }}>
    <div className="text-center mt-3">
    <Image roundedCircle src={profile} height="100px" width="100px" />
    </div>
    <Card.Body>
        <Card.Text>
        <Card.Title className="text-center">Enddy Williamson</Card.Title>
        <p className="text-center">@eddy.w02</p>
        <p className="text-center"><FaHtml5/> Frontend Engr</p>
        <p className="text-center"><FaMapMarkerAlt/> San Francisco</p>
        <div className="text-center">
            <Button variant="outline-info">Follow</Button>
        </div>
        <hr/>
        <div>
         <strong><FaUserFriends/> Organization</strong>
         <li>Twisker</li>
         <li>Freecodecamp</li>
        </div>
        <hr/>
        <strong><FaUserFriends/> Groups</strong>
        <li>Twisker/dev</li>
        <li>Twisker/sales</li>
        <li>Twisker/Org</li>
        <li>Twisker/design</li>
        <a href="#!">More...</a>
    </Card.Text>
        
     </Card.Body>
    </Card>
    );
}

export default ProfileCard;