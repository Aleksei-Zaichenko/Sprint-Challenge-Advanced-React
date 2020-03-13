import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // GOAL: build this to be able to replace "useState" anywhere we want to persist any state data to localStorage
  // setup a state property ✅
  // check to see if the value is already in localStorage ✅
  // if not, set the value to localStorage ✅
  // update state & localStorage whenever the state changes
  // (Don't forget to stringify data going into LS, are parse data coming from LS)
  const [storedValue, setStoredValue] = useState(() => {
    // do the logic to check for the value in localStorage
    // if it's there, return that value
    // else, return the initialValue from the parameters
    if (window.localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};