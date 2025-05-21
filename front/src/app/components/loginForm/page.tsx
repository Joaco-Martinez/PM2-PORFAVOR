"use client"
import React, { FC } from "react"
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import ButtonRegister from "../buttonRegister/buttonRegiste";
import { ToastContainer, toast } from 'react-toastify';


import { postLogin } from "@/services/auth";
import { useAuthContext } from "../../../../context/authContext";


const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})


interface FormData {
  email: string
  password: string
}

const LoginForm: FC = () => {
  const { SaveUserData } = useAuthContext();
  const notify = () => toast.error('Login failed. Please try again.', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});


  const notifySucces = () => toast.success('Login successful.', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  
  const onSubmit = async (values: FormData) => {
    try {
        const response = await postLogin(values);

        if (response?.user && response?.token) {
            SaveUserData({
                user: response.user,
                token: response.token,
            });
            notifySucces();


            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        
          } else {
            console.error("Respuesta inválida de postLogin:", response);
        notify();

        }

    } catch (e) {
        console.warn("Error al loguear el usuario:", e);
        notify();

    }
};
    
    
    return (
        <div>
     <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={LoginSchema}
       onSubmit={onSubmit}
     >
       {({ isSubmitting, values, handleBlur, handleChange, handleSubmit}) => (
         <Form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
           <input type="string" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder="sample@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
           <input type="password" name="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder="********" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
           <div className="mt-8 flex items-center justify-center">
           <button type="submit"  disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 gap-2 rounded focus:outline-none focus:shadow-outline"> 
             Submit
           </button>
           </div>
         </Form>
       )}
     </Formik>
       <ButtonRegister />
       {/* {dataUser &&  <PopupLogin user={dataUser.user} />} */}
          <ToastContainer />
   </div>
    )

  }
export default LoginForm;