import React, { useState } from 'react';
import { portofolios, tags } from '../constants';
import { FaCode, FaGithub, FaLink, FaTags } from 'react-icons/fa';

export const MyModal = ({ portofolio }) => {};

const Portofolio = () => {
  const [active, setActive] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [currentPortofolio, setCurrentPortofolio] = useState(false);
  return (
    <>
      {showModal && currentPortofolio ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-2xl font-semibold dark:text-white'>
                    {currentPortofolio.name}
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none dark:text-white'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative px-6 py-2 flex-auto'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 my-2'>
                    <div className='space-y-2'>
                      <p className='dark:text-white flex items-center  sm:text-lg break-words'>
                        <FaTags className='mr-2' />
                        :&nbsp;{' '}
                        <span className='font-medium '>
                          {' '}
                          {currentPortofolio.tags.join(', ')}
                        </span>
                      </p>
                      <p className='dark:text-white flex items-center  sm:text-lg break-words'>
                        <FaCode className='mr-2' /> :&nbsp;
                        <span className='font-medium '>
                          {' '}
                          {currentPortofolio.technologies.join(', ')}
                        </span>
                      </p>
                    </div>
                    <div className='space-y-2'>
                      {currentPortofolio.source_code_link && (
                        <p className='dark:text-white flex items-center mt-2 lg:mt-0  sm:text-lg '>
                          <FaGithub className='mr-2' />
                          :&nbsp;
                          <span className='font-medium transition-all duration-300 ease-in-out hover:text-primary break-all'>
                            <a
                              href={currentPortofolio.source_code_link}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {currentPortofolio.source_code_link}
                            </a>
                          </span>
                        </p>
                      )}
                      {currentPortofolio.preview && (
                        <p className='dark:text-white flex items-center  sm:text-lg'>
                          <FaLink className='mr-2' />
                          :&nbsp;
                          <span className='font-medium transition-all duration-300 ease-in-out hover:text-primary break-all'>
                            <a
                              href={currentPortofolio.preview}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {currentPortofolio.preview}
                            </a>
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <p className='my-2 text-blueGray-500 text-md leading-relaxed dark:text-white'>
                    {currentPortofolio.description}
                  </p>
                  <img
                    src={currentPortofolio.image}
                    alt='Portfolio'
                    className='bg-transparent rounded-lg w-full'
                  />
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-0 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
      <h2 className='title relative inline-block font-bold text-4xl after:left-52 dark:text-light-bold'>
        Portofolio
      </h2>
      <ul className='mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium'>
        {tags.map((tag, index) => {
          return (
            <li
              key={`tag-${index}`}
              onClick={() => setActive(tag)}
              className={
                active === tag
                  ? ' text-primary cursor-pointer mr-4 md:mx-4'
                  : 'cursor-pointer mr-4 md:mx-4 dark:text-white'
              }
            >
              {tag}
            </li>
          );
        })}
      </ul>
      <div className='max-sm:pt-5 pt-5'>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
          {portofolios
            .filter((portofolio) => {
              return active === 'All' ? true : portofolio.tags.includes(active);
            })
            .map((portofolio, index) => {
              return (
                <div
                  className={`portofolio-box shadow-lg dark:bg-dark dark:border-transparent w-full cursor-pointer`}
                  key={`pt-${index}`}
                  onClick={() => {
                    setCurrentPortofolio(portofolio);
                    setShowModal(true);
                  }}
                >
                  <div className='overflow-hidden rounded-lg w-full'>
                    <img
                      src={portofolio.image}
                      alt='Portfolio'
                      className='bg-transparent cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg portofolio-img'
                    />
                  </div>
                  <div className='space-y-2 break-words pt-2 w-full p-1'>
                    <h3 className='dark:text-white text-xl font-semibold'>
                      {portofolio.name}
                    </h3>
                    <div className='mt-0 text-light-text short-desc text-sm'>
                      {portofolio.description}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Portofolio;
