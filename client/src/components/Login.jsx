import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Disable scrolling when modal is active
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-8 sm:p-10 rounded-xl text-slate-500 shadow-lg"
      >
        <h1 className="text-center text-2xl font-medium text-neutral-700">
          {state}
        </h1>
        <p className="text-sm text-center mt-2">
          {state === "Login"
            ? "Welcome back! Please sign in to continue."
            : "Create an account to get started."}
        </p>

        {state === "Sign Up" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img
              src={assets.profile_icon}
              alt="User Icon"
              className="w-5 h-5"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm w-full"
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="Email Icon" className="w-5 h-5" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email ID"
            required
            className="outline-none text-sm w-full"
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="Password Icon" className="w-5 h-5" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm w-full"
          />
        </div>

        {state === "Login" && (
          <p className="text-sm text-blue-600 mt-4 cursor-pointer text-center">
            Forgot password?
          </p>
        )}

        <button className="bg-blue-600 w-full text-white py-2 rounded-full mt-4 hover:bg-blue-700 transition">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        <p className="mt-5 text-center">
          {state === "Login" ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login
              </span>
            </>
          )}
        </p>

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close Modal"
          className="absolute top-5 right-5 cursor-pointer w-6 h-6"
        />
      </motion.form>
    </div>
  );
};

export default Login;
