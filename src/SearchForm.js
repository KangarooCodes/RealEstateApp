import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import homesList from './Services/HomesList';
import './SearchForm.css'
import { ResultContext } from './CreateContext.js'
import Results from './Results';
import Img from './images/noImg.PNG'



const SearchForm = () => {

// Card Data For Search Homes
	const searchHomes = homesList.listings;
	let pulledHome = [];
	let resultsArr = [];

// States
	// Search Form
		const [zip, setZip] = useState('');
		const [budget, setBudget] = useState('');
		const [radio, setRadio] = useState('');
		const [asIs, setAsIs] = useState('');
		const [bed, setBed] = useState('');
		const [bath, setBath] = useState('');
	// Error Handling
		const [zipError, setZipError] = useState('hidden');
		const [formError, setFormError] = useState('hidden');
		const [noRes, setNoRes] = useState('hidden');
	// Landing Page Resuts
		const [bedBath, setBedBath] = useState('');
		const [cost, setCost] = useState('');
		const [type, setType] = useState('');
		const [address, setAddress] = useState('default');
		const [key, setKey] = useState('');
		const [photo, setPhoto] = useState(Img);
		const [sqft, setSqft] = useState('');
		const [areResults, setAreResults] = useState(false);
		const [showForm, setShowForm] = useState(true);
		const [hideButton, setHideButton] = useState(true)
	
// Form Handling
	const handleZip = (e) => {
		setZip(e.target.value)
		setZipError('hidden')
		setNoRes('hidden')
	}
	const handleBudget = (e) => {
		setBudget(e.target.value)
		setFormError('hidden')
		setNoRes('hidden')
	}
	const radioChange = (e) => {
		setRadio(e.target.value)
		setFormError('hidden')
		setNoRes('hidden')
	}
	const asIsChange = (e) => {
		setAsIs(e.target.value)
		setFormError('hidden')
		setNoRes('hidden')
	}
	const bedChange = (e) => {
		setBed(e.target.value)  
		setFormError('hidden') 
		setNoRes('hidden') 
	}
	const bathChange = (e) => {  
		setBath(e.target.value)  
		setFormError('hidden')  
		setNoRes('hidden')
	}
	const handleFormReset = () => {
		window.location.reload()
	}

	const budgetFilter = () => {
	// Showing listings under max budget provided by user.
		let x = 0;
		for (let i = 0; i < searchHomes.length; i++) {
			const propertyCost = (searchHomes[i].price_raw);

		// Pushing homes with budget to OBJECT.
			if(propertyCost <= budget){
				pulledHome[x] = {
					key: uuidv4,
					price: searchHomes[i].price_raw,
					beds: searchHomes[i].beds,
					baths: searchHomes[i].baths,
					prop_id: searchHomes[i].property_id,
					photo: searchHomes[i].photo,
					prop_type: searchHomes[i].prop_type,
					sqft: searchHomes[i].sqft_raw,
					address: searchHomes[i].address,
					listing_date: searchHomes[i].list_date
				}
				// console.log(pulledHome[x])
				x++;
			}
		}
		// console.log(pulledHome);
	}
	const showResults = () => {
	// Show budgeted homes in Results Area
		
		// for(let i=0; i<pulledHome.length;i++){
		// 	// console.log(pulledHome[i])

		// 	 resultsArr.push(
		// 		<Results
		// 			id={uuidv4}
		// 			prop_id={pulledHome[i].prop_id}
		// 			beds={pulledHome[i].beds}
		// 			baths={pulledHome[i].baths}
		// 			price={`$${pulledHome[i].price.toLocaleString('en-US')}`}
		// 			prop_type={pulledHome[i].prop_type}
		// 			sqft={pulledHome[i].sqft}
		// 			address={pulledHome[i].address}
		// 			photo={pulledHome[i].photo}
		// 		/>
		// 	)
			
		const resultsArr = pulledHome.map((property) => {
			return (
				<Results
					id={uuidv4}
					prop_id={property.prop_id}
					beds={property.beds}
					baths={property.baths}
					price={`$${property.price.toLocaleString('en-US')}`}
					prop_type={property.prop_type}
					sqft={property.sqft}
					address={property.address}
					photo={property.photo}
				/>
			)
		})

			// setKey(pulledHome[i].prop_id)		
			// setBedBath(`${pulledHome[i].beds} Beds - ${pulledHome[i].baths} Baths`)
			// setCost(`$${pulledHome[i].price.toLocaleString('en-US')}`)
			// setType(pulledHome[i].prop_type)
			// setSqft(pulledHome[i].sqft)
			// setAddress(pulledHome[i].address)
			// setPhoto(pulledHome[i].photo)
		console.log(pulledHome)
		console.log(resultsArr)
	}
	const formSubmit = (e) => {
	// Checks if form is filled out [properly]
	// Then removes listings above budget
	// Then uses 'checkResults' To show results

		e.preventDefault();

		if(zip.length === 5) { 
			if(asIs !== ''
				&& bed !== ''
				&& bath !== ''
				&& budget !== '') {
				budgetFilter();
				if (pulledHome.length <= 0) {
					setNoRes('visible');
					setFormError('hidden');
					setZipError('hidden');
					setAreResults(false)
				} else {
					showResults();
				// Slowing results population to show user results refreshed, even if data is the same
					setTimeout(() => setAreResults(true),300)
					// setShowForm(false)
					// setHideButton(false)
				}
			} else {
				// setFormError('visible')
				// setZipError('hidden') 
				// setNoRes('hidden')
			}
		} else {
			// setZipError('visible')
			// setFormError('hidden')
			// setNoRes('hidden')
		}
	}

	return (
		<div>{(showForm === true)
			? <form onSubmit={formSubmit}>
			<div>
				<label htmlFor='zipSearch'>5-digit Zipcode: </label>
				<input type='number' id='zipSearch' placeholder='city,state, zip'
				value={zip}
				onChange={handleZip}></input>
			</div>
			<div>
				<label htmlFor='maxBudget'>Your Max Budget: </label>
				<input type='number' id='maxBudget' placeholder="Don't include commas"
				value={budget}
				onChange={handleBudget}></input>
			</div>
			<div className='radioBath'>
				<div className='radio'>

					<label htmlFor='fullyRenovated'>
						<input type='radio' id='fullyRenovated' name='radio' value='fullyRenovated'
						checked={radio === 'fullyRenovated'}
						onChange={radioChange}></input>
					Fully Renovated</label><br/>

					<label htmlFor='fixerUpper'>
						<input type='radio' id='fixerUpper' name='radio' value='fixerUpper'
						checked={radio === 'fixerUpper'}
						onChange={radioChange}></input>
					Fixer-Upper</label><br/>

					<label htmlFor='townhouse'>
						<input type='radio' id='townhouse' name='radio' value='townhouse'
						checked={radio === 'townhouse'}
						onChange={radioChange}></input>
					Townhouse</label>
				</div>
				<div className='bedBath'>

					<label htmlFor='asis'>As-Is:</label>
					<select onChange={asIsChange} id='asis' name='asis'>
						<option></option>
						<option>No</option>
						<option>Yes</option>
					</select>

					<label htmlFor='beds'>Beds: </label>
					<select onChange={bedChange} id='beds' name='beds'>
						<option></option>
						<option>1</option>
						<option>1.5</option>
						<option>2</option>
						<option>2.5</option>
						<option>3</option>
						<option>3.5</option>
						<option>4</option>
						<option>4.5</option>
						<option>5</option>
						<option>5.5</option>
						<option>6</option>
						
					</select>
					<label htmlFor='baths'>Baths: </label>
					<select onChange={bathChange} id='baths' name='baths'>
						<option></option>
						<option>1</option>
						<option>1.5</option>
						<option>2</option>
						<option>2.5</option>
						<option>3</option>
						<option>3.5</option>
						<option>4</option>
						<option>4.5</option>
						<option>5</option>
						<option>5.5</option>
						<option>6</option>
					</select>
				</div>
			</div>
			<button id='form-btn'>Search</button>
			<div id='form-error1' style={{visibility:formError}}>Please Fill out Entire Form</div>
			<div id='form-error2' style={{visibility:zipError}}>Please Enter Valid Zipcode</div>
			<div id='form-error3' style={{visibility:noRes}}>No Results. Try more options</div>
		</form>
			: null }
			<button id='Search-Again' onClick={handleFormReset} hidden={hideButton}>Search Again</button>
				{(areResults !== false) ?  <div><p id='result-header'>Results:</p>{ resultsArr }</div> : null}
		</div>
	)
}

export default SearchForm;