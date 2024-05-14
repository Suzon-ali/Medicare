/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BookedSignleService = ({ service }) => {
  const {
    serviceId,
    serviceName,
    serviceImage,
    providerName,
    price,
    serviceDate,
    instructions,
    serviceStatus,
  } = service || {};

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white  dark:text-white/50 dark:bg-button_bg/90 text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-40 h-30">
            <img
              className="w-full h-full rounded-lg"
              src={serviceImage}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap dark:text-white/50 ">
              {serviceName}
            </p>
            <p className="text-gray-600 whitespace-no-wrap dark:text-white/50 ">
              {providerName}
            </p>
            <p className="text-gray-600 text-sm whitespace-no-wrap dark:text-white/50 ">
              {instructions}
            </p>
            <Link to={`/services/${serviceId}`}> <button className="bg-dark_button text-white my-2 px-3 rounded-full text-[12px]">Details</button></Link>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-blue-300 text-sm dark:text-white/50 dark:bg-button_bg/90 dark:border-white/20">
        <p className="text-gray-900 whitespace-no-wrap dark:text-white/50">
          <span className="font-bold">৳</span> {price}
        </p>
        <p className="text-gray-600 whitespace-no-wrap dark:text-white/50">
          Taka
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white  dark:bg-blue-300 text-sm dark:text-white/50 dark:bg-button_bg/90 ">
        <p className="text-gray-600 whitespace-no-wrap dark:text-white/50">
          {serviceDate}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-blue-300 text-sm space-x-2 dark:text-white/50 dark:bg-button_bg/90 ">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
          <span
            aria-hidden
            className={`absolute inset-0 ${
              serviceStatus === "pending"
                ? "bg-yellow-500"
                : serviceStatus === "working"
                ? "bg-sky-500"
                : "bg-green-600"
            } rounded-full`}
          ></span>

          <button className={`relative text-white }`}>{serviceStatus}</button>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-blue-300 text-sm text-right  dark:bg-button_bg/90">
        <button
          type="button"
          className="inline-block text-gray-500 hover:text-gray-700"
        >
          <svg
            className="inline-block h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default BookedSignleService;
