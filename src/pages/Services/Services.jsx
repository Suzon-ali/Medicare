import { Helmet } from "react-helmet";
import ServiceCard2 from "../Home/ServiceCard2";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/services`, {
      withCredentials: true,
    })
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
          services.map((service) => {
            return (
              <ServiceCard2
              service={service}
              key={service?._id}
              />
            );
          })}
      </>
    );
  }

  return (
    <div className="mt-16 pt-10 text-black dark:text-white/80">
      <Helmet>
        <title>Medicare | Service</title>
      </Helmet>
      <div className="max-w-[1170px] mx-auto">
      <h1 className="text-center text-5xl font-extrabold">
            Browse All Services in <span className="">Medi</span>
            <span className="text-dark_button">Care</span>
          </h1>

          <div className="grid grid-cols-1  gap-5 mt-10 md:px-10">
          {content}
        </div>

      </div>
    </div>
  );
};

export default Services;
