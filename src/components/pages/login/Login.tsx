import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import './login.css';
import LoadingButton from '../../commons/LoadingButton';
import { ToastContainer } from 'react-toastify';


const Login = () => {
    const { authStore, commonStore } = useStore();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
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
          <div className="h-56 flex justify-center ... grid grid-cols-6 gap-1 content-stretch w-full rounded-lg" style={{ height: '70vh' }}>
                <div></div>
                <div className="col-start-2 col-span-4 ... login-form-container">
                <div className="bg-neutral-200">
                  <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
                    <div className="container h-full">
                      <div
                        className="w-full g-6 flex h-full flex-wrap items-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                          <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                            <div className="flex items-center rounded-lg lg:w-6/12 backgroundStyle" style={{backgroundColor: '#008B8B'}}>
                                <div className="px-2 py-3 text-white md:mx-6 md:p-12">
                                </div>
                              </div>
                              <div className="px-4 md:px-0 lg:w-6/12">
                                <div className="md:mx-6 md:p-12">
                                  <div className="text-center">
                                  </div>

                                  <form noValidate onSubmit={handleSubmit}>
                                    <p className="text-left mb-4">Please login to your account</p>
                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                      <input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        className="form-control inp_text peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none borderstyle"
                                        placeholder="Username" 
                                        id="username"
                                        />
                                        {/* <p className="error">
                                        {errors.username && touched.username && errors.username}
                                        </p> */}
                                                        { errors.username && touched.username ? 
                                                          (
                                                          <>
                                                          <span className="block sm:inline text-red-700 text-sm font-bold px-2">    <ErrorMessage name="username" />  </span>
                                                          </>
                                                          ) : null
                                                          }
                                    </div>

                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                      <input
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className="form-control peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none borderstyle"
                                        placeholder="Password" 
                                        name="password"
                                        id="password"
                                        />
                                        {/* <p className="error">
                                        {errors.password && touched.password && errors.password}
                                        </p> */}
                                                        { errors.password && touched.password ? 
                                                          (
                                                          <>
                                                          <span className="block sm:inline text-red-700 text-sm font-bold px-2">    <ErrorMessage name="password" />  </span>
                                                          </>
                                                          ) : null
                                                          }
                                    </div>

                                    <div className="mb-12 pb-1 pt-1 text-center">
                                      <LoadingButton
                                        isLoading={isLoading}
                                        label="Login"
                                        loadingLabel="Authenticating..."
                                      />
                                    </div>

                                    <div className="flex items-center justify-between pb-6">
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                </div>
                <div></div>
              </div>
        )}
    </Formik>
    </>
  );
};

export default observer(Login);
