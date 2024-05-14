import { useContext } from "react";
import doctorsImg from "../../assets/doctors.svg";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const form = new FormData(e.currentTarget);

    const imgURL = form.get("imgURL");
    const serviceName = form.get("serviceName");
    const Price = form.get("price");
    const serviceArea = form.get("serviceArea");
    const description = form.get("description");
    const providerName = user?.displayName;
    const providerEmail = user?.email;
    const providerImage = user?.photoURL;
    const timeStamp = Date.now();

    // Send data to backend
    axios
      .post(`${import.meta.env.VITE_URL}/services`, {
        imgURL,
        serviceName,
        Price,
        serviceArea,
        description,
        providerImage,
        providerEmail,
        providerName,
        timeStamp
      })
      .then((res) => {
        const result = res.data;
        if (result && result.insertedId) {
          toast.success("Data added successfully!");
         
          
        } else {
          toast.error("Failed to add data.");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while adding data: " + error.message);
      });
  };

  return (
    <div className="mt-16 pt-10">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white dark:bg-button_bg/50 dark:text-white/50 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Add Services</p>
                <p>Please fill out all the fields.</p>
                <div className="mt-16">
                  <img className="w-full h-60" src={doctorsImg} alt="" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="lg:col-span-2">
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
  );
};

export default AddService;
