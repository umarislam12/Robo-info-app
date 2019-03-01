import React from 'react';
const SearchBox=({Searchfield, searchChange})=>{
	return(
		<div className='pa6 tc'>
		<input className='pa3 ba b--green bg-lightest-blue'
		type='Search' 
		placeholder='Search robot'
		onChange={searchChange}
		/>
	</div>)
}
export default SearchBox;