import React from 'react';
import {Link} from 'react-router-dom';
import './membercard.scss';

const ContentCard = (props) => {
	const {image,alt,title,id} = props
    return (
      <div>
		<div className="image-area mt-5 mb-3">
		<div className="img-wrapper">
		<Link to={"/group/"+id}>
		<img src={image} alt={alt}/>
	        <h2>{title}</h2>
			<ul>
				<li><Link to='#!'><i className="fab fa-github"></i></Link></li>
				<li><Link to='#!'><i className="fab fa-instagram"></i></Link></li>
				<li><Link to='#!'><i className="fab fa-twitter"></i></Link></li>
				<li><Link to='#!'><i className="fab fa-youtube"></i></Link></li>
				<li><Link to='#!'><i className="fas fa-user-plus"></i></Link></li>
			</ul>
		</Link>
		</div>
	  </div>
  </div>
	);
}

export default ContentCard;