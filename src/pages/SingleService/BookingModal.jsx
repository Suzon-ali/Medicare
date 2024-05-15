
/* eslint-disable react/prop-types */

import { useContext, useRef } from "react";
import doctorsImg from "../../assets/doctors.svg";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const BookingModal = ({service, setServices, setIsBookingModalOpen}) => {
  const { user } = useContext(AuthContext);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const form = new FormData(formRef.current);

        const serviceId = service._id;
        const serviceName = service.serviceName;
        const serviceImage = service.imgURL;
        const providerEmail = service.providerEmail;
        const providerName = service.providerName;
        const price = service.price;
        const userEmail = user?.email;
        const userName = user.displayName;
        const serviceDate = form.get('date')
        const instructions = form.get('instructions')
        const serviceStatus = "pending";

    const bookedService = {
        serviceId, 
        serviceName, 
        serviceImage , 
        providerEmail, 
        providerName, 
        price,
        userEmail, 
        userName , 
        serviceDate, 
        instructions, 
        serviceStatus,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/booked`,
        bookedService,
        {
          withCredentials: true
        }
      );

      if (res.data?.insertedId) {
        toast.success("Booked successfully!");
        setIsBookingModalOpen(false);
      } else {
        toast.error("Failed to update data.");
      }
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("An error occurred while updating data.");
    }
  };

  return (
    <div className="fixed left-0 top-0 flex justify-center items-center  w-full h-full z-10 bg-black/70">
        <div className="mt-16 z-50">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white dark:bg-button_bg dark:text-white/50 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6 relative">
            <button onClick={()=>setIsBookingModalOpen(false)} className="bg-red-500 text-white absolute right-4 top-4 rounded-full size-5 flex justify-center items-center text-sm font-bold cursor-pointer">x</button>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Add Services</p>
                <p>Please fill out all the fields.</p>
                <div className="mt-16 hidden md:block">
                  <img className="w-full h-60" src={doctorsImg} alt="" />
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 ">
                <div className="md:col-span-2">
                    <label htmlFor="city">Service ID</label>
                    <input
                      type="text"
                      name="_id"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      readOnly
                      required
                      defaultValue={service?._id}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="city">Service Name</label>
                    <input
                      type="text"
                      name="serviceName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      required
                      readOnly
                      defaultValue={service?.serviceName}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Provider Name</label>
                    <input
                      type="text"
                      name="providerName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      required
                      readOnly
                      defaultValue={service?.providerName}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="city">Provider Email</label>
                    <input
                      type="email"
                      name="providerEmail"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      required
                      readOnly
                      defaultValue={service?.providerEmail}
                    />
                  </div>
                  
                  <div className="md:col-span-3 ">
                    <label htmlFor="full_name">Your Email</label>
                    <input
                      type="email"
                      name="bookedEmail"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:text-white dark:bg-white/10"
                      placeholder="Service name"
                      readOnly
                      required
                      defaultValue={user?.email}
                    />
                  </div>

                  <div className="md:col-span-2 ">
                    <label htmlFor="full_name">Your Name</label>
                    <input
                      type="text"
                      name="bookedName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:text-white dark:bg-white/10"
                      placeholder="Service name"
                      required
                      readOnly
                      defaultValue={service?.serviceName}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="email">Photo URL</label>
                    <input
                      type="text"
                      name="imgURL"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Image url"
                      readOnly
                      required
                      defaultValue={service?.imgURL}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Price (Tk)</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Price"
                      required
                      readOnly
                      defaultValue={service?.price}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Service Area (City)</label>
                    <input
                      type="text"
                      name="serviceArea"
                      id="serviceArea"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Service area"
                      required
                      readOnly
                      defaultValue={service?.serviceArea}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Service Taking Date</label>
                    <input
                      type="date"
                      name="date"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      required
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="Description">Details</label>

                    <textarea
                      className="w-full transition-all flex items-center h-40 border mt-1 rounded p-2  bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      name="instructions"
                      id="instructions"
                      cols="30"
                      rows="10"
                      required
                      placeholder="Write you deatils here.."
                    ></textarea>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="dark:bg-blue-500 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Purchase Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingModal;
