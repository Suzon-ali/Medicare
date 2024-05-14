/* eslint-disable react/prop-types */

import { useContext, useRef } from "react";
import doctorsImg from "../../assets/doctors.svg";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const EditModal = ({service, setIsModalOpen, setServices}) => {
  const { user } = useContext(AuthContext);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const form = new FormData(formRef.current);

    const imgURL = form.get("imgURL");
    const serviceName = form.get("serviceName");
    const price = form.get("price");
    const serviceArea = form.get("serviceArea");
    const description = form.get("description");
    const providerName = user?.displayName;
    const providerEmail = user?.email;
    const providerImage = user?.photoURL;
    const timeStamp = Date.now();

    const updatedService = {
      imgURL,
      serviceName,
      price,
      serviceArea,
      description,
      providerImage,
      providerEmail,
      providerName,
      timeStamp
    };

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_URL}/services/${service?._id}`,
        updatedService,
        {
          withCredentials: true
        }
      );

      if (res.data?.acknowledged) {
        toast.success("Data Updated successfully!");
        setIsModalOpen(false);
        setServices((prevServices) =>
          prevServices.map((serv) =>
            serv._id === service?._id ? { ...serv, ...updatedService } : serv
          )
        );
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
        <div className="mt-16 pt-10 z-50">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white dark:bg-button_bg dark:text-white/50 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6 relative">
            <button onClick={()=>setIsModalOpen(false)} className="bg-red-500 text-white absolute right-4 top-4 rounded-full size-5 flex justify-center items-center text-sm font-bold cursor-pointer">x</button>
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
                  <div className="md:col-span-5 ">
                    <label htmlFor="full_name">Service Name</label>
                    <input
                      type="text"
                      name="serviceName"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:text-white dark:bg-white/10"
                      placeholder="Service name"
                      required
                      defaultValue={service?.serviceName}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Photo URL</label>
                    <input
                      type="text"
                      name="imgURL"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Image url"
                      required
                      defaultValue={service?.imgURL}
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
                      defaultValue={service?.serviceArea}
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
                      defaultValue={service?.price}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="Description">Description</label>

                    <textarea
                      className="w-full transition-all flex items-center h-40 border mt-1 rounded p-2  bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      required
                      defaultValue={service?.description}
                    ></textarea>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="dark:bg-blue-500 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
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

export default EditModal;
