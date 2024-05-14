import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingModal from "./BookingModal";

const SignleService = () => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const[isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/services/${id}`)
      .then((res) => {
        console.log(res);
        setService(res.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  console.log(service);

  const {
    serviceName,
    imgURL,
    price,
    serviceArea,
    description,
    providerName,
    providerImage,
  } = service || {};

  console.log(serviceName);

  return (
    <div className="bg-gray-100 dark:bg-dark_bg min-h-[80dvh] mt-20 pt-10">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-button_bg/70 dark:text-white/70 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={imgURL} alt={serviceName} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 relative">
              <h1 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white/70">
                Service Provider Information
              </h1>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full border size-16"
                  src={providerImage}
                  alt=""
                />
                <div>
                  <p className="font-bold">Service Provider Name</p>
                  <p className="text-blue-900 dark:text-blue-500">{providerName}</p>
                  <p className="">
                    <span className="font-bold">Location:</span> {serviceArea}
                  </p>
                </div>
              </div>

              <h1 className="text-xl font-semibold text-gray-800 mt-2 dark:text-white/70">
                Service Information
              </h1>

              <h2 className="text-lg text-gray-800 dark:text-white/70">
                <span className="font-semibold">Service Name:</span>{" "}
                {serviceName}
              </h2>
              <p className="text-lg text-gray-600 dark:text-white/40">
                <strong className="dark:text-white/70">Desciption:</strong> {description}
              </p>
              <div className="flex items-center mb-4">
                <span className="text-gray-700 mr-2 font-semibold dark:text-white/70">Price:</span>
                <span className="font-semibold text-gray-800 dark:text-blue-400">TK{price}</span>
              </div>
              <div className="flex items-center mb-4">
                <button onClick={()=>setIsBookingModalOpen(true)} className="md:absolute bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 bg-dark_bg dark:bg-dark_button text-white p-2 my-2 rounded-lg w-fullhover:brightness-110">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <Link to="/services" className=" ">
          <button className="bg-dark_bg dark:bg-dark_button text-white px-4 py-3 rounded-lg w-fullhover:brightness-110 text-lg">
            All Services
          </button>
        </Link>
      </div>

      {isBookingModalOpen && <BookingModal service={service}  setIsBookingModalOpen={setIsBookingModalOpen} />}
    </div>
  );
};

export default SignleService;
