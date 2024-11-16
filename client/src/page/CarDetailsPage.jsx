import { useContext, useEffect } from "react";
import { CarContext } from "../context/CarContext";

const CarDetailsPage = () => {
    const { car, fetchCarById } = useContext(CarContext);

    useEffect(() => {
        const fetchData = async () => {
          await fetchCarById();
        };
        fetchData();
    }, []);
    
    if (!car) {
        return (
            <div className="text-center text-2xl mt-10">
                No data available or Error occurred!
            </div>
        );
    }

    // Destructure car properties dynamically from car object
    const {
        FuelTankSize,
        SafetyRating,
        Seater,
        Size,
        Transmission,
        Warranty,
        brands,
        description,
        fuelType,
        imageUrl,
        mileage,
        name,
        price,
    } = car;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center space-x-4 flex justify-between">
                <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
                <img
                    src={imageUrl || "https://upload.wikimedia.org/wikipedia/commons/3/35/Mahindra_Logo.svg"} // Default logo if no imageUrl
                    alt="Car Logo"
                    className="h-48 rounded-sm"
                />
            </div>
            <p className="text-gray-700 mt-4">
                {description || "No description available."}
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 mt-6">Rs. {price}</h2>
            <p className="text-sm text-gray-500">Released At: {new Date().toLocaleDateString()}</p>
            <div className="mt-4 flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Add To Cart
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
                    View Cart
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-gray-700 border border-black">
            <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">brands</p>
                    <p>{brands || "Not specified"}</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Fuel Type</p>
                    <p>{fuelType || "Not specified"}</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Mileage</p>
                    <p>{mileage || "Not specified"} km/l</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Safety Rating</p>
                    <p>{SafetyRating || "Not rated"} Star (KNCAP)</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Warranty</p>
                    <p>{Warranty || "Not specified"}or  km</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Seater</p>
                    <p>{Seater || "Not specified"}</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Size</p>
                    <p>{Size || "Not specified"}</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Fuel Tank</p>
                    <p>{FuelTankSize || "Not specified"} litre</p>
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Engine Size</p>
                    <p>{car.engineSize || "Not specified"} CC</p> {/* Assuming engineSize exists in your car object */}
                </div>
                <div className="flex flex-col items-center border border-black p-2">
                    <p className="font-medium">Transmission</p>
                    <p>{Transmission || "Not specified"}</p>
                </div>
                
            </div>
        </div>
    );
};

export default CarDetailsPage;
