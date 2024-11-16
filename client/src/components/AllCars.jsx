import { useContext } from "react";
import CarCard from "./CarCard";
import { CarContext } from "../context/CarContext";

const AllCars = () => {
  const { allCars } = useContext(CarContext);

  
  if (!allCars || allCars.length === 0) {
    return <p>Loading cars...</p>; // Handle loading state
  }

  console.log(allCars);
 

  return (
    <div className="grid grid-cols-1 p-4 bg-red-200 m-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {allCars.map((car, index) => (
        <CarCard
          key={index}
          name={car.name}
          price={car.price}
          brands={car.brands}
          Seater={car.Seater}
          fuelType={car.fuelType}
          SafetyRating={car.SafetyRating}
          imageUrl={car.imageUrl}
          carId={car._id}
        />
      ))}
    </div>
  );
};

export default AllCars;
