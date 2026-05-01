"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <form action="" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs  p-4 mt-4">
            <legend className="fieldset-legend text-xl text-center ">
              Register Your Account
            </legend>
            <div className="divider"></div>

            <label className="label font-bold text-black">Your Name</label>
            <input
              name="name"
              type="text"
              className="input bg-pink-50"
              placeholder="Enter your name"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}

            <label className="label font-bold text-black">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input bg-pink-50"
              placeholder="photo url"
              {...register("photo", { required: "photo url is required" })}
            />
            {errors.photo && (
              <p className="text-red-600">{errors.photo.message}</p>
            )}
            <label className="label font-bold text-black">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-pink-50"
              placeholder="Email"
              {...register("email", { required: "Enter a valid email" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}

            <label className="label font-bold text-black">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-pink-50"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="btn bg-pink-800 text-white mt-4 ">Login</button>
          </fieldset>
        </form>

        <div className="font-semibold text-xs text-center">
          
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
