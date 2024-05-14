/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const PopularServices = () => {
  
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/popular`,)
    .then(res => {
      console.log(res);
      setServices(res.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false); 
    });
  }, []);
  
  //decide what to render

  let content = "";
  if (loading && !error) {
    content = (
      <>
        <h2>Loading</h2>
      </>
    );
  }
  if (!loading && error) {
    content = <div>Error: {error.message}</div>;
  }
  if (!loading && !error && services.length === 0) {
    content = <div>No Service found.</div>;
  }
  if (!loading && !error && services.length > 0) {
    content = (
      <>
        {services &&
          services.slice(0, 6).map((service) => {
            return (
              <ServiceCard
              service={service}
              key={service?._id}
              />
            );
          })}
      </>
    );
  }


  return (
    <div className=" bg-blue-100/10 dark:bg-transparent py-10">
      <div className="max-w-[1170px] mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-center dark:text-white">
            <span>Medi</span>
            <span className="text-dark_button">Care</span> Popular Services
          </h2>
          <p className="text-center py-4 text-black/80 text-lg dark:text-white/60">
            Medicare's popular services offer comprehensive coverage and access
            to top healthcare providers, <br />
            emphasizing preventive care and flexibility in plan options,
            ensuring peace of mind and optimal well-being for individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {content}
        </div>

        <div className="text-center py-10">
        <Link  to={'/services'} ><button className="bg-dark_bg dark:bg-dark_button text-white p-3 my-2 rounded-lg hover:brightness-110">See All Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
