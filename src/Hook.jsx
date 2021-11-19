import {React, useState} from 'react';
import PropTypes from 'prop-types';  
const Hook = (props) => {
	const [count, setCount] = useState(0);
	const[hover, setHoverCount] = useState(0);
	const[show, setShow] = useState(true);
	
	return(
		<>
			<h2>{props.msg}</h2>
			<p>You clicked {count} times</p>
		    <button onClick={() => setCount(count+1)}> Click me </button>
		    <p>Your hover count is {hover} times</p>
		    <a href="javascript:void(0)" onMouseOver={() =>setHoverCount(hover+1)}>Hover me</a>
		    <p>sum of 2, and 3 = {2+3}</p>
		    {show && 'hello'} <br />
		    <span>It is {new Date().toLocaleTimeString()} - {(new Date().getFullYear())}.</span>
		    <div>{ 5 > 4 ? '5' : '4'}</div>
		   
		</>
	);
  

}
export default Hook;