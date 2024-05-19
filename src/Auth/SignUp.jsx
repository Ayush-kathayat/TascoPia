import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LineWave } from "react-loader-spinner";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./signUp.css";

// import { LoginFormContext } from "../../App";

// import { register as registerAPI } from "..//..//utils/api/api"; //! there was a naming conflict

const SignUP = () => {
  // const { setIsLoginForm } = useContext(LoginFormContext);

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    // Removed resolver as zod is not available in JS
  });

  const onSubmit = async (data) => {
    const success = await registerAPI(data);

    if (!success) {
      notifyError("Registration Failed");
      console.log("SOME ERROR OCCURED WHILE REGISTERING ");
    } else {
      reset();
      notifySuccess("Registration Successfull");
      setIsLoginForm(false);
      navigate("/");
    }
  };

  return (
    <div className="register">
      <div className="register-left">

      </div>


      <div className="register-right">
        <div className="form-wrapper">
          <form noValidate className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title">SIGN-UP</h2>
            <input
              className="input input-name"
              type="text"
              placeholder="Username"
              {...register("name")}
            />
            {errors.name && (
              <p className="form-errors">{errors.name.message}</p>
            )}
            <input
              className="input input-email"
              type="email"
              placeholder="Email"
              {...register("username")}
            />
            {errors.username && (
              <p className="form-errors">{errors.username.message}</p>
            )}
            <input
              className="input input-password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="form-errors">{errors.password.message}</p>
            )}
            {isSubmitting ? (
              <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            ) : (
              <button
                className="btn sbumit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
