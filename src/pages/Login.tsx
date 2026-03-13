const Login = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center relative font-sans"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2luZW1hfGVufDB8fDB8fHww)",
      }}
    >
      {/* طبقة داكنة */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* صندوق تسجيل الدخول */}
      <div className="relative bg-black/80 w-96 p-8 rounded-2xl shadow-xl flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-yellow-500">
          Login to watch movies
        </h1>

        <input
          type="text"
          placeholder="Username or Email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-yellow-500 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-yellow-500 focus:outline-none"
        />

        <button className="w-full bg-gray-800 hover:bg-gray-700 transition text-yellow-500 duration-300 py-3 rounded-lg font-semibold cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;