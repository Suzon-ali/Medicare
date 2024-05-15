import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import axios from "axios";
import MyService from "./MyService";


const ManageService = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  const { email } = user || {};


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/services?email=${email}`, {
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
  }, [email]);
  
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
              <MyService
              service={service}
              key={service?._id}
              setServices={setServices}
              services={services}
              />
            );
          })}
      </>
    );
  }


  return (
    <div className="max-w-[1170px] mx-auto  mt-16 pt-10 text-black dark:text-white/70 min-h-[70dvh]">
      <div className="mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Manage Services
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal dark:text-white/50">
                <thead >
                  <tr className="">
                    <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-white/20 bg-gray-100 dark:text-white/50 dark:bg-button_bg/70 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-white/20 bg-gray-100  dark:text-white/50 dark:bg-button_bg/70 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Service Price
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-white/20 bg-gray-100  dark:text-white/50 dark:bg-button_bg/70 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">
                      Added Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-white/20 bg-gray-100  dark:text-white/50 dark:bg-button_bg/70 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-white/20 bg-gray-100  dark:text-white/50 dark:bg-button_bg/70 "></th>
                  </tr>
                </thead>
                <tbody>
                 {content}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
