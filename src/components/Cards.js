import React from 'react';


 const Cards=({name, email, id})=>{
	
return(
	<div className='bg-light-green dib br1 pa1 ma2 grow bw2 shadow-5 tc'>	
		<img alt='robot' src={`https://robohash.org/${id}? 15*19 ` }/>
	
			<div>
				<p>{name}</p>
				<p>{email}</p>
			</div>
	</div>

	);
}
export default Cards;
