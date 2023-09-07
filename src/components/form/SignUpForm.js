import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last name</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce yourself</label>
          <Field
            name="intro"
            placeholder="Enter your introduce"
            className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your job</label>
          <Field
            name="job"
            className="p-4 rounded-md border border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
