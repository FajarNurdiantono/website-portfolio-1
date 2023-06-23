import React from 'react';
import HeroImage from '../assets/heroImage.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-56">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Saya merupakan lulusan S1 Ekonomi dengan IPK 3.74. Saya Merupakan lulusan Bootcamp dari My Skill dan Coding Studio. Saya sebagai Front-end Development menguasai HTML,CSS, JavaScript. FrameWork CSS seperti Vanila CSS, Tailwinds,
            dan Bootstrap. Memahami Framework JavaScript seperti ReactJS dan jQuery. dan Saya sebagai Back-end Development menguasai Node JS dan menggunakan database seperti Postgresql, MongoDB, dan mySQL.
          </p>

          <div className="my-3">
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className=" rounded-xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
