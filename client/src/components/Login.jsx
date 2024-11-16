import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const baseUrl="http://localhost:3500/api/v1"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true);
    setError(null);

    try {
      
      const response = await axios.post(`${baseUrl}/user/login`,{ email, password });

      // Handle successful login
      console.log("Login successful:", response.data);
      const token=response.data.token;
      console.log(token);
      localStorage.setItem('token',token);
      alert("Login successful!");
      // Redirect or perform additional actions here
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl">
        
        {/* Image Section */}
        <div className="flex items-center justify-center bg-blue-100 p-8">
          <img
            src="https://via.placeholder.com/300" // Replace with actual image URL
            alt="Login illustration"
            className="w-64 h-64 object-cover"
          />
        </div>
        
        {/* Form Section */}
        <div className="flex flex-col p-8 space-y-4 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
          <p className="text-gray-600">We are happy to have you back!</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your email ID"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Your password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Register Button */}
          <button className="border border-gray-400 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-100">
            Register
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default LoginForm;
