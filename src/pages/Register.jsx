import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import register from "../assets/register.json";
import { FcGoogle } from "react-icons/fc";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    // if (!email || !password || (!name && !isMember)) {
    //   displayAlert();
    //   return;
    // }
    const userLogin = { email, password };
    const userRegister = { name, email, password };
    if (isMember) {
      loginUser(userLogin);
    } else {
      registerUser(userRegister);
    }
    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div className="grid md:grid-cols-2 justify-end">
      <div>
        <div className="mt-5 ">
        <ThemeSwitcher />
          <h1 className="text-center text-3xl font-bold dark:text-gray-300">
            Sign Up/Sign In Now.
          </h1>
        </div>
        <Lottie animationData={register} />
      </div>
      {/* righ hand */}
      <div className="w-[400px] h-[622px] bg-[#FFFFFF] border-2 border-[#f6f8fc] mx-auto my-5 shadow-2xl">
        <div className="p-4">
          <h1 className="text-center text-2xl font-bold">
            {values.isMember ? "Sign In" : "Sign Up"}
          </h1>
        </div>
        <div className="bg-[#f6f8fc] p-4 w-[80%] mx-auto rounded-xl hover:bg-[#afb0b3] duration-150 cursor-pointer">
          <button className="flex items-center gap-5">
            <FcGoogle size={30} />
            <h1 className="font-semibold">Continue with Google</h1>
          </button>
        </div>
        <div className="text-center mt-2 ">
          <p className=" text-sm font-bold"> Or</p>
        </div>

        {/* right side */}
        <div className=" p-8 ">
          <form onSubmit={onSubmit}>
            {showAlert && <Alert />}
            {!values.isMember && (
              <input
                type="text"
                placeholder="Name"
                className=" my-4 w-[95%] p-2 border-2 border-gray-400 outline-none rounded-xl text-sm  ml-3"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className=" my-4 w-[95%] p-2 border-2 border-gray-400 outline-none rounded-xl text-sm  ml-3"
              value={values.email}
              name="email"
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="password"
              className=" my-2 w-[95%] p-2 border-2 border-gray-400 outline-none rounded-xl text-sm  ml-3 "
              value={values.password}
              name="password"
              onChange={handleChange}
            />

            <button className="bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150 ">
              {values.isMember ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
        <p className="text-center">
          {values.isMember ? `Don't have an account? ` : "Already a member?"}
          <span className="cursor-pointer font-bold" onClick={toggleMember}>
            {values.isMember ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
