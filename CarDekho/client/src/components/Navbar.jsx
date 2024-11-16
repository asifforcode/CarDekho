import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-10 mt-1 bg-slate-100 text-purple-600 p-2 text-xl font-semibold">
      <div>
        <Link to='/'>Logo</Link>
      </div>
      <div className="flex gap-4">
        <Link to='/allcars'><p>AllCars</p></Link>
        <Link to='/likescar'><p>likes cars</p></Link>
        <Link to='/addcar'><p>Add cars</p></Link>
      </div>
      <div className="flex gap-2">
        <Link to='login' className="border-2 rounded-md text-center px-2 border-purple-600">Login</Link>
        <Link to='signup' className="border-2 rounded-md text-center px-2 border-purple-600">signUp</Link>
      </div>
    </div>
  )
}

export default Navbar;