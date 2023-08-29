'use client'

import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { idTechSkills, techSkills } from '@/constants';
import { styles } from '@/utils/style';
import { CommonCard } from '../ui/card/CommonCard';

const Tech = () => {
  return (
    < >
      <motion.div className='pt-3'>
        <p className={`${styles.sectionSubText}`}>Mi stack Front-end</p>
        <h2 className={`${styles.sectionHeadText}`}>Tecnologías 🪄</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {techSkills.map((service, index) => (
          <CommonCard
            key={service.title}
            index={index}
            subtitle={service.subtitle}
            title={service.title}
            Icon={service.icon} />
        ))}
      </div>

    </>
  )
}


export const TechMotion = SectionWrapper(Tech, idTechSkills);
