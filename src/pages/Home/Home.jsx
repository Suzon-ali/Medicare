import { Helmet } from "react-helmet"
import Banner from "./Banner"
import DownloadApp from "./DownloadApp"

const Home = () => {
  return (
    <div className="mt-[70px]">
      <Helmet>
        <title>Medicare | Complete Health Solution</title>
      </Helmet>
    <Banner />
    <DownloadApp />
    </div>
  )
}

export default Home