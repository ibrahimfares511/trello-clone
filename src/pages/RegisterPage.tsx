import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { SubmitHandler } from "react-hook-form";

import Heading from "@/components/Shared/Heading";
import {
  registerSchema,
  type registerType,
} from "@/components/Validation/RegisterSchema";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const submitForm: SubmitHandler<registerType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center *:basis-1/2 *:h-full">
      <div className="relative">
        <img
          src="/Glass.png"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
        <div>
          <img src="/landing/logo.svg" className="py-6 px-8" />
        </div>
        <div className="text-white mt-48 p-8">
          <h1 className="font-extrabold text-7xl font-poppins">Welcome to</h1>
          <h2 className="text-3 xl font-poppins">
            Huddle Management Application
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center px-10">
        <div className="flex flex-col w-full">
          <Heading text="Sign Up" />

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-xl bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary h-14">
                    <input
                      type="text"
                      {...register("firstName")}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="First Name"
                    />
                  </div>
                  {errors.firstName?.message && (
                    <span className="text-red-600 text-sm">
                      {errors.firstName?.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-xl bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary h-14">
                    <input
                      type="text"
                      {...register("lastName")}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Last Name"
                    />
                  </div>
                  {errors.lastName?.message && (
                    <span className="text-red-600 text-sm">
                      {errors.lastName?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm/6 font-medium text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-xl bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary h-14">
                  <input
                    type="text"
                    {...register("email")}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="Email"
                  />
                </div>
                {errors.email?.message && (
                  <span className="text-red-600 text-sm">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-xl bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary h-14">
                  <input
                    type="password"
                    {...register("password")}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="Password"
                  />
                </div>
                {errors.password?.message && (
                  <span className="text-red-600 text-sm">
                    {errors.password?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm/6 font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-xl bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary h-14">
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="Confirm Password"
                  />
                </div>
                {errors.confirmPassword?.message && (
                  <span className="text-red-600 text-sm">
                    {errors.confirmPassword?.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-primary px-3 py-4 font-semibold text-white shadow-md w-full mt-4 cursor-pointer "
            >
              sign up
            </button>

            <p className="mt-4 text-center font-bold">
              Already have an Account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
