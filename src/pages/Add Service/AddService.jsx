
import doctorsImg from '../../assets/doctors.svg'

const AddService = () => {
  return (
    <div className='mt-16 pt-10'>
      
      <div className="container max-w-screen-lg mx-auto">
        <div>
          
          <div className="bg-white dark:bg-button_bg/50 dark:text-white/50 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Add Services</p>
                <p>Please fill out all the fields.</p>
                <div className='mt-16'>
                  <img className='w-full h-60' src={doctorsImg} alt="" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 ">
                  <div className="md:col-span-5 ">
                    <label htmlFor="full_name">Service Name</label>
                    <input
                      type="text"
                      name="serviceName"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:text-white dark:bg-white/10"
                      placeholder='Service name'
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Photo URL</label>
                    <input
                      type="text"
                      name="imgURL"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Image url"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Service Area (City)</label>
                    <input
                      type="text"
                      name="serviceArea"
                      id="serviceArea"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Service area"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Price</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Price ($)"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="zipcode">Zipcode</label>
                    
                    <textarea  className='w-full transition-all flex items-center h-40 border mt-1 rounded p-2  bg-gray-50 text-black dark:bg-white/10 dark:text-white' name="description" id="description" cols="30" rows="10"></textarea>
                  </div>


                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="dark:bg-blue-500 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddService