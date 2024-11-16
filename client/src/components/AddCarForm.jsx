import { useState } from 'react';
import axios from 'axios';

const AddCarForm = () => {
  const baseUrl = 'http://localhost:3500/api/v1';
  const [carData, setCarData] = useState({
    name: '',
    brands: '',
    price: '',
    fuelType: '',
    mileage: '',
    SafetyRating: '',
    Warranty: '',
    Seater: '',
    Size: '',
    FuelTankSize: '',
    Transmission: '',
    description: '',
  });

  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        const formData = new FormData();

        // Append stringified carData to FormData
        formData.append('carData', JSON.stringify(carData));

        // Append image to FormData
        if (image) {
            formData.append('imageFile', image);
        }
        const token=await localStorage.getItem('token');
        console.log(token);
        if(token){
          formData.append('token', token);
        }

        console.log('FormData entries:', [...formData.entries()]);


        // Send formData via Axios
        const response = await axios.put(`${baseUrl}/car/addcar`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        },{ withCredentials: true });

        console.log(response.data);
        alert('Car added successfully');
    } catch (err) {
        setError(err.response?.data?.message || 'Failed to add car');
        console.error(err);
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Car</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Car Image:</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Other Form Fields */}
          {Object.keys(carData).map((key) => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                name={key}
                id={key}
                value={carData[key]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className={`mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            loading && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={loading}
        >
          {loading ? 'Adding Car...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;
