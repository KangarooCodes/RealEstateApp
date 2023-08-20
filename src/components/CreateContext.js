import React, { useState, createContext } from "react";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [showProperty, setShowProperty] = useState(false);

  //   function toggleShowProperty() {
  //     showProperty === false ? setShowProperty(true) : null;
  //   }

  return (
    <>
      <PropertyContext.Provider value={showProperty}>{children}</PropertyContext.Provider>
    </>
  );
}
