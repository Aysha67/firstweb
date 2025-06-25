import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // Login by default
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <section id="auth" className="py-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">
          {isLogin ? "Login to Account" : "Create an Account"}
        </h2>

        <form className="space-y-5">
          {/* Full Name only for Register */}
          {!isLogin && (
            <div>
              <label className="block text-left text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:ring-rose-400 focus:ring-2"
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-left text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded focus:ring-rose-400 focus:ring-2"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-left text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full p-3 pr-10 border border-gray-300 rounded focus:ring-rose-400 focus:ring-2"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-rose-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password only for Register */}
          {!isLogin && (
            <div>
              <label className="block text-left text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded focus:ring-rose-400 focus:ring-2"
                required
              />
            </div>
          )}

          {/* Forgot Password only for Login */}
          {isLogin && (
            <div className="text-right">
              <a href="#forgot" className="text-sm text-rose-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-3 rounded font-semibold hover:bg-rose-500"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle Button Below Form */}
        <div className="mt-6 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleMode}
            className="text-rose-600 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
}

