import doctorsImg from "../../assets/doctors.svg";
const Contact = () => {
  return (
    <div className="mt-10">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white dark:bg-button_bg/50 dark:text-white/50 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Get in Touch with us!</p>
                <p className="py-2">
        We're here to help. Send your query or question below and provide us with as much details as possible. We will answer your query as soon as
        possible. We aim to reply to your query within 24 hours.
      </p>
                <div className="mt-16">
                  <img className="w-full h-60" src={doctorsImg} alt="" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 ">
                  <div className="md:col-span-5 ">
                    <label htmlFor="full_name">Your Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:text-white dark:bg-white/10"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="text"
                      name="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      placeholder="Email"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="zipcode">Your Query</label>

                    <textarea
                      className="w-full transition-all flex items-center h-40 border mt-1 rounded p-2  bg-gray-50 text-black dark:bg-white/10 dark:text-white"
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      placeholder="Query"
                    ></textarea>
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
  );
};

export default Contact;
