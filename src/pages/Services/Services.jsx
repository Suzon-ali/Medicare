import { Helmet } from "react-helmet";
import ServiceCard2 from "../Home/ServiceCard2";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Pagination from "./Pagination";
import Simmer from "../../utility/Simmer";

const Services = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');


  ////pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = services.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    let query = '';
    if (searchText !== '') {
      query = `?serviceName=${searchText.toLowerCase()}`;
    }

    const fetchServices = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/services${query}`, {
          withCredentials: true,
        });
        setServices(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [searchText]);

  
  //decide what to render

  let content = "";
  if (loading && !error) {
    content = (
      <>
        <Simmer />
        <Simmer />
        <Simmer />
        <Simmer />
        <Simmer />
        <Simmer />
      </>
    );
  }
  if (!loading && error) {
    content = <div>Error: {error.message}</div>;
  }
  if (!loading && !error && currentPosts.length === 0) {
    content = <div>No Service found.</div>;
  }
  if (!loading && !error && currentPosts.length > 0) {
    content = (
      <>
        {currentPosts &&
          currentPosts.map((service) => {
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
        <title>Medicare | All Services</title>
      </Helmet>
      <div className="max-w-[1170px] mx-auto">
      <h1 className="text-center text-xl md:text-5xl font-extrabold">
            Browse All Services in <span className="">Medi</span>
            <span className="text-dark_button">Care</span>
          </h1>

          <Search setSearchText={setSearchText} searchText={searchText} />

          <div className="grid grid-cols-1  gap-5 mt-10 md:px-10">
          {content}
        </div>

        <Pagination totalPosts={services.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />

      </div>
    </div>
  );
};

export default Services;
