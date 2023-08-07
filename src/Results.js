import React, { useContext } from 'react';
// import {v4 as uuidv4} from 'uuid';
import { ResultContext } from './CreateContext';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from "reactstrap";
import Img from './images/noImg.PNG'
import './SearchForm'
import './Results.css'

const Results = (prop_id,beds,baths,price,prop_type,sqft,address,photo=Img) => {
	// props: // 

	// let {key,bedBath,cost,type,sqft,address,photo} = useContext(ResultContext)

	const handleDetails = () => {
		// Not Implemented Yet - The message may be blocked with ad-blockers
		let w = window.open('','','width=1000,height=500')
		w.document.write('Not Implemented Yet, Please wait until further notice')
		w.focus()
		setTimeout(function() {w.close();}, 1200)
	}
	
	// if(type === 'single_family'){
	// 	type = 'Single Family'
	// }
	// if(type === 'condo'){
	// 	type = 'Condo'
	// }

	// return (
	// 	<div>
	// 		<Card className='Card' key={key}>
	// 			<CardBody className='Card-Body'>
	// 				<CardTitle><CardImg alt='house' className='Card-Image' src={photo}></CardImg></CardTitle>
	// 				<CardSubtitle className='Card-Subtitle'>{cost} - {type}</CardSubtitle>
	// 				<CardText className='Card-Text'>{bedBath} - {sqft} sqft<br /><br />{address}</CardText>
	// 				<button className='Card-Button' onClick={handleDetails}>More Details</button>
	// 			</CardBody>
	// 		</Card>
	// 	</div>
	// )

	return (
		<div>
			<Card className='Card' key={prop_id}>
				<CardBody className='Card-Body'>
					<CardTitle><CardImg alt='house' className='Card-Image' src={photo}></CardImg></CardTitle>
					<CardSubtitle className='Card-Subtitle'>{price} - {prop_type}</CardSubtitle>
					<CardText className='Card-Text'>{beds} - {baths} -  {sqft} sqft<br /><br />{address}</CardText>
					<button className='Card-Button' onClick={handleDetails}>More Details</button>
				</CardBody>
			</Card>
		</div>
	)
}

export default Results;