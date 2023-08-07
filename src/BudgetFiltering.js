import homesList from './Services/HomesList';

export const budgetFilter = ({ budget }) => {
	// Showing listings under max budget provided by user.

	const searchHomes = homesList.listings;
	let pulledHome = [];

	let x = 0;
	for (let i = 0; i < searchHomes.length; i++) {
		const property = (searchHomes[i].price_raw);

		// Pushing homes with budget to OBJECT.
		if(property <= budget){
			pulledHome[x] = {
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
			x++;
		}
	}
	console.log(pulledHome);
}