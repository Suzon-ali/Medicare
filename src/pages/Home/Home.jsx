import { Helmet } from "react-helmet"
import Banner from "./Banner"
import DownloadApp from "./DownloadApp"
import { Step } from "./Step"

const Home = () => {
  return (
    <div className="mt-[70px]">
      <Helmet>
        <title>Medicare | Complete Health Solution</title>
      </Helmet>
    <Banner />
    <DownloadApp />
    <Step />
    </div>
  )
}

export default Home