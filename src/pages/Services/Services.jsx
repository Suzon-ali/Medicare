import { Helmet } from "react-helmet";
import { popularSerices } from "../Home/PopularServices";
import ServiceCard2 from "../Home/ServiceCard2";

const Services = () => {
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
          {popularSerices &&
            popularSerices.slice(0,6).map((service) => {
              return <ServiceCard2 key={service.id} service={service} />;
            })}
        </div>

      </div>
    </div>
  );
};

export default Services;
