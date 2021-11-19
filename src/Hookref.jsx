import React, { useEffect, useState } from "react";
import {Breadcrumb, Item, Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'
function Hookref(){
	const [show, setShow] = useState(true);
	var numbers = [1, 2, 3, 4, 5];   
	const multiplyNums = numbers.map((number)=>{   
	    return (number * 5);   
	});   
	console.log(multiplyNums);   
	if(show){
		return(
			<>
				<Alert variant="danger" onClose={() => setShow(false)} dismissible>
			        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
			        <p>
			          Change this and that and try again. Duis mollis, est non commodo
			          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
			          Cras mattis consectetur purus sit amet fermentum.
			        </p>
			    </Alert>
			    <Breadcrumb>
				  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
				    Library
				  </Breadcrumb.Item>
				  <Breadcrumb.Item active>Data</Breadcrumb.Item>
				</Breadcrumb>
				<Button variant="primary"> Profile <Badge pill bg="dark">9</Badge>
				  <span className="visually-hidden">unread messages</span>
				</Button>
				
			</>
		);
	}
	
}
export default Hookref;