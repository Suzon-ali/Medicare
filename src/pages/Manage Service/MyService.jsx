/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const MyService = ({service, setServices, servies}) => {
    const {_id, imgURL, serviceName , Price, serviceArea, timeStamp} = service || {} ;
    const [loadedServices, setLoadedServices] = useState(servies);

    const date = new Date(timeStamp);
    const newDate = date.toDateString();

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
    
            axios.delete(`${import.meta.env.VITE_URL}/services/${_id}`,{
                withCredentials: true,
            })
            .then((res) => {
                if (res.data?.deletedCount > 0) {
                  const remainingServices = loadedServices.filter(
                    (servi) => servi._id !== _id
                  );
                  setLoadedServices(remainingServices);
                  setServices(remainingServices); 
                }
              });
          }
        });
      };


  return (
    <tr>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white  dark:text-white/50 dark:bg-button_bg/90 text-sm">
      <div className="flex">
        <div className="flex-shrink-0 w-10 h-10">
          <img
            className="w-full h-full rounded-lg"
            src={imgURL}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap dark:text-white/50 ">
            {serviceName}
          </p>
          <p className="text-gray-600 whitespace-no-wrap dark:text-white/50 ">
            {serviceArea}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-blue-300 text-sm dark:text-white/50 dark:bg-button_bg/90 dark:border-white/20">
      <p className="text-gray-900 whitespace-no-wrap dark:text-white/50">
      <span className="font-bold">৳</span> {Price}
      </p>
      <p className="text-gray-600 whitespace-no-wrap dark:text-white/50">Taka</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white  dark:bg-blue-300 text-sm dark:text-white/50 dark:bg-button_bg/90">
      
      <p className="text-gray-600 whitespace-no-wrap dark:text-white/50">
      {newDate}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-blue-300 text-sm space-x-2 dark:text-white/50 dark:bg-button_bg/90">
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-green-500  rounded-full"
        ></span>
        <button className="relative text-white">Edit</button>
      </span>
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-red-500  rounded-full"
        ></span>
        <button onClick={()=>handleDelete(_id)} className="relative text-white">Delete</button>
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
  )
}

export default MyService