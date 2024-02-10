

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-lg shadow-md p-8">
        <div className="text-center text-3xl font-extrabold text-white">
          Login
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md overflow-hidden">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-transparent placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div className="rounded-md overflow-hidden">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-transparent placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="text-center space-y-2">
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11l7 7 7-7"
                />
              </svg>
              Login
            </button>
            <a href="#" className="text-sm font-medium text-white hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
