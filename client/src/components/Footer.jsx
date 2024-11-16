
function Footer() {
  return (
    <div className="flex justify-center items-center mt-5">
    <footer className="bg-gray-900  text-white  py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center px-24 ">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Car____</h2>
            <p>
              At Spyne moto, we're dedicated to making your car buying experience as smooth as the road ahead.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>asif11931@gmail.com</p>
            <p>
              Lovely Professional University, Jalandhar, Punjab, India
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#" className="text-xl"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="text-xl"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>

        <hr className="mx-24 mt-5" />

        <div className="text-center mt-6">
          <p>&copy; 2023 Spyne Moto™. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;