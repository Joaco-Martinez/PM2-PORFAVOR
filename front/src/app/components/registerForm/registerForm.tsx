"use client"
import React, { FC } from "react"
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import ButtonLogIn from "../buttonLogIn/buttonLogIn";
import { postRegister } from "@/services/auth";

interface FormData {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  }

  const RegisterSchema = yup.object().shape({
      name: yup
      .string()
      .min(6, 'Name must be at least 6 characters')
      .required('Name is required'),
      phone: yup
      .string()
      .matches(/^\+\d+(\s\d+)*$/, 'Phone must start with + and only contain numbers')
      .required('Phone is required'),    
      address: yup
      .string()
      .min(6, 'Address must be at least 6 characters')
      .required('Address is required'),
      email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
      password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
      
    })
    const RegisterForm: FC = () => {
        
  const notifyError = () => toast.error('An error occurred. Please try again later.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      
      
        const notifySucces = () => toast.success('Registration successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        
        const onSubmit = async (values: FormData) => {
    try {
        const response = await postRegister(values);
        if (response && response.id && response.email) {
            notifySucces()

          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);

        } else {
            notifyError()

        }
    } catch (e) {
        notifyError()

        console.warn("Error al registrar el usuario:", e);
    }
};
        
        
        return (
            <div>
      <Formik
        initialValues={{ name:"", phone: "", address: "", email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
        >
        {({ isSubmitting, values, handleBlur, handleChange, handleSubmit}) => (
            <Form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="string" name="name" id="name" value={values.name} onBlur={handleBlur} onChange={handleChange} placeholder="Pepito Gonzalito" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
            
            <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input type="string" name="phone" id="phone" value={values.phone} onBlur={handleBlur} onChange={handleChange} placeholder="+5491112345678" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs italic" />

            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input type="string" name="address" id="address" value={values.address} onBlur={handleBlur} onChange={handleChange} placeholder="Fake street 123" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="address" component="div" className="text-red-500 text-xs italic" />

          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="string" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder="sample@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />

            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" name="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder="********" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
            <div className="flex items-center justify-center mt-4">
              <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
        <ButtonLogIn />
        <ToastContainer />
    </div>
    )
}

export default RegisterForm
