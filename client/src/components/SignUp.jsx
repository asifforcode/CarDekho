import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const baseUrl="http://localhost:3500/api/v1"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log(formData);
      const response = await axios.post(`${baseUrl}/user/signup`,formData);
      // Handle successful registration
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      // Redirect or perform additional actions here
    } catch (error) {
      // Handle registration failure
      console.error("Registration failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl">
        
        {/* Image Section */}
        <div className="flex items-center justify-center bg-pink-100 p-8">
          <img
            src="https://via.placeholder.com/300" // Replace with actual image URL
            alt="Register illustration"
            className="w-64 h-64 object-cover"
          />
        </div>
        
        {/* Form Section */}
        <div className="flex flex-col p-8 space-y-4 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
          <p className="text-gray-600">Your Dream Car is Waiting!</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email ID"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your address"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.address}
              onChange={handleChange}
              required
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Login Button */}
          <button className="border border-gray-400 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-100">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
