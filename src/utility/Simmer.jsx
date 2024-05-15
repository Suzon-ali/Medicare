
import './Simmer.css'

const Simmer = () => {
    return (
      <div className=" w-full rounded-lg h-auto md:h-80 md:flex">
        <div className=" md:w-5/12 h-40 md:h-full simmer animate-pulse rounded-xl"></div>
        <div className="flex flex-col justify-between md:p-4 md:w-7/12 gap-2 pt-2 md:pt-0">
          <div className="w-1/2 h-7 rounded-lg simmer animate-pulse"></div>
          <div className="w-1/4 h-7 rounded-lg simmer animate-pulse"></div>
          <div className="w-full h-20 rounded-lg simmer animate-pulse"></div>
          <div className="w-5/12 h-7 rounded-lg simmer animate-pulse"></div>
          <div className="md:w-5/12 rounded-lg flex gap-4 items-center">
            <div className="rounded-full size-16 simmer animate-pulse"></div>
            <div className="w-40 h-7 rounded-lg simmer animate-pulse"></div>
          </div>
          <div className="w-full h-12 rounded-lg simmer animate-pulse"></div>
        </div>
      </div>
    );
  };
  
  export default Simmer;
  
  