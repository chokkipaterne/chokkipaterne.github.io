import React, { useState } from 'react';
import { publications, tagPublications } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { replaceChar } from '../utils';

const Publications = () => {
  const [active, setActive] = useState('All');
  return (
    <>
      <h2 className='title relative inline-block font-bold text-4xl after:left-64 dark:text-light-bold'>
        Publications
      </h2>
      <ul className='mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium'>
        {tagPublications.map((tag, index) => {
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

      <div className='mt-4'>
        <VerticalTimeline
          className='min-w-full'
          lineColor='rgba(40, 118, 249, 0)'
        >
          {publications
            .filter((publication) => {
              return active === 'All' ? true : publication.type === active;
            })
            .map((publication, index) => (
              <VerticalTimelineElement
                key={`pub-${index}`}
                className='mt-0 mb-4'
                contentStyle={{
                  background: 'transparent',
                  color: '#000000',
                  border: '1px solid rgba(40, 118, 249, 0.5)',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid #2876f9',
                }}
                iconStyle={{
                  background: 'white',
                  border: '1px solid rgba(40, 118, 249, 0.5)',
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full text-primary'>
                    {publication.year}
                  </div>
                }
              >
                <div>
                  <h3
                    className='text-black text-lg font-normal mb-2 dark:text-white'
                    dangerouslySetInnerHTML={{
                      __html: replaceChar(publication.authors, '#'),
                    }}
                  ></h3>
                  <p
                    className='text-black text-[10px] dark:text-light-text'
                    style={{ margin: 0 }}
                  >
                    {publication.details}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Publications;
