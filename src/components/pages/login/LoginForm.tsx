import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import './login.css';
import LoadingButton from '../../commons/LoadingButton';
import { ToastContainer } from 'react-toastify';
import {
    Input,
    Ripple,
    initTE,
  } from "tw-elements";

function LoginForm() {

    const { authStore, commonStore } = useStore();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        initTE({ Input, Ripple });
        if (commonStore.token) {
          navigate('/home');
        }
  
      }, [navigate]);  

    const schema = Yup.object().shape({
      username: Yup.string()
        .required("Username is a required field"),
      password: Yup.string()
        .required("Password is a required field"),
    });


    return (
        <>
        <ToastContainer theme="colored"/>
        <Formik
            validationSchema={schema}
            initialValues={{ username: "", password: ""}}
            onSubmit={(values) => {
              setIsLoading(true);
              authStore.loginUser.username = values.username;
              authStore.loginUser.password = values.password;
              authStore.login(authStore.loginUser).then(() => {
                setTimeout(() => {
                  setIsLoading(false);
                }, 2000);
                if (commonStore.token) {
                  navigate('/home');
                }
              });
            }}
          >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
                <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
                    <div className="container h-full p-10">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                <div className="md:mx-6 md:p-12">
                                    <div className="text-center">
                                    </div>

                                    <form noValidate onSubmit={handleSubmit}>
                                    <p className="mb-4">Please login to your account</p>
                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                        <input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Username" 
                                        id="username" />
                                                        { errors.username && touched.username ? 
                                                          (
                                                          <>
                                                          <span className="block sm:inline text-red-700 text-sm font-bold px-2">    <ErrorMessage name="username" />  </span>
                                                          </>
                                                          ) : null
                                                        }
                                        <label
                                        htmlFor="exampleFormControlInput1"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Username
                                        </label>
                                    </div>

                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                        <input
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Password" 
                                        name="password"
                                        id="password" />
                                                        { errors.password && touched.password ? 
                                                          (
                                                          <>
                                                          <span className="block sm:inline text-red-700 text-sm font-bold px-2">    <ErrorMessage name="password" />  </span>
                                                          </>
                                                          ) : null
                                                        }
                                        <label
                                        htmlFor="exampleFormControlInput11"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Password
                                        </label>
                                    </div>

                                    <div className="mb-12 pb-1 pt-1 text-center">
                                        <LoadingButton
                                        isLoading={isLoading}
                                        label="Login"
                                        loadingLabel="Authenticating..." />
                                    </div>

                                    <div className="flex items-center justify-between pb-6">
                                    </div>
                                    </form>
                                </div>
                                </div>

                                <div
                                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                style={{backgroundColor: '#008B8B'}}>
                                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            )}
    </Formik>
    </>
  );
};


export default observer(LoginForm);
