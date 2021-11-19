import React from 'react';
const Newone = (props) => {
	const x = true;
	const z = false;
	const numbers = [1, 2, 3, 4, 5];
	const doubled = numbers.map((num) => (num+2)-5+5);
	console.log(doubled);
	return(
		<>
			<h2>Hello</h2>
			<p>value of x {x ? 'yes' : 'no'}</p>
			<p>z will of {z ? 'yes' : 'no'}</p>
			{props.id ? <p>{props.id}-{props.name}-{props.age}-{props.add}</p> : 'info not exits'}
		</>
	);
}
Newone.defaultProps = {
	id:1,
	name:"test1",
	age:23,
	add:"lko",


}
export default Newone;
