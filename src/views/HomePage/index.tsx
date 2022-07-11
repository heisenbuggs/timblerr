import './HomePage.css';

import LogoWhite from '../../assets/Logo-White.png';

const HomePage = () => {
  return (
    <div className="hp43Navbar">
      <nav className="container mx-44 px-5 py-2 flex flex-wrap items-center justify-between">
        <img src={LogoWhite} alt="logo" className="hp43logo" />
        <ul className="flex items-center gap-6 cursor-pointer">
          <p className="p-1 font-normal">
            <a className="flex items-center">Home</a>
          </p>
          <p className="p-1 font-normal">
            <a className="flex items-center">Offerings</a>
          </p>
          <p className="p-1 font-normal">
            <a className="flex items-center">Our Strength</a>
          </p>
          <p className="p-1 font-normal">
            <a className="flex items-center">Product Categories</a>
          </p>
          <p className="p-1 font-normal">
            <a className="flex items-center">Sustainability</a>
          </p>
        </ul>
        <div className="hp43ButtonGroup">
          <button
            type="button"
            className="py-2 px-6 mr-2"
          >
            Login
          </button>
          <button
            type="button"
            className="text-white py-2 px-6 mr-2 rounded hp43GreenButton"
          >
            View Catalog
          </button>
          <button
            type="button"
            className="hover:bg-grey-900 text-white py-2 px-8 rounded hp43BlueButton"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      <div className="container align-middle mx-44 px-5 py-2">
        Home
      </div>
    </div>
  );
};

export default HomePage;
