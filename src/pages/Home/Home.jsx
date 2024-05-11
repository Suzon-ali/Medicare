import { Helmet } from "react-helmet";
import Banner from "./Banner";
import DownloadApp from "./DownloadApp";
import { Step } from "./Step";
import PopularServices from "./PopularServices";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="mt-[70px]">
      <Helmet>
        <title>Medicare | Complete Health Solution</title>
      </Helmet>
      <Banner />
      <DownloadApp />
      <Step />
      <PopularServices />
      <Contact />
    </div>
  );
};

export default Home;
