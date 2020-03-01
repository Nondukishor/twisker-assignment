import React from 'react';
import {Tabs, Tab, Sonnet} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {IoMdListBox} from 'react-icons/io';
import './profile-nav.scss';

const TabTitle = ({text,Icon,topic}) =>{
   return(
       <div className="text-center">
        {text}
        <br/>
        {Icon && <IconContext.Provider value={{ size:'25px'}}>{Icon}</IconContext.Provider>}
        {topic && <strong>{topic}</strong>}
       </div>
   )
}

const ProfileNav = ({feed,followers,followings,timeline}) => {
    return (<Tabs className="shadow d-flex justify-content-between" defaultActiveKey="feed" id="profile-nav">
            <Tab eventKey="feed" title={<TabTitle text="Feed" Icon={<IoMdListBox/>}/>}>
                {feed ? feed : ''}
            </Tab>
            <Tab eventKey="followers" title={<TabTitle text='Followers' topic="11.5k"/>}>
                {/* {followers ? followers : ''} */}
            </Tab>
            <Tab eventKey="followings" title={<TabTitle text="Followings" topic="15.5k"/>}>
                {/* {followings ? followings : ''} */}
            </Tab>
            <Tab eventKey="timeline" title={<TabTitle text="Timelines" topic="200.8K"/>}>
                {/* {timeline ? timeline : ''} */}
            </Tab>
            </Tabs>
            );
}

export default ProfileNav;