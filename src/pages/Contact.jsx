import React, { useRef, useState } from 'react';
import { personalInfo } from '../constants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          to_name: 'Abiola Chokki',
          to_email: 'cpeterabiola@gmail.com',
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <>
      <h2 className='title relative inline-block font-bold text-4xl after:left-44 dark:text-light-bold'>
        Contact
      </h2>
      <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px]'>
        <div className='col-span-12 md:col-span-4'>
          {personalInfo
            .filter((info, index) => {
              return index < 3;
            })
            .map((info) => {
              return (
                <div className='service-box dark:bg-dark dark:border-transparent mb-4'>
                  <span className='bg-transparent w-10 h-10 object-contain block text-2xl dark:text-white'>
                    <info.icon />
                  </span>
                  <div className='space-y-2 break-words'>
                    <h3 className='dark:text-white text-xl font-semibold'>
                      {info.title}
                    </h3>
                    <p className='leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                      {info.details}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className='col-span-12 md:col-span-8 space-y-2.5'>
          <div className='service-box dark:bg-dark dark:border-transparent mb-4'>
            <div className='lg:p-4 p-2'>
              <h3 className='text-2xl'>
                <span className='text-gray-lite dark:text-[#A6A6A6] '>
                  I'm always open to discuss any development of
                </span>
                <br />
                <span className='font-semibold dark:text-white'>
                  (Web, Mobile, ETL) applications, chatbots or partnerships.
                </span>
              </h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className='relative z-0 w-full mt-[40px] mb-8 group'>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    className='block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer'
                    placeholder=' '
                    required=''
                  />
                  <label
                    for='name'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                  >
                    Name *
                  </label>
                </div>
                <div className='relative z-0 w-full mb-8 group'>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    className='block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-[#5185D4] peer'
                    placeholder=' '
                    id='email'
                    required=''
                  />
                  <label
                    for='user_email'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                  >
                    Email *
                  </label>
                </div>
                <div className='relative z-0 w-full mb-8 group'>
                  <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder=''
                    id='message'
                    required=''
                    className='block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-[#5185D4] peer'
                  />
                  <label
                    for='message'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                  >
                    Message *
                  </label>
                </div>
                <div>
                  <button
                    type='submit'
                    className='bg-gradient-to-r from-primary to-secondary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md'
                  >
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
