import { useNavigate } from "@solidjs/router";
import HomeLogic from "../home/HomeLogic";
import { createSignal } from "solid-js";

function Login() {
  const logic = new HomeLogic();
  const [count, setCount] = createSignal<number>(0);

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8 rounded-lg shadow-md p-8">
        <div class="text-center text-3xl font-extrabold text-white">Login</div>
        <form
          class="mt-8 space-y-6"
          onsubmit={(event: SubmitEvent) => logic.handleSubmit(event, count())}
        >
          <div class="rounded-md overflow-hidden">
            <label class="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              // autoComplete="username"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-transparent placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div class="rounded-md overflow-hidden">
            <label class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-transparent placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div class="text-center space-y-2">
            <button
              type="submit"
              value="submit"
              onclick={() => setCount(0)}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <div class="divider">OR</div>
            <button
              type="submit"
              onclick={() => setCount(1)}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
