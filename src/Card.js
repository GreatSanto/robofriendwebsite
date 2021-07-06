import React from 'react';

const Card = (props) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-3 grow w-20'>
		<img alt='robots' src={`https://robohash.org/${props.id}`} width='200px' height='200px'/>
		<div>
		<h3>{props.name}</h3>
		<p>{props.email}</p>
		</div>
		</div>
		);
}

export default Card;