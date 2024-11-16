import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import LoginPage from './page/LoginPage'
import SignUpPage from './page/SignUpPage'
import AllCarsPage from "./page/AllCarsPage"
import Navbar from './components/Navbar'
import AddCarPage from "./page/AddCarPage"
import LikesCarpage from "./page/LikesCarpage"
import { useContext, useEffect } from "react"
import {CarContext} from './context/CarContext'
import CarDetailsPage from "./page/CarDetailsPage"
import Footer from "./components/Footer"


function App() {
  const {fetchAllCars } = useContext(CarContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllCars();
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/allcars' element={<AllCarsPage  />} />
        <Route path='/addcar' element={<AddCarPage />} />
        <Route path='/likescar' element={<LikesCarpage/>} />
        <Route path='/cardetails' element={<CarDetailsPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
