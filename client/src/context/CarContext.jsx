import { useState, createContext } from 'react';
import axios from 'axios';

// Step 1: Create the context
export const CarContext = createContext();

export default function CarContextProvider({ children }) {
  const baseUrl = "http://localhost:3500/api/v1";
  
  const [allCars, setAllCars] = useState([]); // Step 2: Use setAllCars instead of SetAllCars
  const [car,Setcar]=useState(); 

  // Step 3: Define the fetchAllCars function correctly
  async function fetchAllCars() {
    try {
      const response = await axios.get(`${baseUrl}/car/getcars`);
      setAllCars(response.data); // Update the state with the fetched cars
    } catch (error) {
      console.log(error.message); // Log any error that occurs
    }
  }

  async function fetchCarById() {
    try {
      let carId = localStorage.getItem('carId');
      console.log('carId:', carId);  // Debugging output
  
      // Ensure carId is a string
      if (typeof carId !== 'string' || !carId) {
        throw new Error('Invalid carId: it should be a valid string');
      }
  
      // Now that we know it's a string, proceed with the request
      const response = await axios.get(`${baseUrl}/car/getcarbyid/${carId}`);
      console.log(response.data);
      Setcar(response.data); 
    } catch (error) {
      console.log('Error fetching car by ID:', error.message); // Log any error that occurs
    }
  }
  
  


  const value = {
    allCars,
    fetchAllCars,
    fetchCarById,
    car,
  };

  // Step 4: Provide the context value
  return <CarContext.Provider value={value}>
    {children}
  </CarContext.Provider>;
}
