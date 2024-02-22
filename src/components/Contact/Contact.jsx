import React, { useState, useRef } from 'react';
import "./Contact.css";
import images from '../../assets/images/connect.png';
import { Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com'; // Import EmailJS library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  // Declare state variables
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const captchaRef = useRef(null);

  const formInitialValues = { name: "", email: '', message: '' };

  return (
    <section className='contact section-p-top bg-black' id="contact">
      <div className='container'>
        <div className='contact-content grid text-center'>
          <div className='contact-left'>
            <img src={images} alt="" />
          </div>
          <div className='contact-right'>
            <div className='section-t'>
              <h3>Let's connect</h3>
              <p className='text'>Whether you have a project in mind, a question about our my services, or just want to say hello, feel free to reach out using the form below</p>
            </div>

            <Formik
              initialValues={formInitialValues}
              validate={values => {
                const errors = {};

                if (!values.name) {
                  errors.name = "Name is required";
                } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
                  errors.name = "Invalid name format";
                }

                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if (!values.message) {
                  errors.message = "Message is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                if (!captchaVerified) {
                  toast.warn("Please verify the captcha.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                  setSubmitting(false);
                  return;
                }

                emailjs.send('service_4337h57', 'template_d29unxr', values, '2W49r_dF_14TbuO4E')
                  .then((response) => {
                    toast.success("Message sent successfully!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                    console.log('Success:', response.status, response.text);
                    resetForm(); // Reset form values to initial state
                  })
                  .catch((error) => {
                    toast.error(
                      "Failed to send message. Please try again later.",
                      {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      }
                    );
                    console.error('Error:', error);
                  })
                  .finally(() => {
                    setSubmitting(false);
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
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='form-elem'>
                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} className={values.name ? "form-control active" : "form-control"} />
                    <label>Full name</label>
                    <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
                  </div>

                  <div className='form-elem'>
                    <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={values.email ? "form-control active" : "form-control"} />
                    <label>E-mail</label>
                    <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
                  </div>

                  <div className='form-elem'>
                    <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className={values.message ? "form-control active" : "form-control"}></textarea>
                    <label>Message</label>
                    <span className='form-control-text'>{errors.message && touched.message && errors.message}</span>
                  </div>
                  <ReCAPTCHA className="captcha"
                            ref={captchaRef}
                            sitekey="6LfxvnspAAAAAPgoBb45aXcW10dOU_dAmvLdfq2C"
                            onChange={(token) => {
                              setCaptchaVerified(!!token);
                            }}
                   />
                  <div className='flex flex-start align-center'>
                    <button type="submit" disabled={isSubmitting} className="submit-btn">Send Message</button>
                  </div>
                </form>
              )}
            </Formik>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;






// import React, { useState, useRef } from 'react';
// import "./Contact.css";
// import images from '../../assets/images/connect.png';
// import { Formik } from 'formik';
// import ReCAPTCHA from 'react-google-recaptcha';
// import emailjs from 'emailjs-com'; // Import EmailJS library
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// const Contact = () => {
//   // Declare state variables
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const captchaRef = useRef(null);

//   return (
//     <section className='contact section-p-top bg-black' id="contact">
//       <div className='container'>
//         <div className='contact-content grid text-center'>
//           <div className='contact-left'>
//             <img src={images} alt="" />
//           </div>
//           <div className='contact-right'>
//             <div className='section-t'>
//               <h3>Let's connect</h3>
//               <p className='text'>Whether you have a project in mind, a question about our my services, or just want to say hello, feel free to reach out using the form below</p>
//             </div>

//             <Formik
//               initialValues={{ name: "", email: '', message: '' }}
//               validate={values => {
//                 const errors = {};

//                 if (!values.name) {
//                   errors.name = "Name is required";
//                 } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
//                   errors.name = "Invalid name format";
//                 }

//                 if (!values.email) {
//                   errors.email = 'Email is required';
//                 } else if (
//                   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                   errors.email = 'Invalid email address';
//                 }

//                 if (!values.message) {
//                   errors.message = "Message is required";
//                 }
//                 return errors;
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 if (!captchaVerified) {
//                   // alert('Please verify the captcha.');
//                   toast.warn('Please verify the captcha.', {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "dark",
//                     });
//                   setSubmitting(false);
//                   return;
//                 }

//                 emailjs.send('service_4337h57', 'template_d29unxr', values, '2W49r_dF_14TbuO4E')
//                   .then((response) => {
//                     toast.success("Message sent successfully!", {
//                       position: "top-right",
//                       autoClose: 5000,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                       theme: "dark",
//                     });
//                     console.log('Success:', response.status, response.text);
//                     resetForm(); // Reset form values to initial state
//                   })
//                   .catch((error) => {
//                     toast.error("Failed to send message. Please try again later.",
//                       {
//                         position: "top-right",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "dark",
//                       }
//                     );
//                     console.error('Error:', error);
//                   })
//                   .finally(() => {
//                     setSubmitting(false);
//                   });
//               }}
//             >
//               {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//               }) => (
//                 <form onSubmit={handleSubmit}>
//                   <div className='form-elem'>
//                     <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} className={values.name ? "form-control active" : "form-control"} />
//                     <label>Full name</label>
//                     <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
//                   </div>

//                   <div className='form-elem'>
//                     <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={values.email ? "form-control active" : "form-control"} />
//                     <label>E-mail</label>
//                     <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
//                   </div>

//                   <div className='form-elem'>
//                     <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className={values.message ? "form-control active" : "form-control"}></textarea>
//                     <label>Message</label>
//                     <span className='form-control-text'>{errors.message && touched.message && errors.message}</span>
//                   </div>
//                   <ReCAPTCHA className="captcha"
//                             ref={captchaRef}
//                             sitekey="6LfxvnspAAAAAPgoBb45aXcW10dOU_dAmvLdfq2C"
//                             onChange={(token) => {
//                               setCaptchaVerified(!!token);
//                             }}
//                    />
//                   <div className='flex flex-start align-center'>
//                     <button type="submit" disabled={isSubmitting} className="submit-btn">Send Message</button>
//                   </div>
//                 </form>
//               )}
//             </Formik>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact;



// import React, { useState, useRef } from 'react';
// import "./Contact.css";
// import images from '../../assets/images/connect.png';
// import { Formik } from 'formik';
// import ReCAPTCHA from 'react-google-recaptcha';
// import emailjs from 'emailjs-com'; // Import EmailJS library
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// const Contact = () => {
//   // Declare state variables
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const captchaRef = useRef(null);

//   return (
//     <section className='contact section-p-top bg-black' id="contact">
//       <div className='container'>
//         <div className='contact-content grid text-center'>
//           <div className='contact-left'>
//             <img src={images} alt="" />
//           </div>
//           <div className='contact-right'>
//             <div className='section-t'>
//               <h3>Let's connect</h3>
//               <p className='text'>Whether you have a project in mind, a question about our my services, or just want to say hello, feel free to reach out using the form below</p>
//             </div>

//             <Formik
//               initialValues={{ name: "", email: '', message: '' }}
//               validate={values => {
//                 const errors = {};

//                 if (!values.name) {
//                   errors.name = "Name is required";
//                 } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
//                   errors.name = "Invalid name format";
//                 }

//                 if (!values.email) {
//                   errors.email = 'Email is required';
//                 } else if (
//                   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                   errors.email = 'Invalid email address';
//                 }

//                 if (!values.message) {
//                   errors.message = "Message is required";
//                 }
//                 return errors;
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 emailjs.send('service_4337h57', 'template_d29unxr', values, '2W49r_dF_14TbuO4E')
//                   .then((response) => {
//                     toast.success("Message sent successfully!", {
//                       position: "top-right",
//                       autoClose: 5000,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                       theme: "dark",
//                       });
//                     console.log('Success:', response.status, response.text);
//                   })
//                   .catch((error) => {
//                     toast.error("Failed to send message. Please try again later.", {
//                       position: "top-right",
//                       autoClose: 5000,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                       theme: "dark",
//                       });
//                     console.error('Error:', error);
//                   })
//                   .finally(() => {
//                     setSubmitting(false);
//                   });
//               }}
//             >
//               {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
                
//               }) => (
//                 <form onSubmit={handleSubmit}>
//                   <div className='form-elem'>
//                     <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} className={values.name ? "form-control active" : "form-control"} />
//                     <label>Full name</label>
//                     <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
//                   </div>

//                   <div className='form-elem'>
//                     <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={values.email ? "form-control active" : "form-control"} />
//                     <label>E-mail</label>
//                     <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
//                   </div>

//                   <div className='form-elem'>
//                     <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className={values.message ? "form-control active" : "form-control"}></textarea>
//                     <label>Message</label>
//                     <span className='form-control-text'>{errors.message && touched.message && errors.message}</span>
//                   </div>
//                   <ReCAPTCHA className="captcha"
//                             ref={captchaRef}
//                             sitekey="6LfxvnspAAAAAPgoBb45aXcW10dOU_dAmvLdfq2C"
//                             onChange={(token) => {
//                               setCaptchaVerified(!!token);
//                             }}
//                    />
//                   <div className='flex flex-start align-center'>
//                     <button type="submit" disabled={isSubmitting} className="submit-btn">Send Message</button>
//                   </div>
//                 </form>
//               )}
//             </Formik>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact;
