import { Link } from "react-router-dom";



const CarCard = ({ name, price, brands, Seater, fuelType, SafetyRating, imageUrl,carId }) => {

  function openDetailsPage(){
    localStorage.setItem('carId',carId);
  }

  return (
    <div   className="max-w-sm bg-white  rounded overflow-hidden shadow-lg border p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{brands || "Unknown Brand"}</h2>
        <img 
          src="https://via.placeholder.com/50" // Replace with actual logo URL
          alt={`${brands || "Brand"} Logo`}
          className="w-10"
        />
      </div>
      
      <img 
        src={imageUrl || "https://via.placeholder.com/300"} // Replace with actual car image URL
        alt={name || "Car Image"}
        className="w-72 h-48 object-cover mb-4"
      />

      <h3 className="text-lg font-bold mb-2">{name || "Unknown Model"}</h3>
      
      <div className="flex flex-wrap justify-between mb-4">
        <div className="flex items-center">
          <span className="text-xl">₹</span>
          <span className="text-xl font-semibold">{price || "N/A"}</span>
        </div>
        <div className="text-gray-600">{fuelType || "Unknown Fuel Type"}</div>
      </div>
      
      <div className="flex flex-wrap justify-between mb-4">
        <div className="text-gray-600">{SafetyRating || "No Rating"} Star (KNCAP)</div>
        <div className="text-gray-600">{Seater ? `${Seater} Seater` : "Unknown Seater"}</div>
      </div>
      
      <div className="flex justify-between">
        <Link to='/cardetails'>
          <button onClick={()=>openDetailsPage()} className="bg-purple-500 text-white px-4 py-2 rounded flex items-center">
            <span>View</span>
          </button>
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
