import React, { useEffect, useState } from "react";
import "../assets/css/SearchForm.css";
import Result from "./Result";
import { v4 as uuidv4 } from "uuid";
import REACT_APP_API_KEY from "./apikey.js";

const SearchForm = () => {
  // States
  // Search Form
  const [zip, setZip] = useState("");
  const [budget, setBudget] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  // Error Handling
  const [zipError, setZipError] = useState("hidden");
  const [noRes, setNoRes] = useState("hidden");
  // Landing Page Resuts
  const [areResults, setAreResults] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [hideButton, setHideButton] = useState(true);

  // Card Data For Search Homes
  let pulledHome = [];
  const [resultsArr, setResultsArr] = useState([]);
  const [data, setData] = useState([]);

  // Form Handling
  const handleZip = (e) => {
    setZip(e.target.value);
    setZipError("hidden");
    setNoRes("hidden");
  };
  const handleBudget = (e) => {
    setBudget(e.target.value);
    setNoRes("hidden");
  };
  const bedChange = (e) => {
    setBed(e.target.value);
    setNoRes("hidden");
  };
  const bathChange = (e) => {
    setBath(e.target.value);
    setNoRes("hidden");
  };
  const handleFormReset = () => {
    window.location.reload();
    setNoRes("hidden");
  };

  const budgetFilter = (data) => {
    // Showing listings under max budget provided by user.
    let x = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].primary_photo !== null) {
        const propertyCost = data[i].list_price;
        const beds = data[i].description.beds;
        const baths = data[i].description.baths;
        const prop_id = data[i].property_id;
        const photo = data[i].primary_photo.href.slice(0, -5) + "od.jpg";
        let prop_type = data[i].description.type;
        let sqft = data[i].description.sqft;
        const street = data[i].location.address.line;
        const city = data[i].location.address.city;
        const zip = data[i].location.address.postal_code;
        const state_code = data[i].location.address.state_code;
        const realtorLink = data[i].href;
        const agent_email = data[i].advertisers[0].email;

        if (prop_type == "condos") {
          prop_type = "Condo";
        } else if (prop_type == "single_family") {
          prop_type = "Single Family";
        } else if (prop_type == "land") {
          prop_type = "Land";
          sqft = data[i].description.lot_sqft;
        } else if (prop_type == "townhomes") {
          prop_type = "Townhouse";
          sqft = data[i].description.lot_sqft;
        }

        // Pushing homes with budget to OBJECT.
        if (
          (propertyCost <= budget && beds >= bed && baths >= bath) ||
          beds == null ||
          baths == null
        ) {
          pulledHome[x] = {
            price: propertyCost,
            beds: beds,
            baths: baths,
            prop_id: prop_id,
            photo: photo,
            prop_type: prop_type,
            sqft: sqft,
            street: street,
            city: city,
            zip: zip,
            state_code: state_code,
            realtorLink: realtorLink,
            agent_email: agent_email,
          };
          x++;
        }
      }
    }
  };
  const showResults = () => {
    // Show budgeted homes in Results Area
    setResultsArr(
      pulledHome.map((property) => {
        return (
          <li key={uuidv4()}>
            <Result
              prop_id={property.prop_id}
              beds={property.beds}
              baths={property.baths}
              price={`$${property.price.toLocaleString("en-US")}`}
              prop_type={property.prop_type}
              sqft={property.sqft}
              photo={property.photo}
              street={property.street}
              city={property.city}
              zip={property.zip}
              state_code={property.state_code}
              realtorLink={property.realtorLink}
            />
          </li>
        );
      })
    );
  };
  // API CALL
  async function listProperties() {
    const url = "https://realty-in-us.p.rapidapi.com/properties/v3/list";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": REACT_APP_API_KEY,
        "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      },
      body: JSON.stringify({
        list_price: { max: Number(budget), min: 0 },
        limit: 100,
        offset: 0,
        baths: { min: { bath } },
        beds: { min: { bed } },
        postal_code: `${zip}`,
        status: ["for_sale"],
        sort: {
          direction: "asc",
          field: "list_price",
        },
      }),
    };
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        return await response.json();
      }
    } catch (err) {
      console.error(`There was a problem with the fetch operation: `, err);
    }
  }

  useEffect(() => {
    budgetFilter(data);
    showResults();
  }, [data]);

  const formSubmit = (e) => {
    // Checks if form is filled out [properly]
    // Then removes listings above budget
    e.preventDefault();

    // setTimeout(() => {
    //   setNoRes("visible");
    // }, 2000);
    setAreResults(false);

    if (zip.length === 5) {
      if (bed !== "" && bath !== "" && budget !== "") {
        listProperties()
          .then((res) => setData(res.data.home_search.results))
          .then(setAreResults(true));
        // .then(setShowForm(false))
        // .then(setHideButton(false))
      } else {
        setZipError("hidden");
        setNoRes("hidden");
      }
    } else {
      setZipError("visible");
      setNoRes("hidden");
    }
  };

  return (
    <div>
      {showForm === true ? (
        <main className="form-signin" id="search-main">
          <div className="form-div">
            <form onSubmit={formSubmit}>
              <div className="Zip-Budget">
                <label htmlFor="zipSearch">5-digit Zipcode: </label>
                <input
                  type="number"
                  id="zipSearch"
                  placeholder="zipcode"
                  value={zip}
                  onChange={handleZip}
                ></input>
              </div>
              <div>
                <label htmlFor="maxBudget">Your Max Budget: </label>
                <input
                  type="number"
                  id="maxBudget"
                  placeholder="$USD"
                  value={budget}
                  onChange={handleBudget}
                ></input>
              </div>
              <div className="radioBath">
                <br />
                <div className="bedBath">
                  <label htmlFor="beds">Beds: </label>
                  <select onChange={bedChange} id="beds" name="beds">
                    <option></option>
                    <option>0</option>
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
                  <label htmlFor="baths">Baths: </label>
                  <select onChange={bathChange} id="baths" name="baths">
                    <option></option>
                    <option>0</option>
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
              <br />
              <button className="w-100 btn btn-lg">Search</button>
              <div id="form-error2" style={{ visibility: zipError }}>
                Please Enter Valid Zipcode
              </div>
              <div id="form-error3" style={{ visibility: noRes }}>
                No Results. Try more options
              </div>
            </form>
          </div>
        </main>
      ) : null}
      {/* Button is shown once search for is submitted, to return the form (with refresh) */}
      <button
        className="w-100 btn btn-lg"
        onClick={handleFormReset}
        hidden={hideButton}
      >
        Search Again
      </button>
      {/* After Form Submission: Results Array (budgeted homes list) is displayed via State */}
      {areResults !== false ? (
        <div id="results-div">{resultsArr}</div>
      ) : null}
    </div>
  );
};

export default SearchForm;
