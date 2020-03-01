import React from 'react';
import {Link} from 'react-router-dom';
import './membercard.scss';

const ContentCard = (props) => {
	const {image,alt,title,} = props
    return (
        <div class="image-area mt-5 mb-3">
		<div class="img-wrapper">
			<img src={image} alt={alt}/>
	        <h2>{title}</h2>
			<ul>
				<li><Link to='#!'><i class="fab fa-github"></i></Link></li>
				<li><Link to='#!'><i class="fab fa-instagram"></i></Link></li>
				<li><Link to='#!'><i class="fab fa-twitter"></i></Link></li>
				<li><Link to='#!'><i class="fab fa-youtube"></i></Link></li>
				<li><Link to='#!'><i class="fas fa-user-plus"></i></Link></li>
			</ul>
		</div>
	</div>);
}

export default ContentCard;