"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { RegistrationForm } from "./registration.type";
function Registration() {
  const { register, handleSubmit, control } = useForm<RegistrationForm>();

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
    data.password = "123456";

    const createUser = async () => {
      const resp = await fetch(`http://localhost:8000/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await resp.json();
      console.log(result);
    };

    createUser();
  };
  return (
    <>
      <form
        className="max-w-96 mx-auto flex flex-col gap-4 mt-4 border p-4 rounded-[4px]"
        action=""
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-xl">Gogrow Account Registration</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="border rounded-[4px] p-1 h-10"
            type="text"
            id="fullName"
            {...register("fullName")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address:</label>
          <input
            className="border rounded-[4px] p-1 h-10"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            className="border rounded-[4px] p-1 h-10"
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="address">Address:</label>
          <textarea
            className="border rounded-[4px] p-1 h-10"
            id="address"
            {...register("address")}
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            className="border rounded-[4px] p-1 h-10"
            type="date"
            id="dob"
            {...register("dob")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="gender">Gender:</label>
          <select
            className="border rounded-[4px] p-1 h-10"
            id="gender"
            {...register("gender")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="occupation">Occupation:</label>
          <input
            className="border rounded-[4px] p-1 h-10"
            type="text"
            id="occupation"
            {...register("occupation")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="educationLevel">Education Level:</label>
          <select
            className="border rounded-[4px] p-1 h-10"
            id="educationLevel"
            {...register("educationLevel")}
          >
            <option value="None">None</option>
            <option value="High School">High School</option>
            <option value="Associate Degree">Associate Degree</option>
            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
            <option value="Master's Degree">Master&apos;s Degree</option>
            <option value="Doctoral Degree">Doctoral Degree</option>
          </select>
        </div>

        <input
          className="border rounded-[4px] p-1 h-10 bg-blue-500 text-white"
          type="submit"
          value="Register"
        ></input>
      </form>
      <DevTool control={control} />
    </>
  );
}
export default Registration;
