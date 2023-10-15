import React from 'react';
import profile from '../assets/profile.jpg';
import { aboutMe, personalInfo, services } from '../constants';

const Home = () => {
  return (
    <>
      <h2 className='title relative inline-block font-bold text-4xl after:left-52 dark:text-light-bold'>
        About Me
      </h2>
      <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px]'>
        <div className='col-span-12 md:col-span-3'>
          <img
            alt='profile'
            src={profile}
            className='bg-transparent w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0'
          />
        </div>
        <div className='col-span-12 md:col-span-9 space-y-2.5'>
          <div className=' md:mr-12 xl:mr-16'>
            <h3 className='text-2xl font-medium dark:text-white mb-2.5'>
              Abiola Paterne CHOKKI
              <br />
              <span className='text-lg'>
                PhD Researcher | Co-Founder of AhoueFa.com | Full Stack
                Developer | Data Engineer/Analyst
              </span>
            </h3>
            <p className='text-light-gray dark:text-light-text leading-7'>
              {aboutMe}
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-medium my-5 dark:text-white'>
              Personal Info
            </h3>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {personalInfo.map((info) => {
                return (
                  <div className='flex' key={info.title}>
                    <span
                      className={`text-primary dark:bg-dark shadow-md mr-2.5 flex items-center justify-center rounded-md text-2xl w-12`}
                    >
                      <info.icon />
                    </span>
                    <div className='space-y-1'>
                      <p className='text-sm text-light-gray dark:text-light-text'>
                        {info.title}
                      </p>
                      <h6 className='font-medium dark:text-white'>
                        {info.link.length !== 0 ? (
                          <a
                            className='hover:text-primary duration-300 transition'
                            href={info.link}
                          >
                            {info.details}
                          </a>
                        ) : (
                          info.details
                        )}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='max-sm:pt-5 pt-12'>
        <h3 className='text-2xl dark:text-white font-medium pb-5'>
          What I do!
        </h3>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service) => {
            return (
              <div
                className={`service-box dark:bg-dark dark:border-transparent`}
                key={service.title}
              >
                <span className='bg-transparent w-10 h-10 object-contain block text-2xl dark:text-white'>
                  <service.icon />
                </span>
                <div className='space-y-2 break-words'>
                  <h3 className='dark:text-white text-xl font-semibold'>
                    {service.title}
                  </h3>
                  <p className='leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                    {service.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
