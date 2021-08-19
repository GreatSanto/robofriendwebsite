import React from 'react';

const Card = (props) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma3 bw2 shadow-3 grow'>
		<img alt='robots' src={`https://robohash.org/${props.id}`} width='100%' height='200px'/>
		<div>
		<h3>{props.name}</h3>
		<p>{props.email}</p>
		</div>
		</div>
		);
}

export default Card;