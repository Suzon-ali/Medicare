/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import TruncateText from "../../utility/TruncateText";

const ServiceCard2 = ({ service }) => {
  const {_id, serviceName, imgURL, price, serviceArea, description, providerName, providerImage } = service || {};

  return (
    <div className="h-auto shadow-sm border dark:border-none rounded-lg md:flex overflow-hidden dark:text-white/80 dark:bg-button_bg/40 lg:hover:scale-[103%] transition-transform duration-300">
      <div className="w-full md:w-5/12">
        <img className="w-full h-full object-cover object-top" src={imgURL} alt="" />
       
      </div>
      <div className="p-3 relative w-full md:w-7/12 ">
        <h3 className="text-lg font-bold text-dark_button">{serviceName}</h3>
        <p >
          <span  className="font-bold">Tk {price}</span>{" "}
          <span className="text-black/70 dark:text-white/50">/checkup</span>
        </p>
        <div className="flex gap-1 mt-2 text-black/70 dark:text-white/50">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <p className=" lg:pr-20"><TruncateText text={description} /></p>
        </div>
        <div className="-bottom-5 right-0 text-blue-400 p-2">
            Location: {serviceArea}
        </div>
        <div className="flex items-center gap-2">
           <img className="size-10 rounded-full overflow-hidden object-cover" src={providerImage} alt="" />
           <p>{providerName}</p>
        </div>
        <Link to={`/services/${_id}`}>
          <button className=" w-11/12 bg-dark_bg dark:bg-dark_button text-white p-2 my-2 rounded-lg w-fullhover:brightness-110">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard2;
