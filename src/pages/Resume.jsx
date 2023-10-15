import React from 'react';
import { certificates, educations, experiences, skills } from '../constants';
import { FaBacon } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
  return (
    <>
      <h2 className='title relative inline-block font-bold text-4xl after:left-44 dark:text-light-bold'>
        Resume
      </h2>
      <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px]'>
        <div className='col-span-12 md:col-span-4'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='text-2xl text-primary'>
                <FaBacon />
              </div>
              <h4 className='text-2xl dark:text-white font-medium'>
                Education
              </h4>
            </div>
          </div>
          {educations.map((education, index) => {
            return (
              <div
                key={`educ-${index}`}
                className={`service-box dark:bg-dark dark:border-transparent mb-4`}
              >
                <div className='space-y-2 break-words'>
                  <p className='leading-4 text-gray-lite dark:text-[#A6A6A6]'>
                    {education.date}
                  </p>
                  <h3 className='dark:text-white text-lg font-semibold'>
                    {education.title}
                  </h3>
                  <p className='leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                    {education.university}
                  </p>
                </div>
              </div>
            );
          })}
          <div className='max-sm:pt-2 pt-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='text-2xl text-primary'>
                <FaBacon />
              </div>
              <h4 className='text-2xl dark:text-white font-medium'>
                Certificates
              </h4>
            </div>
          </div>
          {certificates.map((certificate, index) => {
            return (
              <div
                key={`cert-${index}`}
                className={`service-box dark:bg-dark dark:border-transparent mb-4`}
              >
                <div className='space-y-2 break-words'>
                  <p className='leading-4 text-gray-lite dark:text-[#A6A6A6]'>
                    {certificate.institution} - {certificate.date}
                  </p>
                  <h3 className='dark:text-white text-lg font-semibold'>
                    {certificate.link.length > 1 ? (
                      <a
                        href={certificate.link}
                        rel='noreferrer'
                        target='_blank'
                        className='underline'
                      >
                        {certificate.title}
                      </a>
                    ) : (
                      certificate.title
                    )}
                  </h3>
                </div>
              </div>
            );
          })}
          <div className='max-sm:pt-2 pt-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='text-2xl text-primary'>
                <FaBacon />
              </div>
              <h4 className='text-2xl dark:text-white font-medium'>Skills</h4>
            </div>
          </div>
          <div className='mb-4'>
            {skills.map((skill, index) => {
              return (
                <div key={`skt-${index}`}>
                  <h5 className='text-sm font-semibold mb-2 dark:text-white'>
                    {skill.title}
                  </h5>
                  {skill.details.map((sk, index) => (
                    <button
                      key={`sk-${index}`}
                      className='skill-btn dark:bg-dark border-transparent dark:text-white text-[13px] mr-2 mb-2 tracking-wider'
                    >
                      {sk}
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-12 md:col-span-8 space-y-2.5'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='text-2xl text-primary'>
                <FaBacon />
              </div>
              <h4 className='text-2xl dark:text-white font-medium'>
                Experience
              </h4>
            </div>
          </div>
          <div className='flex dark:hidden'>
            <VerticalTimeline
              className='min-w-full'
              layout='1-column-left'
              lineColor='rgba(40, 118, 249, 1)'
            >
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={`exp-${index}`}
                  className='mt-0 mb-4'
                  contentStyle={{
                    background: 'transparent',
                    color: '#000000',
                    border: '1px solid rgba(40, 118, 249, 0.5)',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid rgba(40, 118, 249, 0.7)',
                  }}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[100%] h-[100%] object-contain'
                      />
                    </div>
                  }
                >
                  <div>
                    <h3 className='text-black text-lg font-bold mb-2'>
                      {experience.title}
                    </h3>
                    <p className='text-black text-[12px]' style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='mt-2 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`exp-point-${index}`}
                        className='text-dark text-[13px] pl-1 tracking-wider'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className='hidden dark:flex'>
            <VerticalTimeline
              className='min-w-full'
              layout='1-column-left'
              lineColor='rgba(40, 118, 249, 1)'
            >
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={`tagd-${index}`}
                  className='mt-0 mb-4'
                  contentStyle={{
                    background: 'transparent',
                    color: '#ffffff',
                    border: '1px solid rgba(40, 118, 249, 0.5)',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid rgba(40, 118, 249, 0.7)',
                  }}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[100%] h-[100%] object-contain'
                      />
                    </div>
                  }
                >
                  <div>
                    <h3 className='text-white text-lg font-bold mb-2'>
                      {experience.title}
                    </h3>
                    <p className='text-white text-[12px]' style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='mt-2 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-light-text text-[13px] pl-1 tracking-wider'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
