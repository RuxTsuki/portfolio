'use client'

import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc';
import { textVariant } from '@/utils/motions';
import { styles } from '@/utils/style';
import { VerticalTimeLine, VerticalTimelineElement } from '@/components/timeline'
import { experiences } from '@/constants';
import Image from 'next/image';

const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
  return (
    <VerticalTimelineElement index={index} contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.icon }}
      icon={
        <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain" />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title}
        </h3>

        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {
            experience.company_name
          }
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((point: number, index: number) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {
                point
              }
            </li>
          ))
        }
      </ul>

    </VerticalTimelineElement>
  )
}
/* What i have done so far */
/* Work Experience. */
const Experience = () => {
  return (
    <>
      <motion.div className='pt-8' variants={textVariant('')}>
        <p className={`${styles.sectionSubText}`}>Lo que he hecho hasta ahora</p>
        <h2 className={`${styles.sectionHeadText}`}>Experiencia 💼</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeLine>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} index={index} experience={experience}></ExperienceCard>
            ))
          }
        </VerticalTimeLine>
      </div>
    </>
  )
}

export const ExperienceMotion = SectionWrapper(Experience, 'exp');

