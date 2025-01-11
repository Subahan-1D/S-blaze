import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </div>
          <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
            <div className="px-4 py-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.385C8.805 23.491 9.025 23.128 9.025 22.812C9.025 22.531 9.014 21.697 9.008 20.633C5.672 21.327 4.967 19.253 4.967 19.253C4.454 17.913 3.717 17.564 3.717 17.564C2.665 16.853 3.798 16.868 3.798 16.868C4.962 16.947 5.592 18.062 5.592 18.062C6.63 19.805 8.293 19.339 8.946 19.108C9.054 18.387 9.351 17.898 9.681 17.634C7.048 17.357 4.3 16.308 4.3 11.635C4.3 10.293 4.79 9.188 5.589 8.353C5.459 8.072 5.057 6.801 5.689 5.104C5.689 5.104 6.698 4.794 9 6.389C9.926 6.101 10.926 5.973 11.926 5.967C12.926 5.973 13.926 6.101 14.853 6.389C17.153 4.794 18.16 5.104 18.16 5.104C18.793 6.801 18.391 8.072 18.261 8.353C19.059 9.188 19.55 10.293 19.55 11.635C19.55 16.32 16.8 17.35 14.161 17.619C14.594 17.97 14.992 18.677 14.992 19.811C14.992 21.388 14.974 22.475 14.974 22.812C14.974 23.128 15.191 23.494 15.796 23.385C20.567 21.8 24 17.303 24 12C24 5.373 18.627 0 12 0Z"
                  fill="#181717"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Github
            </span>
          </div>
          <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
            <div className="px-4 py-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4.557C23.117 4.95 22.168 5.215 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.607C22.386 3.172 21.332 3.575 20.21 3.803C19.313 2.837 18.032 2.249 16.616 2.249C13.437 2.249 11.07 5.175 11.819 8.239C7.728 8.035 4.1 6.13 1.671 3.148C0.381 5.362 1.002 8.257 3.194 9.723C2.388 9.697 1.628 9.487 0.965 9.147C0.956 11.396 2.491 13.307 4.717 13.741C4.092 13.901 3.428 13.951 2.755 13.851C3.256 15.716 4.914 17.085 6.882 17.12C5.229 18.394 3.192 19.128 1.007 19.128C0.668 19.128 0.335 19.11 0 19.074C2.001 20.417 4.384 21.18 6.933 21.18C16.66 21.18 21.545 13.143 21.136 6.053C22.118 5.345 22.978 4.419 23.64 3.37C22.662 3.895 21.596 4.29 20.466 4.557H24Z"
                  fill="#1DA1F2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Twitter
            </span>
          </div>
          <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
            <div className="px-4 py-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6757 0H1.3243C0.5927 0 0 0.5927 0 1.3243V22.6757C0 23.4073 0.5927 24 1.3243 24H12.821V14.706H9.692V11.25H12.821V8.746C12.821 6.124 14.514 4.687 16.886 4.687C17.991 4.687 18.965 4.767 19.223 4.799V7.93H17.456C16.108 7.93 15.851 8.579 15.851 9.503V11.25H19.121L18.667 14.706H15.851V24H22.6757C23.4073 24 24 23.4073 24 22.6757V1.3243C24 0.5927 23.4073 0 22.6757 0Z"
                  fill="#1877F2"
                />
                <path
                  d="M18.667 14.706L19.121 11.25H15.851V9.503C15.851 8.579 16.108 7.93 17.456 7.93H19.223V4.799C18.965 4.767 17.991 4.687 16.886 4.687C14.514 4.687 12.821 6.124 12.821 8.746V11.25H9.692V14.706H12.821V24H15.851V14.706H18.667Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Facebook
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/registration"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
