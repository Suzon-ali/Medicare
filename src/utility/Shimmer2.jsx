
import './Simmer.css'

const Simmer2 = () => {
    return (
      <div className="w-full rounded-lg h-auto ">
        <div className=" h-60 simmer animate-pulse rounded-xl"></div>
        <div className="flex flex-col justify-between   gap-2  pt-2">
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
  
  export default Simmer2;