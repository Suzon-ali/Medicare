import { Helmet } from "react-helmet"
import Banner from "./Banner"
import DownloadApp from "./DownloadApp"
import { Step } from "./Step"
import PopularServices from "./PopularServices"

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
    </div>
  )
}

export default Home