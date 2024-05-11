
import playStore from '../../assets/playstore.webp'
import appStore from '../../assets/appstore.png'

const DownloadApp = () => {
    
  return (
    <div className='text-center dark:text-white'>
        <h1 >Download our App from Playsotre or Appstore and Keep your Family safe!</h1>
        <div className='flex items-center gap-2 justify-center p-4'> 
            <img className='w-40 cursor-pointer' src={playStore} alt="playStore" />
            <img className='w-40 cursor-pointer' src={appStore} alt="playStore" />
        </div>
    </div>
        
  )
}

export default DownloadApp