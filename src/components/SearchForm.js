import React, { useState } from "react";
import homesList from "../Services/HomesList";
import "../assets/css/SearchForm.css";
import Results from "./Results";
import Result from "./Result";

const SearchForm = () => {
  // Card Data For Search Homes
  const searchHomes = homesList.listings;
  let pulledHome = [];
  let resultsArr = [];

  // States
  // Search Form
  const [zip, setZip] = useState("");
  const [budget, setBudget] = useState("");
  const [radio, setRadio] = useState("");
  const [asIs, setAsIs] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  // Error Handling
  const [zipError, setZipError] = useState("hidden");
  const [formError, setFormError] = useState("hidden");
  const [noRes, setNoRes] = useState("hidden");
  // Landing Page Resuts
  const [areResults, setAreResults] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [hideButton, setHideButton] = useState(true);

  // Form Handling
  const handleZip = (e) => {
    setZip(e.target.value);
    setZipError("hidden");
    setNoRes("hidden");
  };
  const handleBudget = (e) => {
    setBudget(e.target.value);
    setFormError("hidden");
    setNoRes("hidden");
  };
  const radioChange = (e) => {
    setRadio(e.target.value);
    setFormError("hidden");
    setNoRes("hidden");
  };
  const asIsChange = (e) => {
    setAsIs(e.target.value);
    setFormError("hidden");
    setNoRes("hidden");
  };
  const bedChange = (e) => {
    setBed(e.target.value);
    setFormError("hidden");
    setNoRes("hidden");
  };
  const bathChange = (e) => {
    setBath(e.target.value);
    setFormError("hidden");
    setNoRes("hidden");
  };
  const handleFormReset = () => {
    window.location.reload();
  };

  const budgetFilter = () => {
    // Showing listings under max budget provided by user.
    let x = 0;
    for (let i = 0; i < searchHomes.length; i++) {
      const propertyCost = searchHomes[i].price_raw;

      // Pushing homes with budget to OBJECT.
      if (propertyCost <= budget) {
        pulledHome[x] = {
          price: searchHomes[i].price_raw,
          beds: searchHomes[i].beds,
          baths: searchHomes[i].baths,
          prop_id: searchHomes[i].property_id,
          photo: searchHomes[i].photo,
          prop_type: searchHomes[i].prop_type,
          sqft: searchHomes[i].sqft_raw,
          address: searchHomes[i].address,
        };
        x++;
      }
    }
    console.log(pulledHome);
  };
  const showResults = () => {
    // Show budgeted homes in Results Area
    const resultsArr = pulledHome.map((property) => {
      return (
        <Result
          prop_id={property.prop_id}
          beds={property.beds}
          baths={property.baths}
          price={`$${property.price.toLocaleString("en-US")}`}
          prop_type={property.prop_type}
          sqft={property.sqft}
          address={property.address}
          photo={property.photo}
        />
      );
    });
    console.log(resultsArr);
  };
  const formSubmit = (e) => {
    // Checks if form is filled out [properly]
    // Then removes listings above budget
    // Then uses "checkResults" To show results
    setAreResults(false);
    e.preventDefault();

    if (zip.length === 5) {
      if (asIs !== "" && bed !== "" && bath !== "" && budget !== "") {
        budgetFilter();
        if (pulledHome.length <= 0) {
          setNoRes("visible");
          setFormError("hidden");
          setZipError("hidden");
          setAreResults(false);
        } else {
          showResults();
          setAreResults(true);
          // setTimeout(() => setAreResults(true), 250); // Slowing results population to show user results refreshed
          // setShowForm(false);
          // setHideButton(false);
        }
      } else {
        // setFormError("visible");
        // setZipError("hidden");
        // setNoRes("hidden");
      }
    } else {
      // setZipError("visible");
      // setFormError("hidden");
      // setNoRes("hidden");
    }
  };

  return (
    <div>
      {showForm === true ? (
        <div className="form-div">
          <form onSubmit={formSubmit}>
            <div>
              <label htmlFor="zipSearch">5-digit Zipcode: </label>
              <input
                type="number"
                id="zipSearch"
                placeholder="city,state, zip"
                value={zip}
                onChange={handleZip}
              ></input>
            </div>
            <div>
              <label htmlFor="maxBudget">Your Max Budget: </label>
              <input
                type="number"
                id="maxBudget"
                placeholder="Don't include commas"
                value={budget}
                onChange={handleBudget}
              ></input>
            </div>
            <div className="radioBath">
              <div className="radio">
                <label htmlFor="fullyRenovated">
                  <input
                    type="radio"
                    id="fullyRenovated"
                    name="radio"
                    value="fullyRenovated"
                    checked={radio === "fullyRenovated"}
                    onChange={radioChange}
                  ></input>
                  Fully Renovated
                </label>
                <br />

                <label htmlFor="fixerUpper">
                  <input
                    type="radio"
                    id="fixerUpper"
                    name="radio"
                    value="fixerUpper"
                    checked={radio === "fixerUpper"}
                    onChange={radioChange}
                  ></input>
                  Fixer-Upper
                </label>
                <br />

                <label htmlFor="townhouse">
                  <input
                    type="radio"
                    id="townhouse"
                    name="radio"
                    value="townhouse"
                    checked={radio === "townhouse"}
                    onChange={radioChange}
                  ></input>
                  Townhouse
                </label>
              </div>
              <div className="bedBath">
                <label htmlFor="asis">As-Is:</label>
                <select onChange={asIsChange} id="asis" name="asis">
                  <option></option>
                  <option>No</option>
                  <option>Yes</option>
                </select>

                <label htmlFor="beds">Beds: </label>
                <select onChange={bedChange} id="beds" name="beds">
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
                <label htmlFor="baths">Baths: </label>
                <select onChange={bathChange} id="baths" name="baths">
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
            <button id="form-btn">Search</button>
            <div id="form-error1" style={{ visibility: formError }}>
              Please Fill out Entire Form
            </div>
            <div id="form-error2" style={{ visibility: zipError }}>
              Please Enter Valid Zipcode
            </div>
            <div id="form-error3" style={{ visibility: noRes }}>
              No Results. Try more options
            </div>
          </form>
        </div>
      ) : null}
      <button id="Search-Again" onClick={handleFormReset} hidden={hideButton}>
        Search Again
      </button>
      {areResults === true ? (
        <div>
          <p>{pulledHome[0]}</p>
          <ul>
            {pulledHome.map((home) => (
              <li>{home}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SearchForm;
