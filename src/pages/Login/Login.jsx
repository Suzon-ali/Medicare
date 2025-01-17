import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/login-aUnT5PRo2P.svg";
import { AuthContext } from "../../providers/AuthProvider";
import googleImg from "../../assets/google.svg";

function Login() {
  const { signIn, signInWithGoogle , user, setLoading} =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setLoginError('');

    signIn(email, password)
      .then(() => {
        navigate("/");
        toast.success("Logged in succesfully!");
      })
      .catch((error) => {
        setLoginError(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
        toast.success("Logged in succesfully!");
      })
      .catch((error) => setLoginError(error.message));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if(user){
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Medicare | Login</title>
      </Helmet>
      <div className="max-w-[1170px] mx-auto flex-col-reverse flex lg:flex-row justify-center items-center h-auto py-10 mt-16">
        <div className="w-full lg:w-1/2 max-w-lg p-2 rounded-lg">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-dark_button  text-center">
              Login
            </h2>
            <p className="text-center py-2 dark:text-white/50 font-medium">
              Don't share your login information to anyone
            </p>
          </div>
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-white/50">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@domain.com"
                className="mt-1 px-4 py-2 w-full border  border-gray-300 rounded-md  dark:bg-black/10 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 dark:text-white/50">
                Password
              </label>
              <div className="flex gap-2 border border-gray-300 rounded-md ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="********"
                  className="mt-1 px-4 py-2 w-full focus:outline-none dark:text-white rounded-lg dark:bg-black/10 "
                  required
                />

                <span
                  onClick={handleShowPassword}
                  className="flex justify-center items-center mr-3 cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_73_97)">
                        <path
                          d="M18.73 18.0377C17.0206 19.3407 14.9391 20.0625 12.79 20.0977C5.79004 20.0977 1.79004 12.0977 1.79004 12.0977C3.03393 9.77958 4.75917 7.75429 6.85004 6.15768M10.69 4.33768C11.3784 4.17656 12.0831 4.09602 12.79 4.09768C19.79 4.09768 23.79 12.0977 23.79 12.0977C23.183 13.2333 22.4591 14.3024 21.63 15.2877M14.91 14.2177C14.6354 14.5124 14.3042 14.7488 13.9362 14.9128C13.5682 15.0768 13.1709 15.1649 12.7681 15.172C12.3653 15.1792 11.9652 15.1051 11.5916 14.9542C11.2181 14.8033 10.8788 14.5787 10.5939 14.2938C10.309 14.009 10.0844 13.6696 9.93355 13.2961C9.78266 12.9225 9.70857 12.5224 9.71567 12.1196C9.72278 11.7168 9.81095 11.3195 9.97492 10.9515C10.1389 10.5835 10.3753 10.2523 10.67 9.97768"
                          stroke="black"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="dark:stroke-sky-700"
                        />
                        <path
                          d="M1.79004 1.09766L23.79 23.0977"
                          stroke="black"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="dark:stroke-sky-700"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_73_97">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.790039 0.0976562)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="dark:stroke-sky-700"
                      
                    >
                      <path
                        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                        stroke="black"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="dark:stroke-sky-700"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="black"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="dark:stroke-sky-700"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-black dark:bg-dark_button text-white"
              >
                Login
              </button>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">
                Forgot Password?
              </a>
            </div>
            {loginError && <p className="text-red-400 py-2">{loginError}</p>}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center"
              >
                <span className="bg-white w-10 flex items-center justify-center">
                  <img className="size-8" src={googleImg} alt="" />
                </span>
                <span className="font-semibold w-full text-center">
                  Continue with Google
                </span>
              </button>
            </div>
            <p className="mt-4 text-center dark:text-white/50">
              Do not have an account?{" "}
              <Link
                to={"/register"}
                className="text-indigo-500 hover:text-indigo-700"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img data-aos="fade-up" className="w-" src={loginAnimation} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
