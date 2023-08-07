export async function listProperties() {
	const url = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': 'c2b8ad1716msh7ea6fca6ac3b8dcp19df44jsnb9fedbb1b4a3',
			'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
		},
		body: JSON.stringify({
			limit: 12,
			offset: 0,
			postal_code: '21236',
			status: [
				'for_sale',
				'ready_to_build'
			],
			sort: {
				direction: 'desc',
				field: 'list_date'
			}
		})
	};

	try {
		const response = await fetch(url, options);
		return await response.json();
	} catch (err) {
		console.error(err);
	}
}
